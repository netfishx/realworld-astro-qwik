import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import qwikdev from '@qwikdev/astro'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true,
  }), qwikdev()],
  output: 'server',
  adapter: vercel(),
})
