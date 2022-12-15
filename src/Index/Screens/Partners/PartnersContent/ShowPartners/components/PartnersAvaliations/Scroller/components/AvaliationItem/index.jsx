import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as TextMarkersSvg } from "../../../../../../../../../../assets/TextMarkers.svg";

function AvaliationItem({ avaliation, ...props }) {
  return (
    <ItemContent {...props}>
      <AvaliationImage>
        <img src={avaliation.partnerImage} />
      </AvaliationImage>
      <AvaliationName>
        {avaliation.partnerName}
        <AvaliationOffice>{avaliation.partnerOffice}</AvaliationOffice>
      </AvaliationName>
      <AvaliationText>
        <TextMarkers />
        {avaliation.partnerAvaliation}
        <TextMarkers right={1} />
      </AvaliationText>
      <AvaliationDate>{avaliation.date}</AvaliationDate>
    </ItemContent>
  );
}
export default AvaliationItem;

const ItemContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.main.color};
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  ${({ next }) =>
    next &&
    `
  transform: translateX(100%);
  z-index: 5;
  `}
  ${({ prev }) =>
    prev &&
    `
    z-index: 6;
  transform: translateX(-100%);
  `}
`;

const AvaliationImage = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid ${({ theme }) => theme.color.main.color};
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  aspect-ratio: 1;

  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 520px) {
    width: 4rem;
    height: 4rem;
  }
`;

const AvaliationName = styled.span`
  color: ${({ theme }) => theme.color.main.light};
  font-weight: 500;
  font-size: 1.4rem;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  @media (max-width: 520px) {
    font-size: 1.6rem;
  }
`;
const AvaliationOffice = styled.span`
  color: ${({ theme }) => theme.color.mediumGray};
  font-weight: 400;
  font-size: 0.55em;
  position: absolute;
  bottom: -0.8rem;
  @media (max-width: 520px) {
  }
`;

const AvaliationText = styled.p`
  color: ${({ theme }) => theme.color.mediumGray};
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  width: 60%;
  position: relative;

  @media (max-width: 768px) {
  }
  @media (max-width: 520px) {
    width: 80%;
  }
  @media (max-width: 414px) {
  }
`;

const TextMarkers = styled(TextMarkersSvg)`
  fill: ${({ theme }) => theme.color.mediumGray};
  width: 1.4rem;
  position: absolute;
  top: -0.2rem;
  left: -1.3rem;
  ${({ theme, right }) =>
    right &&
    `
    transform: scaleX(-1);
    left: initial;
    right: -1.3rem;
    `}
`;

const AvaliationDate = styled.p`
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  position: relative;
`;
