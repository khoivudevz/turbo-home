import {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'React + TypeScript + Tailwind',
	description:
		'	A modern and efficient React starter template with TypeScript, Tailwind CSS, and various development tools pre-configured.',
}

const ReactTailwindPage = () => {
	return (
		// Main container styled to mimic the original <main> element.
		<main className='bg-[#0d1117]'>
			<div className='mx-auto my-0 max-w-[900px] border border-[rgba(61,68,77,0.7)] p-10 pb-5 rounded-sm '>
				{/* Page Title */}
				<h1
					id='turbo-setup-react--typescript--tailwind'
					className='border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-2xl font-bold'
				>
					React + TypeScript + Tailwind
				</h1>

				{/* Introduction Paragraph */}
				<p className='mt-4 text-[#f0f6fc]'>
					A modern and efficient React starter template with TypeScript,
					Tailwind CSS, and various development tools pre-configured.
				</p>

				{/* Features Section */}
				<h2
					id='🚀-features'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🚀 Features
				</h2>
				<ul className='list-disc ml-6 mt-4 text-white'>
					<li className='mt-2'>
						⚡️{' '}
						<a
							href='https://react.dev/'
							className='text-blue-500 hover:underline'
						>
							React 19
						</a>{' '}
						with{' '}
						<a
							href='https://www.typescriptlang.org/'
							className='text-blue-500 hover:underline'
						>
							TypeScript
						</a>
					</li>
					<li className='mt-2'>
						🎨{' '}
						<a
							href='https://tailwindcss.com/'
							className='text-blue-500 hover:underline'
						>
							Tailwind CSS
						</a>{' '}
						for styling
					</li>
					<li className='mt-2'>
						📦{' '}
						<a
							href='https://vitejs.dev/'
							className='text-blue-500 hover:underline'
						>
							Vite
						</a>{' '}
						for fast development and building
					</li>
					<li className='mt-2'>
						🔍{' '}
						<a
							href='https://eslint.org/'
							className='text-blue-500 hover:underline'
						>
							ESLint
						</a>{' '}
						for code linting
					</li>
					<li className='mt-2'>
						💅{' '}
						<a
							href='https://prettier.io/'
							className='text-blue-500 hover:underline'
						>
							Prettier
						</a>{' '}
						for code formatting
					</li>
					<li className='mt-2'>
						🐶{' '}
						<a
							href='https://typicode.github.io/husky/'
							className='text-blue-500 hover:underline'
						>
							Husky
						</a>{' '}
						for Git hooks
					</li>
					<li className='mt-2'>
						📋{' '}
						<a
							href='https://commitlint.js.org/'
							className='text-blue-500 hover:underline'
						>
							Commitlint
						</a>{' '}
						for conventional commits
					</li>
					<li className='mt-2'>
						🏪{' '}
						<a
							href='https://zustand-demo.pmnd.rs/'
							className='text-blue-500 hover:underline'
						>
							Zustand
						</a>{' '}
						for state management
					</li>
					<li className='mt-2'>
						🌐{' '}
						<a
							href='https://reactrouter.com/'
							className='text-blue-500 hover:underline'
						>
							React Router
						</a>{' '}
						for routing
					</li>
					<li className='mt-2'>
						📅{' '}
						<a
							href='https://day.js.org/'
							className='text-blue-500 hover:underline'
						>
							Day.js
						</a>{' '}
						for date manipulation
					</li>
					<li className='mt-2'>
						🔄{' '}
						<a
							href='https://axios-http.com/'
							className='text-blue-500 hover:underline'
						>
							Axios
						</a>{' '}
						for HTTP requests
					</li>
				</ul>

				{/* Prerequisites Section */}
				<h2
					id='🛠️-prerequisites'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🛠️ Prerequisites
				</h2>
				<ul className='list-disc ml-6 mt-4 text-white'>
					<li className='mt-2'>Node.js (v18 or higher)</li>
					<li className='mt-2'>Bun (latest version)</li>
				</ul>

				{/* Installation Section */}
				<h2
					id='📦-installation'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					📦 Installation
				</h2>
				<h1
					id='clone-the-repository'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					Install command
				</h1>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>npx turbo-setup</code>
				</pre>
				<h1
					id='install-dependencies'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					Install dependencies
				</h1>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						bun <span className='hljs-keyword'>install</span>
					</code>
				</pre>

				{/* Development Section */}
				<h2
					id='🚀-development'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🚀 Development
				</h2>
				<h1
					id='start-development-server'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					Start development server
				</h1>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						bun dev # Development mode{'\n'}
						bun dev:stg # Staging mode{'\n'}
						bun dev:prod # Production mode
					</code>
				</pre>
				<h1 id='start-development-server-1' className='mt-4 text-[#f0f6fc]'>
					Start development server
				</h1>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						bun build # Production build{'\n'}
						bun build:stg # Staging build{'\n'}
						bun build:dev # Development build
					</code>
				</pre>

				{/* Development Structure */}
				<h2
					id='📁-development'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc]'
				>
					📁 Development
				</h2>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`src/
├── assets/           # Static assets (images, fonts, icons)
├── components/       # Reusable UI components
├── configs/          # Configuration files (env, http, app urls)
├── constants/        # Application constants and shared values
├── hooks/            # Custom React hooks (useFetch, useMutation, useKeyPress)
├── layouts/          # Layout components and templates
├── pages/            # Page components
├── providers/        # React context providers
├── router/           # Routing configuration
├── services/         # Browser services (cookies, localStorage)
├── store/            # State management with Zustand
├── styles/           # Global styles and Tailwind imports
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── views/            # View components`}
					</code>
				</pre>

				{/* Configuration Section */}
				<h2
					id='🔧-configuration'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc]'
				>
					🔧 Configuration
				</h2>
				<h3
					id='environment-variables'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					Environment Variables
				</h3>
				<p className='mt-2 text-[#f0f6fc]'>
					Create <code className='bg-[#151b23] rounded px-1'>.env</code> files
					for different environments:
				</p>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						VITE_ENV=development{'\n'}VITE_API_URL=your_api_url
					</code>
				</pre>
				<h3 id='typescript' className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					TypeScript
				</h3>
				<p className='mt-2 text-[#f0f6fc]'>
					The project includes two TypeScript configurations:
				</p>
				<ul className='list-disc ml-6 mt-4 text-white'>
					<li className='mt-2'>
						<code className='bg-[#151b23] rounded px-1'>tsconfig.app.json</code>{' '}
						- Application configuration
					</li>
					<li className='mt-2'>
						<code className='bg-[#151b23] rounded px-1'>
							tsconfig.node.json
						</code>{' '}
						- Node.js configuration
					</li>
				</ul>
				<h3
					id='eslint--prettier'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					ESLint &amp; Prettier
				</h3>
				<ul className='list-disc ml-6 mt-4 text-white'>
					<li className='mt-2'>
						ESLint is configured with TypeScript and React rules
					</li>
					<li className='mt-2'>
						Prettier is set up with custom formatting rules
					</li>
					<li className='mt-2'>Pre-commit hooks ensure code quality</li>
				</ul>

				{/* Internationalization Section */}
				<h2
					id='🌍-internationalization-i18n'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🌍 Internationalization (i18n)
				</h2>
				<p className='mt-2 text-[#f0f6fc]'>
					This project uses{' '}
					<a
						href='https://www.i18next.com/'
						className='text-blue-500 hover:underline'
					>
						i18next
					</a>{' '}
					with{' '}
					<a
						href='https://react.i18next.com/'
						className='text-blue-500 hover:underline'
					>
						react-i18next
					</a>{' '}
					for internationalization support. The translations are stored in JSON
					files located in the{' '}
					<code className='bg-[#151b23] rounded px-1'>
						src/i18n/translations
					</code>{' '}
					directory.
				</p>
				<h3
					id='adding-a-new-language'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					Adding a New Language
				</h3>
				<ol className='list-decimal ml-6 mt-4 text-white'>
					<li className='mt-2'>
						<p>
							Create a new JSON file in the{' '}
							<code className='bg-[#151b23] rounded px-1'>
								src/i18n/translations
							</code>{' '}
							directory with the language code as the filename (e.g.,{' '}
							<code className='bg-[#151b23] rounded px-1'>fr.json</code> for
							French).
						</p>
					</li>
					<li className='mt-2'>
						<p>Add your translations in the new JSON file. For example:</p>
					</li>
				</ol>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`{
  "translation": {
    "welcome": "Bienvenue à React, tailwindcss et plus"
  }
}`}
					</code>
				</pre>
				<h3
					id='switching-languages'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					Switching Languages
				</h3>
				<p className='mt-2 text-[#f0f6fc]'>
					The <code className='bg-[#151b23] rounded px-1'>SwitchLanguage</code>{' '}
					component allows users to switch between available languages. It uses
					the <code className='bg-[#151b23] rounded px-1'>useTranslation</code>{' '}
					hook from{' '}
					<code className='bg-[#151b23] rounded px-1'>react-i18next</code> to
					change the language dynamically.
				</p>
				<p className='mt-2 text-[#f0f6fc]'>Example usage in a component:</p>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`import { useTranslation } from 'react-i18next'
import SwitchLanguage from '@/components/SwitchLanguage/SwitchLanguage'

const HomeView = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p>{t('welcome')}</p>
      <SwitchLanguage />
    </div>
  )
}`}
					</code>
				</pre>
			</div>
		</main>
	)
}

export default ReactTailwindPage
