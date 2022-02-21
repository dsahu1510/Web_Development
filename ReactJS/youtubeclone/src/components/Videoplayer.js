import React from 'react';

class VideoPlayer extends React.Component{

    render(){

        if(this.props.videoF){
            var videoId = this.props.videoF.id.videoId;
            var url = `https://www.youtube.com/embed/${videoId}`
            return(
                <div>
                    <iframe width="560" height="315" src={url} title="YouTube video player" allowFullScreen></iframe>
                    
                </div>
            )
        }
        else{
            return(
                <div>loading....</div>
            )
        }
        
    }
}
export default VideoPlayer;