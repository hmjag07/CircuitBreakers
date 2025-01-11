module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#BED754",
          secondary: "#85A947",
          accent: "#4e813a",
          neutral: "#3A3960",
          "base-100": "#E8ECD7",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--focus-ring":"0"
        },
      },
    ],
  },
};


