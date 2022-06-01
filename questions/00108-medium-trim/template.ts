type MyTrimLeft<S extends string> = S extends `${
  | " "
  | "\t"
  | "\n"}${infer Rest}`
  ? MyTrimLeft<Rest>
  : S
type MyTrimRight<S extends string> = S extends `${infer Rest}${
  | " "
  | "\t"
  | "\n"}`
  ? MyTrimRight<Rest>
  : S

type Trim<S extends string> = MyTrimLeft<MyTrimRight<S>>
