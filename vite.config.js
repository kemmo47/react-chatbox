import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    cors: true, // allow CORS
    port: 8800, // 👈 choose the port you want
    host: "0.0.0.0", // 👈 optional: allows access from LAN / other devices
  },
});
