import React from 'react';
import {
    TabNavigator,
    TabBarBottom,
    StackNavigator
} from 'react-navigation';

//import screen
import LearnScreen from './Learn';
import ProfileScreen from './Profile';
import ListSlalomScreen from './Learn/ListSlalom';
import BasicScreen from './Learn/Basic';

import StepOneScreen from './Learn/StepBasic/StepOne';
import StepTwoScreen from './Learn/StepBasic/StepTwo';

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
const StepTabNav=TabNavigator({
    StepOne:{
        screen:StepOneScreen,
    },
    StepTwo:{
        screen:StepTwoScreen
    }

},{
    tabBarComponent: TabBarBottom,
    initialRouteName: 'StepOne',
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
})



const StackNav = StackNavigator({
    Home: {
        screen: TabNav,
    },
    ListSlalom: {
        screen: ListSlalomScreen,
    },
    Basic:{
        screen: StepTabNav,
    }
},
{
    headerMode:'none',
})


export default StackNav;