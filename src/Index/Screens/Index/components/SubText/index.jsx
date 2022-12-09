import styled from "styled-components";

function SubText() {
  return (
    <SText>
      Descubra como podemos inserir seu negócio na internet e alavancar suas
      vendas.
    </SText>
  );
}

export default SubText;

const SText = styled.p`
  grid-area: SubText;
  width: 70%;
  font-size: 1.3rem;
  font-weight: 200;
  color: ${({ theme }) => theme.color.white};
  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
    font-size: 1.6rem;
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;
