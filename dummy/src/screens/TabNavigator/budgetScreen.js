import React, {Component } from "react";
import {View,StyleSheet, ScrollView,Modal,TouchableHighlight} from "react-native";
import {Container, Content, Card, CardItem, Body, Text, Grid,Col,Header, Item, Input,Button} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ProgressCircle }  from 'react-native-svg-charts'

class budgetScreen extends Component{
    //Modal Code
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
      
    render(){
        return(
            <ScrollView>
              <View style={styles.container}>
                <Modal 
                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <View style={{marginTop: 22, alignContent: 'center',alignItems: 'center'}}>
                        <View>
                            <Text style={{padding:30}}>Summary Graph for Marketing budget </Text>
                            <Text style={{fontSize:11, fontStyle: 'italic' ,color: 'grey',paddingTop:10}}>Assigned by: Clay </Text>
                            <Text style={{fontSize:10,color: 'grey',paddingTop:10,paddingBottom:10}}>Date Created: 10 Feb 2018 11:47:56 PM</Text>
                            <Text style={{fontSize: 13,paddingBottom:30}}>Amount Assigned : R2 500.00</Text>

                                <ProgressCircle
                                    style={ { height: 200 } }
                                    progress={ 0.9 }
                                    progressColor={'blue'}
                                    Text={10}
                                    backgroundColor={'green'}
                                />

                                <Text style={{padding:20}}>KEYS : Money </Text>
                                    <Text>
                                        <Button rounded ><Text>Used</Text></Button>
                                        <Button rounded success><Text>Left</Text></Button>
                                    </Text>
                                <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                                    {/* <Text style={{fontSize:20,padding:30, color: "red"}}>Close Details</Text> */}
                                    <Button rounded danger><Text>Close Details page</Text></Button>
                                </TouchableHighlight>
                        </View>
                    </View>
                 </Modal>
        
                <Container>
                    <Header searchBar rounded>
                        <Item>
                            <Ionicons name = "md-search" size={24} />
                            <Input placeholder="Search" />
                        </Item>
                    </Header>
                        <Content>
                            <TouchableHighlight onPress={() => {this.setModalVisible(true);}} >
                                <Card transparent>
                                    <CardItem bordered>
                                        <Body>
                                         <Text style = {{ paddingBottom: 0}}>Marketing</Text>
                                            <Grid>
                                                <Col>
                                                    <Text style={{fontSize:11}}>
                                                      Transaction ID : 4889455621
                                                    </Text>
                                                </Col>
                                                <Text style={{fontSize: 13}}>
                                                    R2 500.00
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop: 5}}>
                                                <Text style={{fontSize:11, fontStyle: 'italic' ,color: 'grey',paddingTop:5}}>
                                                    Assigned by: Clay 
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop:5}}>
                                                <Col>
                                                    <Text style={{fontSize:10,color: 'grey',paddingTop:5}}>
                                                        Date processed: 10 Feb 2018 11:47:56 PM
                                                    </Text>
                                                </Col>
                                                
                                                <Text style={{color: 'green',fontSize:13}}>
                                                    Paid
                                                </Text>
                                            </Grid>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableHighlight>
                        </Content>
                </Container>
            </View>
          </ScrollView>
        );
    }
}
export default budgetScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});