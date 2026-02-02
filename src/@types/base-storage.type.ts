export type StorageType = 'local' | 'session'

export interface StorageOptions {
	prefix?: string
	serializer?: {
		serialize: (value: any) => string
		deserialize: (value: string) => any
	}
}

export interface StorageConfig {
	options?: StorageOptions
}

/**
 *  define Storage key type as K and value type as V
 */
export interface StorageInterface<K extends string, V = any> {
	/**
	 * get value by key
	 * @param key storage key
	 * @returns value or null
	 */
	get(key: K): V | null

	/**
	 * set key and value
	 * @param key storage key
	 * @param value storage value
	 */
	set(key: K, value: V): void

	/**
	 * remove key and value
	 * @param key storage key
	 */
	remove(key: K): void

	/**
	 * clear all keys and values
	 */
	clear(): void
	/**
	 * key list
	 */
	keys(): K[]

	/**
	 * size of storage
	 * @returns size of storage
	 */
	size(): number
}
