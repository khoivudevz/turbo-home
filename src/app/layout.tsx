import Dock from '@/components/Dock/Dock'
import AppProvider from '@/providers/AppProvider'
import '@/styles/globals.css'
import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Turbo Setup NextJS - TS - TailwindCSS',
	description: 'Turbo Setup NextJS - TS - TailwindCSS',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
			>
				<AppProvider initLanguage={true}>
					{children}
					<Dock />
				</AppProvider>
			</body>
		</html>
	)
}
