const esbuild = require("esbuild");
const fs = require("fs");

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
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
