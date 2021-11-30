import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.divider};
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 110px;
  font-size: ${({ theme }) => theme.fontSize.m};
  align-items: flex-end;
  padding: 25px;
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;
  text-align: end;
  display: flex;
  align-items: center;

  &.active {
    &::after {
      position: absolute;
      right: 0;
      content: "";
      display: block;
      width: 22px;
      border: 2px solid ${({ theme }) => theme.colors.divider};
    }
  }
`;
