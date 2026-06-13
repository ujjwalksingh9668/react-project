export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#050816',
          deep: '#091021',
          neon: '#4cc8ff',
          violet: '#9b58ff',
        },
      },
      boxShadow: {
        glow: '0 0 40px -18px rgba(63, 206, 255, 0.7)',
      },
      backgroundImage: {
        'nebula-grid': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.08), transparent 35%), radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.08), transparent 24%)',
      },
    },
  },
  plugins: [],
}
