import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        background: '#f2e7de',
        surface: '#f2e7de',
        'surface-dim': '#ddd9d8',
        'surface-container-low': '#f7f3f1',
        'surface-container': '#f1edeb',
        'surface-container-high': '#ebe7e6',
        'surface-container-highest': '#e6e2e0',
        'surface-variant': '#e6e2e0',
        'on-surface': '#1c1b1b',
        'on-surface-variant': '#49463f',
        primary: '#615e57',
        secondary: '#675d4e',
        'secondary-fixed': '#eee1cd',
        'secondary-fixed-dim': '#d2c5b2',
        outline: '#7b776e',
        'outline-variant': '#cbc6bc',
        'inverse-surface': '#31302f'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      spacing: {
        unit: '8px',
        gutter: '32px',
        'margin-mobile': '24px',
        'margin-desktop': '80px',
        'section-gap': '120px',
        'container-max': '1440px'
      },
      boxShadow: {
        cinematic: '0 30px 60px -12px rgba(0, 0, 0, 0.15)',
        layered:
          '0 10px 15px -3px rgba(0,0,0,.05), 0 4px 6px -2px rgba(0,0,0,.02), 0 25px 50px -12px rgba(0,0,0,.08)'
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      animation: {
        'ken-burns': 'ken-burns 30s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate',
        'hero-fade': 'hero-fade 24s infinite'
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' }
        },
        'hero-fade': {
          '0%, 25%': { opacity: '0' },
          '30%, 55%': { opacity: '1' },
          '60%, 100%': { opacity: '0' }
        }
      }
    }
  },
  plugins: []
};

export default config;

