import React, {Component } from "react";
import {View, StyleSheet,FlatList,ScrollView,TouchableOpacity , ActivityIndicator,Modal,TextInput} from "react-native";
import {Container, Content, Card, CardItem, Body, Text, Grid,Col,Header, Item, Input, ListItem} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class customerScreen extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            companyOrders: [],
        }
    }
        componentDidMount = () => {
            fetch('http://phoenix.myitzar.co.za:10080/erpcrm-con-presentation/ConUIServiceRestImpl/company_orders?companyname=Comfy%20and%20Pretty%20Fashion', {
               method: 'GET',
               headers:{
                'Content-Type': 'application/json',
                // 'Origin': 'http://localhost',
                // 'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'content-type',
                'Accept': 'application/json',
              }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                    console.log(responseJson);
               this.setState({
                isLoading: false,
                companyOrders: responseJson,
                //companyOrders: responseJson.companyOrders
               })
            })
            .catch((error) => {
               console.error(error);
            });
         }

   render() {
    const {companyOrders} = this.state;
    console.log("List of company orders inside render",companyOrders);
        return (
            <View>
                {/* {productsList ? productsList.map((data,index) => {
                    return(
                        <Text key={index}>
                            {data.customerid}
                        </Text>
                    )
                }): null } */}
            </View>
        );
    }
}

export default customerScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});