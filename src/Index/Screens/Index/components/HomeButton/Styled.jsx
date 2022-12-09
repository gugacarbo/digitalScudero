import styled from "styled-components";
import { BaseButton } from "../../../../Styled";
export const Button = styled(BaseButton)`
  grid-area: HomeButton;
  border-color: ${({ theme }) => theme.color.main.color};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color.main.color};

  margin-left: 0;
  margin-right: auto;

  &:hover {
    background-color: ${({ theme }) => theme.color.main.color};
    color: ${({ theme }) => theme.color.white};
    border-color: ${({ theme }) => theme.color.white};
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    font-weight: 500;
  }
  @media (max-width: 520px) {
    margin: 0 auto;
  }
  @media (max-width: 300px) {
  }
`;
