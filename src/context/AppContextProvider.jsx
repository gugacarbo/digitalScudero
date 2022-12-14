import StyleProvider from "./StyleContext/StyleProvider";
import MenuProvider from "./MenuContext/MenuProvider";
import LoadingProvider from "./LoadingContext/LoadingProvider";

function AppContextProvider({ children }) {
  return (
    <StyleProvider>
      <LoadingProvider>
        <MenuProvider>{children}</MenuProvider>
      </LoadingProvider>
    </StyleProvider>
  );
}

export default AppContextProvider;
