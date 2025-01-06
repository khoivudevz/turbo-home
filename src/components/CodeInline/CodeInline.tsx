import {FC, ReactNode} from 'react'

type CodeInlineProps = {
	children: ReactNode
}

const CodeInline: FC<CodeInlineProps> = ({children}) => (
	<code className='bg-gray-800 text-blue-300 px-1 py-0.5 rounded'>
		{children}
	</code>
)

export default CodeInline
