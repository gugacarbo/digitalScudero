function SocialIcon({ icon, ...props }) {
  return (
    <Icon target={"_blank"} {...props}>
      {icon}
    </Icon>
  );
}
import styled from "styled-components";

export const Icon = styled.a`
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.main};
  padding: 0.2rem;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  border: 1px solid ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${({ theme }) => theme.color.white};
    transition: ${({ theme }) => theme.transition.main};

    width: 80%;
    height: 80%;
  }
  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.color.white};
    svg {
      fill: ${({ color, theme }) => color || theme.color.main.color};
    }
    border-color: ${({ color, theme }) => color || theme.color.main.color};
  }
  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.4rem;
  }
`;

export default SocialIcon;
