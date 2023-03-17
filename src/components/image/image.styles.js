import styled from 'styled-components';
import { Blurhash } from 'react-blurhash';

export const Image = styled.img`
  ${({ hasLoaded }) => `
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    opacity: ${hasLoaded ? 1 : 0};
    transition: opacity 250ms ease-in-out;
  `}
`;

export const BlurImage = styled(Blurhash)`
  width: 100%!important;
  height: calc(100% - 4px)!important;
  position: absolute!important;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
  opacity: 1;
`;
