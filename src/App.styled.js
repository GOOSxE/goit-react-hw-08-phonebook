import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 15px 25px;
  margin-right: 20px;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid #000000;
  background-color: #777777;
  &.active {
    background-color: #333333;
  }
`;
