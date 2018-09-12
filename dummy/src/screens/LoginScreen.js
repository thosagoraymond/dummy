import React, {Component } from "react";
import {View, StyleSheet,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from "react-native";

class LoginScreen extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                 <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                 
                         <View style={styles.container}>
                             <TextInput style={styles.inputBox} 
                             underlineColorAndroid='rgba(0,0,0,0)' 
                             placeholder="Username" 
                             placeholderTextColor = '#ffffff'
                             />
 
                             <TextInput style={styles.inputBox} 
                             underlineColorAndroid='rgba(0,0,0,0)' 
                             placeholder="******" 
                             secureTextEntry= {true}
                             placeholderTextColor = '#ffffff'
                             />
 
                             <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('DrawerNavigator')}>
                                 <Text style={styles.ButtonText}>Login</Text>
                             </TouchableOpacity>
                         </View>
                     </TouchableWithoutFeedback>
             </KeyboardAvoidingView>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#455a64'
    },
    inputBox: {
        width:300,
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 20,
        color: '#ffffff',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#1c313a',
        borderRadius: 25,
        width:300,
        marginVertical: 10,
        paddingVertical: 12,
    },
    ButtonText : {
        fontSize:16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    containerLogo: {
        flex: 1,
        alignItems: 'center',
        paddingTop:'30%',
      },
      logoText: {
        marginVertical: 20,
        fontSize:18,
        color: 'rgba(255, 255, 255, 0.7)'
      }
});