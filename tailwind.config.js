/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
				'spin-slower': {
					to: { transform: 'rotate(360deg)' },
				},
				blob: {
					'0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
				},
				fadeIn: {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				slideInLeft: {
					from: { opacity: '0', transform: 'translateX(-30px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				slideInRight: {
					from: { opacity: '0', transform: 'translateX(30px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				'slide-up': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				shine: {
					from: { left: '-100%' },
					to: { left: '200%' },
				},
			},
			animation: {
				float: 'float 6s ease-in-out infinite',
				blink: 'blink 1s step-end infinite',
				'bounce-slow': 'bounce 3s infinite',
				'pulse-slow': 'pulse 3s infinite',
				'spin-slower': 'spin-slower 8s linear infinite',
				blob: 'blob 10s infinite',
				fadeIn: 'fadeIn 0.7s ease-out',
				'fade-in': 'fadeIn 0.7s ease-out',
				slideInLeft: 'slideInLeft 0.7s ease-out',
				slideInRight: 'slideInRight 0.7s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				shine: 'shine 1.5s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
