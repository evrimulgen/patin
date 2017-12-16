//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import StackNav from '../../Route';

const deviceScreen = Dimensions.get('window');


// create a component
class StepOneScreen extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        tabBarLabel: '1',
        title: 'StepOne',
        headerStyle: {
            height: 50,
            borderBottomColor: 'transparent',
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerLeft: <TouchableOpacity 
        onPress={() => { <StackNav/> }}>
            <Image
                source={require('../img/icon_tabnav.png')}
                style={{
                    marginLeft:15,
                    width: 40,
                    height: 40,
                }}
            />
        </TouchableOpacity>,
        headerRight:<View style={{
            width: 40,
            height: 40,
        }}>
        
    </View>
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <View style={{ height: 50, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ height: 50, width: 70, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => { this.props.navigation.dispatch(resetAction) }}>
                        <Text style={[styles.headerTitle,,{color:'blue'}]}>Home</Text>
                    </TouchableOpacity>

                    <View style={{ width: deviceScreen.width - 140, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.headerTitle}>Step One</Text>
                    </View>
                    
                </View> */}
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
        backgroundColor: '#2c3e50',
    },
    icon: {
        width: 30,
        height: 30,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',

    },

});

//make this component available to the app

export default StepOneScreen;
