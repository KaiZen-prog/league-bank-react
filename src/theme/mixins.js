import { css } from 'styled-components';

export const button = (color, background, backgroundHovered) => css`
  display: inline-block;

  font-weight: 500;
  text-align: center;

  color: ${color};
  background: ${background};

  border: none;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background: ${backgroundHovered};
  }
`;

export const visuallyHidden = () => css`
    position: absolute;
    clip: rect(0, 0, 0, 0);
`;

export const blockCentered = (width) => css`
  width: ${width};
  margin: auto;
`;

export const backgroundImage = (logo, width, height) => css`
  content: "";
  position: absolute;
  display: block;

  width: ${width};
  height: ${height};

  background-image: url(${logo});
  background-repeat: no-repeat;
`;
