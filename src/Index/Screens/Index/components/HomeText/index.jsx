import { HomeTextContainer, TypingText, Semicolon, Cursor } from "./Styled";

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
        eraseDelay={10000}
        typingDelay={800}
        displayTextRenderer={(text, i) => {
          return (
            <>
              {text.split("").map((char, i) => {
                const key = `${i}`;
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
