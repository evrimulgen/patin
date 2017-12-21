//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions,ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import HeaderLeftStep from './HeaderLeft';

const deviceScreen = Dimensions.get('window');

// create a component
class StepSixScreen extends Component {
    static navigationOptions = ({navigation})=>({
        tabBarLabel: '6',
        title:'Bài 6',
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
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center',paddingBottom:10,paddingTop:10}}>CÁCH CHUYỂN HƯỚNG</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign:'center',paddingBottom:10 , textAlign:'justify' }} >1. Scootering (1 chân phía trước)</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5,textDecorationLine: 'underline'  }}>     Chuyển hướng Scootering qua phải:</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Dồn trọng tâm sang chân phải để chuyển hướng sang phải.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Khụy chân trái, đưa ra ngoài với tư thế dùng cạnh trong.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Xoay toàn bộ cơ thể qua phải.</Text>
                    <Image
                        source={require('../../Learn/img/b6_img1.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf:'center',
                            width: deviceScreen.width,
                            resizeMode:'contain'
                        }}
                    />
                  
                    
                    <Text style={{ fontSize: 13, paddingBottom:5,textDecorationLine: 'underline'  }}>     Chuyển hướng Scootering qua trái:</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Dồn trọng tâm sang chân phải để chuyển hướng sang trái.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Khụy chân phải, đưa ra ngoài với tư thế dùng cạnh trong.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Xoay toàn bộ cơ thể qua trái.</Text>
                    <Image
                        source={require('../../Learn/img/b6_img2.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf:'center',
                            width: deviceScreen.width,
                            resizeMode:'contain'
                        }}
                    />
                    <Text style={{ fontSize: 13, paddingBottom:5, textAlign:'center'  }}>Cách chuyển hướng qua trái</Text>

                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign:'center',paddingBottom:10 , textAlign:'justify' }} >2. Parallel (song song):</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5,textDecorationLine: 'underline'  }}>     Chuyển hướng với tư thế 2 chân song song</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - 2 chân trượt song song.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Đưa chân trái lên phía trước khi muốn quay trái; ngược lại với chân bên phải.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Phần người phía trên xoay theo hướng muốn xoay.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     - Dồn trọng tâm vào hướng muốn xoay, 2 chân vẫn song song.</Text>
                    <Image
                        source={require('../../Learn/img/b6_img3.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf:'center',
                            width: deviceScreen.width,
                            resizeMode:'contain'
                        }}
                    />
                    <Text style={{ fontSize: 13, paddingBottom:5, textAlign:'center'  }}>Cách Parallel song song</Text>

                    
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
export default StepSixScreen;
