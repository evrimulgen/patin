//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, FlatList } from 'react-native';
import CONFIG from '../Config';

const deviceScreen = Dimensions.get('window');

// create a component
class ListSlalomScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }
   
        
    
    componentWillMount() {

        fetch(CONFIG.API_URL + "/skill/slalom")
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
             data:responseJson})
            
          })
          .catch((error) => {
              console.error(error);
            });
    }
    
    render() {
        
        return (
            <View style={{flex:1}}>
                <View style={{ height: 50, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => { this.props.navigation.goBack() }}>
                        <Image
                            source={require('./img/back_icon.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <View style={{ width: deviceScreen.width - 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.headerTitle} >SKILL</Text>
                    </View>
                    <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => { this.props.navigation.goBack() }}>
                        <Image
                            source={require('./img/back_icon.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                
                <View style={{flex:1}}>
                    <ScrollView style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                    <FlatList
                    
                        data={this.state.data}
                        renderItem={({ item }) => 
                            <View>
                                
                                <View style={{ height: 10 }} ></View>
                                
                                <TouchableOpacity style={{borderWidth: 2, borderRadius: 20, borderColor: 'white',backgroundColor:'#4775d1'}}  
                                 >
                                
                                    <Text style={{  color: 'white', fontSize: 20, left:20,backgroundColor:'transparent'}}>{item.name}</Text>
                                    <Text style={{  color: 'white', fontSize: 20, textAlign:'right',right:20,backgroundColor:'transparent' }}>{item.level}</Text>
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
        width: 30,
        height: 30,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default ListSlalomScreen;
