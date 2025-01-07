import CodeBlock from '@/components/CodeBlock/CodeBlock'
import {Framework} from '@/types/common.type'
import Link from 'next/link'

type Props = {
	data: Framework
}

const FrameworkView = ({data}: Props) => {
	return (
		<div className='min-h-screen bg-gray-900 text-gray-100 font-sans'>
			<div className='container mx-auto px-8 py-12'>
				<h1 className='text-4xl font-extrabold mb-6 text-blue-400'>
					{data.title}
				</h1>
				<p className='text-lg text-gray-300 mb-12'>{data.description}</p>

				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-blue-300 mb-4'>🚀 Features</h2>
					<ul className='space-y-4 list-disc list-inside'>
						{data.features.map((feature, idx) => (
							<li key={idx} className='flex items-center'>
								<span className='text-xl mr-2'>{feature.icon}</span>
								<Link
									href={feature.link}
									target='_blank'
									className='hover:text-blue-400 underline'
								>
									{feature.text}
								</Link>
							</li>
						))}
					</ul>
				</section>

				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-blue-300 mb-4'>
						🛠️ Prerequisites
					</h2>
					<ul className='list-disc list-inside text-lg space-y-2'>
						{data.prerequisites.map((prerequisite, idx) => (
							<li key={idx}>{prerequisite}</li>
						))}
					</ul>
				</section>

				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-blue-300 mb-4'>
						📦 Installation
					</h2>
					<CodeBlock>git clone {data.git}</CodeBlock>
					<CodeBlock>bun install</CodeBlock>
				</section>

				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-blue-300 mb-4'>
						🚀 Development
					</h2>
					{data.devCommands.map((command, idx) => (
						<CodeBlock key={idx}>{command}</CodeBlock>
					))}
				</section>

				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-blue-300 mb-4'>🚀 Build</h2>
					{data.buildCommands.map((command, idx) => (
						<CodeBlock key={idx}>{command}</CodeBlock>
					))}
				</section>

				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-blue-300 mb-4'>
						📁 Project Structure
					</h2>
					<CodeBlock>{data.structure}</CodeBlock>
				</section>

				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-blue-300 mb-4'>
						🔧 Configuration
					</h2>
					<CodeBlock>{data.envExample}</CodeBlock>
				</section>
			</div>
		</div>
	)
}

export default FrameworkView
