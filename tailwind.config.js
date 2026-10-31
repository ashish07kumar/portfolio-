/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#0B1020',
          secondary: '#0F172A',
          card: '#111827',
          hover: '#1B2540',
        },
        text: {
          primary: '#F1F5F9',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
        },
        accent: {
          purple: '#A78BFA',
          cyan: '#22D3EE',
          primary: '#7548F5',
          'primary-hover': '#6437E8',
        },
        border: {
          standard: '#273449',
          subtle: '#1E293B',
        },
        status: {
          success: '#34D399',
          error: '#F87171',
          warning: '#FBBF24',
        },
        // Legacy aliases to preserve compatibility
        ink: '#0B1020',
        panel: '#111827',
      },
    },
  },
  plugins: [],
}
