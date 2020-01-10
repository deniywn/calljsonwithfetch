import React from 'react';

const Post = (props) =>  {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/200/150/tech" alt="dummy"></img>
            </div>
            <div className="content">
                <p className="title">{props.title}</p>
                <p className="desc">{props.body}</p>

            </div>
        </div>
    )
}

export default Post;