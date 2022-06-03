// 先截取到最右边的U，然后求截取后的数组的长度-1

type MySplit<T extends any[], U> = T extends [...infer Rest, infer Last]
  ? Equal<Last, U> extends true
    ? T
    : MySplit<Rest, U>
  : []

type LastIndexOf<T extends any[], U> = MySplit<T, U>["length"] extends 0
  ? -1
  : MySplit<T, U> extends [...infer Rest, infer _Last]
  ? Rest["length"]
  : -1
