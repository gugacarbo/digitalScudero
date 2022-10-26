import styled from "styled-components";
import ServiceIcon from "./ServiceIcon";

import { ReactComponent as SearchIconSvg } from "../../../../../assets/services/marketingSearchIcon.svg";

function Icons() {
  return (
    <IconsContainer>
      <ServiceIcon icon={<SearchIconSvg />} />
    </IconsContainer>
  );
}

const IconsContainer = styled.div`
  display: flex;
`;

export default Icons;
