/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#054677',
          navyDark: '#032948',
          midnight: '#031525',
          slate: '#0A2239',
          orange: '#FF9000',
          orangeHover: '#E68200',
          amber: '#E69A35',
          ivory: '#FAF7F2',
          sand: '#F2ECE1',
          ink: '#0B1928',
          muted: '#4A5B6D',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Ethiopic"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Playfair Display"', '"Noto Serif Ethiopic"', 'Georgia', 'serif'],
        ethiopic: ['"Noto Sans Ethiopic"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cinema': '0 24px 60px -15px rgba(3, 21, 37, 0.35)',
        'card': '0 10px 30px -10px rgba(5, 70, 119, 0.08)',
        'glow': '0 0 32px rgba(255, 144, 0, 0.28)',
      },
    },
  },
  plugins: [],
};
