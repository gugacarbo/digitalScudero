import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

function IndexItem({ img, logo, title, to }) {
  return (
    <BoxItem
      img={img}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: 0.2 },
      }}
      exit={{ opacity: 0, scale: 0.2, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      <BoxItemContent to={"/case/"+to}>
        <CaseTitle>{title}</CaseTitle>
        <BrandLogo as={logo} />
      </BoxItemContent>
    </BoxItem>
  );
}

export default IndexItem;

const BrandLogo = styled.svg`
  height: 2rem;
  margin: 2rem 0;
  fill: ${({ theme }) => theme.color.white};
  transition: ${({ theme }) => theme.transition.x3};
`;

const CaseTitle = styled.h1`
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

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    width: 80%;
    max-width: 50%;
    height: 1.8px;
    transition: ${({ theme }) => theme.transition.x3};
  }
`;

const BoxItem = styled(motion.div)`
  width: 100%;
  aspect-ratio: 1;

  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.background + "4a"} 0%,
      ${({ theme }) => theme.background + "be"} 90%
    );
    transition: ${({ theme }) => theme.transition.x3};

    opacity: 1;
    backdrop-filter: blur(0.1rem);
  }
  &:hover {
    &::before {
      backdrop-filter: blur(0.05rem);
      opacity: 0.9;
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
  &:hover {
    backdrop-filter: blur(0);
  }
`;