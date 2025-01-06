import {FC, ReactNode} from 'react'

type Props = {
	children: ReactNode
}

const CodeBlock: FC<Props> = ({children}) => (
	<pre className='bg-gray-800 text-gray-300 p-4 rounded-md overflow-x-auto my-4'>
		<code>{children}</code>
	</pre>
)

export default CodeBlock
