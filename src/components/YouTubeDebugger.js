// Code YouTubeDebugger Component Here
import React from 'react';

export default class YoutubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    };
  }

  handleBitrate = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
    },() => console.log(this.state.settings.bitrate))
    
  }

  handleResolution = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video:{
                resolution: '720p'
            }
        }
    },() => console.log(this.state.settings.video.resolution))
    
  }

  render() {
    return (
        <div>
            <button onClick={this.handleBitrate}>Bitrate Button</button>
            <button onClick={this.handleResolution}>Resolution Button</button>
        </div>
    );
  }
}