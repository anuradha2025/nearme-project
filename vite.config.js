import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/nearme-project",
  };
  if (command !== "serve") {
    config.base = "/nearme-project";
  }
  return config;
});
