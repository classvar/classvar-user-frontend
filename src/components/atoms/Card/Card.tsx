import React from 'react';
import {
  CardWrapper,
  Title,
  NumberWrapper,
} from '@components/atoms/Card/Card.style';
import { CardProps } from '@components/atoms/Card/Card.type';
import { ReactComponent as PeopleNumber } from '@assets/peopleNumber.svg';
import theme from '@styles/theme';
import { useHistory } from 'react-router-dom';

const Card: React.FC<CardProps> = ({ id, title, number }) => {
  const history = useHistory();
  const SUB = theme.colors.sub;
  return (
    <CardWrapper onClick={() => history.push(`/course/${id}`)}>
      <Title>{title}</Title>
      <NumberWrapper>
        <PeopleNumber width="12" height="12" fill={SUB} />
        <div>{number}명</div>
      </NumberWrapper>
    </CardWrapper>
  );
};

export default Card;
