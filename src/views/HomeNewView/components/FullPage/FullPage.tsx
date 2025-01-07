'use client'

import Background from '@/views/HomeNewView/components/Background/Background'
import Command from '@/views/HomeNewView/components/Command/Command'
import HighLightTitle from '@/views/HomeNewView/components/HighLightTitle/HighLightTitle'
import React, {FC} from 'react'
import {FullPage, Slide} from 'react-full-page'
import Frameworks from '../Frameworks/Frameworks'

type Props = {
	children?: React.ReactNode
}

const FullPageView: FC<Props> = ({}) => {
	return (
		<FullPage>
			<Slide>
				<Background>
					<div>
						<HighLightTitle />
						<Command />
					</div>
				</Background>
			</Slide>
			<Slide>
				<Frameworks />
			</Slide>
		</FullPage>
	)
}

export default FullPageView
