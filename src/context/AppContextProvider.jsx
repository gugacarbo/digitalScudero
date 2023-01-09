import StyleProvider from "./StyleContext/StyleProvider";
import MenuProvider from "./MenuContext/MenuProvider";
import LoadingProvider from "./LoadingContext/LoadingProvider";
import DataProvider from "./DataContext/DataProvider";

function AppContextProvider({ children }) {
  return (
    <StyleProvider>
      <LoadingProvider>
        <DataProvider>
          <MenuProvider>{children}</MenuProvider>
        </DataProvider>
      </LoadingProvider>
    </StyleProvider>
  );
}

export default AppContextProvider;
