type TupleToUnion<T> = T extends any[] ? T[number] : T
