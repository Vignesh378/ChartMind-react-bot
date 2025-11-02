import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: process.env.PORT || 3000,
  },
  preview: {
    host: true,
    port: process.env.PORT || 3000,
    allowedHosts: [ '.vercel.app'],
  },
 build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          if (id.includes('react')) return 'react';
          if (id.includes('lodash')) return 'lodash';
          return 'vendor';
        }
      },
    },
  },
},

})
