/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // Custom Learning Theme Colors
        learning: {
          primary: "hsl(var(--learning-primary))",
          secondary: "hsl(var(--learning-secondary))",
          accent: "hsl(var(--learning-accent))",
          highlight: "hsl(var(--learning-highlight))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "rainbow": "rainbow 3s linear infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "bounce-colorful": "bounceColorful 2s ease-in-out infinite",
        "rotate-gradient": "rotateGradient 4s linear infinite",
        "scale-bounce": "scaleBounce 1.5s ease-in-out infinite",
        "slide-rainbow": "slideRainbow 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "learning-gradient": "linear-gradient(135deg, hsl(var(--learning-primary)), hsl(var(--learning-secondary)))",
        "feature-gradient": "linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1))",
        "rainbow-gradient": "linear-gradient(135deg, #3b82f6 0%, #1e40af 25%, #7c3aed 50%, #059669 75%, #dc2626 100%)",
        "aurora-gradient": "linear-gradient(135deg, #1e40af 0%, #7c3aed 25%, #0891b2 50%, #059669 75%, #dc2626 100%)",
        "ocean-gradient": "linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #0891b2 100%)",
        "vibrant-gradient": "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, hsl(var(--accent)) 100%)",
      },
      boxShadow: {
        learning: "0 10px 25px -3px hsl(var(--primary)/0.1), 0 4px 6px -2px hsl(var(--primary)/0.05)",
        feature: "0 20px 25px -5px hsl(var(--primary)/0.1), 0 10px 10px -5px hsl(var(--primary)/0.04)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
