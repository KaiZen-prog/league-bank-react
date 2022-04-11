import {css} from 'styled-components';

export const button = (color, background) => css`
    display: inline-block;
    
    font-weight: 500;
    text-align: center;

    color: ${color};
    background: ${background};

    border: none;
    border-radius: 4px;

    cursor: pointer;
`;
