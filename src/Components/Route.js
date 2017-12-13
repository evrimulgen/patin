import React from 'react';
import { TabNavigator } from 'react-navigation';

//import screen
import LearnScreen from './Learn';
import ProfileScreen from './Profile';


const TabNav = TabNavigator({
    Learn: {
        screen: LearnScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
},
    {
        initialRouteName: 'Learn',
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions:{
            activeTintColor: 'blue',
            inactiveTintColor: '#666666',
            //android options
            //showIcon: true,
            upperCaseLabel: false,
            style: {
                borderTopWidth: 1,
                backgroundColor: '#f2f2f2',
              },
              labelStyle: {
                fontSize: 12,
              },
              iconStyle:{
                width: 26,
                height: 26,
              }
        }
    });
export default TabNav;