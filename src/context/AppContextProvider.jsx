import StyleProvider from "./StyleContext/StyleProvider";
import MenuProvider from "./MenuContext/MenuProvider";

function AppContextProvider({ children }) {
  return (
    <StyleProvider>
      <MenuProvider>{children}</MenuProvider>
    </StyleProvider>
  );
}

export default AppContextProvider;
