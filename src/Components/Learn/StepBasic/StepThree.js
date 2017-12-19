//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import HeaderLeftStep from './HeaderLeft';

const deviceScreen = Dimensions.get('window');


// create a component
class StepThreeScreen extends Component {
    static navigationOptions = ({navigation})=>({
        tabBarLabel: '3',
        title:'Bài 3',
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
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center',paddingBottom:10,paddingTop:10}}>CÁCH GIỮ THĂNG BẰNG</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign:'center',paddingBottom:10  }} >Thăng bằng</Text>
                    {/* <Text style={{ fontSize: 14, fontWeight: 'bold', textDecorationLine: 'underline',paddingBottom:5  }} >1. Đứng dậy</Text> */}
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     * Tư thế chuẩn bị (2 chân song song, dang rộng, hơi khuỵu đầu gối, 2 tay để thoải mái).</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     * Từ tư thế chuẩn bị, hạ trọng tâm (với 2 chân trên mặt đất) từ trái sang phải (và ngược lại, phải sang trái).</Text>

                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign:'center',paddingBottom:10  }} >Các tư thế đối với giày trượt đang trong quá trình sử dụng.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     * Hai chân song song</Text>
                    <Image
                        source={require('../../Learn/img/b3_img1.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf:'center',
                            width: deviceScreen.width,
                            resizeMode:'contain'
                        }}
                    />
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     * Hai đầu gối mở rộng, dồn lực về phần cạnh ngoài của giày trượt.</Text>
                    <Image
                        source={require('../../Learn/img/b3_img2.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf:'center',
                            width: deviceScreen.width,
                            resizeMode:'contain'
                        }}
                    />
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     * 2 đầu gối khép, dồn lực về cạnh trong của giày.</Text>
                    <Image
                        source={require('../../Learn/img/b3_img3.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf:'center',
                            width: deviceScreen.width,
                            resizeMode:'contain'
                        }}
                    />
                    
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     * Nghiêng song song.</Text>
                    <Image
                        source={require('../../Learn/img/b3_img4.jpg')}
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
export default StepThreeScreen;
