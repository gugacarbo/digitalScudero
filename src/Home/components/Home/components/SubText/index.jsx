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
  width: 60%;
  font-size: 1.1rem;
  font-weight: 200;
  color: ${({ theme }) => theme.color.white};
`;
