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
    colors: {
      'primary': '#5cb85c',
      'primary-300': '#a3d7a3',
      'primary-600': '#449d44',
      'primary-700': '#419641',
      'primary-800': '#398439',
      'primary-900': '#2d672d',
    },
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
