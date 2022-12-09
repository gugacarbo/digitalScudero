import styled from "styled-components";
import { BaseText } from "../../../HomeStyled";

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

const TextP = styled(BaseText)`
`;
export default Text;
