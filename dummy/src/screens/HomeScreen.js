import React, {Component } from "react";
import {View, Text, StyleSheet,Button} from "react-native";

class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* <Button title="Complete Login" onPress={() => this.props.navigation.navigate('#')}/> */}
                <Text>Home Screen</Text>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});