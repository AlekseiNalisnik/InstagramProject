import React from 'react';

export default function CommentButton(props) {

    const counter = props.comments - 1;

    return (
      <div className="post__comment">
          <i className="far fa-comment"></i>
          <div className={props.profile ? "new__post__comment__block" : "post__comment__block"}>{counter}</div>
      </div>
    );
}