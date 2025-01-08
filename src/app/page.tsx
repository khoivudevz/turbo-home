import {TranslationContextProvider} from '@/translation/translation.context'
import {TSearchParams} from '@/types/common.type'
import {getDictionary} from '@/utils/getDictionary'
import HomeNewView from '@/views/HomeNewView/HomeNewView'
import {Metadata} from 'next'

type Props = {
	searchParams: TSearchParams
}

export const metadata: Metadata = {
	title: 'Turbo Setup',
	description:
		'Modern web development starter kit featuring React, Next.js, TypeScript, and Tailwind CSS. Built for performance and developer productivity.',
}

const HomePage = async ({searchParams}: Props) => {
	const {lang} = await searchParams
	const locale = await getDictionary(lang)
	return (
		<TranslationContextProvider dictionary={locale}>
			<HomeNewView lang={locale} />
		</TranslationContextProvider>
	)
}

export default HomePage
