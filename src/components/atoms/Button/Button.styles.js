import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  border-radius: 97px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 15px 0;
  align-self: flex-end;
  padding: 10px 30px;
`;
