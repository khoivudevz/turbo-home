'use client'

import FrameworkCard from '@/components/FrameworkCard/FrameworkCard'
import {frameworkCardData} from '@/data/frameworks'
import {FC} from 'react'

const Frameworks: FC = () => {
	return (
		<div className='grid grid-cols-2 gap-[20px] '>
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
