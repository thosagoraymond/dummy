import React, {Component } from "react";
import {View,StyleSheet, ScrollView,TouchableOpacity} from "react-native";
import {Container, Content, Card, CardItem, Body, Text, Grid,Col,Header, Item, Input} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'

class budgetScreen extends Component{
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
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('FullBudget')} >
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
                            </TouchableOpacity>

                            <TouchableOpacity>
                            <Card transparent>
                                    <CardItem bordered>
                                        <Body>
                                         <Text style = {{ paddingBottom: 0}}>Human Resources</Text>
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
                                                
                                                <Text style={{color: 'orange',fontSize:13}}>
                                                    Unpaid
                                                </Text>
                                            </Grid>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity>
                            <Card transparent>
                                    <CardItem bordered>
                                        <Body>
                                         <Text style = {{ paddingBottom: 0}}>Sales</Text>
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
                                                    Assigned by: Raymond 
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop:5}}>
                                                <Col>
                                                    <Text style={{fontSize:10,color: 'grey',paddingTop:5}}>
                                                        Date processed: 10 Feb 2018 11:47:56 PM
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