import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../Pages/Home'
import Cursos from '../Pages/Cursos'


const routeDrawer = createDrawerNavigator()

const Drawer = () => {
  return (
    <routeDrawer.Navigator initialRouteName="Home">
      <routeDrawer.Screen name="Home" component={Home}/>
      <routeDrawer.Screen name="Cursos" component={Cursos}/>
    </routeDrawer.Navigator>
  )
}

export default Drawer
