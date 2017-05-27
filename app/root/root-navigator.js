import {
  StackNavigator
} from 'react-navigation';

import Screen_home from '../modules/screen-home';
import ScreenA from '../modules/screen-a';
import ScreenB from '../modules/screen-b';

const navigatorMap = {
  Home: { screen: Screen_home },
  ScreenA: { screen: ScreenA },
  ScreenB: { screen: ScreenB },
};

const Navigator = StackNavigator( navigatorMap );

export default Navigator;
