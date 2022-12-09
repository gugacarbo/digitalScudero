import styled from "styled-components";

export const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 1rem;
  width: 100%;
  margin-top: 10rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

import { Link } from "react-scroll";
export const MenuItem = styled(Link)`
  font-size: 1.1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.main};
  border-bottom: 2px solid transparent;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.main.color};
  }
  &.Selected {
    color: ${({ theme }) => theme.color.main.color};
    border-bottom: 2px solid ${({ theme }) => theme.color.main.color};
  }
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
