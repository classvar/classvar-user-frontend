import React from 'react';
import { Wrapper, Number, Title } from './Indicator.style';
import { IndicatorProps } from './Indicator.type';

const Indicator: React.FC<IndicatorProps> = ({ number, title }) => {
  return (
    <>
      <Wrapper>
        <Number>{number}</Number>
        <Title>{title}</Title>
      </Wrapper>
    </>
  );
};

export default Indicator;
