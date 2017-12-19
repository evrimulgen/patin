//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import HeaderLeftStep from './HeaderLeft';

const deviceScreen = Dimensions.get('window');


// create a component
class StepTwoScreen extends Component {
    static navigationOptions = ({navigation})=>({
        tabBarLabel: '2',
        title:'Bài 2',
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
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center',paddingBottom:10,paddingTop:10}}>CÁCH TÉ NGÃ AN TOÀN KHI TRƯỢT PATIN</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign:'center',paddingBottom:10 , textAlign:'justify' }} >Việc ngã trong quá trình tập luyện là điều khó tránh khỏi không chỉ đối với người mới mà ngay cả những người trượt lâu năm cũng thường xuyên xảy ra. Ở cách té ngã an toàn trong trượt patin bao gồm 5 bước cơ bản cho người mới tập luyện. Đây là nội dụng rất quan trọng, bạn hãy cố gắng thực hiện thuần thục để đảm bảo an toàn, tránh những chấn thương trong quá trình học trượt bạn nhé.</Text>
                    {/* <Text style={{ fontSize: 14, fontWeight: 'bold', textDecorationLine: 'underline',paddingBottom:5  }} >1. Đứng dậy</Text> */}
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 1: Khụy 2 gối xuống</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 2: Hai tay để phía trước, mở rộng lòng bàn tay, cằm hướng lên.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 3: Nghiêng người về phía trước, càng gần mặt đất càng tốt.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 4: Đổ người nhẹ nhàng, chống đầu gối, dùng 2 tay là điểm tựa thứ hai.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 5: Trượt tay về phía trước (không duỗi thẳng tay).</Text>
                    <Image
                        source={require('../../Learn/img/b2_img1.jpg')}
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
export default StepTwoScreen;
