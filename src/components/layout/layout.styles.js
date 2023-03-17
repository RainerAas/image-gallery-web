import styled from 'styled-components';

export const Main = styled.main`
  ${({ appBarHeight }) => `
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    position: relative;
    z-index: 1;
    min-height: calc(100vh - ${appBarHeight}px * 2);
  `}
`;
