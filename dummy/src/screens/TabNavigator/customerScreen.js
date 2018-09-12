import React, {Component } from "react";
import {View, StyleSheet,ScrollView,TouchableOpacity} from "react-native";
import {Container, Content, Card, CardItem, Body, Text, Grid,Col,Header, Item, Input} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'

class customerScreen extends Component{
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
                                                <Grid>
                                                    <Col>
                                                        <Text style = {{ paddingBottom: 0}}>
                                                            Bicycle Suppliers
                                                        </Text>
                                                     </Col>

                                                     <Text style={{fontSize: 13,color: 'red'}}>
                                                        -R150 000
                                                     </Text>
                                                </Grid>

                                                <Grid>
                                                    <Col>
                                                        <Text style={{fontSize:12, fontStyle: 'italic' ,color: 'grey',paddingTop:5}}>
                                                            Owen Jones
                                                        </Text>
                                                    </Col>
                                                    <Text style={{fontSize: 13,color : 'grey'}}>
                                                            +27 11 765 2845
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
                                                <Grid>
                                                    <Col>
                                                        <Text style = {{ paddingBottom: 0}}>
                                                            Ackermans 
                                                        </Text>
                                                     </Col>

                                                     <Text style={{fontSize: 13,color: 'green'}}>
                                                        R1 500 000
                                                     </Text>
                                                </Grid>

                                                <Grid>
                                                    <Col>
                                                        <Text style={{fontSize:12, fontStyle: 'italic' ,color: 'grey',paddingTop:5}}>
                                                            Raymond Ackermans
                                                        </Text>
                                                    </Col>
                                                    <Text style={{fontSize: 13,color : 'grey'}}>
                                                            +27 11 896 2345
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
                                                <Grid>
                                                    <Col>
                                                        <Text style = {{ paddingBottom: 0}}>
                                                            Morning View Suppliers
                                                        </Text>
                                                     </Col>

                                                     <Text style={{fontSize: 13,color: 'green'}}>
                                                        R150 000
                                                     </Text>
                                                </Grid>

                                                <Grid>
                                                    <Col>
                                                        <Text style={{fontSize:12, fontStyle: 'italic' ,color: 'grey',paddingTop:5}}>
                                                            John Smith
                                                        </Text>
                                                    </Col>
                                                    <Text style={{fontSize: 13,color : 'grey'}}>
                                                            +27 99 765 2345
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
export default customerScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});