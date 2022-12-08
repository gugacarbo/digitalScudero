import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseButton } from "../../../../../../Styled";
function Button() {
  return (
    <Btn as={Link} to="/servicos">
      Conheça todos os nossos serviços
    </Btn>
  );
}

const Btn = styled(BaseButton)`
  margin-top: 5rem;
`;

export default Button;
