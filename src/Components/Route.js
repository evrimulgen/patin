import React from 'react';
import {
    TabNavigator,
    TabBarBottom,
    StackNavigator
} from 'react-navigation';

//import screen
import LearnScreen from './Learn';
import ProfileScreen from './Profile';
import ListScreen from './Learn/list';




const TabNav = TabNavigator({
    Learn: {
        screen: LearnScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
},
    {
        tabBarComponent: TabBarBottom,
        initialRouteName: 'Learn',
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: '#666666',
            //android options
            showIcon: true,
            upperCaseLabel: false,
            style: {
                borderTopColor: 'transparent',
                backgroundColor: '#f2f2f2',
                flexGrow: 1,

            },
            labelStyle: {
                fontSize: 12,
            },
            iconStyle: {
                width: 26,
                height: 26,
            }
        }
    });

const StackNav = StackNavigator({
    Learn: {
        screen: TabNav,

    },
    List: {
        screen: ListScreen,
    }
},
{
    headerMode:'none',
})


export default StackNav;