import React from 'react';
import {
  CompositeNavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/core';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { ProfileScreen } from '@app-scenes/profile';
import { ProfileTabNavigationProp } from './home.navigator';
import { AppRoute } from './app-routes';

interface ProfileNavigatorParams extends ParamListBase {
  [AppRoute.PROFILE]: undefined;
}

export interface ProfileScreenProps {
  navigation: CompositeNavigationProp<
    ProfileTabNavigationProp,
    StackNavigationProp<ProfileNavigatorParams, AppRoute.PROFILE>
  >;
  route: RouteProp<ProfileNavigatorParams, AppRoute.PROFILE>;
}

const Stack = createStackNavigator<ProfileNavigatorParams>();

export const ProfileNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.PROFILE} component={ProfileScreen}/>
  </Stack.Navigator>
);
