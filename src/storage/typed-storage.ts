import { StorageConfig } from '../@types/base-storage.type'
import { createLocalStorage } from './local-storage'
import { createSessionStorage } from './session-storage'

/**
 * K : storage key type
 * V : storage value type
 */
export const typedLocalStorage = <K extends string, V>(
	storageConfig?: StorageConfig
) => createLocalStorage<K, V>(storageConfig?.options)

/**
 * K : storage key type
 * V : storage value type
 */
export const typedSessionStorage = <K extends string, V>(
	storageConfig?: StorageConfig
) => createSessionStorage<K, V>(storageConfig?.options)
