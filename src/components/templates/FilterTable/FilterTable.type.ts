import { Column } from 'react-table';

export interface FilterTableProps {
  columns: Array<Column>;
  data: Array<any>;
  title: string;
  subText?: string;
  placeholder: string;
}
