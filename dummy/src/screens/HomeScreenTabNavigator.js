import React, {Component } from "react";
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'

import customerScreen from './TabNavigator/customerScreen';
import Sales from './TabNavigator/sales';
import Order from './TabNavigator/order';
import expenseScreen from './TabNavigator/expenseScreen';
import budgetScreen from './TabNavigator/budgetScreen';

export default class AppTabNavigator extends Component{
    
    static navigationOptions = ({navigation}) =>{
        return{
            headerLeft:(
                <View style={{ padding: 10}}>
                    <Ionicons name="md-menu" size={24} onPress={() => navigation.navigate('DrawerOpen')} />
                </View>
            )
        }
    }
    static navigationOptions = {
        header: null
    }
    
    render(){
        return(
            <HomeScreenTabNavigator screenProps={{ navigatioln: this.props.navigation}} />
        )
    }
}

const HomeScreenTabNavigator = new createBottomTabNavigator({
    customerScreen:{
        screen: customerScreen,
        navigationOptions:{
            tabBarLabel: 'Customers',
            tabBarIcon: ()=>(
                <Ionicons name = "md-contacts" size={24} />
            )
        }
    },
    Sales:{
        screen: Sales,
        navigationOptions:{
            tabBarLabel: 'Sales',
            tabBarIcon: ()=>(
                <Ionicons name = "md-paper" size={24} />
            )
        }
    },
    Order:{
        screen: Order,
        navigationOptions:{
            tabBarLabel: 'Orders',
            tabBarIcon: ()=>(
                <Ionicons name = "md-copy" size={24} />
            )
        }
    },
    expenseScreen:{
        screen: expenseScreen,
        navigationOptions:{
            tabBarLabel: 'Expenses',
            tabBarIcon: ()=>(
                <Ionicons name = "logo-usd" size={24} />
            )
        }
    },
    budgetScreen:{
        screen: budgetScreen,
        navigationOptions:{
            tabBarLabel:'budget',
            tabBarIcon: ()=>(
                <Ionicons name="logo-bitcoin" size={24} />
            )
        }
    }
})