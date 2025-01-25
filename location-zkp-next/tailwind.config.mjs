const config = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/sections/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        fraunces: ['var(--font-fraunces)', 'serif'],
        caudex: ['var(--font-caudex)', 'serif'],
      },
    },
  },
  plugins: [],
};

module.exports = config;
