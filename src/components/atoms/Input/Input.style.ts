import styled, { css } from 'styled-components';
import { InputProps } from './Input.type';

type StyledInputProps = Pick<InputProps, 'disabled'>;

export const StyledInput = styled.input<StyledInputProps>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  &:-moz-placeholder {
    opacity: 1;
    text-overflow: ellipsis;
  }
  &:placeholder-shown {
    text-overflow: ellipsis;
  }
  &:-ms-input-placeholder {
    color: #bfbfbf;
    text-overflow: ellipsis;
  }
  &::placeholder {
    color: #bfbfbf;
  }
  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
  &:focus {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  ${(props) =>
    props.disabled &&
    css`
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      cursor: not-allowed;
      opacity: 1;
      &:hover {
        border-color: #d9d9d9;
        border-right-width: 1px !important;
      }
    `}
`;
