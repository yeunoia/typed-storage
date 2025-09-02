import {
	StorageInterface,
	StorageOptions,
	StorageType,
} from '../@types/base-storage.type'

export const createStorage = <K extends string, V>(
	storage: Storage,
	storageName: StorageType,
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
			const value = storage.getItem(getPrefixKey(key))
			if (value === null) return null
			return serializer.deserialize(value)
		} catch (error) {
			console.warn(`${storageName} get error:`, error)
			return null
		}
	}

	const set = (key: K, value: V) => {
		try {
			const serialized = serializer.serialize(value)
			storage.setItem(getPrefixKey(key), serialized)
		} catch (error) {
			console.warn(`${storageName} set error:`, error)
		}
	}

	const remove = (key: K) => {
		try {
			storage.removeItem(getPrefixKey(key))
		} catch (error) {
			console.warn(`${storageName} remove error:`, error)
		}
	}

	const keys = () => {
		try {
			return Object.keys(storage).map((key) => key) as K[]
		} catch (error) {
			console.warn(`${storageName} keys error:`, error)
			return [] as K[]
		}
	}

	const clear = () => {
		try {
			storage.clear()
		} catch (error) {
			console.warn(`${storageName} clear error:`, error)
		}
	}

	const size = () => keys().length

	return {
		get,
		set,
		remove,
		clear,
		keys,
		size,
	}
}
