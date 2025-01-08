'use client'
import {FC} from 'react'
import FullPage from '@/views/HomeNewView/components/FullPage/FullPage'

type Props = {
	lang: any
}

const HomeNewView: FC<Props> = ({}) => {
	return (
		<div>
			<FullPage />
		</div>
	)
}

export default HomeNewView
