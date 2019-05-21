import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import Home from './Home';
import Portfolio from './Portfolio';

const HomeStackNav = createStackNavigator({
  Home: {
    screen: Home
  }
})

const PortfolioStackNav = createStackNavigator({
  Portfolio: {
    screen: Portfolio
  }
});

const AppTabNav = createBottomTabNavigator({
  Home : {
    screen: HomeStackNav
  },
  Portfolio: {
    screen: PortfolioStackNav
  }
});

const Nav = createAppContainer(AppTabNav);

export default Nav;

