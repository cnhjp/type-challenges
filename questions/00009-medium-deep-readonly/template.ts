type DeepReadonly<T> = T extends (...args: any[]) => any
  ? T
  : T extends Record<keyof any, any>
  ? {
      readonly [K in keyof T]: DeepReadonly<T[K]>
    }
  : T
