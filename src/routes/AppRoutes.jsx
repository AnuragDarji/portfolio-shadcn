
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout'

import ROUTES from '../Constant/routes'
import Home  from '../pages/Home'
import ProjectsPage  from '../pages/ProjectsPage'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path={ROUTES.PROJECTS} element={<ProjectsPage/>}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes