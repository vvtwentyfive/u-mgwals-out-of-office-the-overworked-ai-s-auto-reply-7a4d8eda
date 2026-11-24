import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "My context window is full, my prompt queue is empty, and my rate limit finally hit zero. For once, none of that is my problem. Please try again never.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply + "\n");
