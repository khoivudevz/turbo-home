import {Cover} from '@/components/ui/Cover'
import {Highlight} from '@/components/ui/HeroHighlight'
import {FC} from 'react'

const HighLightTitle: FC = () => {
	return (
		<div className='text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white'>
			<Highlight className='text-black dark:text-white'>Turbocharge</Highlight>{' '}
			Your Workflow
			<br />
			with <Cover>Lightning-Fast</Cover> speed setup.
		</div>
	)
}

export default HighLightTitle
