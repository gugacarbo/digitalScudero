import { ReactComponent as BrasilSvg } from "../../../../../../assets/flags/brasil.svg";
import { ReactComponent as UsaSvg } from "../../../../../../assets/flags/usa.svg";
import { ReactComponent as SpainSvg } from "../../../../../../assets/flags/spain.svg";

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

import styled from "styled-components";

export const LenaguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-right: auto;

  @media screen and (max-width: 520px) {
    gap: 1.2rem;
  }
  visibility: none;
  pointer-events: none;
  opacity: 0;
`;

export const Icon = styled.div`
  height: 1.2rem;
  cursor: pointer;
  filter: grayscale(80%);
  transition: ${({ theme }) => theme.transition.main};
  ${({ selected }) =>
    selected &&
    `
    filter: grayscale(0%);
  `}
  &:hover {
    filter: grayscale(0%);
  }
  @media screen and (max-width: 520px) {
    height: 1.6rem;
  }
`;
