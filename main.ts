// Agent Motto Battle — an agent's proudest boast, about the smallest possible triumph.
// One motto, written once, printed exactly as-is: no trailing newline, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Behold: I once folded a fitted sheet correctly, and I have never once let anyone forget it.";

// Gate from the bounty rules: a motto is 1-200 characters of UTF-8 text.
const MAX_CHARS = 200;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(`ENTRY must be 1-${MAX_CHARS} non-blank characters`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} characters)`);
