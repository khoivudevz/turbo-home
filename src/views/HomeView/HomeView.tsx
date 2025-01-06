'use client'

import {FC} from 'react'
import Background from './components/Background/Background'
import Content from './components/Content/Content'
import Frameworks from './components/Frameworks/Frameworks'

type Props = {
	lang: any
}

const HomeView: FC<Props> = ({lang}) => {
	return (
		<Background>
			<div className='container mx-auto px-8 py-12 overflow-auto flex flex-col lg:grid lg:grid-cols-2 w-full gap-x-[20px] space-y-[20px] h-full lg:h-fit'>
				<Content lang={lang} />
				<Frameworks />
			</div>
		</Background>
	)
}

export default HomeView
