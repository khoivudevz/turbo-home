import {cn} from '@/utils/cn.util'
import {FC, ReactNode} from 'react'

type Props = {
	children: ReactNode
	className?: string
	icon?: ReactNode
}

const CodeBlock: FC<Props> = ({children, className, icon}) => (
	<pre
		className={cn(
			'bg-gray-800 text-gray-300 p-4 rounded-md overflow-x-auto my-4  flex items-center justify-center space-x-2',
			className
		)}
	>
		{icon}
		<code>{children}</code>
	</pre>
)

export default CodeBlock
