import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Feed from '../src/screens/Feed';
import Trilha from '../src/screens/Trilha';
import Mentores from '../src/screens/Mentoria';
import Vagas from '../src/screens/Vagas';


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Trilha" component={Trilha} />
        <Tab.Screen name="Vagas" component={Vagas} />
        <Tab.Screen name="Mentores" component={Mentores} />
    </Tab.Navigator>
)