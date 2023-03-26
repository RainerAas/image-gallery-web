import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import useAppBarHeight from 'hooks/use-appbar-height';
import Header from './header';
import * as Styled from './layout.styles';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

const defaultProps = {
  children: undefined,
};

function Layout(props) {
  const { children } = props;

  const appBarHeight = useAppBarHeight();

  return (
    <>
      <Header />
      <Styled.Main appBarHeight={appBarHeight}>
        <Container maxWidth="xl">
          <Suspense>
            {children}
          </Suspense>
        </Container>
      </Styled.Main>
    </>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
