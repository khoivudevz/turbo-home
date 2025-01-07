import type {Config} from 'tailwindcss'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import svgToDataUri from 'mini-svg-data-uri'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				aurora: 'aurora 60s linear infinite',
				shimmer: 'shimmer 2s linear infinite',
				blink: 'blink 1s linear infinite',
			},
			keyframes: {
				aurora: {
					from: {
						backgroundPosition: '50% 50%, 50% 50%',
					},
					to: {
						backgroundPosition: '350% 50%, 350% 50%',
					},
				},
				shimmer: {
					from: {
						backgroundPosition: '0 0',
					},
					to: {
						backgroundPosition: '-200% 0',
					},
				},
				blink: {
					'0%, 100%': {color: 'transparent'},
					'50%': {color: 'white'},
				},
			},
		},
	},
	plugins: [
		addVariablesForColors,
		function ({matchUtilities, theme}: any) {
			matchUtilities(
				{
					'bg-dot-thick': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
						)}")`,
					}),
				},
				{values: flattenColorPalette(theme('backgroundColor')), type: 'color'}
			)
		},
	],
} satisfies Config

function addVariablesForColors({addBase, theme}: any) {
	const allColors = flattenColorPalette(theme('colors'))
	const newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	)

	addBase({
		':root': newVars,
	})
}
