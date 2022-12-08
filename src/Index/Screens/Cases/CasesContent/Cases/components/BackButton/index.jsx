import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LeftArrowsSvg } from "../../../../../../../assets/LeftArrows.svg";
import { ReactComponent as DotsSvg } from "../../../../../../../assets/services/ServiceDots.svg";

function BackButton() {
  return (
    <>
      <BackLink to={"/"}>
        <LeftArrowsSvg />
        <span>Home</span>
      </BackLink>

      <Dots />
    </>
  );
}
const BackLink = styled(Link)`
  margin: 0 auto;
  margin-top: auto;
  color: ${({ theme }) => theme.color.main.color};
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover svg {
    transform: translateX(-5px);
  }
  svg {
    transition: ${({ theme }) => theme.transition.x2};
    height: 1.7rem;
    fill: ${({ theme }) => theme.color.main.color};
  }
`;

const Dots = styled(DotsSvg)`
  width: 25%;
  opacity: 0.6;
  margin:  auto;
  margin-top: 1rem;
`;

export default BackButton;
