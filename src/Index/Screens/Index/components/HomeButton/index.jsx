import { Link } from "react-router-dom";
import { Button } from "./Styled";
function HomeButton() {
  return <Button as={Link} to={"/cases"}>Conheça nossos cases</Button>;
}

export default HomeButton;
