

import React, { useLayoutEffect } from 'react'
import { AppRouter } from './router/AppRouter'
import { useLocation } from 'react-router-dom';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export const PortfolioApp = () => {
  return (
    <>
    <Wrapper>
      <AppRouter/>
    </Wrapper>
    </>
  )
}


