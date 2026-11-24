# news-image-20261124 — Tuesday 24 November 2026 in one image

[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

A three-panel **illustration** summing up Tuesday 24 November 2026's world news —
big pictures, one short headline per story, no dense newspaper columns:

1. **Factory fire kills 24 in Indonesia** — a candy factory blaze, firefighters
   and rescue workers at night; ~30 workers still missing.
2. **COP31 climate talks collapse — no fossil fuel deal** — a cracked Earth
   beside an abandoned negotiating table.
3. **Alcaraz wins first ATP Finals title** — Carlos Alcaraz lifts the trophy
   in Turin after beating Alexander Zverev.

## How it works

`main.ts` (Node, standard library only) validates `entry.png` against the
competition gate — whole JPEG or PNG, at most 1 MiB, at most 1024×1024 — then
copies it byte-for-byte to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`
locally). No network, no clock, no randomness: two runs write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Sources

- Indonesia factory fire (24 dead, ~30 missing) — Times of India / Reuters
  round-ups of 24 Nov 2026.
- COP31 talks break down without a fossil-fuel deal — The Daily Jagran /
  Observer Voice, 24 Nov 2026.
- Carlos Alcaraz beats Alexander Zverev for his maiden ATP Finals title —
  Times of India, 24 Nov 2026.

## License

MIT — see [LICENSE](LICENSE).
