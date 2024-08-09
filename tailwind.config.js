/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0,625rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        PoppinsBlack: "Poppins Black",
        PoppinsBold: "Poppins Bold",
        PoppinsLight: "Poppins Light",
        PoppinsMedium: "Poppins Medium",
        PoppinsRegular: "Poppins Regular",
        OpenSansRegular: "OpenSansRegular",
        OpenSansMedium: "OpenSansMedium",
      },
      colors: {
        primary: "#FFB400",
        primaryGray: "#252525",
        gray: "#2b2a2a",
      },
      fontSize: {
        fs: "15px",
      },
      screens: {
        "2xs": "380px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
