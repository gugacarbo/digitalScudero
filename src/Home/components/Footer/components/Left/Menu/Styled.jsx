import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: auto;
  gap: 1rem;
`;

export const MenuItem = styled.li`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.main};
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.color.main.color};
  }
  &.Selected {
    color: ${({ theme }) => theme.color.main.color};
    border-bottom: 2px solid ${({ theme }) => theme.color.main.color};
  }
`;
