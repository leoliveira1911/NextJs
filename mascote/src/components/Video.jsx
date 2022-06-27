import React from "react";
import YouTube from "react-youtube";
  
export default class YoutubeVideo 
extends React.Component {
  render() {
    const opts = {
      height: "277",
      width: "443",
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
      <div>
        <h3>Assista ao vídeo</h3>
        <YouTube videoId="i_SPGXCKFFk" 
            opts={opts} onReady={this._onReady} />
      </div>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}

