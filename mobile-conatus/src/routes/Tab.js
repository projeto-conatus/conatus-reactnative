import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from '../Pages/Login'
import Cadastrar from '../Pages/Cadastrar'
import Home from '../Pages/Home'
import Cursos from '../Pages/Cursos'



const routeTab = createBottomTabNavigator()

const Tab = () => {
  return (
    <routeTab.Navigator initialRouteName='Login' tabBarOptions={{
      activeTintColor: '#4d55c8',
      inactiveTintColor: '#3bbeef',
      labelStyle: {fontSize: 20},
      
    }}
    
    >
      
      <routeTab.Screen name="Login" component={Login} />
      <routeTab.Screen name="Cadastrar" component={Cadastrar} />
      <routeTab.Screen name="Home" component={Home} />
      <routeTab.Screen name="Cursos" component={Cursos}/>
    </routeTab.Navigator>
  )
}

export default Tab