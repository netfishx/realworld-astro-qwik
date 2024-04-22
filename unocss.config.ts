import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        titillium: [
          {
            name: 'Titillium Web',
            weights: [700],
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  theme: {
    container: {
      padding: {
        'DEFAULT': '1rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '3rem',
        'xl': '4rem',
        '2xl': '14rem',
      },
    },
  },
})
