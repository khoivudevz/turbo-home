'use client'

import {FC} from 'react'

import {frameworkCardData} from '@/data/frameworks'
import {
	IconBrandGithub,
	IconBrandNextjs,
	IconBrandReact,
	IconHome,
} from '@tabler/icons-react'
import {SiTauri} from 'react-icons/si'
import {FloatingDock} from '../ui/FloatingDock'

const Dock: FC = () => {
	const links = [
		{
			title: 'Home',
			icon: (
				<IconHome className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: '/',
		},
		{
			title: frameworkCardData[0].title,
			icon: (
				<IconBrandReact className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: frameworkCardData[0].path,
		},
		{
			title: frameworkCardData[1].title,
			icon: (
				<IconBrandNextjs className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: frameworkCardData[1].path,
		},
		{
			title: frameworkCardData[2].title,
			icon: (
				<SiTauri className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: frameworkCardData[2].path,
		},
		{
			title: 'GitHub',
			icon: (
				<IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
			),
			href: 'https://github.com/khoivudevz',
			blank: true,
		},
	]

	return (
		<div className='fixed bottom-[20px] right-[20px] md:right-0 md:left-1/2 md:-translate-x-1/2'>
			<FloatingDock items={links} />
		</div>
	)
}

export default Dock
