'use client'
import React from 'react'

import {AnimatePresence, motion} from 'framer-motion'
import CanvasRevealEffect from '../ui/CanvasRevealEffect'
import Button from '../Button/Button'
import {useRouter} from 'next/navigation'

const FrameworkCard = ({
	title,
	icon,
	children,
	path,
}: {
	title: string
	icon: React.ReactNode
	path: string
	children?: React.ReactNode
}) => {
	const navigate = useRouter()
	const [hovered, setHovered] = React.useState(false)
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className='border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full md:min-w-[300px] lg:min-w-[350px] mx-auto p-4 h-[18rem] lg:h-[30rem] relative'
		>
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						className='h-full w-full absolute inset-0'
					>
						<CanvasRevealEffect
							animationSpeed={3}
							containerClassName='bg-sky-600'
							colors={[[125, 211, 252]]}
						/>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className='relative z-20 w-full flex'>
				<div className='absolute text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex flex-col items-center justify-center space-x-[20] text-white'>
					<div className='flex items-center justify-center space-x-[10px] mb-[10px] text-3xl lg:text-4xl'>
						{icon}
					</div>
					<p className='text-sm lg:text-lg font-bold'>{title}</p>
				</div>
				<div className='w-full dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 flex flex-col items-center justify-center space-y-[20px]'>
					<p className='text-base'>{title}</p>
					<Button
						title='View more'
						onClick={() => {
							navigate.push(path)
						}}
						className='hidden group-hover/canvas-card:block'
					/>
				</div>
			</div>
		</div>
	)
}

export default FrameworkCard
