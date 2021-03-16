import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './menu.routes';

// Components
import Icon from '../components/Icon';
import { MenuLabel } from '../components/Label';

// Utils
import { colors } from '../themes';

// Routes
import Home from '../screens/main/Home';
import Profile from '../screens/main/Profile';
import Settings from '../screens/main/Settings';

const BottomTab = createBottomTabNavigator();

const MenuNavigator = () => (
  <BottomTab.Navigator
    initialRouteName={routes.initialRouteName}
    lazy={false}
    backBehavior={'initialRoute'}
    tabBarOptions={{
      activeTintColor: colors.white,
      allowFontScaling: false,
      inactiveTintColor: colors.grey,
      style: styles.tabBar,
    }}>
    <BottomTab.Screen
      name={routes.stack.Dashboard}
      component={Home}
      options={{
        tabBarLabel: ({ focused, color }) => (
          <MenuLabel focused={focused} color={color} label="Home" />
        ),
        tabBarIcon: ({ focused }) => <Icon name="menu-home" active={focused} />,
      }}
    />
    <BottomTab.Screen
      name={routes.stack.Profile}
      component={Profile}
      options={{
        tabBarLabel: ({ focused, color }) => (
          <MenuLabel focused={focused} color={color} label="Profile" />
        ),
        tabBarIcon: ({ focused }) => (
          <Icon name="person" active={focused} />
        ),
      }}
    />
    <BottomTab.Screen
      name={routes.stack.Settings}
      component={Settings}
      options={{
        tabBarLabel: ({ focused, color }) => (
          <MenuLabel focused={focused} color={color} label="Settings" />
        ),
        tabBarIcon: ({ focused }) => (
          <Icon name="menu-settings" active={focused} />
        ),
      }}
    />
  </BottomTab.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1,
    borderTopColor: colors.tabBar,
    backgroundColor: colors.tabBar,
  },
  tabBarBadge: {
    height: 10,
    width: 10,
  },
});

export default MenuNavigator;
