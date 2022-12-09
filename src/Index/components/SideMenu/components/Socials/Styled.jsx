import styled from "styled-components";

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-top: 3rem;
`;

export const IconsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

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

export const SocialsTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 200;
  letter-spacing: 0.051rem;
  color: ${({ theme }) => theme.color.white};
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
