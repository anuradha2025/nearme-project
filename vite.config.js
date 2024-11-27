import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

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
