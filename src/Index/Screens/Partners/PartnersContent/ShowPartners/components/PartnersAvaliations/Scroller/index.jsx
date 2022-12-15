import { motion } from "framer-motion";
import styled from "styled-components";
import { getAvaliations } from "../../../../../../../util/api";
import { useState } from "react";
import { useEffect } from "react";
import ScrollBox from "./components/ScrollBox";

function Scroller() {
  const [avaliations, setAvaliations] = useState([]);
  const [showAvaliation, setShowAvaliation] = useState(1);

  useEffect(() => {
    getAvaliations()
      .then(({ status, data }) => {
        if (status == 200) {
          setAvaliations(data);
        } else {
          alert("ERRO");
        }
      })
      .catch(() => {
        alert("ERRO");
      });
  }, []);

  const avaliationsCount =
    typeof avaliations == "object" ? avaliations.length : 0;

  return (
    <ScrollerContainer>
      {avaliationsCount && <ScrollBox avaliations={avaliations} />}
    </ScrollerContainer>
  );
}

export default Scroller;

const ScrollerContainer = styled.div`
  width: 100%;

  @media (max-width: 900px) {
    aspect-ratio: 2.8;
  }

  @media (max-width: 768px) {
    aspect-ratio: 2.2;
  }
  @media (max-width: 520px) {
    aspect-ratio: 2;
  }
  @media (max-width: 414px) {
    aspect-ratio: 1.5;
  }
`;
