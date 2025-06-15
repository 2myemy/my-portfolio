/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        warm: "#fdf6f0",           // 배경색
        main: "#3e2c1c",           // 본문 글자
        sub: "#925e4c",            // 서브 텍스트
        accent: "#ffcfb3",         // 버튼 배경색
        "accent-dark": "#ffc1a1",  // hover용
      },
    },
  },
  plugins: [],
}

