module.exports = {
  darkMode: ["class", "[data-theme='dark']"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#dc2626",
          secondary: "#f59e0b",
          accent: "#78716c",
          neutral: "#d1d5db",
          "base-100": "#292524",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        light: {
          primary: "#dc2626",
          secondary: "#f59e0b",
          accent: "#57534e",
          neutral: "#292524",
          "base-100": "#e7e5e4",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
