import React, { useImperativeHandle } from 'react';
import {
  useTable,
  useSortBy,
  useRowSelect,
  useGlobalFilter,
  TableInstance,
  CellProps,
} from 'react-table';
import Checkbox from '@components/atoms/Checkbox';
import { TableDataType, TableProps } from './Table.type';
import { StyledTable, Tr, Th, Td } from './Table.style';

const Table = React.forwardRef<TableInstance<TableDataType>, TableProps>(
  ({ columns, data, rowSelection }, ref) => {
    const instance = useTable(
      // 지금은 이런 Type을 임의로 만들었는데, 실제로 무슨 데이터가 들어오는지는 모르겠음.
      {
        columns,
        data,
      },
      useGlobalFilter,
      useSortBy,
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) =>
              rowSelection ? (
                <>
                  <Checkbox name="b" {...getToggleAllRowsSelectedProps()} />
                </>
              ) : null,
            Cell: ({ row }: CellProps<TableDataType>) =>
              rowSelection ? (
                <>
                  <Checkbox name="a" {...row.getToggleRowSelectedProps()} />
                </>
              ) : null,
          },
          ...columns,
        ]);
      },
    );

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      // state,
      // visibleColumns,
      // setGlobalFilter,
      state: { selectedRowIds },
    } = instance;

    useImperativeHandle(ref, () => instance);
    console.log(selectedRowIds);
    return (
      <>
        <StyledTable {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={null}>
                {headerGroup.headers.map((column) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={null}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? '🔽'
                          : '🔼'
                        : ''}
                    </span>
                  </Th>
                ))}
              </Tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={null}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()} key={null}>
                        {cell.render('Cell')}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </tbody>
        </StyledTable>
      </>
    );
  },
);

Table.displayName = 'Table';

export default Table;
