import React from 'react';
import Table from '@components/atoms/Table';
import Headerbar from '@components/organisms/Headerbar';
import Button from '@components/atoms/Button';
import {
  HeaderSpace,
  TableWrapper,
  InputWrapper,
} from './ManageExaminee.style';
import { data } from '../Exam/dummydata';

const ManageExaminee: React.FC = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: '이름',
        accessor: 'name',
      },
      {
        Header: '이메일',
        accessor: 'email',
      },
      {
        Header: '학과',
        accessor: 'department',
      },
      {
        Header: '학번',
        accessor: 'id',
      },
      {
        Header: '응시상태',
        accessor: 'status',
      },
    ],
    [],
  );

  return (
    <>
      <Headerbar title="응시자 관리" subText="총 40명">
        <InputWrapper></InputWrapper>
        <Button danger onClick={() => console.log('a')}>
          응시자 삭제
        </Button>
        <Button onClick={() => console.log('a')}>응시자 등록</Button>
      </Headerbar>
      <HeaderSpace />
      <TableWrapper>
        <Table rowSelection columns={columns} data={data} />
      </TableWrapper>
    </>
  );
};

export default ManageExaminee;
