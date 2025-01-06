'use client'

import AuroraBackground from '@/components/ui/AuroraBackground'
import {motion} from 'framer-motion'
import {FC, ReactNode} from 'react'

type Props = {
	children: ReactNode
}

const Background: FC<Props> = ({children}) => {
	return (
		<AuroraBackground>
			<motion.div
				initial={{opacity: 0.0, y: 40}}
				whileInView={{opacity: 1, y: 0}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
				className='relative w-full h-full flex items-center'
			>
				{children}
			</motion.div>
		</AuroraBackground>
	)
}

export default Background
