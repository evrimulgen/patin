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
class StepOneScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{ height: 50, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ height: 50, width: 70, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => { this.props.navigation.dispatch(resetAction) }}>
                        <Text style={[styles.headerTitle,,{color:'blue'}]}>Home</Text>
                    </TouchableOpacity>

                    <View style={{ width: deviceScreen.width - 140, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.headerTitle}>Step One</Text>
                    </View>
                    
                </View>
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

    }
});

//make this component available to the app
export default StepOneScreen;
