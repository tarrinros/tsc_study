interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'
// key = 'weight'

// ================

type User {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // only 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // without '_id' | 'createdAt'

const user1: UserKeysNoMeta1 = 'name'
// user1 = '_id'

const user2: UserKeysNoMeta2 = 'email'
