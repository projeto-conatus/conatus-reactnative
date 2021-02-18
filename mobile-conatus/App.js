import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import UserContexterProvider from './src/contexts/userContexts';
import MainStack from './stacks/MainStack';

export default () => {
  return (
    <UserContexterProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContexterProvider>
  );
}