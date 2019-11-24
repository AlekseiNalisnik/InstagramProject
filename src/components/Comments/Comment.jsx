import React, { Component  } from 'react';
import { Field } from 'react-final-form';

export default class Comment extends Component {

    constructor(props) {
        super(props);
        this.renderComment = this.renderComment.bind(this);
        // this.deleteComment= this.deleteComment.bind(this);
    }

    // deleteComment(event) {
    //     event.preventDefault();
    //     console.log('event - ', event.target);
    //     this.props.comments.map((item, index) => {
    //         if(index > 0) {
    //             console.log('item - ', item); 
    //         } 
    //     });
    // }
    

    renderComment(comment, item) {
        return (
            <div className="comment__comments__person" key={item}>
                <Field 
                    component="img"
                    src={comment.photo}
                    alt={comment.altname}
                />
                <div className="comment__comments__person__wrapper">
                    <input
                        className="input_name" 
                        value={comment.name}
                        readOnly
                    />
                    {/* <button className="comment__comments__person__delete" onClick={this.deleteComment}>
                        <span className="exit1"></span> <span className="exit2"></span>
                    </button> */}
                    <input
                        className="input_descr" 
                        value={comment.value} 
                        readOnly
                    />
                </div>
            </div>
        );
    }

    render() {

        const { comments } = this.props;

        return (
            <div className="comment__comments">
                {comments.map(this.renderComment)}
            </div>
        );
    }
    
}