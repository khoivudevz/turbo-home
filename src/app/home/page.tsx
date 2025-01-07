import {TSearchParams} from '@/types/common.type'
import {getDictionary} from '@/utils/getDictionary'
import HomeNewView from '@/views/HomeNewView/HomeNewView'
import {FC} from 'react'

type Props = {
	searchParams: TSearchParams
}

const HomePage: FC<Props> = async ({searchParams}) => {
	const {lang} = await searchParams
	const locale = await getDictionary(lang)

	return <HomeNewView lang={locale} />
}

export default HomePage
