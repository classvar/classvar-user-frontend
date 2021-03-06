import React, { useState } from 'react';
import Button from '@components/atoms/Button';
import Textarea from '@components/atoms/Textarea';
import Modal from '@components/organisms/Modal';
import FilterTable from '@components/templates/FilterTable';
import { StyledLink } from './ManageProctor.style';
import { data } from '../dummydata';
import { TableColumnType } from '@components/atoms/Table/Table.type';

const ManageProctor: React.FC = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const columns: TableColumnType[] = React.useMemo(
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
    ],
    [],
  );

  return (
    <>
      <FilterTable
        title="감독관 관리"
        subText="총 40명"
        columns={columns}
        data={data}
        placeholder="감독관 검색"
      >
        <Button danger onClick={() => setDeleteModalOpen(true)}>
          감독관 삭제
        </Button>
        <Button onClick={() => setApplyModalOpen(true)}>감독관 등록</Button>
      </FilterTable>
      <Modal
        width="300px"
        open={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        title="감독관 삭제"
        headerComponent={
          <StyledLink to={'/proctor/manage/proctor'}>
            <Button rect danger onClick={() => setDeleteModalOpen(false)}>
              삭제하기
            </Button>
          </StyledLink>
        }
      >
        <div>정말로 삭제하시겠습니까?</div>
      </Modal>
      <Modal
        width="500px"
        open={applyModalOpen}
        closeModal={() => setApplyModalOpen(false)}
        title="감독관 등록"
        headerComponent={
          <StyledLink to={'/proctor/manage/proctor'}>
            <Button rect onClick={() => setApplyModalOpen(false)}>
              보내기
            </Button>
          </StyledLink>
        }
      >
        <Textarea placeholder="example1@mail.com, example2@mail.com" />
      </Modal>
    </>
  );
};

export default ManageProctor;
