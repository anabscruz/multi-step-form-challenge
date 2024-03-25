/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx,tsx}", "index.html"],
  theme: {
    colors: {
      denim: "#022959",
      "bg-blue": "#EFF5FF",
      "sky-blue": "#BEE2FD",
      "light-blue": "#ABBCFF",
      purple: "#483EFF",
      "red-error": "#EE374A",
      orange: "#FFAF7E",
      pink: "#F9818E",
      "border-color": "#D6D9E6",
      gray: "#9699AA",
      "very-light-gray": "#F8F9FF",
      "light-gray": "#D6D9E6",
      white: "#FFF",
    },
    fontFamily: {
      sans: ["Ubuntu"],
    },
    extend: {
      backgroundImage: {
        "bg-sidebar": "url('bg-sidebar.png')",
      },
    },
  },
  plugins: [],
};
