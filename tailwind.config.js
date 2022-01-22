module.exports = {
  content: ["./src/**/*"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        meow: {
          primary: "#000",
          "primary-focus": "#000",
          "primary-content": "#fff",
          secondary: "#EEEFF1",
          tertiary: "#464646",
          accent: "#FABF4B",
          "accent-content": "#000",
          info: "#44BAE0",
          success: "#46C97D",
          warning: "#FD9800",
          error: "#EB5757",
          grey: "#7A7A7C",
        },
      },
    ],
  },
};
