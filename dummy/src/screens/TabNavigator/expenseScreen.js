import React, {Component } from "react";
import {View,StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import {Container, Content, Card, CardItem, Body, Text, Grid,Col,Header, Item, Input, Button,} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'

class expenseScreen extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
        <ScrollView>
            <View style={styles.container}>
                <Container>

                    <Header searchBar rounded>
                        <Item>
                            <Ionicons name = "md-search" size={24} />
                            <Input placeholder="Search" />
                        </Item>
                        {/* <Button>
                            <Text>Search</Text>
                        </Button> */}
                    </Header>

                        <Content>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} >
                                <Card transparent>
                                    <CardItem bordered>
                                        <Body>
                                        <Text style = {{ paddingBottom: 0}}>Invoice 351</Text>
                                            <Grid>
                                                <Col>
                                                <Text style={{fontSize:11}}>
                                                        Pick n Pay
                                                    </Text>
                                                </Col>
        
                                                <Text style={{fontSize: 13}}>
                                                    R10 500.00
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop:5}}>
                                                <Col>
                                                    <Text style={{fontSize:10,color: 'grey',paddingTop:5}}>
                                                        Due date: 29 Aug 2018
                                                    </Text>
                                                </Col>
                                                
                                                <Text style={{color: 'orange',fontSize:13}}>
                                                    Unpaid
                                                </Text>
                                            </Grid>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} >
                                <Card transparent>
                                    <CardItem bordered>
                                        <Body>
                                        <Text style = {{ paddingBottom: 0}}>Invoice 87</Text>
                                            <Grid>
                                                <Col>
                                                <Text style={{fontSize:11}}>
                                                        Spree
                                                    </Text>
                                                </Col>
        
                                                <Text style={{fontSize: 13}}>
                                                    R9 500.00
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop:5}}>
                                                <Col>
                                                    <Text style={{fontSize:10,color: 'grey',paddingTop:5}}>
                                                         Due date: 29 Sep 2018
                                                    </Text>
                                                </Col>
                                                
                                                <Text style={{color: 'grey',fontSize:13}}>
                                                        Pending
                                                </Text>
                                            </Grid>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} >
                                <Card transparent>
                                    <CardItem bordered>
                                        <Body>
                                        <Text style = {{ paddingBottom: 0}}>Invoice 98</Text>
                                            <Grid>
                                                <Col>
                                                <Text style={{fontSize:11}}>
                                                        Markhams
                                                    </Text>
                                                </Col>
        
                                                <Text style={{fontSize: 13}}>
                                                    R67 500.00
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop:5}}>
                                                <Col>
                                                    <Text style={{fontSize:10,color: 'grey',paddingTop:5}}>
                                                        Due date: 29 Dec 2018
                                                    </Text>
                                                </Col>
                                                
                                                <Text style={{color: 'green',fontSize:13}}>
                                                         Paid
                                                </Text>
                                            </Grid>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} >
                                <Card transparent>
                                    <CardItem bordered>
                                        <Body>
                                        <Text style = {{ paddingBottom: 0}}>Invoice 10</Text>
                                            <Grid>
                                                <Col>
                                                <Text style={{fontSize:11}}>
                                                        Spar
                                                    </Text>
                                                </Col>
        
                                                <Text style={{fontSize: 13}}>
                                                    R1 500.00
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop:5}}>
                                                <Col>
                                                    <Text style={{fontSize:10,color: 'grey',paddingTop:5}}>
                                                        Due date: 22 Jan 2018
                                                    </Text>
                                                </Col>
                                                
                                                <Text style={{color: 'red',fontSize:13}}>
                                                    overdue
                                                </Text>
                                            </Grid>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} >
                                <Card transparent>
                                    <CardItem bordered>
                                        <Body>
                                        <Text style = {{ paddingBottom: 0}}>Invoice 101</Text>
                                            <Grid>
                                                <Col>
                                                <Text style={{fontSize:11}}>
                                                        Legit
                                                    </Text>
                                                </Col>
        
                                                <Text style={{fontSize: 13}}>
                                                    R1 500.00
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop:5}}>
                                                <Col>
                                                    <Text style={{fontSize:10,color: 'grey',paddingTop:5}}>
                                                        Due date: 22 Jan 2018
                                                    </Text>
                                                </Col>
                                                
                                                <Text style={{color: 'red',fontSize:13}}>
                                                    overdue
                                                </Text>
                                            </Grid>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        </Content>
                </Container>
            </View>
          </ScrollView>
        );
    }
}
export default expenseScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    }
});