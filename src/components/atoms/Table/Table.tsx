/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import React from 'react';
import {
  useTable,
  useSortBy,
  useRowSelect,
  useGlobalFilter,
} from 'react-table';
import Checkbox from '@components/atoms/Checkbox';
import { TableProps } from './Table.type';
import { StyledTable, Tr, Th, Td } from './Table.style';

const Table: React.FC<TableProps> = ({ columns, data, rowSelection }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setGlobalFilter, // TODO: 검색기능추가
    state: { selectedRowIds },
  } = useTable(
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
          Cell: ({ row }) =>
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
  console.log(selectedRowIds);

  return (
    <>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
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
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
