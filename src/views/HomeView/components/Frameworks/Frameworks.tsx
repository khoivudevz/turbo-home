'use client'

import FrameworkCard from '@/components/FrameworkCard/FrameworkCard'
import {frameworkCardData} from '@/data/frameworks'
import {FC} from 'react'

const Frameworks: FC = () => {
	return (
		<div className='lg:grid lg:grid-cols-2 gap-x-[20px] space-y-[20px] lg:space-y-0'>
			{frameworkCardData.map((framework) => (
				<FrameworkCard
					key={framework.id}
					title={framework.title}
					icon={framework.icon}
					id={framework.id}
				/>
			))}
		</div>
	)
}

export default Frameworks
