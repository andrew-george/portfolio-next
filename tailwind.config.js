/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				mono: 'IBM Plex Mono',
				sans: 'Inter',
				serif: 'DM Serif Text',
			},
		},
	},
	plugins: [],
}
