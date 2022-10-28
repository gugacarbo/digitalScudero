import styled from "styled-components";
import { Link } from "react-router-dom";
function MeetingButton({ scrolled }) {
  return (
    <Button as={Link} to="contato/reuniao" scrolled={scrolled ? 1 : 0}>
      Agende uma reunião
    </Button>
  );
}

export default MeetingButton;
const Button = styled.button`
  background-color: ${({ theme }) => theme.color.white}44;
  color: ${({ theme }) => theme.color.white};
  border: none;
  margin: 0 2rem;
  border-radius: 120px;
  padding: 0.2rem 4rem;
  font-size: 0.9rem;
  margin: auto 2rem;
  text-decoration: none;
  transition: transform ${({ theme }) => theme.transition.x4},
    background-color ${({ theme }) => theme.transition.slow};
  border: 1px solid ${({ theme }) => theme.color.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.main.color};
  }
  ${({ scrolled }) =>
    scrolled &&
    `
    transform: translateY(-400%);
    `}
`;
