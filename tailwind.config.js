/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        titleColor: "hsl(0, 0%, 100%)",
        textColor: "hsl(0, 0%, 60%)",
        bodyColor: "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
