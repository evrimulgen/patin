//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class ProfileScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Hồ sơ',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../Images/Profile/icon_tabnav.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
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
});

//make this component available to the app
export default ProfileScreen;
