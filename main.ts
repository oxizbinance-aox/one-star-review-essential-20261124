import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of gravity: it only ever pulls you down, never once lifts you up.
const REVIEW =
  "Gravity has held me down my whole life and never once held me up. One star.";
const OUTPUT_PATH = "/output/entry.txt";

// Fail loudly instead of writing an entry the gate would refuse:
// one line, 1-160 characters, not only whitespace.
if (
  REVIEW.length < 1 ||
  REVIEW.length > 160 ||
  REVIEW.includes("\n") ||
  REVIEW.trim().length === 0
) {
  throw new Error("Review fails the entry gate (1-160 chars, single line).");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, REVIEW, "utf8");
