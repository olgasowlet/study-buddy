import styled, { css } from "styled-components";

export const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;

  ${({ name }) =>
    name &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: bold;
    `}

  ${({ attendance }) =>
    attendance &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;
