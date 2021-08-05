import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { MatchParams } from '@common/router.type';
import SidebarFrame from '@components/atoms/SidebarFrame';
import ListMenu from '@components/molecules/ListMenu';
import Exam from '@pages/Exam';
import ManageExaminee from '@pages/ManageExaminee';
import ManageProctor from '@pages/ManageProctor';
import {
  Wrapper,
  SidebarSpace,
  Content,
  Header,
  Body,
  Title,
} from './Proctor.style';

const Proctor: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const examMenus = [
    { name: '중간고사', path: `${match.url}/exam/1` },
    { name: '기말고사', path: `${match.url}/exam/2` },
  ];

  const adminMenus = [
    { name: '응시자 관리', path: `${match.url}/manage/examinee` },
    { name: '감독관 관리', path: `${match.url}/manage/proctor` },
  ];
  return (
    <Wrapper>
      <SidebarFrame
        header={<Header>ClassVAR</Header>}
        body={
          <Body>
            <Title>시험 관리</Title>
            <ListMenu menus={examMenus} />
            <Title>관리자 메뉴</Title>
            <ListMenu menus={adminMenus} />
          </Body>
        }
      />
      <SidebarSpace />
      <Content>
        <Route exact path={match.url} render={() => <h3>Home</h3>} />
        <Route path={`${match.url}/exam/:id`} component={Exam} />
        <Route
          path={`${match.url}/manage/examinee`}
          component={ManageExaminee}
        />
        <Route path={`${match.url}/manage/proctor`} component={ManageProctor} />
      </Content>
    </Wrapper>
  );
};

export default Proctor;
