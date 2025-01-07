import {frameworkData} from '@/data/frameworks'
import FrameworkView from '@/views/FrameworkView/FrameworkView'
import {FC} from 'react'

type Props = {
	params: Promise<{framework: string}>
}

const FrameworkPage: FC<Props> = async ({params}) => {
	const framework = (await params).framework
	const data = frameworkData.find((f) => f.id === framework)
	if (!data) return <div>Framework not found</div>

	return <FrameworkView data={data} />
}

export default FrameworkPage
