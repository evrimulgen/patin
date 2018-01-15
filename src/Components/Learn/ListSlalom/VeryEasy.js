//import liraries
import React, { Component } from 'react';
import { Alert,View, Animated, Text, StyleSheet ,TouchableOpacity,FlatList,Image,Dimensions,ScrollView, Platform} from 'react-native';
import CONFIG from '../../Config';
import { connect } from "react-redux";
import axios from 'react-native-axios';
import openVideo from '../OpenVideo';
import {YouTubeStandaloneIOS, YouTubeStandaloneAndroid} from 'react-native-youtube';

const deviceScreen = Dimensions.get('window');
// create a component
class VeryEasySlalomScreen extends Component { 
    constructor(props){
        super(props);
        // this.state = {
        //     data: [],
        // }
    }
    // _openYoutube(url){
    //     {Platform.OS==='ios' ?
    //     YouTubeStandaloneIOS.playVideo(url)
    //                   .then(() => console.log('iOS Standalone Player Finished'))
    //                   .catch(errorMessage => console.error(errorMessage)) : null
    //                 }
    //      {Platform.OS==='android' ?
    //      YouTubeStandaloneAndroid.playVideo({
    //         apiKey: 'AIzaSyBJGlWw5ceWMs2z692aDTcyfwvyHKUQ_CI',     // Your YouTube Developer API Key
    //         videoId: url,     // YouTube video ID
    //         autoplay: true,             // Autoplay the video
           
    //       })
    //         .then(() => console.log('Standalone Player Exited'))
    //         .catch(errorMessage => console.error(errorMessage)):null
    //     }
    // }

    componentWillMount() {

        axios.get(CONFIG.API_URL + "/skill/1/1")
        .then((response) => {
            this.props.dispatch({
                type: "GET_DATA_VERY_EASY_SLALOM",
                data: response.data,
            })
        })
          .catch((error) => {
              console.error(error);
            });
    }

    static navigationOptions = ({navigation})=> ({
        tabBarLabel: 'Cực dễ',
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
                        <Text style={styles.headerTitle} >Các bài tập Slalom</Text>
                    </View>
                    
                </View>
                
                <View style={{flex:1}}>
                
                    <ScrollView style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                    <FlatList
                    
                        data={this.props.VeryEasySlalom}
                        renderItem={({ item }) => 
                            <View>
                                
                                <View style={{ borderBottomWidth:0.5,marginRight:50,marginLeft:50,borderColor:'gray',borderStyle:'solid'}} ></View>
                                
                                <TouchableOpacity  style={{paddingTop:5,paddingBottom:5,flexDirection:'row'}} 
                                onPress={()=>{ item.url === null ? Alert.alert('Skill Chưa cập nhật') : openVideo(item.url) }}>
                                    <Image source={require('../img/wheel1.png')} style={styles.iconlist}/>
                                    <Text style={{   fontSize: 14, left:15,backgroundColor:'transparent',fontWeight:'bold'}}>{item.name}</Text>
                                    {/* <Text style={{   fontSize: 14, left:15,backgroundColor:'transparent',fontWeight:'bold'}}> {item.url}</Text> */}
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
        VeryEasySlalom: state.VeryEasySlalom,
      
    };
  }
//make this component available to the app
export default connect(mapStateToProps)(VeryEasySlalomScreen);
