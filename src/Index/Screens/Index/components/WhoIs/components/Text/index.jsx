import styled from "styled-components";
import { BaseText } from "../../../HomeStyled";

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
  margin: 1rem 0;
  gap: 1rem;
`;

const TextP = styled(BaseText)`
  color: ${({ theme }) => theme.color.white};
`;
export default Text;
