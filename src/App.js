// @flow
import { createStackNavigator, createAppContainer } from "react-navigation";

import {
  ImageHeaderMenu,
  TvShow,
  BasicUsage,
  ColorsPage,
  Avignon,
  PullToRefresh
} from "./imageHeader";
import Menu from "./Menu";
import Twitter from "./Twitter";

export const App = createStackNavigator(
  {
    menu: {
      screen: Menu
    },
    imageHeaderMenu: {
      screen: ImageHeaderMenu
    },
    twitter: {
      screen: Twitter
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
