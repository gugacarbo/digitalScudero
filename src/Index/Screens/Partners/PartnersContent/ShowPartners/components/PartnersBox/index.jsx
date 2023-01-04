import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPartners } from "../../../../../../util/api";

function PartnersBox() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getPartners()
      .then(({ status, data }) => {
        if (status == 200) {
          setPartners(data);
        } else {
          alert("ERRO");
        }
      })
      .catch(() => {
        alert("ERRO");
      });
  }, []);
  return (
    <PartnersBoxContent>
      {partners.length > 0 &&
        partners.map((part, index, array) => (
          <Partner
            key={index}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, delay: 0.15 },
            }}
            exit={{ opacity: 0, scale: 0.2, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <PartnerLogo to={`/parceiro/${part.to}`}>
              <img src={part.logo} alt={part.title} />
            </PartnerLogo>
          </Partner>
        ))}
    </PartnersBoxContent>
  );
}

const PartnersBoxContent = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  position: relative;
  grid-gap: 1rem;

  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 900px) {
  }

  @media (max-width: 768px) {
  }
  @media (max-width: 520px) {
    padding: 4rem 0;
    width: 90%;
  }
  @media (max-width: 414px) {
  }
`;
const Partner = styled(motion.div)`
  width: 30%;
  aspect-ratio: 1;
  padding: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    padding: 2rem;
    width: 45%;
  }
  @media (max-width: 520px) {
    width: 48%;
  }
  @media (max-width: 360px) {
    width: 100%;
    padding: 3rem;

    aspect-ratio: 2;
  }
`;
const PartnerLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(100%);
  transition: ${({ theme }) => theme.transition.main};

  img {
    width: 100%;
    fill: ${({ theme }) => theme.color.main.color};
  }
  &:hover {
    filter: grayscale(0%);
    cursor: pointer;
  }
`;

export default PartnersBox;
