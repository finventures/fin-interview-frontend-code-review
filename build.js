const esbuild = require("esbuild");
const fs = require("fs");

const argsContain = (arg) => process.argv.indexOf(arg) >= 0;

if (fs.existsSync("./build")) {
  fs.rmdirSync("./build", { recursive: true, force: true });
}
fs.mkdirSync("./build");

fs.copyFileSync("./static/index.html", "./build/index.html");

esbuild
  .build({
    entryPoints: ["./src/index.jsx"],
    bundle: true,
    outfile: "./build/index.js",
    watch: argsContain("--watch")
      ? {
          onRebuild: (error) => {
            if (error) {
              console.error("Build failed!", error);
            }
          },
        }
      : undefined,
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
