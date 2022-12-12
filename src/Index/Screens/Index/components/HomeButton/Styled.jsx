import styled from "styled-components";
import { BaseButton } from "../../../../Styled";

export const Button = styled(BaseButton)`
  grid-area: HomeButton;
  border-color: ${({ theme }) => theme.color.main.color};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color.main.color};

  margin-left: 0;
  margin-right: auto;
  width: 60%;
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
    width: 80%;
  }
  @media (max-width: 414px) {
    width: 90%;
  }
  @media (max-width: 300px) {
  }
`;
