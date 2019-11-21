import React, { Component } from 'react';
import User from './User';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import { Link } from 'react-router-dom';

const Post = (props) => {

    const { src, alt, name, descr, id, photo, altname, likes } = props;

    return (
        <div key={id} className="post">
            <User 
                src={photo} 
                alt={altname}
                name={name}
                min 
            />
                <img src={src} alt={alt}></img>
            <div className="post__button">
                <LikeButton likes={likes} />
                <Link to={{
                    pathname: '/comment',
                    state: {
                        linkProps: props
                    }
                }} className="post__link"> 
                    <CommentButton comments={2} />
                </Link>
            </div>
            <div className="post__descr">
                {descr}
            </div>
        </div>
    );
}

export default Post;