//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import HeaderLeftStep from './HeaderLeft';

const deviceScreen = Dimensions.get('window');

// create a component
class StepSevenScreen extends Component {
    static navigationOptions =({navigation})=>({
        tabBarLabel: '7',
        title:'StepSeven',
        headerStyle: {
            height: 50,
            borderBottomColor: 'transparent',
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerLeft: <HeaderLeftStep onPress={()=>{navigation.navigate('Home') }}/>,
        headerRight:<View style={{
            width: 40,
            height: 40,
        }}>
        
    </View>
    })
    render() {
        return (
            <View style={{flex:1}}>
             
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
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default StepSevenScreen;
