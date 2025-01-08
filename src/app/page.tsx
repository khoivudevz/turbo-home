import {TranslationContextProvider} from '@/translation/translation.context'
import {TSearchParams} from '@/types/common.type'
import {getDictionary} from '@/utils/getDictionary'
import HomeNewView from '@/views/HomeNewView/HomeNewView'

type Props = {
	searchParams: TSearchParams
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
