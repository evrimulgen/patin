//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
const deviceScreen = Dimensions.get('window');
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Home'})
    ]
  })

// create a component
class StepSevenScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '7',
        title:'StepSeven',
        headerStyle:{
            height:30,
            borderBottomColor:'transparent',
        },
        headerTitleStyle:{
            alignSelf:'center'
        }
    }
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
