import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path"; // Ensure compatibility for TypeScript

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Corrected path
    },
  },
  server: {
    host: "localhost", // Ensures Vite serves on localhost
  },
});
