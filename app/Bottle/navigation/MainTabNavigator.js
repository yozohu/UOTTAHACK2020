import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import TabBarIcon from '../components/TabBarIcon';
import Stats from '../screens/Stats';
import Today from '../screens/Today';
import Me from '../screens/Me';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: Stats,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-stats'
          : 'md-stats'
      }
    />
  ),
    tabBarOptions: { showLabel: false },
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: Today,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Today',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-pint' : 'md-pint'} />
  ),
    tabBarOptions: { showLabel: false },
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: Me,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
    tabBarOptions: { showLabel: false },
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
