import CodeBlock from '@/components/CodeBlock/CodeBlock'
import {FC} from 'react'
import {BsFillLightningChargeFill} from 'react-icons/bs'

const Command: FC = () => {
	return (
		<CodeBlock
			className='text-base w-fit mx-auto bg-transparent flex items-center justify-center space-x-2'
			icon={<BsFillLightningChargeFill />}
		>
			npx turbo-setup
			<span className='font-light text-2xl text-white animate-blink select-none'>
				|
			</span>
		</CodeBlock>
	)
}

export default Command
