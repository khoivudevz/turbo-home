import {FC} from 'react'
import Background from './components/Background/Background'
import Command from './components/Command/Command'
import HighLightTitle from './components/HighLightTitle/HighLightTitle'

type Props = {
	lang: any
}

const HomeNewView: FC<Props> = ({}) => {
	return (
		<Background>
			<div>
				<HighLightTitle />

				<Command />
			</div>
		</Background>
	)
}

export default HomeNewView
