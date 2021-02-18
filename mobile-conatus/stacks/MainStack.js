import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';


import Preload from '../src/screens/Preload';
import SignIn from '../src/screens/SignIn';
import SignUp from '../src/screens/SignUp';
import Feed from '../src/screens/Feed';
import MainTab from '../stacks/MainTab'


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
)