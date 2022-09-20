import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "services/orchestrator",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
