import { StorageOptions } from '../@types/base-storage.type'
import { createStorage } from './base-storage'

export const createLocalStorage = <K extends string, V>(
	options?: StorageOptions,
) => createStorage<K, V>(localStorage, 'local', options)
