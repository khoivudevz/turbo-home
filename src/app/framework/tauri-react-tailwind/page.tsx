import {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Turbo Setup Tauri + React - TailwindCSS',
	description:
		'A modern and efficient Tauri starter template with React 19, TypeScript, Tailwind CSS, and various development tools pre-configured for cross-platform desktop applications.',
}

const TauriReactTailwindPage = () => {
	return (
		<main className='bg-[#0d1117]'>
			<div className='mx-auto my-0 max-w-[900px] border border-[rgba(61,68,77,0.7)] p-10 pb-5 rounded-sm'>
				{/* Page Title */}
				<h1
					id='turbo-setup-tauri-react-typescript-tailwind'
					className='border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-2xl font-bold'
				>
					Turbo Setup: Tauri + React 19.2.3, TypeScript & TailwindCSS v4
					Boilerplate
				</h1>

				{/* Introduction Paragraph */}
				<p className='mt-4 text-[#f0f6fc]'>
					Build powerful cross-platform desktop applications with a modern Tauri
					starter powered by React 19.2.3, TypeScript, and TailwindCSS v4. Enjoy
					native performance, small bundle sizes, and seamless integration
					between Rust backend and React frontend. Create once, deploy
					everywhere with confidence.
				</p>

				{/* Features Section */}
				<h2
					id='features'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🚀 Features
				</h2>
				<ul className='list-disc ml-6 mt-4 text-white'>
					<li className='mt-2'>
						<b>⚛️ React 19.2.3 + TypeScript</b> - Modern React with full
						TypeScript support.
					</li>
					<li className='mt-2'>
						<b>🎨 Tailwind CSS v4</b> - Utility-first CSS for rapid UI
						development.
					</li>
					<li className='mt-2'>
						<b>⚡ Vite</b> - Next-generation frontend tooling for fast builds.
					</li>
					<li className='mt-2'>
						<b>🔍 ESLint</b> - Code linting for consistent code quality.
					</li>
					<li className='mt-2'>
						<b>🧹 Prettier</b> - Automated code formatting for style
						consistency.
					</li>
					<li className='mt-2'>
						<b>🪝 Husky & lint-staged</b> - Pre-commit hooks for linting and
						formatting your code.
					</li>
					<li className='mt-2'>
						<b>🏷️ Commitlint</b> - Enforces conventional commit messages.
					</li>
					<li className='mt-2'>
						<b>📦 Zustand</b> - Simple and fast state management.
					</li>
					<li className='mt-2'>
						<b>🗺️ React Router</b> - Declarative routing for React apps.
					</li>
					<li className='mt-2'>
						<b>📅 Day.js</b> - Lightweight date manipulation library.
					</li>
					<li className='mt-2'>
						<b>🌐 Axios</b> - Promise-based HTTP client for the browser.
					</li>
					<li className='mt-2'>
						<b>🔄 Custom useFetch Hook</b> - Lightweight data fetching with
						loading and error states (replaces SWR).
					</li>
					<li className='mt-2'>
						<b>🖥️ Tauri</b> - Cross-platform desktop applications with native
						performance.
					</li>
					<li className='mt-2'>
						<b>🔐 UseAuth</b> - Authentication and authorization.
					</li>
				</ul>

				{/* Prerequisites Section */}
				<h2
					id='prerequisites'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🛠️ Prerequisites
				</h2>
				<ul className='list-disc ml-6 mt-4 text-white'>
					<li className='mt-1'>Node.js (v18 or higher)</li>
					<li className='mt-1'>Bun (latest version)</li>
					<li className='mt-1'>
						Rust (latest stable version) - for Tauri desktop functionality
					</li>
				</ul>

				{/* Installation Section */}
				<h2
					id='installation'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					📦 Installation
				</h2>
				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Clone the repository
				</h3>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						git clone https://github.com/khoivudevz/turbo-setup-tauri-react
					</code>
				</pre>
				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Install dependencies
				</h3>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>bun install</code>
				</pre>

				{/* Development Section */}
				<h2
					id='development'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🚀 Development
				</h2>

				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Web Development
				</h3>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`bun dev         # Development mode
bun dev:stg     # Staging mode
bun dev:prod    # Production mode`}
					</code>
				</pre>

				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Desktop Application (Tauri)
				</h3>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`bun run tauri:dev    # Start Tauri desktop app in development mode
bun run tauri:build  # Build Tauri desktop app for production`}
					</code>
				</pre>

				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Building for Production
				</h3>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`bun build              # Production build (web)
bun build:stg          # Staging build (web)
bun build:dev          # Development build (web)
bun run tauri:build    # Production build (desktop app)`}
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
						{`src/
├── assets/           # Static assets (images, fonts, icons)
├── components/       # Reusable UI components
├── configs/          # Configuration files (env, http, app urls)
├── constants/        # Application constants and shared values
├── hooks/            # Custom React hooks (useNews, useFetch, useMutation, useKeyPress)
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

				{/* Desktop Application Section */}
				<h2
					id='desktop-application'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🖥️ Desktop Application (Tauri)
				</h2>
				<p className='mt-4 text-[#f0f6fc]'>
					This project can be run as a cross-platform desktop application using
					Tauri. The desktop app provides:
				</p>
				<ul className='list-disc ml-6 mt-4 text-white'>
					<li className='mt-2'>
						<b>Cross-platform support</b>: Windows, macOS, and Linux
					</li>
					<li className='mt-2'>
						<b>Native performance</b>: Rust backend with web frontend
					</li>
					<li className='mt-2'>
						<b>Small bundle size</b>: Efficient resource usage
					</li>
					<li className='mt-2'>
						<b>Native system integration</b>: File system access, notifications,
						system tray
					</li>
				</ul>

				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Tauri Configuration
				</h3>
				<p className='mt-2 text-[#f0f6fc]'>
					The Tauri configuration is located in{' '}
					<code className='bg-[#151b23] rounded px-1'>
						src-tauri/tauri.conf.json
					</code>
					. Key settings include:
				</p>
				<ul className='list-disc ml-6 mt-2 text-white'>
					<li className='mt-1'>
						<b>App name</b>: &quot;Turbo setup Tauri x React 19, TypeScript &
						Tailwind and more...&quot;
					</li>
					<li className='mt-1'>
						<b>Window title</b>: &quot;Turbo setup Tauri x React 19, TypeScript
						& Tailwind and more...&quot;
					</li>
					<li className='mt-1'>
						<b>Window size</b>: 800x600 (resizable)
					</li>
					<li className='mt-1'>
						<b>Web assets</b>: Built from React app in{' '}
						<code className='bg-[#151b23] rounded px-1'>build/</code> directory
					</li>
					<li className='mt-1'>
						<b>Dev server</b>: http://localhost:8000
					</li>
				</ul>

				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Building for Different Platforms
				</h3>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`# Build for current platform
bun run tauri:build

# The built application will be in src-tauri/target/release/bundle/`}
					</code>
				</pre>

				{/* Configuration Section */}
				<h2
					id='configuration'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🔧 Configuration
				</h2>

				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Environment Variables
				</h3>
				<p className='mt-2 text-[#f0f6fc]'>
					Create <code className='bg-[#151b23] rounded px-1'>.env</code> files
					for different environments:
				</p>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`VITE_ENV=development
VITE_API_URL=your_api_url`}
					</code>
				</pre>

				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>TypeScript</h3>
				<p className='mt-2 text-[#f0f6fc]'>
					The project includes two TypeScript configurations:
				</p>
				<ul className='list-disc ml-6 mt-2 text-white'>
					<li className='mt-1'>
						<code className='bg-[#151b23] rounded px-1'>tsconfig.app.json</code>{' '}
						- Application configuration
					</li>
					<li className='mt-1'>
						<code className='bg-[#151b23] rounded px-1'>
							tsconfig.node.json
						</code>{' '}
						- Node.js configuration
					</li>
				</ul>

				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					ESLint & Prettier
				</h3>
				<ul className='list-disc ml-6 mt-2 text-white'>
					<li className='mt-1'>
						ESLint is configured with TypeScript and React rules
					</li>
					<li className='mt-1'>
						Prettier is set up with custom formatting rules
					</li>
					<li className='mt-1'>Pre-commit hooks ensure code quality</li>
				</ul>

				{/* Internationalization Section */}
				<h2
					id='internationalization'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🌍 Internationalization (i18n)
				</h2>
				<p className='mt-2 text-[#f0f6fc]'>
					This project uses{' '}
					<code className='bg-[#151b23] rounded px-1'>i18next</code> with{' '}
					<code className='bg-[#151b23] rounded px-1'>react-i18next</code> for
					internationalization support. The translations are stored in JSON
					files located in the{' '}
					<code className='bg-[#151b23] rounded px-1'>
						src/i18n/translations
					</code>{' '}
					directory.
				</p>

				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Adding a New Language
				</h3>
				<ol className='list-decimal ml-6 mt-2 text-white'>
					<li className='mt-1'>
						Create a new JSON file in the{' '}
						<code className='bg-[#151b23] rounded px-1'>
							src/i18n/translations
						</code>{' '}
						directory with the language code as the filename (e.g.,{' '}
						<code className='bg-[#151b23] rounded px-1'>fr.json</code> for
						French).
					</li>
					<li className='mt-1'>Add your translations in the new JSON file.</li>
				</ol>

				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					Using Translations
				</h3>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`import {useTranslation} from 'react-i18next'
import SwitchLanguage from '@/components/SwitchLanguage/SwitchLanguage'

const HomeView = () => {
  const {t} = useTranslation()
  return (
    <div>
      <p>{t('welcome')}</p>
      <SwitchLanguage />
    </div>
  )
}`}
					</code>
				</pre>

				{/* Data Fetching Section */}
				<h2
					id='data-fetching'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					📡 Data Fetching
				</h2>
				<p className='mt-2 text-[#f0f6fc]'>
					This project uses a{' '}
					<code className='bg-[#151b23] rounded px-1'>
						Custom useFetch Hook
					</code>{' '}
					for data fetching, which provides features like:
				</p>
				<ul className='list-disc ml-6 mt-2 text-white'>
					<li className='mt-1'>Automatic data fetching</li>
					<li className='mt-1'>Loading and error states</li>
					<li className='mt-1'>Manual execution control</li>
					<li className='mt-1'>Success/error callbacks</li>
					<li className='mt-1'>TypeScript ready</li>
					<li className='mt-1'>No external dependencies</li>
				</ul>

				<h3 className='mt-4 text-[#f0f6fc] text-lg font-bold'>
					useFetch Hook Example
				</h3>
				<p className='mt-2 text-[#f0f6fc]'>Using the custom useFetch hook:</p>
				<pre className='bg-[#151b23] rounded p-4 my-4 overflow-auto text-sm'>
					<code className='hljs text-white'>
						{`import {useFetch} from '@/hooks/use-fetch'

const MyComponent = () => {
  const {data, isLoading, error, execute, reset} = useFetch(() =>
    fetch('/api/news').then(res => res.json())
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  return (
    <div>
      {data?.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={execute}>Refresh</button>
    </div>
  )
}`}
					</code>
				</pre>

				{/* Contributing Section */}
				<h2
					id='contributing'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					🤝 Contributing
				</h2>
				<ol className='list-decimal ml-6 mt-2 text-white'>
					<li className='mt-1'>Fork the repository</li>
					<li className='mt-1'>
						Create your feature branch (
						<code className='bg-[#151b23] rounded px-1'>
							git checkout -b feature/amazing-feature
						</code>
						)
					</li>
					<li className='mt-1'>
						Commit your changes using conventional commits
					</li>
					<li className='mt-1'>
						Push to the branch (
						<code className='bg-[#151b23] rounded px-1'>
							git push origin feature/amazing-feature
						</code>
						)
					</li>
					<li className='mt-1'>Open a Pull Request</li>
				</ol>

				{/* License Section */}
				<h2
					id='license'
					className='mt-8 border-b border-[rgba(61,68,77,0.7)] pb-1 text-[#f0f6fc] text-xl font-bold'
				>
					📄 License
				</h2>
				<p className='mt-2 text-[#f0f6fc]'>
					This project is licensed under the MIT License.
				</p>
			</div>
		</main>
	)
}

export default TauriReactTailwindPage
