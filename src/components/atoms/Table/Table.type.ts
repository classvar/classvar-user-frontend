import { Column } from 'react-table';

export interface TableProps {
  columns: Array<Column>;
  data: Array<any>;
  rowSelection?: boolean;
}
