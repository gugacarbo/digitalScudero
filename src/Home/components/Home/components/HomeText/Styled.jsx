import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect-multiline";

export const HomeTextContainer = styled.div`
  grid-area: HomeText;
`;

export const TypingText = styled(ReactTypingEffect)`
  font-size: 4rem;
  font-weight: bolder;
  margin-bottom: auto;
  color: ${({ theme }) => theme.color.main.color};
`;
export const Semicolon = styled.b`
  color: ${({ theme }) => theme.color.white};
`;
export const Cursor = styled.b`
  color: ${({ theme }) => theme.color.white};
`;
