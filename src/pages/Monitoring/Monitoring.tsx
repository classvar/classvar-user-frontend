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
              <Title>?????? ????????? ({data.length})</Title>
              <Input
                placeholder="?????? ??????"
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
                  ??????
                </ToggleButton>
                <ToggleButton
                  isSelected={selected == 1}
                  onClick={() => {
                    setSelected(1);
                    tableInstance.current?.setFilter('status', '?????????');
                  }}
                >
                  ?????????
                </ToggleButton>
                <ToggleButton
                  isSelected={selected == 2}
                  onClick={() => {
                    setSelected(2);
                    tableInstance.current?.setFilter('status', '?????? ??????');
                  }}
                >
                  ?????? ??????
                </ToggleButton>
                <ToggleButton
                  isSelected={selected == 3}
                  onClick={() => {
                    setSelected(3);
                    tableInstance.current?.setFilter('status', '?????????');
                  }}
                >
                  ?????????
                </ToggleButton>
              </Toggle>
            </Header>
          }
          body={<UserList columns={columns} data={data} ref={tableInstance} />}
        />
        <SidebarSpace />
        <Body>
          <Headerbar
            title="????????????"
            subText="2021??? 7??? 20??? 18:00 ~ 20:00 (120???) ??? 20??????"
          >
            <Button secondary onClick={() => console.log('????????????')}>
              ????????????(??????)
            </Button>
            <Button danger onClick={() => setModalOpen(true)}>
              ????????? ??????
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
        title="????????? ??????"
        headerComponent={
          <Button rect danger onClick={() => history.goBack()}>
            ????????? ????????????
          </Button>
        }
      >
        ????????? ?????????????????????????
      </Modal>
    </>
  );
};

export default Monitoring;
