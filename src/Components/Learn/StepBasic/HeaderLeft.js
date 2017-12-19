//import liraries
import React, { Component } from 'react';
import {TouchableOpacity,Image } from 'react-native';
import PropTypes from 'prop-types';

// create a component
class HeaderLeftStep extends Component {
    render() {
        return (
            <TouchableOpacity
            onPress={this.props.onPress}>
            <Image
                source={require('../img/icon_tabnav.png')}
                style={{
                    marginLeft: 15,
                    width: 26,
                    height: 26,
                }}
            />
        </TouchableOpacity>
        );
    }
}
HeaderLeftStep.propTypes = {
    onPress: PropTypes.func,
}
//make this component available to the app
export default HeaderLeftStep;
