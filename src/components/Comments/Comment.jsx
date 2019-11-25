import React, { Component  } from 'react';
import { Field } from 'react-final-form';

export default class Comment extends Component {

    constructor(props) {
        super(props);
        this.renderComment = this.renderComment.bind(this);
    }

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