import styled from "styled-components";
import { BaseButton } from "../../../../Styled";
import { Link } from "react-router-dom";
function Button() {
  return (
    <Btn as={Link} to={"/parceiros"}>
      Conheça nossos Parceiros
    </Btn>
  );
}

const Btn = styled(BaseButton)``;

export default Button;
