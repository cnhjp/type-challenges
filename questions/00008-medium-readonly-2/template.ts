type MyReadonly2<T, K extends keyof T = keyof T> = Omit<
  Omit<T, K> & {
    readonly [U in K]: T[U]
  },
  never
>
