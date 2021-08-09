import { Column } from 'react-table';

export interface UserListProps {
  columns: Array<Column>;
  data: Array<any>;
  ref?: any;
}
