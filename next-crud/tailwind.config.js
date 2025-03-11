module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },
  safelist: [
    {
      pattern: /bg-(green|blue|gray)-(400|700)/,
    },{
      pattern: /from-(green|blue|gray)-(400|700)/,
    },{
      pattern: /to-(green|blue|gray)-(400|700)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}