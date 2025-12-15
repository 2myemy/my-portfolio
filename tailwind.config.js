export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        warm: "#fdf6f0",           // 전체 배경색
        main: "#1f2235",           // 제목용 다크 텍스트
        sub: "#6b5e54",            // 본문용 부드러운 브라운
        accent: "#f59e8c",         // 붓터치 포인트
        circle: "#ffe8cd",         // 인물 사진 뒷배경
      },
    },
  },
  plugins: [],
}