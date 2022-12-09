import styled from "styled-components";

import { BaseTitle } from "../../../HomeStyled";

function Title() {
  return (
    <TitleH1>
      Quem é a{" "}
      <b>
        Digital <i>Scudero</i>
      </b>
      ?
    </TitleH1>
  );
}
const TitleH1 = styled(BaseTitle)`
  color: ${({ theme }) => theme.color.white};
  b {
    font-weight: 600;
    font-size: 3.8rem;
  }
`;

export default Title;
