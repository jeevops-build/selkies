import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  base: '',
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  build: {
    target: 'chrome94'
  },
  plugins: [
    react({
      exclude: 'src/selkies-core.js'
    }),
    ViteMinifyPlugin(),
    ViteRestart({restart: ['index.html', 'src/**']}),
  ]
})
