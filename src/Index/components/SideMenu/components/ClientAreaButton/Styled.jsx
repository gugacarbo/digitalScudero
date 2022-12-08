import styled from "styled-components";
import { ReactComponent as LoginSvg } from "../../../../../assets/LoginIcon.svg";

export const ClientButton = styled.button`
  border: none;
  border: 1px solid ${({ theme }) => theme.color.main.color};
  font-weight: bold;
  margin-right: auto;
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  padding: 0.3rem 2rem;
  border-radius: 30px;
  transition: ${({ theme }) => theme.transition.main};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.main.color};
  }
`;

export const LoginIcon = styled(LoginSvg)`
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  fill: ${({ theme }) => theme.color.white};
`;
