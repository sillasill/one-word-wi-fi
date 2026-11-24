import { mkdirSync, writeFileSync } from "node:fs";

// One word describing the Wi-Fi, written to the grader's output file.
const outputPath = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
const entryWord = "PartTimer";
writeFileSync(outputPath, entryWord, "utf8");
