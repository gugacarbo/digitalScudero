import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        font-size: 16px;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color.text};
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 20px;
            background-color: ${({ theme }) => theme.color.main.color};
           
        }
        &::-webkit-scrollbar-thumb:hover {
            background-color: ${({ theme }) => theme.color.main.dark};
        }
        &::-webkit-scrollbar-thumb:active {
            background-color: ${({ theme }) => theme.color.main.darker};
        }
    }
`;
export default GlobalStyle;
