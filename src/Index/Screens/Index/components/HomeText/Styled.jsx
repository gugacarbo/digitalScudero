import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect-multiline";

export const HomeTextContainer = styled.div`
  grid-area: HomeText;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const TypingText = styled(ReactTypingEffect)`
  font-size: 4rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.color.main.color};
  @media (max-width: 520px) {
    font-size: 4.5rem;
  }
  @media (max-width: 414px) {
    font-size: 4.2rem;
  }
`;
export const Semicolon = styled.b`
  color: ${({ theme }) => theme.color.white};
`;
export const Cursor = styled.b`
  color: ${({ theme }) => theme.color.white};
`;
