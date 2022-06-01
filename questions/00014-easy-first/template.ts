type First<T extends any[]> = T extends [infer First, ...infer _Rest]
  ? First
  : never
