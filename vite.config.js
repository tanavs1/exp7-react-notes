import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base must be the repo name so the site works on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/exp7-react-notes/",
});
