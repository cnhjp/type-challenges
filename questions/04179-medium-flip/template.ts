type KeyType = string | number | symbol

// 这里bool类型要额外处理
type Flip<T> = {
  [K in keyof T as T[K] extends true
    ? "true"
    : T[K] extends false
    ? "false"
    : T[K] extends KeyType
    ? T[K]
    : never]: K
}
