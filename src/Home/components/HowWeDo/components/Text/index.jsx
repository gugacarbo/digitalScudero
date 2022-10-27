import styled from "styled-components";

function Text() {
  return (
    <TextContainer>
      <TextP>
        Nosso processo de criação e execução é divido em quatro etapas que nos
        auxiliam a tomar as melhores decisões para o seu marketing digital.
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
  font-weight: 300;
  text-align: center;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.color.white};
  width: 80%;
  span {
    color: ${({ theme }) => theme.color.main.color};
  }
`;
export default Text;
