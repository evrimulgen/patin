//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';
import PropTypes from 'prop-types';

// create a component
class VideoScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
            
            <YouTube
                apiKey="AIzaSyBJGlWw5ceWMs2z692aDTcyfwvyHKUQ_CI"
                videoId={this.props.video_id}   // The YouTube video ID
                play={true}             // control playback of video with true/false
                fullscreen={true}       // control whether the video should play in fullscreen or inline
                loop={true}             // control whether the video should loop when ended

                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                showinfo={false}
                rel={false}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
            </View>
        );
    }
}

VideoScreen.propTypes = {
    video_id: PropTypes.string,
}

//make this component available to the app
export default VideoScreen;
