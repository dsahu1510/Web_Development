import React from 'react';

class VideoList extends React.Component{

    renderVideos = () =>{

        var list1= this.props.videos.map((video1) => {
            
            return <li onClick={ () => this.props.videoSelection(video1)} key={video1.id.videoId}>
                <img src={video1.snippet.thumbnails.default.url}></img>{video1.snippet.title}</li>
        })
        return list1;
    }


    render(){

        return(
            <div>
                    <ul>
                        {this.renderVideos()}
                    </ul>
                    {/* {this.props.videos.length}  to see the length ofthe videos we get*/} 
              
            </div>
        )
    }
}
export default VideoList;