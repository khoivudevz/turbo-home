'use client'

import FrameworkCard from '@/components/FrameworkCard/FrameworkCard'
import {Highlight} from '@/components/ui/HeroHighlight'
import {frameworkCardData} from '@/data/frameworks'
import {FC} from 'react'

const Frameworks: FC = () => {
	return (
		<div className='h-dvh bg-neutral-950 flex items-center justify-center'>
			<div className='container-x space-y-[50px]'>
				<p className='text-center font-extrabold text-4xl lg:text-5xl text-white'>
					Select your <br className='md:hidden' />
					<Highlight className='text-black dark:text-white'>
						turbo pack
					</Highlight>
					.
				</p>
				<div className='flex items-center justify-center space-x-[10px]'>
					{frameworkCardData.map((framework) => (
						<FrameworkCard
							key={framework.id}
							title={framework.title}
							icon={framework.icon}
							id={framework.id}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Frameworks
