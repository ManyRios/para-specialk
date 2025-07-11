import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), nodePolyfills()],
  server: {
    allowedHosts: [
      "5174-manyrios-paraspecialk-0g0s4ggy6f0.ws-us120.gitpod.io",
      "5173-manyrios-paraspecialk-0g0s4ggy6f0.ws-us120.gitpod.io",
      "4173-manyrios-paraspecialk-0g0s4ggy6f0.ws-us120.gitpod.io"
    ],
    host: true,
  }
})
