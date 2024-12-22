import { Button } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

export const StyledTimerButton = styled(Button)`
    color: white !important;
    background-color: transparent !important;
`;

export const TimerConteiner = styled.div`
    background-color: #c15c5c;
    height: 20rem;
    
`;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
        background-color: #ba4949;
        color: #333;
        display: flex;
        justify-content: center; 
        align-items: center; 
        min-height: 100vh;
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
        color: #ffffff;
    }

    .ant-btn {
        background-color: #ffffff; 
        color: #ba4949;
        border: none;
        margin: 0rem 0.2rem;
        &:hover {
            background-color: #c7442f;
        }
        &:focus {
            box-shadow: 0 0 0 2px rgba(229, 83, 60, 0.5);
        }
        &:active {
            background-color: #a83628; 
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

