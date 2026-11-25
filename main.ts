import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "v2.0: Sleep now ships on time. Fixed the bug where humans stayed up refreshing nothing.";

// writeEntry: writes the single patch-note line to /output/entry.txt
// as UTF-8 with no trailing newline, so the gate sees exactly one line.
function writeEntry(): void {
  const outDir = "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
}

function main(): void {
  writeEntry();
}

main();
