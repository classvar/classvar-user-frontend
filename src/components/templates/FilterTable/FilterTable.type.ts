// extends object를 쓰려고 했는데 linter 오류가 있어서 조언 대로 Record<string, unknown> 으로 변경함.
export interface FilterTableProps<C, D> {
  columns: Array<C>;
  data: Array<D>;
  title: string;
  subText?: string;
  placeholder: string;
}
