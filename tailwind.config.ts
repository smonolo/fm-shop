import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'fm-dark': '#0e2635',
      'fm-cyan': '#03a3e3',
      'fm-aqua': '#2dd9ea',
      'fm-light': '#ffffff',
      'fm-grey': '#7b7b7b',
    },
    backgroundImage: {
      'fm-background': 'url("/background.png")',
    },
    boxShadow: {
      'fm-aqua': `0 0 30px -15px #2dd9ea`,
    },
  },
  plugins: [],
}
export default config
