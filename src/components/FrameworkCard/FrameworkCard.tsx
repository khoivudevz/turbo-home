'use client'
import React from 'react'

import {AnimatePresence, motion} from 'framer-motion'
import CanvasRevealEffect from '../ui/CanvasRevealEffect'

const FrameworkCard = ({
	title,
	icon,
	children,
}: {
	title: string
	icon: React.ReactNode
	children?: React.ReactNode
}) => {
	const [hovered, setHovered] = React.useState(false)
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className='border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative'
		>
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						className='h-full w-full absolute inset-0'
					>
						<CanvasRevealEffect
							animationSpeed={5.1}
							containerClassName='bg-emerald-900'
						/>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className='relative z-20'>
				<div className='text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center'>
					{icon}
				</div>
				<h2 className='dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200'>
					{title}
				</h2>
			</div>
		</div>
	)
}

export default FrameworkCard
