# @yeunoia/typed-storage

Type-safe localStorage

## Installation

```bash
npm install @yeunoia/typed-storage

yarn add @yeunoia/typed-storage

pnpm add @yeunoia/typed-storage
```

## Usage

```typescript
import { typedLocalStorage } from '@yeunoia/typed-storage'

// Create typed storage instance
type User = { id: number; name: string }
const userStorage = typedLocalStorage<'user', User>({
	options: { prefix: 'app' }, // optional
})

// Set/get data with type safety
userStorage.set('user', { id: 1, name: 'John' })
const user = userStorage.get('user') // User | null
```

## License

MIT
