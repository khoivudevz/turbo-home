import {TranslationContextProvider} from '@/translation/translation.context'
import {TSearchParams} from '@/types/common.type'
import {getDictionary} from '@/utils/getDictionary'
import HomeView from '@/views/HomeView/HomeView'

type Props = {
	searchParams: TSearchParams
}

const HomePage = async ({searchParams}: Props) => {
	const {lang} = await searchParams
	const locale = await getDictionary(lang)
	return (
		<TranslationContextProvider dictionary={locale}>
			<HomeView lang={locale} />
		</TranslationContextProvider>
	)
}

export default HomePage
