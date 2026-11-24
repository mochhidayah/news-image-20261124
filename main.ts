// news-image-20261124 — "Tuesday 24 November 2026 — World News in One Image".
//
// The entry is a three-panel illustration held in entry.png next to this file:
// a candy-factory fire in Indonesia, the COP31 climate talks collapsing with no
// fossil-fuel deal, and Carlos Alcaraz lifting his first ATP Finals trophy.
// This program checks the file against the competition gate (whole JPEG or PNG,
// at most 1 MiB, at most 1024 x 1024) and then places an exact copy at
// /output/entry.png — or at $MAKEFUN_OUTPUT_DIR when the grader is run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// It writes the same bytes on every run: no clock, no randomness, no network.

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ONE_MIB = 1024 * 1024;
const MAX_SIDE = 1024;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const JPEG_MAGIC = Buffer.from([0xff, 0xd8, 0xff]);

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

function fail(message: string): never {
  throw new Error(`news-image-20261124: ${message}`);
}

// Read the width and height straight out of the file header, without any
// image library: PNG stores them in the IHDR chunk, JPEG in its first SOF
// segment. Returns null when neither header shape is recognised.
function readDimensions(bytes: Buffer): { width: number; height: number } | null {
  if (bytes.subarray(0, 8).equals(PNG_MAGIC) && bytes.length >= 24) {
    return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
  }
  if (bytes.subarray(0, 3).equals(JPEG_MAGIC)) {
    let cursor = 2;
    while (cursor + 9 < bytes.length) {
      if (bytes[cursor] !== 0xff) return null;
      const marker = bytes[cursor + 1];
      const length = bytes.readUInt16BE(cursor + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { height: bytes.readUInt16BE(cursor + 5), width: bytes.readUInt16BE(cursor + 7) };
      }
      cursor += 2 + length;
    }
  }
  return null;
}

const bytes = readFileSync(source);
if (bytes.length === 0) fail('entry.png is empty');
if (bytes.length > ONE_MIB) fail(`entry.png is ${bytes.length} bytes, over the 1 MiB gate`);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC) && !bytes.subarray(0, 3).equals(JPEG_MAGIC)) {
  fail('entry.png starts with neither the PNG nor the JPEG signature');
}
const size = readDimensions(bytes);
if (size === null) fail('entry.png header could not be read');
if (size.width > MAX_SIDE || size.height > MAX_SIDE) {
  fail(`entry.png is ${size.width}x${size.height}, over the 1024x1024 gate`);
}
// A whole image, not a truncated one: JPEG must end with its EOI marker and
// PNG with its IEND chunk, so a cut-off file never reaches the judge.
const isPng = bytes.subarray(0, 8).equals(PNG_MAGIC);
const whole = isPng
  ? bytes.subarray(bytes.length - 12).equals(Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]))
  : bytes[bytes.length - 2] === 0xff && bytes[bytes.length - 1] === 0xd9;
if (!whole) fail('entry.png looks truncated: its end marker is missing');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const written = readFileSync(target);
if (!written.equals(bytes)) fail('the copy at the output path differs from entry.png');
const stat = statSync(target);
console.log(`wrote ${target} — ${stat.size} bytes, ${size.width}x${size.height}, byte-identical`);
