import styled from "styled-components";

export const Icon = styled.a`
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.main};
  padding: 0.2rem;
  width: 2.5rem;
  height: 2.5rem;
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
    svg {
      fill: ${({ color, theme }) => color || theme.color.main.color};
    }
  }
  @media screen and (max-width: 520px) {
    width: 2.9rem;
    height: 2.9rem;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
