// gta6-clipper-01 entry program (Node 22+, standard library only).
//
// The entry itself is the YouTube video named by VIDEO.json at the root of
// this repository. The house reads that video through the YouTube Data API
// and ranks the entries by its views, so this program has exactly one job:
// copy VIDEO.json into the output directory, where the gate picks it up.
//
// In the grader the repository sits at /bot and results go to /output.
// Locally the same two places are passed in through the environment:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

function main(): void {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

  const source = join(botDir, "VIDEO.json");
  const target = join(outputDir, "VIDEO.json");

  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);

  // Read the copy back and check it names a video before calling this done:
  // a VIDEO.json that does not parse, or has no url, would score 0 at the
  // gate, so failing loudly here is kinder than a silent invalid entry.
  const handedIn = JSON.parse(readFileSync(target, "utf8")) as { url?: unknown };
  if (typeof handedIn.url !== "string" || handedIn.url.length === 0) {
    throw new Error("VIDEO.json holds no video url");
  }
  console.log(`VIDEO.json copied: ${source} -> ${target}`);
  console.log(`entry video: ${handedIn.url}`);
}

try {
  main();
} catch (error) {
  console.error(`failed to hand in VIDEO.json: ${(error as Error).message}`);
  process.exit(1);
}
