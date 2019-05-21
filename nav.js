import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import Home from './Home';
import Profile from './Profile';

const HomeStackNav = createStackNavigator({
  Home: {
    screen: Home
  }
})

const ProfileStackNav = createStackNavigator({
  Profile: {
    screen: Profile
  }
})

const AppTabNav = createBottomTabNavigator({
  Home : {
    screen: HomeStackNav
  },
  Profile: {
    screen: ProfileStackNav
  }
});

const Nav = createAppContainer(AppTabNav);

export default Nav;

