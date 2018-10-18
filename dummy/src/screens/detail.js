import React, {Component } from "react";
import {View, StyleSheet,Button} from "react-native";

class LoginSccreen extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style={styles.container}>
                <Button title="Splash screen will be here" onPress={() => this.props.navigation.navigate('LoginScreen')}/>
            </View>
        );
    }
}
export default LoginSccreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#455a64'
    }
});