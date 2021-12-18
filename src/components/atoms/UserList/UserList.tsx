/* eslint-disable react/jsx-key */
import React, { useImperativeHandle } from 'react';
import {
  TableInstance,
  useGlobalFilter,
  useTable,
  useRowSelect,
  useFilters,
} from 'react-table';
import { StyledTable, Tr, Td } from './UserList.style';
import { UserListProps } from './UserList.type';

// eslint-disable-next-line react/display-name
const UserList = React.forwardRef<TableInstance, UserListProps>(
  ({ columns, data }, ref) => {
    const instance = useTable(
      { columns, data, initialState: { hiddenColumns: ['status'] } },
      useGlobalFilter,
      useFilters,
      useRowSelect,
    );
    const {
      getTableProps,
      getTableBodyProps,
      rows,
      prepareRow,
      state: { selectedRowIds },
    } = instance;
    useImperativeHandle(ref, () => instance);
    console.log(selectedRowIds);

    return (
      <>
        <StyledTable {...getTableProps()}>
          <div {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr
                  {...row.getRowProps()}
                  isSelected={row.isSelected}
                  onClick={() => {
                    if (row.isSelected) {
                      row.toggleRowSelected(false);
                    } else {
                      row.toggleRowSelected();
                    }
                  }}
                >
                  {row.cells.map((cell) => {
                    return (
                      <Td
                        isBold={cell.column.id === 'name'}
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </div>
        </StyledTable>
      </>
    );
  },
);

export default UserList;
