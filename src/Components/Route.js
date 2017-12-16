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
import StepThreeScreen from './Learn/StepBasic/StepThree';
import StepFourScreen from './Learn/StepBasic/StepFour';
import StepFiveScreen from './Learn/StepBasic/StepFive';
import StepSixScreen from './Learn/StepBasic/StepSix';
import StepSevenScreen from './Learn/StepBasic/StepSeven';

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
    animationEnabled: false,
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