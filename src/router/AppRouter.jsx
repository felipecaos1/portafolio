import React, { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { DesarrollosPage } from '../page/DesarrollosPage'
import { HomePage } from '../page/HomePage'
import { NoFoundPage } from '../page/NoFoundPage'
import { YolehagolawebPage } from '../page/YolehagolawebPage'
import { IgniwebPage } from '../page/IgniwebPage'
import { Prueba } from '../page/prueba'

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
    console.log("arriba");
  }, [location.pathname]);
  return children;
};

export const AppRouter = () => {
  return (
    <Wrapper>
        <Routes>
            <Route path='/' element={ <HomePage/> }/>
            <Route path='/prueba' element={ <Prueba/> }/>
            <Route path='/desarrollos' element={ <DesarrollosPage/> }/>
            <Route path='/desarrollos-yolehagolaweb' element={ <YolehagolawebPage/> }/>
            <Route path='/desarrollos-igniweb' element={ <IgniwebPage/> }/>


            <Route path='/*' element={ <NoFoundPage/>}/>
        </Routes>
    </Wrapper>
  ) 
}

