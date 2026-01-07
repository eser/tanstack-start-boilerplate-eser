import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { nitro } from "nitro/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
    host: "::",
  },
  plugins: [
    devtools(),
    nitro({
      preset: "node_server",
    }),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src",
    }),
    viteReact(),
  ],
});
