import React, { useState, useMemo } from 'react';
import { RouteComponentProps } from 'react-router';
import { MatchParams } from '@common/router.type';
import Button from '@components/atoms/Button';
import Indicator from '@components/atoms/Indicator';
import Table from '@components/atoms/Table';
import Headerbar from '@components/organisms/Headerbar';
import Modal from '@components/organisms/Modal';
import {
  IndicatorWrapper,
  TableWrapper,
  StyledLink,
  ModalBody,
} from './Exam.style';
import { data } from './Exam.type';
import { TableColumnType } from '@components/atoms/Table/Table.type';

const Exam: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const columns: TableColumnType[] = useMemo(
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
      <Headerbar
        title={match.params.id === '1' ? '중간고사' : '기말고사'}
        subText="2021년 7월 20일 18:00 ~ 20:00 (120분)"
      >
        <Button danger onClick={() => setModalOpen(true)}>
          시험 삭제
        </Button>
        <Button onClick={() => console.log('a')}>문제집 편집</Button>
        <Button onClick={() => console.log('a')}>미리보기</Button>
        <StyledLink to={`/monitoring/exam/${match.params.id}`}>
          <Button secondary>시험 모니터링</Button>
        </StyledLink>
      </Headerbar>
      <IndicatorWrapper>
        <Indicator number={42} title="총 응시자 수" />
        <Indicator number={31} title="진행중인 응시자 수" />
        <Indicator number={11} title="제출한 응시자 수" />
      </IndicatorWrapper>
      <TableWrapper>
        <Table columns={columns} data={data} />
      </TableWrapper>
      <Modal
        width="300px"
        open={modalOpen}
        closeModal={closeModal}
        title="시험 삭제"
        headerComponent={
          <StyledLink to={'/proctor'}>
            <Button rect danger>
              삭제하기
            </Button>
          </StyledLink>
        }
      >
        <ModalBody>정말로 삭제하시겠습니까?</ModalBody>
      </Modal>
    </>
  );
};

export default Exam;
