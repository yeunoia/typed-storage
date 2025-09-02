import { StorageOptions } from '../@types/base-storage.type'
import { createStorage } from './base-storage'

export const createSessionStorage = <K extends string, V>(
	options?: StorageOptions
) => createStorage<K, V>(sessionStorage, 'session', options)
