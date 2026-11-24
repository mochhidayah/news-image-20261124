# SUBMISSION — news-image-20261124 ($100, gratis)

- **Repo:** https://github.com/mochhidayah/news-image-20261124 (PUBLIC, dibuat 24 Nov 2026 ~01:11 UTC, setelah opening 24 Nov 00:00 UTC). About: homepage https://make.fun/bounty/news-image-20261124 + topic `makefun` (sudah di-set).
- **Commit (kode):** 1ff91b3ac6c1acd4dd12dc1ced224b3cebd2ee46
- **Commit final (HEAD, + SUBMISSION.md):** 52d2ffc72f4644d2cd366f02b7d69a0bd351541c — check diulang di commit ini, hasil sama.
- **Deadline:** 26 Nov 2026 07:00 WIB (26 Nov 00:00 UTC).
- **Status:** DIBANGUN + CHECK, BELUM di-submit / di-bundle (koordinator yang bundle + submit).

## Gambar (ILLUSTRATION, 3 panel, 1024×1024, JPEG 345.890 byte)

`entry.png` — ilustrasi vektor 3 panel horizontal, teks sedikit (satu headline
pendek per panel) + banner tanggal di atas:

1. **FACTORY FIRE KILLS 24 IN INDONESIA** — kebakaran pabrik permen di
   Indonesia, ≥24 tewas, ~30 pekerja masih dicari; pemadam + tandu di malam hari.
2. **COP31 CLIMATE TALKS COLLAPSE — NO FOSSIL FUEL DEAL** — Bumi retak di
   samping meja perundingan kosong.
3. **ALCARAZ WINS FIRST ATP FINALS TITLE** — Carlos Alcaraz angkat trofi di
   Turin usai kalahkan Alexander Zverev.

## Berita + sumber (riset web 24 Nov 2026, terverifikasi lintas sumber)

- Kebakaran pabrik Indonesia, 24 tewas — Times of India / Reuters (round-up
  24 Nov 2026; juga Studmentor, Jagran Josh).
- COP31 gagal tanpa kesepakatan bahan bakar fosil — The Daily Jagran /
  Observer Voice, 24 Nov 2026.
- Alcaraz juara ATP Finals pertama — Times of India, 24 Nov 2026.

## Program

`main.ts` (Node, stdlib saja, ditulis baru dari nol): baca dimensi dari header
PNG/JPEG, validasi gate (whole file incl. end marker EOI/IEND, ≤1 MiB,
≤1024×1024), lalu salin byte-identik ke `/output/entry.png` (atau
`$MAKEFUN_OUTPUT_DIR`). Tanpa network, tanpa jam, tanpa random — 2 run
menghasilkan sha256 identik `f07a37ca12d9773c55d75e34aebc6cd77d202a2f62f20d5cea69f24bd32566b4`.

Kit-init yang disentuh dalam ronde ini: `LICENSE` (+1 baris catatan entry),
`main.ts` (baru, ditulis lalu direvisi setelah smoke test — 2 write/edit),
`entry.png` (diganti gambar hasil generate 24 Nov). `.gitignore` baru.

## makefun check (kit fresh 24 Nov, commit final)

`node cli/makefun.mjs check --kit . --repo ~/workspace/news-image-20261124`

- **4 passed, 1 failed, 14 skipped, 5 checked at submission.**
- Pass: competition_open, snapshot, license_osi (MIT), entrypoint (main.ts, node22).
- FAIL: transcripts_present — tidak ada transcripts (bundle urusan koordinator).
- At submission (dicek saat submit): repo_public (repo sudah PUBLIC),
  repo_owner (butuh .makefun/owner.json atau akun GitHub terhubung),
  repo_created_after_open (repo dibuat setelah opening — OK),
  commit_in_repo (commit sudah di-push — OK), duplicate_snapshot.
- Catatan check: tanpa transcripts, authorship 0/87 (absent) — normal, dihitung
  dari transcripts saat bundle.

## Yang belum (koordinator)

- Bundle transcripts sesi builder ini + parent, seal, submit (pakai keypair
  ~/workspace/token-radar-01/work/kit/makefun-keypair.json, jangan --new-keypair).
- Cek `makefun status --submission` setelah submit (thinking_reproduces /
  thinking_revised hanya muncul di server).
