import React, { Component  } from 'react';
import HeaderLogIn from '../Headers/HeaderLogIn';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import { Form, Field } from 'react-final-form';

import Comment from './Comment';

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrOfComments: [
                {
                    photo: this.props.location.state.linkProps.photo,
                    altname: this.props.location.state.linkProps.altname,
                    name: this.props.location.state.linkProps.name,
                    value: this.props.location.state.linkProps.description
                }
            ]
        };
        this.setComment = this.setComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.setComment({
            photo: "https://jooinn.com/images/man-19.jpg" ,
            altname: "man",
            name: JSON.parse(localStorage.getItem('usersInfo.name')),
            value: values.comment
        });
        values.comment = '';
    }

    setComment(data) {
        this.setState( { arrOfComments: [...this.state.arrOfComments, data] } );
    }

    render() {

        const { linkProps } = this.props.location.state; 
        const { src, alt, name, photo, altname, likes } = linkProps;

        return (
            <div>
                <HeaderLogIn />
                <Form onSubmit={this.onSubmit}>
                    {({handleSubmit}) =>
                        <form onSubmit={handleSubmit} className="comment_form">
                            <div className="main_wrapper">
                                <Field 
                                    className="comment"
                                    component="img"
                                    src={src}
                                    alt={alt}
                                />
                                <div className="comment__wrapper_right">
                                    <div className="comment__top comment__user">
                                        <Field 
                                            component="img"
                                            src={photo}
                                            alt={altname}
                                        />
                                        <input
                                            className="input_name" 
                                            value={name} 
                                            readOnly
                                        />
                                    </div>
                                    <Comment 
                                        comments={this.state.arrOfComments}
                                    />
                                    <div className="comment__button">
                                        <div className="comment__button__wrapper">
                                            <LikeButton likes={likes} />                                            
                                            <CommentButton comments={this.state.arrOfComments.length}/>
                                        </div>
                                    </div>
                                    <div className="comment__bottom">
                                        <Field 
                                            className="comment__input"
                                            name="comment" 
                                            component="textarea" 
                                            placeholder="Добавьте комментарий..."
                                            autoComplete="off"
                                            required
                                        />
                                        <button className="comment__button_submit" type="submit">
                                            Опубликовать
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    }
                </Form>
            </div>
        );
    };
}