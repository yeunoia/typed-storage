import { StorageConfig } from '../@types/base-storage.type'
import { createLocalStorage } from './local-storage'

/**
 * K : storage key type
 * V : storage value type
 */
export const typedLocalStorage = <K extends string, V>(
	storageConfig?: StorageConfig
) => createLocalStorage<K, V>(storageConfig?.options)
