//import liraries
import React, { Component } from 'react';
import {
  Platform
} from 'react-native';
import {YouTubeStandaloneIOS, YouTubeStandaloneAndroid} from 'react-native-youtube';


function openVideo(video_id) {
{Platform.OS==='ios' ?
        YouTubeStandaloneIOS.playVideo(video_id)
                      .then(() => console.log('iOS Standalone Player Finished'))
                      .catch(errorMessage => console.error(errorMessage)) : null
                    }
         {Platform.OS==='android' ?
         YouTubeStandaloneAndroid.playVideo({
            apiKey: 'AIzaSyBJGlWw5ceWMs2z692aDTcyfwvyHKUQ_CI',     // Your YouTube Developer API Key
            videoId: video_id,     // YouTube video ID
            autoplay: true,             // Autoplay the video
           
          })
            .then(() => console.log('Standalone Player Exited'))
            .catch(errorMessage => console.error(errorMessage)):null
        }
}


export default openVideo;
