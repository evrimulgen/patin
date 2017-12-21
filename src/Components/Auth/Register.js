//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Input, Text, Button } from 'native-base';
import BackgroundImage from './backgroundImage';


// create a component
class RegisterScreen extends Component {
    render() {
        return (
            <BackgroundImage>
               
            </BackgroundImage>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    input: {
        backgroundColor: 'white', borderRadius: 30, width: 300, textAlign: 'center'

    }


});

//make this component available to the app
export default RegisterScreen;






