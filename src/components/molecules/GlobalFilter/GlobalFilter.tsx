import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import Input from '@components/atoms/Input';
import { FilterProps } from './GlobalFilter.type';
import { Wrapper } from './GlobalFilter.style';

const GlobalFilter: React.FC<FilterProps> = ({
  globalFilter,
  setGlobalFilter,
}) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <Wrapper>
      <Input
        value={value || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="이름 검색"
      />
    </Wrapper>
  );
};

export default GlobalFilter;
