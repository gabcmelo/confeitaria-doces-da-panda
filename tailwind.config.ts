import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	theme: {
	  extend: {
		colors: {
		'panda-primary': '#E92162',
		'panda-secondary': '#6A3628',
		'panda-bege': '#FFE3CF',
		'panda-off-white': '#F9E3CE',
		'panda-white': '#FFFFFF',
		'panda-pink': {
			50: '#fdf2f8',
			100: '#fce7f3',
			200: '#fbcfe8',
			300: '#f9a8d4',
			400: '#f472b6',
			500: '#ec4899',
			600: '#db2777',
			700: '#be185d',
			800: '#9d174d',
			900: '#831843',
		  },
		  'panda-cream': '#FFF5E6',
		  'panda-brown': '#8B4513',
		},
		fontFamily: {
			alternates: ['--font-montserrat-alternates', 'Montserrat Alternates'],
			coffecake: ['--font-coffecake', 'cursive'],
		},
		animation: {
		  float: 'float 3s ease-in-out infinite',
		  wiggle: 'wiggle 1s ease-in-out infinite',
		  bounce: 'bounce 1s infinite',
		  blob: "blob 7s infinite",
		},
		keyframes: {
		  wiggle: {
			'0%, 100%': { transform: 'rotate(-3deg)' },
			'50%': { transform: 'rotate(3deg)' },
		  },
		  bounce: {
			'0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
			'50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
		  },
		  blob: {
			"0%": {
			  transform: "translate(0px, 0px) scale(1)",
			},
			"33%": {
			  transform: "translate(30px, -50px) scale(1.1)",
			},
			"66%": {
			  transform: "translate(-20px, 20px) scale(0.9)",
			},
			"100%": {
			  transform: "tranlate(0px, 0px) scale(1)",
			},
		  },
		},
	  },
	},
	plugins: [],
  } satisfies Config;

  
  