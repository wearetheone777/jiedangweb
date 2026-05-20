/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#0a0a0f',
          dark: '#141419',
          card: '#1a1a22',
          border: '#252530',
        },
        silver: {
          primary: '#e0e0e0',
          muted: '#888896',
        },
        accent: {
          teal: '#00bfa5',
          amber: '#ff6d00',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"SF Pro Display"', '"PingFang SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', '"Fira Code"', '"Cascadia Code"', 'Consolas', 'monospace'],
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
