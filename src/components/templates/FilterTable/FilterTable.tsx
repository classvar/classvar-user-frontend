import React, { useRef } from 'react';
import { TableInstance } from 'react-table';
import Headerbar from '@components/organisms/Headerbar';
import Input from '@components/atoms/Input';
import Table from '@components/atoms/Table';
import { HeaderSpace, InputWrapper, TableWrapper } from './FilterTable.style';
import { FilterTableProps } from './FilterTable.type';
import theme from '@styles/theme';
import {
  TableColumnType,
  TableDataType,
} from '@components/atoms/Table/Table.type';

const FilterTable: React.FC<FilterTableProps<TableColumnType, TableDataType>> =
  ({ columns, data, title, subText, placeholder, children }) => {
    const MAIN = theme.colors.main;
    const tableInstance = useRef<TableInstance<TableDataType>>(null);
    return (
      <>
        <Headerbar title={title} subText={subText} color={MAIN}>
          <InputWrapper>
            <Input
              onChange={(e) => {
                tableInstance.current?.setGlobalFilter(e.target.value);
              }}
              placeholder={placeholder}
            />
          </InputWrapper>
          {children}
        </Headerbar>
        <HeaderSpace />
        <TableWrapper>
          <Table
            rowSelection
            columns={columns}
            data={data}
            ref={tableInstance}
          />
        </TableWrapper>
      </>
    );
  };

export default FilterTable;
