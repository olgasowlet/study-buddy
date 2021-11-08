import styled, { css } from "styled-components";

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
