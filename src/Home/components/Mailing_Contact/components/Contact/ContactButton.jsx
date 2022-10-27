import styled from "styled-components";

function ContactButton({ children, onlick, ...props }) {
  return (
    <Button onClick={onlick} {...props}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  width: 90%;
  aspect-ratio: 2;

  background-color: ${({ theme, black }) =>
    black ? theme.color.black : theme.color.main.color};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 20px;
  font-size: 1.5rem;
  padding: 15%;
  font-weight: thin;
  letter-spacing: 0.05rem;
  transition: transform ${({ theme }) => theme.transition.x4},
    background-color ${({ theme }) => theme.transition.slow},
    color ${({ theme }) => theme.transition.slow};
  border: 1px solid
    ${({ theme, black }) =>
      black ? theme.color.black : theme.color.main.color};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.main.color};
  }
`;
export default ContactButton;
