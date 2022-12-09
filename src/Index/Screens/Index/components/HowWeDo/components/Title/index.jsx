import styled from "styled-components";
import { BaseTitle } from "../../../HomeStyled";

function Title() {
  return (
    <TitleContainer>
      <TitleH1>
        Como nós <b>Fazemos</b>?
      </TitleH1>
    </TitleContainer>
  );
}
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleH1 = styled(BaseTitle)`
  color: ${({ theme }) => theme.color.white};
`;

export default Title;
