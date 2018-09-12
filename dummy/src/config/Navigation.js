import {createStackNavigator} from 'react-navigation';
import splashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from '../screens/DrawerNavigator';

 export default AppStackNavigator = new createStackNavigator({
    splashScreen: {screen : splashScreen },
    LoginScreen: {screen : LoginScreen},
    DrawerNavigator: { screen: DrawerNavigator }
    },{
      navigationOptions:{
        gesturesEnabled:false
      }
    }
)