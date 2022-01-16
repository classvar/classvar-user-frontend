import React, { useState, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { TableInstance, CellProps } from 'react-table';
import { ReactComponent as Note } from '@assets/note.svg';
import { ReactComponent as Message } from '@assets/message.svg';
import { MatchParams } from '@common/router.type';
import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import SidebarFrame from '@components/atoms/SidebarFrame';
import UserList from '@components/atoms/UserList';
import Headerbar from '@components/organisms/Headerbar';
import Modal from '@components/organisms/Modal';
import { data } from '@pages/Exam/Exam.type';
import {
  Wrapper,
  Header,
  Title,
  HeaderSpace,
  SidebarSpace,
  Icon,
  Toggle,
  ToggleButton,
  Body,
  Content,
  VideoArea,
  Video,
} from './Monitoring.style';

const Monitoring: React.FC<RouteComponentProps<MatchParams>> = ({
  history,
}) => {
  const [selected, setSelected] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const tableInstance = useRef<TableInstance>(null);

  const closeModal = () => {
    setModalOpen(false);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: '',
        accessor: 'name',
        id: 'name',
      },
      {
        Header: '',
        accessor: 'email',
      },
      {
        Header: '',
        accessor: 'department',
      },
      {
        Header: '',
        accessor: 'id',
      },
      {
        Header: '',
        accessor: 'button',
        Cell: (
          props: React.PropsWithChildren<
            CellProps<Record<string, unknown>, unknown>
          >,
        ) => (
          <Icon>
            <Note
              width="20"
              height="20"
              fill="white"
              onClick={(e) => {
                console.log(`${props.column.filterValue}`);
                e.stopPropagation();
              }}
            />
            <Message
              width="20"
              height="20"
              fill="white"
              onClick={(e) => {
                console.log(`${props.cell.row.index}`);
                e.stopPropagation();
              }}
            />
          </Icon>
        ),
      },
      { Header: '', accessor: 'status' },
    ],
    [],
  );

  return (
    <>
      <Wrapper>
        <SidebarFrame
          header={
            <Header>
              <Title>전체 지원자 ({data.length})</Title>
              <Input
                placeholder="전체 검색"
                onChange={(e) => {
                  tableInstance.current?.setGlobalFilter(e.target.value);
                }}
              />
              <Toggle>
                <ToggleButton
                  isSelected={selected == 0}
                  onClick={() => {
                    setSelected(0);
                    tableInstance.current?.setFilter('status', '');
                  }}
                >
                  전체
                </ToggleButton>
                <ToggleButton
                  isSelected={selected == 1}
                  onClick={() => {
                    setSelected(1);
                    tableInstance.current?.setFilter('status', '응시중');
                  }}
                >
                  응시중
                </ToggleButton>
                <ToggleButton
                  isSelected={selected == 2}
                  onClick={() => {
                    setSelected(2);
                    tableInstance.current?.setFilter('status', '응시 완료');
                  }}
                >
                  응시 완료
                </ToggleButton>
                <ToggleButton
                  isSelected={selected == 3}
                  onClick={() => {
                    setSelected(3);
                    tableInstance.current?.setFilter('status', '미응시');
                  }}
                >
                  미응시
                </ToggleButton>
              </Toggle>
            </Header>
          }
          body={<UserList columns={columns} data={data} ref={tableInstance} />}
        />
        <SidebarSpace />
        <Body>
          <Headerbar
            title="중간고사"
            subText="2021년 7월 20일 18:00 ~ 20:00 (120분) 총 20문제"
          >
            <Button secondary onClick={() => console.log('문의하기')}>
              문의하기(채팅)
            </Button>
            <Button danger onClick={() => setModalOpen(true)}>
              테스트 종료
            </Button>
          </Headerbar>
          <HeaderSpace />
          <Content>
            {tableInstance.current?.rows.map((row) => {
              tableInstance.current?.prepareRow(row);
              return (
                row.isSelected && (
                  <div>
                    {row.cells.map((cell) => {
                      return <div key={null}>{cell.render('Cell')}</div>;
                    })}
                  </div>
                )
              );
            })}
            {data.map((e) => {
              return (
                <VideoArea key={null}>
                  <Video autoPlay muted playsInline></Video>
                  <Video autoPlay playsInline></Video>
                  {e.name}
                </VideoArea>
              );
            })}
          </Content>
        </Body>
      </Wrapper>
      <Modal
        width="300px"
        open={modalOpen}
        closeModal={closeModal}
        title="테스트 종료"
        headerComponent={
          <Button rect danger onClick={() => history.goBack()}>
            테스트 종료하기
          </Button>
        }
      >
        정말로 종료하시겠습니까?
      </Modal>
    </>
  );
};

export default Monitoring;
