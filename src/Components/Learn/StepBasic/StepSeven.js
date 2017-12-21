//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions,ScrollView } from 'react-native';
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
            <ScrollView style={{flex:1}}>
                <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center',paddingBottom:10,paddingTop:10}}>CÁCH TRƯỢT ĐI</Text>
                   
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Tăng số lượng bước chân theo cách trượt chữ V (V-Walk).</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Tăng sải chân theo cách trượt chữ V.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Tăng thời gian cho bánh lăn đi trước khi chuyển chân.</Text>
                    <Image
                        source={require('../../Learn/img/b7_img1.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf:'center',
                            width: deviceScreen.width,
                            resizeMode:'contain'
                        }}
                    />
                  
                    
                    <Text style={{ fontSize: 13, paddingBottom:5,textDecorationLine: 'underline'  }}>     Cách trượt đi 2 (Forward swizzle)</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Đặt 2 chân hình chữ V.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Đẩy 2 chân về trước bằng cạnh ngoài.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Kéo 2 chân vào trong bằng cạnh trong (2 đầu gối sát vào nhau).</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Tiếp tục đẩy 2 chân về trước bằng cạnh ngoài.</Text>
                    <Image
                        source={require('../../Learn/img/b7_img2.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf:'center',
                            width: deviceScreen.width,
                            resizeMode:'contain'
                        }}
                    />
                    
                </View>
            </ScrollView>
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
