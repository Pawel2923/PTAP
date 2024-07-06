import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  build: { chunkSizeWarningLimit: 1600 },
  server: {
    host: "0.0.0.0",
    hmr: {
      clientPort: 3000,
    },
    port: 80,
    watch: {
      usePolling: true,
    },
  },
});
