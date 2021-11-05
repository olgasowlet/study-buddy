import styled, { css } from "styled-components";

export const GradeContainer = styled.div`
  border-radius: 50px;
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;

  ${({ avarage }) =>
    avarage &&
    css`
      background-color: ${({ theme }) =>
        avarage < 2
          ? theme.colors.error
          : avarage < 4
          ? theme.colors.warning
          : theme.colors.success};
    `}
`;
