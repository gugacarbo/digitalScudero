import styled from "styled-components";

function MeetingButton({ scrolled }) {
  return <Button scrolled={scrolled}>Agende uma reunião</Button>;
}

export default MeetingButton;
const Button = styled.button`
  background-color: #ffffff64;
  color: #fff;
  border: none;
  margin: 0 2rem;
  border-radius: 120px;
  padding: 0.2rem 4rem;
  font-size: 0.9rem;
  margin: auto 2rem;
  transition: ${({ theme }) => theme.transition.x4};
  border: 1px solid #fff;
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
