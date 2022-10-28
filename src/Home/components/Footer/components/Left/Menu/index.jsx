import { List, MenuItem } from "./Styled";

function Menu() {
  return <List>
    <MenuItem className="Selected">HOME</MenuItem>
    <MenuItem>QUEM SOMOS</MenuItem>
    <MenuItem>O QUE FAZEMOS</MenuItem>
    <MenuItem>COMO FAZEMOS</MenuItem>
    <MenuItem>NOSSOS CASES</MenuItem>
    <MenuItem>CONTATO</MenuItem>
  </List>;
}

export default Menu;
