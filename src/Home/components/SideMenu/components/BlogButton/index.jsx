import styled from "styled-components";

function BlogButton({ scrolled }) {
  return <Button scrolled={scrolled}>VISITE NOSSO BLOG</Button>;
}

export default BlogButton;
const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  border: none;
  margin: 0 2rem;
  border-radius: 120px;
  padding: 0.3rem 0;
  width: 95%;
  font-size: 0.85rem;
  margin: 0 auto;
  font-weight: 600;
  letter-spacing: 0.051rem;

  transition: transform ${({ theme }) => theme.transition.x4},
    background-color ${({ theme }) => theme.transition.slow};
  border: 1px solid ${({ theme }) => theme.color.main.color};
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.main.color};
  }
  ${({ scrolled }) =>
    scrolled &&
    `
    transform: translateY(-400%);
    `}
`;
