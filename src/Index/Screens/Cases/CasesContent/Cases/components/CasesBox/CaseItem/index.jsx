import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CaseItem({ img, logo, title, to }) {
  const bg = img.startsWith("https")
    ? img.slice(6)
    : img.startsWith("http")
    ? img.slice(5)
    : img;

  return (
    <BoxItem
      initial={{ opacity: 0, y: 200 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, delay: 0.15 },
      }}
      exit={{ opacity: 0, scale: 0.2, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      <BackgroundImage src={bg} />
      <BoxItemContent to={"/case/" + to}>
        <CaseTitle>{title}</CaseTitle>
        <BrandLogo>
          <img src={logo} alt={title} />
        </BrandLogo>
      </BoxItemContent>
    </BoxItem>
  );
}

export default CaseItem;

const BrandLogo = styled.div`
  height: 20%;
  max-width: 70%;
  margin-bottom: 2rem;
  fill: ${({ theme }) => theme.color.white};
  transition: ${({ theme }) => theme.transition.x3};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 90%;
    width: 90%;
  }
  @media (max-width: 360px) {
    height: 30%;
  }
`;

const CaseTitle = styled.span`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.08rem;
  color: ${({ theme }) => theme.color.main.color};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  transition: ${({ theme }) => theme.transition.x3};
  margin-bottom: 2rem;
  z-index: 2;
  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    width: 80%;
    max-width: 50%;
    height: 1.8px;
    transition: ${({ theme }) => theme.transition.x3};
    background-color: ${({ theme }) => theme.color.main.color};
  }
`;

const BoxItem = styled(motion.div)`
  width: 25%;
  aspect-ratio: 1;

  background-color: ${({ theme }) => theme.background};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.background + "6a"},
      ${({ theme }) => theme.background + "ee"}
    );
    transition: ${({ theme }) => theme.transition.x3};

    opacity: 1;
    backdrop-filter: blur(0.05rem);
  }
  &:hover {
    &::after {
      backdrop-filter: blur(0rem);
      opacity: 0.8;
    }
    & ${CaseTitle} {
      color: ${({ theme }) => theme.color.white};
      transform: scale(1.1);
      &::after {
        background-color: ${({ theme }) => theme.color.white};
        transform: scaleX(1.2) scaleY(0.8);
      }
    }
    & ${BrandLogo} {
      transform: scale(1.21) translateY(0.3rem);
    }
  }
  @media (max-width: 900px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 520px) {
    width: 45%;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const BoxItemContent = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  //backdrop-filter: blur(1px);
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.x2};
  overflow: hidden;
  &:hover {
    backdrop-filter: blur(0);
  }
`;
