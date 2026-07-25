import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";

if (!existsSync("out")) {
  throw new Error("Static export was not generated.");
}

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist/public", { recursive: true });
mkdirSync("dist/server", { recursive: true });
cpSync("out", "dist/public", { recursive: true });
if (existsSync(".openai/hosting.json")) {
  mkdirSync("dist/.openai", { recursive: true });
  cpSync(".openai/hosting.json", "dist/.openai/hosting.json");
}
writeFileSync(
  "dist/server/index.js",
  `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
`
);
