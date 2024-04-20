import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import qwikdev from '@qwikdev/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true,
  }), qwikdev()],
})
