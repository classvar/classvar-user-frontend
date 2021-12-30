import React from 'react';
import { CardListWrapper } from './CardList.style';
import { CardListProps } from '@components/molecules/CardList/CardList.type';
import Card from '@components/atoms/Card';

const CardList = ({ courses }: CardListProps) => (
  <CardListWrapper>
    {courses &&
      courses.map(({ id, title }) => (
        <Card key={id} title={title} number={10} id={id} />
      ))}
  </CardListWrapper>
);

export default CardList;
