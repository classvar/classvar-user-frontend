import { Column } from 'react-table';

export interface UserListProps<D> {
  columns: Array<Column>;
  data: Array<D>;
  ref?: unknown;
}
