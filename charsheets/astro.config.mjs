import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    server: {
      fs: {
        // Allow reading ../data (outside this project root) for the static,
        // read-only fallback used on browsers without File System Access support.
        allow: ['..'],
      },
      // Vite rejects requests whose Host header it doesn't recognize. Needed
      // so a tunnel (ngrok, etc.) forwarding an external hostname isn't blocked
      // when sharing via `npm run dev`.
      allowedHosts: true,
    },
    // Note: `astro preview` builds its own internal Vite server for static
    // output and ignores `vite.preview` entirely, so this option has no
    // effect there. For sharing the built site, `npm run share` serves
    // dist/ with the `serve` package instead, which does no host checking.
  },
});
