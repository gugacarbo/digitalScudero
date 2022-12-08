import styled from "styled-components";

export const Icon = styled.a`
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.main};
  padding: 0.2rem;
  width: 2rem;
  height: 2rem;
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
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
