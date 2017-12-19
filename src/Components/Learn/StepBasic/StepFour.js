//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions,ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import HeaderLeftStep from './HeaderLeft';

const deviceScreen = Dimensions.get('window');


// create a component
class StepFourScreen extends Component {
    static navigationOptions = ({navigation})=>({
        tabBarLabel: '4',
        title:'Bước 4',
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
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center',paddingBottom:10,paddingTop:10}}>CÁCH BƯỚC ĐI VÀ CÁCH TRƯỢT</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign:'center',paddingBottom:10  }} >Bước sải chân chữ V</Text>
                    {/* <Text style={{ fontSize: 14, fontWeight: 'bold', textDecorationLine: 'underline',paddingBottom:5  }} >1. Đứng dậy</Text> */}
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Chuẩn bị tư thế sẵn sàng (2 chân đặt song song).</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Xoay chân tạo thành chữ V.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Lần lượt nhấc 2 chân lên xuống tại chỗ.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Từ từ trượt đi, sử dụng cạnh giày phía trong.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Tiếp tục thực hiện động tác để di chuyển.</Text>
                    <Image
                        source={require('../../Learn/img/b4_img1.jpg')}
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
export default StepFourScreen;
