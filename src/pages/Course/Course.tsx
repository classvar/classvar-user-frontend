import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Headerbar from '@components/organisms/Headerbar';
import { ReactComponent as MyPageIcon } from '@assets/myPage.svg';
import { ReactComponent as SearchIcon } from '@assets/serach.svg';
import theme from '@styles/theme';
import Button from '@components/atoms/Button';
import { CoursePage, Title, Wrapper } from './Course.style';
import useInput from '../../hooks/useInput';
import Modal from '@components/organisms/Modal';
import { Space } from '@components/templates/Proctor/Proctor.style';
import { ReactComponent as Close } from '@assets/close.svg';
import InputWithLabel from '@components/molecules/InputWithLabel';
import { data } from './dummydata';
import CardList from '@components/molecules/CardList';

const Course: React.FC = () => {
  const [isSearchHover, setIsSearchHover] = useState(false);
  const [isMyPageHover, setIsMyPageHover] = useState(false);

  const [createCourseModal, setCreateCourseModal] = useState(false);
  const [courseName, onChangeCourseName, onResetCourseName] = useInput('');

  const PRIMARY100 = theme.colors.primary100;
  const SCROLLBAR = theme.colors.scrollBar;
  const WHITE = theme.colors.white;
  const HEADER2 = theme.fontSizes.header2;

  const openCreateCourseModal = () => {
    setCreateCourseModal(true);
  };
  const closeCreateCourseModal = () => {
    setCreateCourseModal(false);
    onResetCourseName();
  };

  const handleCreateCourse = () => {
    console.log('생성');
  };

  return (
    <>
      <Headerbar
        title="ClassVAR"
        login
        bgColor={PRIMARY100}
        height="60px"
        color={WHITE}
        titleSize={HEADER2}
      >
        <SearchIcon
          width="24"
          height="24"
          fill={isSearchHover ? WHITE : SCROLLBAR}
          onMouseEnter={() => setIsSearchHover(true)}
          onMouseLeave={() => setIsSearchHover(false)}
        />
        <Link to="/mypage">
          <MyPageIcon
            width="24"
            height="24"
            fill={isMyPageHover ? WHITE : SCROLLBAR}
            onMouseEnter={() => setIsMyPageHover(true)}
            onMouseLeave={() => setIsMyPageHover(false)}
          />
        </Link>
        <Button gray>로그아웃</Button>
      </Headerbar>
      <CoursePage>
        <Wrapper>
          <Title>나의 코스</Title>
          <Button rect onClick={openCreateCourseModal}>
            코스 만들기
          </Button>
        </Wrapper>
        <CardList loading={false} courses={data} />
      </CoursePage>
      <Modal
        width="400px"
        open={createCourseModal}
        closeModal={closeCreateCourseModal}
        title="코스등록"
        headerComponent={
          <Wrapper>
            <Button rect={false} onClick={handleCreateCourse}>
              등록하기
            </Button>
            <Space />
            <Close
              onClick={closeCreateCourseModal}
              style={{ cursor: 'pointer' }}
              width="16"
              height="16"
              fill="black"
            />
          </Wrapper>
        }
      >
        <div>
          <InputWithLabel
            label="코스명"
            placeholder="코스명을 입력하세요."
            value={courseName}
            onChange={onChangeCourseName}
          />
        </div>
      </Modal>
    </>
  );
};

export default Course;
