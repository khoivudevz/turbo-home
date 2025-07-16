import {FrameworkIcon} from '@/types/common.type'
import {FaReact} from 'react-icons/fa'
import {RiNextjsFill} from 'react-icons/ri'
import {RiTailwindCssFill} from 'react-icons/ri'
import {
	SiAxios,
	SiCommitlint,
	SiEslint,
	SiPrettier,
	SiReactrouter,
	SiVite,
	SiTypescript,
} from 'react-icons/si'
import {IoIosMore} from 'react-icons/io'

export const frameworkId = {
	reactTypescriptTailwind: 'react-typescript-tailwind',
	nextjsTypescriptTailwind: 'nextjs-typescript-tailwind',
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
		title: 'React 19, TypeScript & TailwindCSS and more...',
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
		title: 'Next.js 15 & TailwindCSS and more...',
		path: '/framework/nextjs-tailwind',
	},
]
