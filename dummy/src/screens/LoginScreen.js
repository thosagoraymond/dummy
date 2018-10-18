import React, {Component } from "react";
import {View, StyleSheet,TextInput,
    TouchableOpacity,Text,KeyboardAvoidingView,
    TouchableWithoutFeedback,Keyboard,
    TouchableHighlight,
    AsyncStorage} from "react-native";

    const ACCESS_TOKEN = 'access_token';

    class LoginScreen extends Component{
        static navigationOptions = {
            header: null
        }

    constructor(){
        super();
        this.state = {
          email: "",
          password: "",
          error: "",
        }
      }

    // redirect(routeName, accessToken){
    //     this.props.navigator.push({
    //       name: routeName
    //     });
    //   }

     async storeToken(accessToken){
         try{
           await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
           this.getToken();
         } catch(error){
             console.log("Something went wrong")
         }     
      }

      async getToken(){
          try{
              let token = await AsyncStorage.getItem(ACCESS_TOKEN);
              console.log("Token is : " + token);
          }catch(error){
              console.log("Something went wrong");
          }
      }

      async removeToken(){
          try{
              await AsyncStorage.removeItem(ACCESS_TOKEN);
              this.getToken();
          }catch(error){
              console.log("Something went wrong");
          }
      }

      async onLoginPressed() {
        this.setState({showProgress: true})
        try {
          let response = await fetch('http://phoenix.myitzar.co.za:10080/erpcrm-con-presentation/ConUIServiceRestImpl/frontend_login?username=nyikomashinini@yahoo.com&password=12345', {
                                  method: 'POST',
                                  headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify({
                                    session:{
                                      email: this.state.email,
                                      password: this.state.password,
                                    }
                                  })
                                });
          let res = await response.text();
          if (response.status >= 200 && response.status < 300) {
              //Handle success
              this.setState({error: ""});
              let accessToken = res;
              this.storeToken(accessToken);
              console.log("access token log ",accessToken);
              //his.redirect('DrawerNavigator');
          } else {
              //Handle error
              let error = res;
              throw error;
          }
        } catch(error) {
            this.removeToken();
            this.setState({error: error});
            console.log("error " + error);
        }
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
                             onChangeText={ (text)=> this.setState({email: text}) }
                             />
 
                             <TextInput style={styles.inputBox} 
                             underlineColorAndroid='rgba(0,0,0,0)' 
                             placeholder="******" 
                             secureTextEntry= {true}
                             placeholderTextColor = '#ffffff'
                             onChangeText={ (password)=> this.setState({password: password}) }
                             />
 
                             <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('DrawerNavigator')}>
                                 <Text style={styles.ButtonText}>Login</Text>
                             </TouchableOpacity>
                            {/* <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={styles.button}>
                                <Text style={styles.ButtonText}>
                                    Login
                                </Text>
                            </TouchableHighlight> */}

                             <Text style={styles.error}>
                                {this.state.error}
                            </Text>

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
      backgroundColor: 'grey'
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
      },
      error: {
        color: 'red',
        paddingTop: 10
      },
      success: {
        color: 'green',
        paddingTop: 10
      },
      loader: {
        marginTop: 20
      }
});