function HomeText(props) {
  const messages = [
    "A Garantia da sua marca no mundo digital;",
    "Aumento de vendas e lucro;",
    "Aumento de visibilidade e alcance;",
    "Aumento de credibilidade e confiança;",
  ];

  return (
    <HomeTextContainer>
      <TypingText
        text={messages}
        cursorRenderer={(cursor) => <Cursor>{cursor}</Cursor>}
        speed={70}
        eraseSpeed={50}
        eraseDelay={6000}
        typingDelay={800}
        displayTextRenderer={(text, i) => {
          return (
            <>
              {text.split("").map((char, i) => {
                const key = `${i}2${i}3${i}`;
                if (char === ";") {
                  return <Semicolon key={i}>;</Semicolon>;
                } else {
                  return char;
                }
              })}
            </>
          );
        }}
      />
    </HomeTextContainer>
  );
}

export default HomeText;

import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect-multiline";

export const HomeTextContainer = styled.div`
  grid-area: HomeText;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const TypingText = styled(ReactTypingEffect)`
  font-size: 4rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.color.main.color};
  margin-right: auto;
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
