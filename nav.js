import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import Home from './Home';
import Portfolio from './Portfolio';
import Streams from './Streams';
import News from './News';
import { AssetsProvider } from "./AssetsContext";

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

const StreamStackNav = createStackNavigator({
  Streams: {
    screen: Streams
  }
});

const NewsStackNav = createStackNavigator({
  News: {
    screen: News
  }
});

const AppTabNav = createBottomTabNavigator({
  Home : {
    screen: HomeStackNav
  },
  Portfolio: {
    screen: PortfolioStackNav
  },
  Stream: {
    screen: StreamStackNav
  },
  News: {
    screen: NewsStackNav
  }
});

const AppNavigator = createAppContainer(AppTabNav);

class Nav extends React.Component {
  render() {
    return (
      <AssetsProvider>
        <AppNavigator />
      </AssetsProvider>
    )
  }
}

export default Nav;

