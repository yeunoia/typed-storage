import { StorageInterface, StorageOptions } from '../@types/base-storage.type'

export const createLocalStorage = <K extends string, V>(
	options?: StorageOptions
): StorageInterface<K, V> => {
	const prefix = options?.prefix || ''

	const serializer = options?.serializer || {
		serialize: JSON.stringify,
		deserialize: JSON.parse,
	}

	const getPrefixKey = (key: K): string => (prefix ? `${prefix}:${key}` : key)

	const get = (key: K) => {
		try {
			const value = localStorage.getItem(getPrefixKey(key))
			if (value === null) return null
			return serializer.deserialize(value)
		} catch (error) {
			console.warn('LocalStorage get error:', error)
			return null
		}
	}

	const set = (key: K, value: V) => {
		try {
			const serialized = serializer.serialize(value)
			localStorage.setItem(getPrefixKey(key), serialized)
		} catch (error) {
			console.warn('LocalStorage set error:', error)
		}
	}

	const remove = (key: K) => {
		try {
			localStorage.removeItem(getPrefixKey(key))
		} catch (error) {
			console.warn('LocalStorage remove error:', error)
		}
	}

	const keys = () => {
		try {
			return Object.keys(localStorage).map((key) => key) as K[]
		} catch (error) {
			console.warn('LocalStorage keys error:', error)
			return [] as K[]
		}
	}

	const clear = () => {
		try {
			localStorage.clear()
		} catch (error) {
			console.warn('LocalStorage clear error:', error)
		}
	}
	const size = () => keys().length

	/**
	 * @todo
	 * prefix control
	 * get, set, remove, clear, keys, size
	 */
	return {
		get,
		set,
		remove,
		clear,
		keys,
		size,
	}
}
