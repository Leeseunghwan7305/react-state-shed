const esbuild = require("esbuild");
const { exec } = require("child_process");

exec("tsc --noEmit", (err) => {
  if (err) {
    console.error("TypeScript type checking failed:");
    process.exit(1);
  } else {
    console.log("TypeScript type checking passed.");

    esbuild
      .build({
        entryPoints: ["./stan/src/index.ts"],
        outfile: "./dist/index.js",
        bundle: true,
        minify: true,
        sourcemap: true,
        target: ["es2020"],
        format: "esm",
        external: ["react", "react-dom"],
        tsconfig: "./tsconfig.json",
      })
      .then(() => {
        console.log("Build succeeded!");
      })
      .catch((error) => {
        console.error("Build failed:", error);
        process.exit(1);
      });
  }
});
