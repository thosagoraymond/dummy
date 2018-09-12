import React, {Component } from "react";
import {View,StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import {Container, Content, Card, CardItem, Body, Text, Grid,Col,Header, Item, Input, Button,} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'

class quoteScreen extends Component{
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
                                        <Text style = {{ paddingBottom: 0}}>QUO00011</Text>
                                            <Grid>
                                                <Col>
                                                <Text style={{fontSize:11}}>
                                                        Tree Agama cycling supply
                                                    </Text>
                                                </Col>
        
                                                <Text style={{fontSize: 13}}>
                                                    R10 500.00
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop:5}}>
                                                <Col>
                                                    <Text style={{fontSize:10,color: 'grey',paddingTop:5}}>
                                                        Expiry date: 29 Aug 2018
                                                    </Text>
                                                </Col>
                                                
                                                <Text style={{color: 'green',fontSize:13}}>
                                                    Invoiced
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
                                        <Text style = {{ paddingBottom: 0}}>QUO00891</Text>
                                            <Grid>
                                                <Col>
                                                <Text style={{fontSize:11}}>
                                                        Alpha Buzz
                                                    </Text>
                                                </Col>
        
                                                <Text style={{fontSize: 13}}>
                                                    R1 500.00
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop:5}}>
                                                <Col>
                                                    <Text style={{fontSize:10,color: 'grey',paddingTop:5}}>
                                                        Expiry date: 29 Aug 2018
                                                    </Text>
                                                </Col>
                                                
                                                <Text style={{color: 'grey',fontSize:13}}>
                                                    Accepted
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
                                        <Text style = {{ paddingBottom: 0}}>QUO00981</Text>
                                            <Grid>
                                                <Col>
                                                <Text style={{fontSize:11}}>
                                                        Ackermans
                                                    </Text>
                                                </Col>
        
                                                <Text style={{fontSize: 13}}>
                                                    R34 500.00
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop:5}}>
                                                <Col>
                                                    <Text style={{fontSize:10,color: 'grey',paddingTop:5}}>
                                                        Expiry date: 9 Jul 2018
                                                    </Text>
                                                </Col>
                                                
                                                <Text style={{color: 'orange',fontSize:13}}>
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
                                        <Text style = {{ paddingBottom: 0}}>QUO00078</Text>
                                            <Grid>
                                                <Col>
                                                <Text style={{fontSize:11}}>
                                                        Delmas Store
                                                    </Text>
                                                </Col>
        
                                                <Text style={{fontSize: 13}}>
                                                    R10 980.00
                                                </Text>
                                            </Grid>

                                            <Grid style={{paddingTop:5}}>
                                                <Col>
                                                    <Text style={{fontSize:10,color: 'grey',paddingTop:5}}>
                                                        Expiry date: 3 May 2018
                                                    </Text>
                                                </Col>
                                                
                                                <Text style={{color: 'red',fontSize:13}}>
                                                    Expired
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
export default quoteScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});