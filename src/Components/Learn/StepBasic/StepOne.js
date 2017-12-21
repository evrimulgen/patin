//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import StackNav from '../../Route';
import HeaderLeftStep from './HeaderLeft';


const deviceScreen = Dimensions.get('window');


// create a component
class StepOneScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation}) =>({
        tabBarLabel: '1',
        title: 'Bài 1',
        // headerStyle: {
        //     height: 50,
        //     borderBottomColor: 'transparent',
        // },
        headerTitleStyle: {
            alignSelf: 'center',
        },
        headerLeft: <HeaderLeftStep onPress={()=>{navigation.navigate('Home')}}/>,
        headerRight: <View style={{
            width: 40,
            height: 40,
        }}>

        </View>
    })
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center',paddingBottom:10,paddingTop:10 }}>CÁCH ĐỨNG DẬY VÀ NGỒI XUỐNG</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', textDecorationLine: 'underline',paddingBottom:5  }} >1. Đứng dậy</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5 }}>     Bước 1: Từ tư thế quỳ, đặt 2 bàn tay xuống đất gần sát với đầu gối.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 2: Sau khi thực hiện đúng bước 1, các bạn chống 1 chân lên (chân phải hay chân trái đều được) sao cho 4 bánh đều chạm đất và giày trượt vuông góc với mặt đất.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 3: Đẩy chân còn lại lên tạo thành hình chữ V và tạo sự cân bằng ở hai chiếc giày trượt. Trong khi đó tay bạn vẫn giữ nguyên như bước 1,2 hoặc đẩy các ngón tay và nhấc cao hơn một chút.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 4: Đặt 2 tay lên đầu gối và đứng lên từ từ, kết hợp với thân người hơi hướng về phía trước. Ở bước này các bạn không nên bỏ tay ra khỏi đầu gối và cố gắng giữ thằng bằng tạo thói quen ở bước này.</Text>
                    <Image
                        source={require('../../Learn/img/b1_img1.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf:'center',
                            width: deviceScreen.width,
                            resizeMode:'contain'
                        }}
                    />
                    <Text style={{ fontSize: 14, fontWeight: 'bold', textDecorationLine: 'underline',paddingBottom:5  }} >2. Ngồi xuống</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 1: Từ tư thế đứng với 2 tay đặt trên đầu gối, hạ thấp trọng tâm hết mức có thể. Ở bước này, cố gắng điều hướng giữ ổn định giày trượt, không để giày bị trôi hay di chuyển.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 2: Đặt 2 tay xuống mặt đất và tiếp tục hạ thấp trọng tâm.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 3: Đưa chân trái về tư thế quỳ gối.</Text>
                    <Text style={{ fontSize: 13, paddingBottom:5  }}>     Bước 4: Tiếp tục đưa chân phải về tư thế quỳ gối và ổn định tư thế.</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign:'center' }} >Phần hướng dẫn cách ngồi xuống trong patin là thực hiện ngược lại so với "bước 1: đứng dậy". Các bạn chú ý để làm đúng nhé.</Text>
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
        fontWeight: 'bold',

    },

});

//make this component available to the app

export default StepOneScreen;
