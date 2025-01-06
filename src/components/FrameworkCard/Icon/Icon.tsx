import {FC} from 'react'

type Props = {
	childen: React.ReactNode
}

const Icon: FC<Props> = ({childen}) => {
	return (
		<div className='flex items-center justify-center space-x-[5px]'>
			{childen}
		</div>
	)
}

export default Icon
