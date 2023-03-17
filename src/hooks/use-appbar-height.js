import React from 'react';

const useAppBarHeight = () => {
  const [appBarHeight, setAppBarHeight] = React.useState(0);

  React.useEffect(() => {
    const getAppBarHeight = ([{ target: appBar }]) => (
      appBar && setAppBarHeight(appBar.clientHeight)
    );

    const resizeObserver = new ResizeObserver(getAppBarHeight);

    resizeObserver.observe(document.querySelector('header.MuiAppBar-root'));
  }, []);

  return appBarHeight;
};

export default useAppBarHeight;
