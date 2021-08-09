/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React, { useState, useRef } from 'react';
import { TableInstance, CellProps } from 'react-table';
import { ReactComponent as Note } from '@assets/note.svg';
import { ReactComponent as Message } from '@assets/message.svg';
import Input from '@components/atoms/Input';
import SidebarFrame from '@components/atoms/SidebarFrame';
import UserList from '@components/atoms/UserList';
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
import { data } from '@pages/Exam/dummydata';
import Headerbar from '@components/organisms/Headerbar';
import Button from '@components/atoms/Button';

const Monitoring: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const tableInstance = useRef<TableInstance>(null);
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
        Cell: (props: React.PropsWithChildren<CellProps<any>>) => (
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
          <Button danger onClick={() => console.log('a')}>
            테스트 종료
          </Button>
        </Headerbar>
        <HeaderSpace />
        <Content>
          {data.map((e) => {
            return (
              <VideoArea>
                <Video autoPlay muted playsInline></Video>
                <Video autoPlay playsInline></Video>
                {e.name}
              </VideoArea>
            );
          })}
        </Content>
      </Body>
    </Wrapper>
  );
};

export default Monitoring;
