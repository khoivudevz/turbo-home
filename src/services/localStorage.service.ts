export const LOCAL_STORAGE_KEY = {}

export const localStorageServices = {
	setLocalStorage: <T>(data: T, key: string) => {
		const json = JSON.stringify(data)
		localStorage.setItem(key, json)
	},

	getLocalStorage: <T>(key: string) => {
		if (localStorage.getItem(key)) {
			const json = localStorage.getItem(key)
			if (json) {
				return JSON.parse(json) as T
			}
			return null
		} else {
			return null
		}
	},

	removeLocalStorage: (key: string) => {
		localStorage.removeItem(key)
	},
}
