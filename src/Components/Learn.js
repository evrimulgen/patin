//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar, ScrollView, Platform } from 'react-native';

const deviceScreen = Dimensions.get('window');


// create a component
class LearnScreen extends Component {
    
    componentWillMount() {
  
    }
    
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
            <ScrollView  style={styles.container}>
                  <StatusBar style={{backgroundColor:'transparent'}} hidden={false}/>
                <TouchableOpacity style={styles.btn}
                    onPress={() => { this.props.navigation.navigate('Basic') }}
                >
                    <Image
                        source={require('../Images/Learn/basic_bg.jpg')}
                        style={styles.img}
                    />
                    <View style={styles.titlecontent}>
                        <Text style={styles.title}>Cơ bản</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={() => { this.props.navigation.navigate('ListSlalom')}}
                >
                    <Image
                        source={require('../Images/Learn/slalom_bg.jpg')}
                        style={styles.img}
                    />
                    <View style={styles.titlecontent}>
                        <Text style={styles.title}>Slalom</Text>
                    </View>
                </TouchableOpacity>
                

                <TouchableOpacity style={styles.btn}
                    onPress={() => { this.props.navigation.navigate('ListSlide') }}
                >
                    <Image
                        source={require('../Images/Learn/slide_bg.jpg')}
                        style={styles.img}
                    />
                    <View style={styles.titlecontent}>
                        <Text style={styles.title}>Slide</Text>
                    </View>
                </TouchableOpacity>


            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20,
        //backgroundColor: '#2c3e50',
    },
    btn: {
        width: undefined,
        height: 200,
        marginLeft: 15,
        marginRight:15,
        marginBottom: 10,
        borderRadius: 25,
        backgroundColor: 'transparent',
    },
    icon: {
        width: 26,
        height: 26,
    },
    img: {
        width: deviceScreen.width - 30,
        height: 200,
        borderRadius: 25,
    },
    titlecontent: {
        position: 'absolute',
        backgroundColor: 'red',
        width: undefined,
        height: 200,
        marginLeft: 15,
        borderRadius: 25,
        backgroundColor: 'transparent'
    },
    title: {
        color: 'white',

        ...Platform.select({
            ios: {
                fontSize: 60, fontWeight: 'bold'
            },
            android: {
                fontSize: 60, fontWeight: '600'
            }
        })

    }

});

//make this component available to the app
export default LearnScreen;
