import styled from "styled-components";
import { BaseButton } from "../../../../Styled";
function BlogButton({ scrolled }) {
  return <Button scrolled={scrolled ?1 : 0}>VISITE NOSSO BLOG</Button>;
}

export default BlogButton;
const Button = styled(BaseButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};

  padding: 0.3rem 0;
  width: 95%;
  font-size: 0.85rem;
  margin: 0 auto;
  font-weight: 300;

  margin-top: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.main.color};
  color: ${({ theme }) => theme.color.white};

  }
  ${({ scrolled }) =>
    scrolled &&
    `
    transform: translateY(-400%);
    `}
`;
