// @flow
import { createStackNavigator, createAppContainer } from "react-navigation";

import {
  Menu,
  TvShow,
  BasicUsage,
  ColorsPage,
  Avignon,
  PullToRefresh
} from "./Pages";

export const App = createStackNavigator(
  {
    menu: {
      screen: Menu
    },
    tvShow: {
      screen: TvShow
    },
    basicUsage: {
      screen: BasicUsage
    },
    colors: {
      screen: ColorsPage
    },
    avignon: {
      screen: Avignon
    },
    pullrefresh: {
      screen: PullToRefresh
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerTransparent: true
    }
  }
);

export default createAppContainer(App);
