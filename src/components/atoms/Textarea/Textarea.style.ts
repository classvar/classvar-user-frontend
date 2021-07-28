import styled, { css } from 'styled-components';
import { TextareaProps } from './Textarea.type';

type StyledTextareaProps = Pick<TextareaProps, 'disabled'>;

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-width: 0;
  min-height: 32px;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: none;
  border: 1px solid ${({ theme }) => theme.colors.disabledborder};
  border-radius: 2px;
  transition: all 0.3s, height 0s;
  vertical-align: bottom;
  &:-moz-placeholder {
    opacity: 1;
    text-overflow: ellipsis;
  }
  &:placeholder-shown {
    text-overflow: ellipsis;
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    text-overflow: ellipsis;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary80};
    border-right-width: 1px !important;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary80};
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(0, 98, 65, 0.2);
  }

  ${(props) =>
    props.disabled &&
    css`
      color: rgba(0, 0, 0, 0.25);
      background-color: ${({ theme }) => theme.colors.disabledbg};
      cursor: not-allowed;
      opacity: 1;
      &:hover {
        border-color: ${({ theme }) => theme.colors.disabledborder};
        border-right-width: 1px !important;
      }
    `}
`;
