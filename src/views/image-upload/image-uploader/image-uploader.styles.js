import styled from '@emotion/styled';

const getColor = (theme, errored, disabled, hovering) => {
  if (errored) return theme.palette.error.dark;
  if (disabled) return theme.palette.grey[500];
  if (hovering) return theme.palette.info.dark;
  return theme.palette.primary.contrastText;
};

const getBorderColor = (theme, errored, disabled, hovering) => {
  if (errored) return theme.palette.error.dark;
  if (disabled) return theme.palette.grey[500];
  if (hovering) return theme.palette.info.dark;
  return theme.palette.primary.contrastText;
};

export const Dropzone = styled.label`
  ${({
    theme,
    errored,
    disabled,
    hovering,
  }) => `
    color: ${getColor(theme, errored, disabled, hovering)};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    display: flex;
    padding: 2rem;
    height: 15rem;
    border: 0.2rem dashed ${getBorderColor(theme, errored, disabled, hovering)};
    transition: all 100ms ease-out;

    & > p {
      pointer-events: none;
    }

    &:active {
      color: ${getColor(theme, errored, disabled, true)};
      border-color: ${getBorderColor(theme, errored, disabled, true)};
    }
  `}
`;
