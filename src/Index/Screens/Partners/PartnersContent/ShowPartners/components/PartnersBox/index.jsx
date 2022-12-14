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
          <Partner key={index}>
            <PartnerLogo to={`/parceiro/${part.to}`}>
              <img src={part.logo} alt="" />
            </PartnerLogo>
          </Partner>
        ))}
    </PartnersBoxContent>
  );
}

const PartnersBoxContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  position: relative;
  grid-gap: 1rem;

  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 900px) {
  }

  @media (max-width: 768px) {
  }
  @media (max-width: 520px) {
    padding: 4rem 0;

    width: 85%;
  }
  @media (max-width: 414px) {
    width: 95%;
  }
`;
const Partner = styled.div`
  width: 100%;
  aspect-ratio: 1;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #444;
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
