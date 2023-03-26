import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const Button = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'visible' && prop !== 'isConfirmation',
})`
  ${({ theme, isConfirmation, visible }) => `
    opacity: ${visible ? 1 : 0};
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 99;
    transition: all 150ms ease-in-out;

    &:hover {
      background: ${isConfirmation ? theme.palette.error.dark : theme.palette.primary.dark};
      opacity: 1;
    }
  `}
`;
