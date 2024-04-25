import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import qwikdev from '@qwikdev/astro'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
  prefetch: true,
  integrations: [UnoCSS({
    injectReset: true,
  }), qwikdev()],
  output: 'server',
  adapter: vercel(),
  vite: {
    css: {
      transformer: 'lightningcss',
    },
    build: {
      cssMinify: 'lightningcss',
    },
  },
})
