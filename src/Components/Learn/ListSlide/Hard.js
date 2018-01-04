//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,FlatList,Image,Dimensions,ScrollView} from 'react-native';
import CONFIG from '../../Config';
import axios from 'react-native-axios';
import { connect } from "react-redux";
const deviceScreen = Dimensions.get('window');


// create a component
class HardSlideScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }
    componentWillMount() {
        axios.get(CONFIG.API_URL + "/skill/2/4")
        .then((response) => {
            this.props.dispatch({
                type: "GET_DATA_HARD_SLIDE",
                data: response.data,
            })
        })
          .catch((error) => {
              console.error(error);
            });
    }
    static navigationOptions = ({navigation})=> ({
        tabBarLabel: 'Khó',
        // tabBarIcon: ({ tintColor }) => (
        //     <Image
        //         source={require('../Images/Learn/icon_tabnav.png')}
        //         style={[styles.icon, { tintColor: tintColor }]}
        //     />
        // ),
    });
    render() {
        return (
            <View style={{flex:1,marginTop:10}}>
                <View style={{ height: 50, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}
                         onPress={() => { this.props.navigation.navigate('Home') }}>
                        <Image
                      source={require('../img/icon_tabnav.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <View style={{ width: deviceScreen.width - 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.headerTitle} >Các bài tập Slide</Text>
                    </View>
                    <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => { this.props.navigation.goBack() }}>
                        <Image
                            source={require('../img/back_icon.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                
                <View style={{flex:1}}>
                    <ScrollView style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                    <FlatList
                    
                        data={this.props.HardSlide}
                        renderItem={({ item }) => 
                            <View>
                                
                                <View style={{ borderBottomWidth:0.5,marginRight:50,marginLeft:50,borderColor:'gray',borderStyle:'solid'}} ></View>
                                
                                <TouchableOpacity  style={{paddingTop:5,paddingBottom:5,flexDirection:'row'}} 
                                 >
                                    <Image source={require('../img/wheel4.png')} style={styles.iconlist}/>
                                    <Text style={{   fontSize: 14, left:15,backgroundColor:'transparent',fontWeight:'bold'}}>{item.name}</Text>
                                    <Text style={{   fontSize: 14, left:15,backgroundColor:'transparent',fontWeight:'bold'}}> {item.url}</Text>
                                    {/* <Text style={{   fontSize: 14, textAlign:'right',right:15,backgroundColor:'transparent' }}>{item.lv}</Text> */}
                                </TouchableOpacity>
                            </View>
                        }                      
                        keyExtractor={item => item.id}
                    />
                    </ScrollView>

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
        width: 26,
        height: 26,
    },
    iconlist: {
        width: 40,
        height: 40,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
function mapStateToProps(state) {
    return {
    HardSlide: state.HardSlide,
    }
}
//make this component available to the app
export default connect(mapStateToProps)(HardSlideScreen);
