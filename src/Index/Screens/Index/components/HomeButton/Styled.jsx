import styled from "styled-components";

export const Button = styled.button`
  grid-area: HomeButton;
  border: none;
  border: 1px solid ${({ theme }) => theme.color.main.color};
  font-weight: bold;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color.main.color};
  padding: 0.3rem 5rem;
  font-size: 1.1rem;
  border-radius: 30px;
  font-weight: 300;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.main};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: auto;
  &:hover {
    background-color: ${({ theme }) => theme.color.main.color};
    color: ${({ theme }) => theme.color.white};
    border-color: ${({ theme }) => theme.color.white};
  }
`;
