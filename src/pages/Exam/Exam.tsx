import React from 'react';
import { RouteComponentProps } from 'react-router';
import { MatchParams } from '@common/router.type';
import Indicator from '@components/atoms/Indicator/Indicator';
import Table from '@components/atoms/Table';
import Headerbar from '@components/organisms/Headerbar';
import Button from '@components/atoms/Button';
import { HeaderSpace, IndicatorWrapper, TableWrapper } from './Exam.style';
import { data } from './dummydata';

const Exam: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
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
      <Headerbar
        title={match.params.id === '1' ? '중간고사' : '기말고사'}
        subText="2021년 7월 20일 18:00 ~ 20:00 (120분)"
      >
        <Button danger onClick={() => console.log('a')}>
          시험 삭제
        </Button>
        <Button onClick={() => console.log('a')}>문제집 편짐</Button>
        <Button onClick={() => console.log('a')}>미리보기</Button>
        <Button secondary onClick={() => console.log('a')}>
          시험 모니터링
        </Button>
      </Headerbar>
      <HeaderSpace />
      <IndicatorWrapper>
        <Indicator number={42} title="총 응시자 수" />
        <Indicator number={31} title="진행중인 응시자 수" />
        <Indicator number={11} title="제출한 응시자 수" />
      </IndicatorWrapper>
      <TableWrapper>
        <Table columns={columns} data={data} />
      </TableWrapper>
    </>
  );
};

export default Exam;
