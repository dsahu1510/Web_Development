import React from 'react';


class Comment extends React.Component{

    render(){

        if(this.props.displayComment){
            var commentId = this.props.displayComment.etag;
            var url2 = `https://www.googleapis.com/youtube/v3/commentThreads?snippet&${commentId}&key=AIzaSyCz0sQtkH2W9xv20GXRbqh3d9_fZqTYPOs`
        }
        return(
            <div>
                <h1>comment</h1>
                {this.props.displayComment}
                
            </div>
        )
    }
}
export default Comment;

// {
//     "kind": "youtube#commentThreadListResponse",
//     "etag": etag,
//     "nextPageToken": string,
//     "pageInfo": {
//       "totalResults": integer,
//       "resultsPerPage": integer
//     },
//     "items": [
//       commentThread Resource
//     ]
//   }


// var comments = "https://www.googleapis.com/youtube/v3/commentThreads?snippet&videoId=QMQyMzMbAso&key=AIzaSyCz0sQtkH2W9xv20GXRbqh3d9_fZqTYPOs"
