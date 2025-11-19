import {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Turbo Setup NextJS - TailwindCSS',
	description:
		'	A modern, feature-rich Next.js boilerplate with TailwindCSS, and internationalization support.',
}

const NextjsTailwindPage = () => {
	return (
		<main className='bg-[#0d1117]'>
			<div className='mx-auto my-0 max-w-[900px] border border-[rgba(61,68,77,0.7)] p-10 pb-5 rounded-sm'>
				{/* Page Title */}
				<h1
					id='turbo-setup-nextjs---ts---tailwindcss'
					className='border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-2xl font-bold'
				>
					Turbo Setup: Next.js 16 + React Compiler & TailwindCSS Boilerplate
				</h1>

				{/* Introduction Paragraph */}
				<p className='mt-4 text-[#f0f6fc]'>
					Kickstart your next project with a cutting-edge, production-ready
					Next.js 16 boilerplate with React Compiler enabled. Enjoy seamless
					TypeScript integration, rapid UI development with TailwindCSS v4, and
					a suite of modern tools for code quality, state management, and
					internationalization. Build faster, scale easier, and deliver with
					confidence.
				</p>

				{/* Features Section */}
				<h2
					id='features'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					✨ Features
				</h2>
				<ul className='list-disc ml-6 mt-4 text-white'>
					<li className='mt-2'>
						🚀 <span className='font-bold'>Next.js 16.0.3</span> – Latest
						Next.js for modern web apps.
					</li>
					<li className='mt-2'>
						⚛️ <span className='font-bold'>React Compiler</span> – Automatic
						optimization enabled natively in Next.js 16.
					</li>
					<li className='mt-2'>
						📝 <span className='font-bold'>TypeScript</span> – Type-safe coding
						for reliability.
					</li>
					<li className='mt-2'>
						🎨 <span className='font-bold'>TailwindCSS v4</span> – Rapid,
						beautiful UI development.
					</li>
					<li className='mt-2'>
						🌐 <span className='font-bold'>i18n Support</span> – Multilanguage
						support (English & Korean) with next-intl.
					</li>
					<li className='mt-2'>
						🔍 <span className='font-bold'>ESLint + Prettier</span> – Consistent
						code style and quality.
					</li>
					<li className='mt-2'>
						🪝 <span className='font-bold'>Husky Git Hooks</span> – Automated
						checks before every commit.
					</li>
					<li className='mt-2'>
						🏷️ <span className='font-bold'>Conventional Commits</span> –
						Standardized commit messages.
					</li>
					<li className='mt-2'>
						🔄 <span className='font-bold'>Nuqs</span> – Advanced URL query
						state management with type safety.
					</li>
					<li className='mt-2'>
						⚡ <span className='font-bold'>Custom useFetch Hook</span> –
						Lightweight data fetching with loading and error states.
					</li>
					<li className='mt-2'>
						📦 <span className='font-bold'>Zustand State Management</span> –
						Simple and scalable state management.
					</li>
					<li className='mt-2'>
						🎯 <span className='font-bold'>Path Aliases</span> – Clean and easy
						imports.
					</li>
					<li className='mt-2'>
						🔒 <span className='font-bold'>Type-Safe API Calls</span> – Secure
						and robust API integration.
					</li>
					<li className='mt-2'>
						🔐 <span className='font-bold'>Enhanced Cookie Management</span> –
						with client/server separation.
					</li>
					<li className='mt-2'>
						🛡️{' '}
						<span className='font-bold'>Middleware-based Authentication</span> –
						for route protection.
					</li>
					<li className='mt-2'>
						📁 <span className='font-bold'>Snake-case File Naming</span> –
						Consistent file organization convention.
					</li>
				</ul>

				{/* Getting Started Section */}
				<h2
					id='getting-started'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🚀 Getting Started
				</h2>
				<h3
					id='prerequisites'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					Prerequisites
				</h3>
				<ul className='list-disc ml-6 mt-2 text-white'>
					<li className='mt-1'>Node.js 18+</li>
					<li className='mt-1'>Bun</li>
				</ul>
				<h3 id='installation' className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Installation
				</h3>
				<ol className='list-decimal ml-6 mt-2 text-white'>
					<li className='mt-1'>Install command:</li>
				</ol>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						npx turbo-setup nextjs-tailwind
					</code>
				</pre>
				<ol className='list-decimal ml-6 mt-2 text-white' start={2}>
					<li className='mt-1'>Install dependencies:</li>
				</ol>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>bun install</code>
				</pre>
				<ol className='list-decimal ml-6 mt-2 text-white' start={3}>
					<li className='mt-1'>Set up environment variables:</li>
				</ol>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`# Copy the example environment file
cp .env.example .env.local

# Edit the environment variables
# NEXT_PUBLIC_ENV=development
# NEXT_PUBLIC_API_URL=https://your-api-url.com`}
					</code>
				</pre>

				{/* Development Section */}
				<h3 id='development' className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Development
				</h3>
				<p className='mt-2 text-[#f0f6fc]'>Start the development server:</p>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`# Development
bun run dev`}
					</code>
				</pre>
				<p className='mt-2 text-[#f0f6fc]'>
					The application will be available at{' '}
					<code className='bg-[#151b23] rounded px-1'>
						http://localhost:8000
					</code>
				</p>

				{/* Building Section */}
				<h3 id='building' className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Building
				</h3>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`# Production build
bun run build`}
					</code>
				</pre>

				{/* Project Structure Section */}
				<h2
					id='project-structure'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					📁 Project Structure
				</h2>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`messages/ # Translation message files
├── [locale].json
src/
├── app/ # Next.js app directory with route handlers
├── components/ # Reusable UI components
├── configs/ # Configuration files (API, env, HTTP)
├── constants/ # Constants and regex patterns
├── hooks/ # Custom React hooks
├── i18n/ # Internationalization configuration
├── providers/ # React context providers
├── services/ # API and utility services
├── styles/ # Global styles and Tailwind config
├── types/ # TypeScript type definitions
├── utils/ # Utility functions
└── views/ # Page-specific view components`}
					</code>
				</pre>

				{/* Internationalization Section */}
				<h2
					id='internationalization'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🌐 Internationalization
				</h2>

				<p className='mt-2 text-[#f0f6fc]'>
					The project uses{' '}
					<code className='bg-[#151b23] rounded px-1'>next-intl</code> for
					internationalization. Currently supported languages:
				</p>
				<ul className='list-disc ml-6 mt-2 text-white'>
					<li className='mt-1'>English (en)</li>
					<li className='mt-1'>Korean (ko)</li>
				</ul>
				<h3
					id='translation-files'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					Translation Files
				</h3>
				<ul className='list-disc ml-6 mt-2 text-white'>
					<li className='mt-1'>
						Message files are stored in{' '}
						<code className='bg-[#151b23] rounded px-1'>
							/messages/{'{lang}'}.json
						</code>
					</li>
					<li className='mt-1'>
						Each language has its own JSON file with nested translation keys
					</li>
					<li className='mt-1'>Translation files follow this structure:</li>
				</ul>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`{
  "lang": "english",
  "home": {
    "title": "Home",
    "welcome_to_home": "Welcome to the home page",
    // ... other translations
  }
}`}
					</code>
				</pre>
				<h3
					id='adding-a-new-language'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					Adding a New Language
				</h3>
				<ol className='list-decimal ml-6 mt-2 text-white'>
					<li className='mt-1'>
						Create a new JSON file in{' '}
						<code className='bg-[#151b23] rounded px-1'>
							/messages/{'{lang}'}.json
						</code>
					</li>
					<li className='mt-1'>
						Add the language code to the locales array in{' '}
						<code className='bg-[#151b23] rounded px-1'>
							src/i18n/config.ts
						</code>
					</li>
				</ol>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`export const locales = ['en', 'ko', 'your-new-locale'] as const`}
					</code>
				</pre>
				<h3
					id='using-translations'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					Using Translations
				</h3>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`import {useTranslations} from 'next-intl'

const Component = () => {
  const t = useTranslations()
  return <div>{t('home.welcome_to_home')}</div>
}`}
					</code>
				</pre>
				<h3
					id='configuration'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					Configuration
				</h3>
				<p className='mt-2 text-[#f0f6fc]'>
					The internationalization setup is configured in:
				</p>
				<ul className='list-disc ml-6 mt-2 text-white'>
					<li className='mt-1'>
						<code className='bg-[#151b23] rounded px-1'>next.config.ts</code> -
						Next.js configuration with next-intl plugin
					</li>
					<li className='mt-1'>
						<code className='bg-[#151b23] rounded px-1'>
							src/i18n/config.ts
						</code>{' '}
						- Locale configuration and defaults
					</li>
					<li className='mt-1'>
						<code className='bg-[#151b23] rounded px-1'>
							src/i18n/request.ts
						</code>{' '}
						- Server-side locale detection
					</li>
				</ul>

				{/* Git Hooks Section */}
				<h2
					id='git-hooks'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🪝 Git Hooks
				</h2>
				<p className='mt-2 text-[#f0f6fc]'>
					This project uses Husky for Git hooks:
				</p>
				<ul className='list-disc ml-6 mt-2 text-white'>
					<li className='mt-1'>
						Pre-commit: Runs TypeScript compilation, lint-staged, and build
					</li>
					<li className='mt-1'>
						Commit message: Enforces conventional commit messages
					</li>
				</ul>

				{/* Environment Variables Section */}
				<h2
					id='environment-variables'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					⚙️ Environment Variables
				</h2>
				<p className='mt-2 text-[#f0f6fc]'>
					The project supports multiple environments:
				</p>
				<ul className='list-disc ml-6 mt-2 text-white'>
					<li className='mt-1'>Development (.env.dev)</li>
					<li className='mt-1'>Staging (.env.staging)</li>
					<li className='mt-1'>Production (.env.prod)</li>
				</ul>
				<p className='mt-2 text-[#f0f6fc]'>Required environment variables:</p>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`NEXT_PUBLIC_ENV=development
NEXT_PUBLIC_USER_API_URL=https://your-api-url.com
NEXT_PUBLIC_API_URL=https://your-api-url.com`}
					</code>
				</pre>
				<h3
					id='react-compiler'
					className='mt-4 text-[#f0f6fc] text-lg font-bold'
				>
					React Compiler
				</h3>
				<p className='mt-2 text-[#f0f6fc]'>
					The project uses React Compiler for automatic optimization of React
					components. The compiler is enabled in{' '}
					<code className='bg-[#151b23] rounded px-1'>next.config.ts</code> with{' '}
					<code className='bg-[#151b23] rounded px-1'>reactCompiler: true</code>
					.
				</p>
				<p className='mt-2 text-[#f0f6fc]'>
					Benefits include automatic memoization, performance optimization, and
					zero configuration - Next.js 16 handles it natively.
				</p>
			</div>
		</main>
	)
}

export default NextjsTailwindPage
