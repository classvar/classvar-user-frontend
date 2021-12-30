/*

    name: '홍길동',
    email: 'hong@gmail.com',
    department: '기계공학과',
    id: '2014965038',
*/

export type TableDataType = {
  id: string;
  name: string;
  email: string;
  department: string;
  status?: string; // 얘는 없는 테이블도 있었음.
};

export interface TableColumnType {
  Header: string;
  accessor: keyof TableDataType;
}

export interface TableProps {
  columns: Array<TableColumnType>;
  data: Array<TableDataType>;
  rowSelection?: boolean;
  ref?: unknown;
}
