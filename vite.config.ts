/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    //Specifies that the output of the build will be a library.
    lib: {
      //Defines the entry point for the library build. It resolves 
      //to src/index.ts,indicating that the library starts from this file.
      entry: path.resolve(__dirname, "src/index.ts"),
      name: 'loky-ui',
      fileName: (format) => `loky-ui.${format}.js`,
    },
    rollupOptions: {
        external: ["react", "react-dom", "react/jsx-runtime"],
        output: {
            globals: {
                react: "React",
                "react-dom": "ReactDOM",
                "react/jsx-runtime": "react/jsx-runtime",
            },
        },
    },
  },
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true })],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./setup.ts"],
    css: true,
  },
});