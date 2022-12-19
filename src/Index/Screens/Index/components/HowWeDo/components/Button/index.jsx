import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseButton } from "../../../../../../Styled";
function Button() {
  return (
    <Btn as={Link} to="/metodos">
      Conheça nossas ferramentas de gestão
    </Btn>
  );
}

const Btn = styled(BaseButton)`
  margin-top: 3rem;
`;

export default Button;
