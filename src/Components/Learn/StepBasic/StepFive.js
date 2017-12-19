//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import HeaderLeftStep from './HeaderLeft';

const deviceScreen = Dimensions.get('window');

// create a component
class StepFiveScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: '5',
        title: 'Bài 5',
        headerStyle: {
            height: 50,
            borderBottomColor: 'transparent',
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerLeft: <HeaderLeftStep onPress={() => { navigation.navigate('Home') }} />,
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
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', paddingBottom: 10, paddingTop: 10 }}>CÁCH DỪNG LẠI</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', paddingBottom: 10 }} >Thắng gót (Heel Brake):</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Đang trượt ở tư thế 2 chân song song.</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Dồn trọng tâm vào chân trái, giữ tư thế khuỵ chân trái.</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Đưa chân phải về trước, nhón mũi lên cho phần thân tiếp xúc với mặt sàn.</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Dồn lực vào gót chân phải để giảm tốc độ.</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Tiếp tục thực hiện động tác để di chuyển.</Text>
                    <Image
                        source={require('../../Learn/img/b5_img1.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf: 'center',
                            width: deviceScreen.width,
                            resizeMode: 'contain'
                        }}
                    />
                    <Text style={{ fontSize: 13, paddingBottom: 5, alignSelf: 'center' }}>Nhìn ngang</Text>
                    <Image
                        source={require('../../Learn/img/b5_img2.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf: 'center',
                            width: deviceScreen.width,
                            resizeMode: 'contain'
                        }}
                    />
                    <Text style={{ fontSize: 13, paddingBottom: 5, alignSelf: 'center' }}>Nhìn thẳng</Text>

                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', paddingBottom: 10 }} >Phanh (thắng) chữ A</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Đặt 2 chân hình chữ V.</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Trượt 2 chân về phía trước.</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Khép 2 đầu gối, 2 mũi chân chụm vào nhau tạo thành tư thế chữ A.</Text>
                    
                    <Image
                        source={require('../../Learn/img/b5_img3.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf: 'center',
                            width: deviceScreen.width,
                            resizeMode: 'contain'
                        }}
                    />
                    <Text style={{ fontSize: 13, paddingBottom: 5, alignSelf: 'center' }}>Cách phanh chữ A khi trượt patin</Text>
                   
                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', paddingBottom: 10 }} >Phanh (thắng) chữ T</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5,textAlign:'justify' }}>Phanh chữ T trong khi trượt patin là kiểu phanh an toàn và dễ thực hiện nhất. Đây là kiểu phanh mà tôi khuyên bạn nên học và sử dụng nó thường xuyên. Dù bạn chạy ở tốc độ nào thì phanh chữ T cũng đảm bảm thực hiện dễ dàng và hiệu quả. Cực an toàn trong việc giảm tốc độ và dễ dàng làm chủ cơ thể bạn.</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Đặt chân trái hoặc phải về phía sau (tùy theo chân thuận).</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Dồn trọng tâm về chân trước.</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Nhấc chân sau lên tạo góc 45 độ.</Text>
                    <Text style={{ fontSize: 13, paddingBottom: 5 }}>     - Đặt chân sau xuống và kéo lại gần chân trước tạo thành chữ T.</Text>
                    <Image
                        source={require('../../Learn/img/b5_img4.jpg')}
                        style={{
                            marginLeft: 10,
                            alignSelf: 'center',
                            width: deviceScreen.width,
                            resizeMode: 'contain'
                        }}
                    />
                    <Text style={{ fontSize: 13, paddingBottom: 5, textAlign:'center' }}>Cách phanh chữ T.</Text>

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
export default StepFiveScreen;
