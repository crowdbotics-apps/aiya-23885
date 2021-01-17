import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49193795Navigator from '../features/BlankScreen49193795/navigator';
import Maps193777Navigator from '../features/Maps193777/navigator';
import Additem193776Navigator from '../features/Additem193776/navigator';
import Maps193772Navigator from '../features/Maps193772/navigator';
import UserProfile193768Navigator from '../features/UserProfile193768/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49193795: { screen: BlankScreen49193795Navigator },
Maps193777: { screen: Maps193777Navigator },
Additem193776: { screen: Additem193776Navigator },
Maps193772: { screen: Maps193772Navigator },
UserProfile193768: { screen: UserProfile193768Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
