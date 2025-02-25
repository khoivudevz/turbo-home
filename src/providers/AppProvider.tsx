'use client'

import {PUBLIC_ENV} from '@/configs/env.config'

type Props = {
	children: React.ReactNode
}

const AppProvider = ({children}: Props) => {
	console.log('🚀: ', PUBLIC_ENV.ENV)

	return <div className='no-scrollbar'>{children}</div>
}

export default AppProvider
