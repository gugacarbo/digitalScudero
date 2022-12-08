import styled from "styled-components";
import { BaseButton } from "../../../../Styled";
function BlogButton({ scrolled }) {
  return <Button scrolled={scrolled}>VISITE NOSSO BLOG</Button>;
}

export default BlogButton;
const Button = styled(BaseButton)`
  grid-column: 3/4;
  grid-row: 1/2;
  background-color: transparent;
  color: ${({ theme }) => theme.color.main.color};

  padding: 0.3rem 0;
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: auto;
  margin-bottom: 5%;
  width: 70%;
  height: 1.8rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.main.color};
    color: ${({ theme }) => theme.color.white};
  }
`;
