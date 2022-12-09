import { Link } from "react-router-dom";
import styled from "styled-components";

function ContactButton({ children, onlick, ...props }) {
  return (
    <Button onClick={onlick} {...props}>
      {children}
    </Button>
  );
}

const Button = styled(Link)`
  width: 45%;
  aspect-ratio: 2;
  text-decoration: none;
  text-align: center;
  background-color: ${({ theme, black }) =>
    black ? theme.color.black : theme.color.main.color};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 2rem;
  font-size: 1.7rem;
  padding: 0 3%;
  font-weight: thin;
  letter-spacing: 0.05rem;
  transition: ${({ theme }) => theme.transition.slow};
  border: 1px solid
    ${({ theme, black }) =>
      black ? theme.color.black : theme.color.main.color};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.color.main.color};
    border-color: ${({ theme }) => theme.color.main.color};
  }

  @media (max-width: 520px) {
    width: initial;
    aspect-ratio: initial;
    width: 100%;
    height: 47%;
    border-radius: 1rem;
    font-size: 1.5rem;
  }
`;
export default ContactButton;
