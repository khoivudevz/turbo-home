import {Highlight} from '@/components/ui/HeroHighlight'
import {FC} from 'react'
import {motion} from 'framer-motion'
import {TextGenerateEffect} from '@/components/ui/TextGenerateEffect'

type Props = {
	lang: any
}

const words = `Turbo setup with React, Next.js, TypeScript, TailwindCSS, and internationalization support within a few minutes.`

const Content: FC<Props> = () => {
	return (
		<div className='space-y-[20px] flex flex-col justify-center'>
			<div>
				<motion.h1
					initial={{
						opacity: 0,
						y: 20,
					}}
					animate={{
						opacity: 1,
						y: [20, -5, 0],
					}}
					transition={{
						duration: 0.5,
						ease: [0.4, 0.0, 0.2, 1],
					}}
					className='text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
				>
					<Highlight className='text-black dark:text-white'>
						Turbocharge
					</Highlight>{' '}
					Your Workflow with{' '}
					<Highlight className='text-black dark:text-white'>
						Lightning-Fast
					</Highlight>{' '}
					setup.
				</motion.h1>
			</div>

			<TextGenerateEffect words={words} />
		</div>
	)
}

export default Content
