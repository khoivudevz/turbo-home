import {JSX} from 'react'

export type TSearchParams = any

export type FrameworkIcon = {
	id: string
	icon: JSX.Element[]
	title: string
}

export type Feature = {
	text: string
	link: string
	icon: string
}

export type Framework = {
	id: string
	title: string
	description: string
	features: Feature[]
	prerequisites: string[]
	git: string
	structure: string
	envExample: string
	devCommands: string[]
	buildCommands: string[]
}
