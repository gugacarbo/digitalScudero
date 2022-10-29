import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LeftArrowsSvg } from "../../../../../../assets/LeftArrows.svg";

function BackButton() {
  return (
    <BackLink to={-1}>
      <LeftArrowsSvg />
      <span>Voltar</span>
    </BackLink>
  );
}
const BackLink = styled(Link)`
  margin: 0 auto;
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

export default BackButton;
