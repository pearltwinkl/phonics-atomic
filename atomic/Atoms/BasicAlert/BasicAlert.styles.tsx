import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const FadeInDiv = styled.div`
    animation: ${css`${fadeIn} 0.5s ease-in-out`};
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
`;

export const StyledAlert = styled.div`
    z-index: 100;
    position: fixed;
    bottom: 25px;
    right: 25px;
    background-color: #E94E14;
    color: #fff;
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const IconWrapper = styled.span`
    display: flex;
    align-items: center;
`;