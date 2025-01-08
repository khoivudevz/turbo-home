import {FrameworkIcon} from '@/types/common.type'
import {FaReact} from 'react-icons/fa'
import {RiNextjsFill} from 'react-icons/ri'
import {RiTailwindCssFill} from 'react-icons/ri'
import {SiTypescript} from 'react-icons/si'

export const frameworkId = {
	reactTypescriptTailwind: 'react-typescript-tailwind',
	nextjsTypescriptTailwind: 'nextjs-typescript-tailwind',
}

export const frameworkCardData: FrameworkIcon[] = [
	{
		id: frameworkId.reactTypescriptTailwind,
		icon: [
			<FaReact key='react' />,
			<RiTailwindCssFill key='tailwind' />,
			<SiTypescript key='typescript' />,
		],
		title: 'React & Typescript & Tailwind CSS',
	},
	{
		id: frameworkId.nextjsTypescriptTailwind,
		icon: [<RiNextjsFill key='nextjs' />, <RiTailwindCssFill key='tailwind' />],
		title: 'Nextjs & Tailwind CSS',
	},
]

export const frameworkData = [
	{
		id: 'react-typescript-tailwind',
		title: 'Turbo Setup React + TypeScript + Tailwind',
		description:
			'A modern and efficient React starter template with TypeScript, Tailwind CSS, and various development tools pre-configured.',
		features: [
			{
				text: 'React 19 with TypeScript',
				link: 'https://react.dev/',
				icon: '⚡️',
			},
			{
				text: 'Tailwind CSS for styling',
				link: 'https://tailwindcss.com/',
				icon: '🎨',
			},
			{
				text: 'Vite for fast development',
				link: 'https://vitejs.dev/',
				icon: '📦',
			},
			{
				text: 'ESLint for code linting',
				link: 'https://eslint.org/',
				icon: '🔍',
			},
			{
				text: 'Prettier for formatting',
				link: 'https://prettier.io/',
				icon: '💅',
			},
		],
		prerequisites: ['Node.js (v18 or higher)', 'Bun (latest version)'],
		git: 'https://github.com/khoivudevz/turbo-setup-react-ts-tailwind',
		structure: `src/
├── configs/
├── constants/
├── hooks/
├── pages/
├── providers/
├── router/
├── services/
├── store/
├── styles/
├── types/
└── views/`,
		envExample: `VITE_ENV=development
VITE_API_URL=your_api_url`,
		devCommands: ['bun run dev', 'bun run dev:stg', 'bun run dev:prod'],
		buildCommands: ['bun run build', 'bun run build:dev', 'bun run build:stg'],
	},
	{
		id: 'nextjs-typescript-tailwind',
		title: 'Turbo Setup NextJS - TS - TailwindCSS',
		description:
			'A modern, feature-rich Next.js boilerplate with TypeScript, TailwindCSS, and internationalization support.',
		features: [
			{text: 'Next.js 15.1.3', icon: '🚀', link: 'https://nextjs.org/'},
			{text: 'TypeScript', icon: '📝', link: 'https://www.typescriptlang.org/'},
			{text: 'TailwindCSS', icon: '🎨', link: 'https://tailwindcss.com/'},
			{
				text: 'i18n Support (English & Korean)',
				icon: '🌐',
				link: 'https://next-intl-docs.vercel.app/',
			},
			{text: 'ESLint + Prettier', icon: '🔍', link: 'https://eslint.org/'},
		],
		prerequisites: ['Node.js 18+', 'Bun'],
		git: 'https://github.com/khoivudevz/turbo-setup-nextjs-ts-tailwind',
		structure: `messages/ # Translation message files
	src/
  ├── app/
  ├── components/
  ├── configs/
  ├── constants/
  ├── hooks/
  ├── providers/
  ├── services/
  ├── styles/
  ├── translation/
  ├── types/
  └── views/`,
		envExample: `NEXT_PUBLIC_ENV=
  NEXT_PUBLIC_USER_API_URL=`,
		devCommands: ['bun run dev', 'bun run dev:staging', 'bun run dev:prod'],
		buildCommands: [
			'bun run build',
			'bun run build:dev',
			'bun run build:staging',
		],
	},
]
