import React, { useState } from 'react';

export default function LikeButton(props) {
  const [count, setCount] = useState(props.likes);
  const [flag, setFlag] = useState(false);
  
  return (
    <div className="post_like">
      <div 
          className={flag ? `button_heart_toggler heart` : `heart`} 
          onClick={() => { 
              if(flag === false) {
                  setFlag(true);
                  setCount(count + 1);
              }
              else {
                  setFlag(false);
                  setCount(count - 1);
              }
          }} >
            <div className={props.profile ? "hidden_block" : "inside_block"}>{count}</div>
      </div>
      <div className={props.profile ? "near_block" : "hidden_block"}>{count}</div>
    </div>
  );
}
