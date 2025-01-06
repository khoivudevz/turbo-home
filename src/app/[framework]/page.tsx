import CodeBlock from '@/components/CodeBlock/CodeBlock'
import {frameworkData} from '@/data/frameworks'
import Link from 'next/link'
import React, {FC} from 'react'

type Props = {
	params: Promise<{framework: string}>
}

const FrameworkPage: FC<Props> = async ({params}) => {
	const framework = (await params).framework
	const data = frameworkData.find((f) => f.id === framework)
	if (!data) return <div>Framework not found</div>

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
					<CodeBlock>bun dev</CodeBlock>
					<CodeBlock>bun dev:stg</CodeBlock>
					<CodeBlock>bun dev:prod</CodeBlock>
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

export default FrameworkPage
