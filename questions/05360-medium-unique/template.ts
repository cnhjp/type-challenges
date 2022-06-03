// 从右往左，如果发现Rest中include了Last，那么不把这个Last放在结果中

type MyIncludes<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : MyIncludes<Rest, U>
  : false

type Unique<T extends any[]> = T extends [...infer Rest, infer Last]
  ? MyIncludes<Rest, Last> extends true
    ? Unique<Rest>
    : [...Unique<Rest>, Last]
  : []

type Foo = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>
