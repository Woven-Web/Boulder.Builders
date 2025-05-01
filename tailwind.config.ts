
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Boulder Builders custom colors
				boulder: {
					// Primary colors - earthy greens/teals
					teal: {
						DEFAULT: '#2A9D8F',
						50: '#E3F5F3',
						100: '#C7EAE7',
						200: '#92D8D3',
						300: '#5EC6BE',
						400: '#2AB4A9',
						500: '#2A9D8F',
						600: '#217B71',
						700: '#185952',
						800: '#0F3632',
						900: '#051413',
					},
					green: {
						DEFAULT: '#4D7C0F',
						50: '#EFF5E5',
						100: '#DFECCC',
						200: '#BFD999',
						300: '#9FC666',
						400: '#7FB333',
						500: '#5C9A0F',
						600: '#4D7C0F',
						700: '#395D0C',
						800: '#243D08',
						900: '#121E04',
					},
					// Secondary colors - sandstone/tan/greys
					sand: {
						DEFAULT: '#E9C46A',
						50: '#FCF9F0',
						100: '#F9F2E0',
						200: '#F3E5C2',
						300: '#EED9A3',
						400: '#E9CD85',
						500: '#E9C46A',
						600: '#E2B13B',
						700: '#CF9A20',
						800: '#A37A19',
						900: '#775A13',
					},
					stone: {
						DEFAULT: '#A8A29E',
						50: '#F5F5F4',
						100: '#EEECEA',
						200: '#DEDBD9',
						300: '#CDC9C7',
						400: '#BBB6B4',
						500: '#A8A29E',
						600: '#8E8782',
						700: '#736C67',
						800: '#57514E',
						900: '#3C3836',
					},
					// Accent colors - sky blue/yellow/orange
					sky: {
						DEFAULT: '#219EBC',
						50: '#E6F4F9',
						100: '#CCE9F2',
						200: '#99D3E6',
						300: '#66BDD9',
						400: '#33A7CD',
						500: '#219EBC',
						600: '#197E96',
						700: '#135E71',
						800: '#0C3F4B',
						900: '#061F26',
					},
					orange: {
						DEFAULT: '#F4A261',
						50: '#FEFAEF',
						100: '#FDF4DF',
						200: '#FAE9BF',
						300: '#F8DE9F',
						400: '#F6D47F',
						500: '#F4A261',
						600: '#F18E33',
						700: '#E37910',
						800: '#B5600D',
						900: '#864709',
					},
					coral: {
						DEFAULT: '#E76F51',
						50: '#FCF1EE',
						100: '#F9E3DD',
						200: '#F4C6BB',
						300: '#EFAA99',
						400: '#EB8D77',
						500: '#E76F51',
						600: '#E04D27',
						700: '#BC3918',
						800: '#8C2A12',
						900: '#5C1C0C',
					},
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Montserrat', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
