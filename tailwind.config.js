/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./app/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, and TSX files in the app folder
		'./components/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, and TSX files in the components folder]
		'./app/(tabs)/meditate.tsx'
	],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			fontFamily: {
				rmono: ['Roboto-Mono', 'sans-serif']
			}
		}
	},
	plugins: []
};
