import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.type';

type StyledButtonProps = Pick<ButtonProps, 'disabled' | 'danger' | 'secondary'>;

export const StyledButton = styled.input<StyledButtonProps>`
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 32px;
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

  &:hover,
  :focus {
    color: #fff;
    background: #40a9ff;
    border-color: #40a9ff;
  }

  &:active {
    color: #fff;
    background: #096dd9;
    border-color: #096dd9;
  }

  ${(props) =>
    props.disabled &&
    css`
      color: rgba(0, 0, 0, 0.25);
      background: #f5f5f5;
      border-color: #d9d9d9;
      text-shadow: none;
      box-shadow: none;
      cursor: not-allowed;

      :hover,
      :focus,
      :active {
        color: rgba(0, 0, 0, 0.25);
        background: #f5f5f5;
        border-color: #d9d9d9;
        text-shadow: none;
        box-shadow: none;
      }
    `}

  ${(props) =>
    props.danger &&
    css`
      color: #fff;
      background: #ff4d4f;
      border-color: #ff4d4f;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

      :hover,
      :focus,
      :active {
        color: #fff;
        background: #ff7875;
        border-color: #ff7875;
      }
    `}

		${(props) =>
    props.secondary &&
    css`
      color: #fff;
      background: #062a44;
      border-color: #062a44;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

      :hover,
      :focus,
      :active {
        color: #fff;
        background: #06556a;
        border-color: #06556a;
      }
    `}
`;
