import StyleContext from "./StyleContext";
import MenuContext from "./MenuContext";

function AppContext({ children }) {
  return (
    <StyleContext>
      <MenuContext>{children}</MenuContext>
    </StyleContext>
  );
}

export default AppContext;
