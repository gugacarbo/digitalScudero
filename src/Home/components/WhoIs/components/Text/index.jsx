import styled from "styled-components";

function Text() {
  return (
    <TextContainer>
      <TextP>
        A Digital Scudero surgiu em 2021 com a proposta de trazer métodos
        eficazes para posicionar sua marca na internet. Através do estudo
        personalizado e análise de resultados buscamos a estratégia que melhor
        cabe de acordo com o seu modelo de negócio.
      </TextP>
      <TextP>
        Nosso processo consiste em identificar o perfil e o posicionamento ideal
        para seu negócio, planejar e executar estratégias de marketing até a
        análise de resultados.
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
  margin: 3rem 0;
  gap: 1rem;
`;

const TextP = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  width: 80%;
`;
export default Text;
