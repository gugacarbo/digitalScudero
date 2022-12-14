import { useContext } from "react";
import LoadingContext from "../context/LoadingContext";
import { SplashContainer, StyledLogo } from "./Styled";

const LoadingCover = () => {
  const { loading } = useContext(LoadingContext);
  loading
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "auto");
  return (
    <SplashContainer loading={loading}>
      <StyledLogo />
    </SplashContainer>
  );
};

export default LoadingCover;
