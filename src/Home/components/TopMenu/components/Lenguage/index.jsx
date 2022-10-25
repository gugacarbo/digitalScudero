import { useContext } from "react";
import { ReactComponent as BrasilSvg } from "../../../../../assets/flags/brasil.svg";
import { ReactComponent as UsaSvg } from "../../../../../assets/flags/usa.svg";
import { ReactComponent as SpainSvg } from "../../../../../assets/flags/spain.svg";

import { LenaguageContainer, Icon } from "./Styled";
function Lenguage() {
  return (
    <LenaguageContainer>
      <Icon as={BrasilSvg} selected />
      <Icon as={SpainSvg} />
      <Icon as={UsaSvg} />
    </LenaguageContainer>
  );
}
export default Lenguage;
