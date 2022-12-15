import styled from "styled-components";
import { BaseText } from "../../../HomeStyled";

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
  margin-bottom: 1;
  margin-top: 2rem;
  gap: 1rem;
`;

const TextP = styled(BaseText)`
  color: ${({ theme }) => theme.color.white};
`;
export default Text;
