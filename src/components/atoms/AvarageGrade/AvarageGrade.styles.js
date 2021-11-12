import styled from "styled-components";

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
  background-color: ${({theme, avarage}) => {
    if (avarage < 2 ) return theme.colors.error;
    if (avarage < 4 ) return theme.colors.warning;
    if (avarage >= 4 ) return theme.colors.success;
    return theme.colors.grey
  }};
`;
