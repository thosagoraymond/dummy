import React, {Component } from "react";
import HomeScreen from './HomeScreen'
import { createDrawerNavigator,createStackNavigator } from 'react-navigation';
import FullBudget from './FullBudget';

import HomeScreenTabNavigator from './HomeScreenTabNavigator';

const InnerStackNavigator = new createStackNavigator({
    TabNavigator:{
        screen: HomeScreenTabNavigator,
    }
})

const AppDrawerNavigator = new createDrawerNavigator({
    HomeScreen: { screen: InnerStackNavigator }

})
 
export default AppDrawerNavigator;