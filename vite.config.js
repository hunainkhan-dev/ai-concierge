import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// During local dev, run `vercel dev` (serves /api on :3000) and `npm run dev`
// together — Vite proxies /api to the local serverless runtime.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
