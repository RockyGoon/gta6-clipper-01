// gta6-clipper-01 — make.fun entry program (Node 22, standard library only).
//
// The entry is the video, not this program. The program's only job is to hand
// the grader the video's address: it copies VIDEO.json from the repository
// root (the bot directory) to the output directory, byte for byte.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// No network, no wall clock, no files outside the repository: two runs write
// the same bytes, so the grader's two runs agree.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'VIDEO.json');
const TARGET = join(OUTPUT_DIR, 'VIDEO.json');

// Copy unconditionally and print nothing on success: the gate reads
// VIDEO.json as it stands, placeholder included, and refuses a placeholder
// itself. Failing here would only hide the gate's own verdict.
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(SOURCE, TARGET);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
