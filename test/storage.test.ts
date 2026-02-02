import { describe, it, expect } from 'vitest'
import { createLocalStorage } from '../src/storage/local-storage'
import { createSessionStorage } from '../src/storage/session-storage'
import { typedLocalStorage } from '../src/storage/typed-storage'

describe('LocalStorage', () => {
	it('should set and get item', () => {
		const storage = createLocalStorage<'hello' | 'hi', string>()
		storage.set('hello', 'world')
		expect(storage.get('hello')).toBe('world')
	})

	it('should remove item', () => {
		const storage = createLocalStorage<'hello', string>()
		storage.set('hello', 'bar')
		storage.remove('hello')
		expect(storage.get('hello')).toBeNull()
	})
})

describe('SessionStorage', () => {
	it('should set and get item', () => {
		const storage = createSessionStorage<'hi', string>()
		storage.set('hi', 'world')
		expect(storage.get('hi')).toBe('world')
	})
})

describe('typedLocalStorage', () => {
	it('should set and get typed item', () => {
		type User = { name: string }
		const storage = typedLocalStorage<'user', User>()
		storage.set('user', { name: 'Kim' })
		expect(storage.get('user')).toEqual({
			name: 'Kim',
		})
	})
})
