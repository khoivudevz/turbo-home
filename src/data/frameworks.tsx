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
		path: '/framework/react-tailwind',
	},
	{
		id: frameworkId.nextjsTypescriptTailwind,
		icon: [<RiNextjsFill key='nextjs' />, <RiTailwindCssFill key='tailwind' />],
		title: 'Nextjs & Tailwind CSS',
		path: '/framework/nextjs-tailwind',
	},
]
