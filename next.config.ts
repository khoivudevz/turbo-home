import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
	distDir: 'build',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'assets.aceternity.com',
				port: '',
				pathname: '/**',
				search: '',
			},
		],
	},
}

export default nextConfig
