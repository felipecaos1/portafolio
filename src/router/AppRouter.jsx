import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DesarrollosPage } from '../page/DesarrollosPage'
import { HomePage } from '../page/HomePage'
import { NoFoundPage } from '../page/NoFoundPage'
import { YolehagolawebPage } from '../page/YolehagolawebPage'
import { IgniwebPage } from '../page/IgniwebPage'
import { Prueba } from '../page/prueba'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={ <HomePage/> }/>
            <Route path='/prueba' element={ <Prueba/> }/>
            <Route path='/desarrollos' element={ <DesarrollosPage/> }/>
            <Route path='/desarrollos-yolehagolaweb' element={ <YolehagolawebPage/> }/>
            <Route path='/desarrollos-igniweb' element={ <IgniwebPage/> }/>


            <Route path='/*' element={ <NoFoundPage/>}/>
        </Routes>
    </>
  ) 
}

