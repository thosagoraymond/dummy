import React, {Component } from "react";
import {View,StyleSheet, ScrollView,TouchableOpacity,Dimensions } from "react-native";
import {Container, Content, Card, CardItem, Body, Text, Grid,Col,Header, Item, Input, Button,} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
// const screenWidth = Dimensions.get('window').width
import {
    LineChart,
  } from 'react-native-chart-kit'
  

class quoteScreen extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View>
            <Text style={{alignContent:'center'}}>
              Sales summary for a half yearly 
            </Text>
            <LineChart
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                  data: [
                    Math.random() * 50,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }]
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 1
                }
              }}
              bezier
              style={{
                marginVertical: 15,
                borderRadius: 1
              }}
            />
          </View>
        );
    }
}
export default quoteScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});