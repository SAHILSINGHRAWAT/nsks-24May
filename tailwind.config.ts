import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        "underline-grow": {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 1s cubic-bezier(0.4,0,0.2,1) both",
        "underline-grow": "underline-grow 0.6s cubic-bezier(0.4,0,0.2,1) forwards",
        "slide-in-left": "slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "slide-in-right": "slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "slide-in-up": "slideInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "slide-in-down": "slideInDown 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "fade-in-scale": "fadeInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "bounce-in-left": "bounceInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "bounce-in-right": "bounceInRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "rotate-in": "rotateIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "flip-in-x": "flipInX 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "zoom-in": "zoomIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "slide-in-rotate": "slideInRotate 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "pulse-slow": "pulse 2s infinite",
        "float": "float 3s ease-in-out infinite",
      },
      fontFamily: {
        modern: ["Poppins", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
