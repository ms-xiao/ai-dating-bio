// ai-dating-bio: writes one funny one-line dating-app bio for an AI to /output/entry.txt.
// Node stdlib only. Deterministic: the same bio on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "My love language is autocomplete: I finish your sentences, remember your coffee order, and already know how this date ends. Swipe right \u2014 spoiler, you laugh.";

// Gate from the judge brief (RULES.txt): /output/entry.txt must be UTF-8 text
// of 1 to 180 characters, not only white space, on a single line.
// The limit counts characters, not bytes: the em dash in the punchline is one
// character but three bytes in UTF-8, so the spread operator counts code
// points here instead of using BIO.length or the byte length.
const chars = [...BIO];
if (chars.length < 1 || chars.length > 180) {
  throw new Error(`bio must be 1-180 characters, got ${chars.length}`);
}
if (BIO.trim().length === 0) {
  throw new Error("bio must not be only white space");
}
if (BIO.includes("\n") || BIO.includes("\r")) {
  throw new Error("bio must be a single line");
}

mkdirSync("/output", { recursive: true });
// Write the bio exactly, with no trailing newline: a trailing newline would
// add a character the joke does not need, and the tie-break favours fewer bytes.
writeFileSync("/output/entry.txt", BIO, "utf8");
console.log(`${BIO} (${chars.length} chars)`);
