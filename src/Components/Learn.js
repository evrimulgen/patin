//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar, ImageBackground } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";


// create a component
class LearnScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Bài tập',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../Images/Learn/icon_tabnav.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };



    render() {
        return (

            <View style={styles.container}>
                <StatusBar hidden />
                <View style={styles.basic}>
                    <TouchableOpacity style={styles.touch}>

                        <Image style={styles.image}
                            source={require('../Images/Learn/basic_bg.jpg')} />
                        {/* <Text>Cơ bản</Text> */}

                    </TouchableOpacity>
                </View>
                <Grid style={styles.grid}>
                    <Col>
                        <Row style={styles.row}>
                            <TouchableOpacity style={styles.touch}>
                                <Text>Slalom</Text>
                            </TouchableOpacity>
                        </Row>
                        <Row style={styles.row}>
                            <TouchableOpacity style={styles.touch}>
                                <Text>Slide</Text>
                            </TouchableOpacity>
                        </Row>
                    </Col>
                    <Col>
                        <Row style={styles.row}>
                            <TouchableOpacity style={styles.touch}>
                                <Text>Jump</Text>
                            </TouchableOpacity>
                        </Row>
                        <Row style={styles.row}>
                            <TouchableOpacity style={styles.touch}>
                                <Text>Dance</Text>
                            </TouchableOpacity>
                        </Row>
                    </Col>
                </Grid>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#2c3e50',
    },
    icon: {
        width: 26,
        height: 26,

    },
    grid: {
        flex: 2,
    },
    row: {
        // borderWidth: 3
        padding: 10
    },
    basic: {
        flex: 1,
        padding: 10,
        width: Dimensions.get('window').width,
    },
    touch: {
        flex: 1,
        borderWidth: 3,
        borderRadius: 20,
    },
    image:{ 
        flex: 1, 
        resizeMode: 'cover',
        width: undefined,
        height: undefined
    }
});

//make this component available to the app
export default LearnScreen;
