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
import ListSlideScreen from './Learn/ListSlide';
import BasicScreen from './Learn/Basic';

import StepOneScreen from './Learn/StepBasic/StepOne';
import StepTwoScreen from './Learn/StepBasic/StepTwo';
import StepThreeScreen from './Learn/StepBasic/StepThree';
import StepFourScreen from './Learn/StepBasic/StepFour';
import StepFiveScreen from './Learn/StepBasic/StepFive';
import StepSixScreen from './Learn/StepBasic/StepSix';
import StepSevenScreen from './Learn/StepBasic/StepSeven';

import VeryEasySlalomScreen from './Learn/ListSlalom/VeryEasy';
import EasySlalomScreen from './Learn/ListSlalom/Easy';
import MediumSlalomScreen from './Learn/ListSlalom/Medium';
import HardSlalomScreen from './Learn/ListSlalom/Hard';
import VeryHardSlalomScreen from './Learn/ListSlalom/VeryHard';

import VeryEasySlideScreen from './Learn/ListSlide/VeryEasy';
import EasySlideScreen from './Learn/ListSlide/Easy';
import MediumSlideScreen from './Learn/ListSlide/Medium';
import HardSlideScreen from './Learn/ListSlide/Hard';
import VeryHardSlideScreen from './Learn/ListSlide/VeryHard';

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
const StepOneScreenStack=StackNavigator({
    StepOneS:{
        screen: StepOneScreen,
    },
})
const StepTwoScreenStack=StackNavigator({
    StepTwoS:{
        screen: StepTwoScreen,
    },
  
})
const StepThreeScreenStack=StackNavigator({
    StepThreeS:{
        screen: StepThreeScreen,
    }
})
const StepFourScreenStack=StackNavigator({
    StepFourS:{
        screen: StepFourScreen,
    }
})
const StepFiveScreenStack=StackNavigator({
    StepFiveS:{
        screen: StepFiveScreen,
    }
})
const StepSixScreenStack=StackNavigator({
    StepSixS:{
        screen: StepSixScreen,
    }
})
const StepSevenScreenStack=StackNavigator({
    StepSevenS:{
        screen: StepSevenScreen,
    }
})

const StepTabNav=TabNavigator({
    StepOne:{
        screen:StepOneScreenStack,
  
    },
    StepTwo:{
        screen:StepTwoScreenStack,
     
    },
    StepThree:{
        screen: StepThreeScreenStack,
      
    },
    StepFour:{
        screen: StepFourScreenStack,
      
    },
    StepFive:{
        screen: StepFiveScreenStack,
       
    },
    StepSix:{
        screen: StepSixScreenStack,

    },
    StepSeven:{
        screen: StepSevenScreenStack,
       
    }
},{
    tabBarComponent: TabBarBottom,
    initialRouteName: 'StepOne',
    tabBarPosition: 'bottom',
    //activeBackgroundColor:'red',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: '#666666',
       
        //android options
        showIcon: true,
        upperCaseLabel: false,
        style: {
            height:30,
            borderTopColor: 'transparent',
            backgroundColor: '#f2f2f2',
            flexGrow: 1,

        },
        labelStyle: {
            fontSize: 15,
            fontWeight:'bold',
        },
        iconStyle: {
            width: 26,
            height: 26,
        }
    }
})

const SkillSlalomTabNav=TabNavigator({
    VeryEasySlalom:{
        screen: VeryEasySlalomScreen,  
    },
    EasySlalom:{
        screen: EasySlalomScreen,
    },
    MediumSlalom:{
        screen: MediumSlalomScreen,
    },
    HardSlalom:{
        screen: HardSlalomScreen,
    },
    VeryHardSlalom:{
        screen: VeryHardSlalomScreen,
    }
},{
    tabBarComponent: TabBarBottom,
    initialRouteName: 'VeryEasySlalom',
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
            height:30,
            borderTopColor: 'transparent',
            backgroundColor: '#f2f2f2',
            flexGrow: 1,

        },
        labelStyle: {
            fontSize: 12,
            fontWeight:'bold',
        },
        iconStyle: {
            width: 26,
            height: 26,
        }
    }
})

const SkillSlideTabNav=TabNavigator({
    VeryEasySlide:{
        screen: VeryEasySlideScreen,
       
    },
    EasySlide:{
        screen: EasySlideScreen,
    },
    MediumSlide:{
        screen: MediumSlideScreen,
    },
    HardSlide:{
        screen: HardSlideScreen,
    },
    VeryHardSlide:{
        screen: VeryHardSlideScreen,
    }
},{
    tabBarComponent: TabBarBottom,
    initialRouteName: 'VeryEasySlide',
    tabBarPosition: 'bottom',animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: '#666666',
       
        //android options
        showIcon: true,
        upperCaseLabel: false,
        style: {
            height:30,
            borderTopColor: 'transparent',
            backgroundColor: '#f2f2f2',
            flexGrow: 1,

        },
        labelStyle: {
            fontSize: 12,
            fontWeight:'bold',
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
        screen: SkillSlalomTabNav,
    },
    ListSlide:{
        screen: SkillSlideTabNav,
    },
    Basic:{
        screen: StepTabNav,
    },
},
{
    headerMode:'none',
})


export default StackNav;