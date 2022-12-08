import styled from "styled-components";

function Text() {
  return (
    <TextContainer>
      <TextP>
        Para alavancar seu negócio, aplicamos estratégias inteligentes de
        Publicidade, Marketing e Negócios.
      </TextP>
    </TextContainer>
  );
}

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  gap: 1rem;
`;

const TextP = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.color.black};
  width: 80%;
`;
export default Text;
