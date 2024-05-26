import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        "grey-000": "#1c1e21",
        "fb-color": "#0866ff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
