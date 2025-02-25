import HomeNewView from '@/views/HomeNewView/HomeNewView'
import {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Turbo Setup',
	description:
		'Modern web development starter kit featuring React, Next.js, TypeScript, and Tailwind CSS. Built for performance and developer productivity.',
}

const HomePage = async () => {
	return <HomeNewView />
}

export default HomePage
