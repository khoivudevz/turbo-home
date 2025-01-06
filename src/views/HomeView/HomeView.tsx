'use client'

import {FC} from 'react'
import Background from './components/Background/Background'
import FrameworkCard from '@/components/FrameworkCard/FrameworkCard'

type Props = {
	lang: any
}

const HomeView: FC<Props> = ({lang}) => {
	return (
		<Background>
			<p className='text-4xl font-bold text-white'>
				{lang.home.turbo_project_starter}
			</p>
			<p className='text-4xl font-bold text-white'>
				{lang.home.morden_web_development}
			</p>

			<FrameworkCard title='Title' icon={<div>ICON</div>}>
				<div>testttt</div>
			</FrameworkCard>
		</Background>
	)
}

export default HomeView
