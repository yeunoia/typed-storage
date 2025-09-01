# typed-storage

Type-safe localStorage

## Installation

```bash
npm install typed-storage

```

## Usage

```typescript
import { typedLocalStorage } from 'typed-storage'

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
