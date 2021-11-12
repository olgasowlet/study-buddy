import styled, { css } from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px 0;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0;

  ${({ name }) =>
    name &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: bold;
      display: flex;
      align-items: center;
    `}

  ${({ attendance }) =>
    attendance &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

export const Container = styled.div`
  margin: 20px;
`;
