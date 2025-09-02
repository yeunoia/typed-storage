# @yeunoia/typed-storage

> Type-safe storage library for TypeScript

[![npm version](https://img.shields.io/npm/v/@yeunoia/typed-storage.svg)](https://www.npmjs.com/package/@yeunoia/typed-storage)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎯 **Full Type Safety** - Guaranteed key and value types in TypeScript
- 🎯 **Simple API** - Intuitive and easy-to-use interface
- 🏷️ **Namespace Support** - Key management with prefix
- ⚙️ **Custom Serialization** - Support for serialization beyond JSON
- 🪶 **Lightweight** - Pure TypeScript implementation with no dependencies

## 📦 Installation

```bash
# npm
npm install @yeunoia/typed-storage

# yarn
yarn add @yeunoia/typed-storage

# pnpm
pnpm add @yeunoia/typed-storage
```

## 🚀 Usage

### LocalStorage

```typescript
import { typedLocalStorage } from '@yeunoia/typed-storage'

// Define types
type User = { id: number; name: string }
type Settings = { theme: 'light' | 'dark'; lang: string }

// Create storage instances
const userStorage = typedLocalStorage<'user', User>()
const settingsStorage = typedLocalStorage<'settings', Settings>({
	options: { prefix: 'app' },
})

// Store and retrieve data
userStorage.set('user', { id: 1, name: 'John' })
const user = userStorage.get('user') // User | null

settingsStorage.set('settings', { theme: 'dark', lang: 'en' })
const settings = settingsStorage.get('settings') // Settings | null
```

### SessionStorage

```typescript
import { typedSessionStorage } from '@yeunoia/typed-storage'

// Use session storage
const sessionStorage = typedSessionStorage<'temp', string>({
	options: { prefix: 'session' },
})

sessionStorage.set('temp', 'temporary data')
const temp = sessionStorage.get('temp') // string | null
```

### Advanced Usage

```typescript
// Custom serialization
const customStorage = typedLocalStorage<'data', any>({
	options: {
		prefix: 'custom',
		serializer: {
			serialize: (value) => btoa(JSON.stringify(value)),
			deserialize: (value) => JSON.parse(atob(value)),
		},
	},
})
```

## 📚 API

### `typedLocalStorage<K, V>(config?)`

### `typedSessionStorage<K, V>(config?)`

**Generic Types:**

- `K`: Storage key type (extends string)
- `V`: Storage value type

**Configuration Options:**

- `prefix`: Prefix to add to keys
- `serializer`: Custom serialization/deserialization functions

**Methods:**

- `get(key): V | null` - Get value
- `set(key, value): void` - Set value
- `remove(key): void` - Remove key
- `clear(): void` - Clear all data
- `keys(): K[]` - Get all keys
- `size(): number` - Get number of stored items

## 📚 License

MIT © [yeunoia](https://github.com/yeunoia)
