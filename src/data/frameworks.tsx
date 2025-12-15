import {FrameworkIcon} from '@/types/common.type'
import {FaReact} from 'react-icons/fa'
import {IoIosMore} from 'react-icons/io'
import {RiNextjsFill, RiTailwindCssFill} from 'react-icons/ri'
import {
	SiAxios,
	SiCommitlint,
	SiEslint,
	SiPrettier,
	SiReactrouter,
	SiTauri,
	SiTypescript,
	SiVite,
} from 'react-icons/si'

export const frameworkId = {
	reactTypescriptTailwind: 'react-typescript-tailwind',
	nextjsTypescriptTailwind: 'nextjs-typescript-tailwind',
	tauriReactTypescriptTailwind: 'tauri-react-typescript-tailwind',
}

export const frameworkCardData: FrameworkIcon[] = [
	{
		id: frameworkId.reactTypescriptTailwind,
		icon: [
			<FaReact key='react' />,
			<SiVite key='vite' />,
			<RiTailwindCssFill key='tailwind' />,
			<SiTypescript key='typescript' />,
			<SiEslint key='eslint' />,
			<SiPrettier key='prettier' />,
			<SiReactrouter key='router' />,
			<SiAxios key='axios' />,
			<SiCommitlint key='commitlint' />,
			<IoIosMore key='more' />,
		],
		title:
			'React 19.2.3 + React Compiler, TypeScript & TailwindCSS v4 and more...',
		path: '/framework/react-tailwind',
	},
	{
		id: frameworkId.nextjsTypescriptTailwind,
		icon: [
			<RiNextjsFill key='nextjs' />,
			<RiTailwindCssFill key='tailwind' />,
			<SiEslint key='eslint' />,
			<SiPrettier key='prettier' />,
			<SiAxios key='axios' />,
			<SiCommitlint key='commitlint' />,
			<IoIosMore key='more' />,
		],
		title: 'Next.js 16.0.10 + React Compiler & TailwindCSS v4 and more...',
		path: '/framework/nextjs-tailwind',
	},
	{
		id: frameworkId.tauriReactTypescriptTailwind,
		icon: [
			<SiTauri key='tauri' />,
			<FaReact key='react' />,
			<SiVite key='vite' />,
			<RiTailwindCssFill key='tailwind' />,
			<SiTypescript key='typescript' />,
			<SiEslint key='eslint' />,
			<SiPrettier key='prettier' />,
			<SiReactrouter key='router' />,
			<SiAxios key='axios' />,
			<IoIosMore key='more' />,
		],
		title: 'Tauri + React 19.2.3, TypeScript & TailwindCSS v4 and more...',
		path: '/framework/tauri-react-tailwind',
	},
]
