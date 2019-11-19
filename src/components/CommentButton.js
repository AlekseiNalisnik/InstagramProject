import React, { useState } from 'react';

export default function CommentButton(props) {
//   const [count, setCount] = useState(0);
//   const [flag, setFlag] = useState(false);


  return (
        // className={flag ? `button_heart_toggler heart` : `heart`} 
        // onClick={() => { 
        //     if(flag === false) {
        //         setFlag(true);
        //         setCount(count + 1);
        //     }
        //     else {
        //         setFlag(false);
        //         setCount(count - 1);
        //     }
        // }} 
        <div className="post__comment">
            <i className="far fa-comment"></i>
            <div className={props.profile ? "new__post__comment__block" : "post__comment__block"}>{`2`}</div>
        </div>
  );
}