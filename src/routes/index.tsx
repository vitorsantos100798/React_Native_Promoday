import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';

type TypeChildren = {
  children: ReactNode;
};

function ContainerNavigation({children}: TypeChildren) {
  return <NavigationContainer>{children}</NavigationContainer>;
}

export default ContainerNavigation;
