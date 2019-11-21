import React, { Component } from 'react';
import ErrorMessage from './Error';
import { getData, createData } from '../service/service';
import { profile } from '../../profile';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import { Link } from 'react-router-dom';

export default class Palette extends Component {

    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        createData(profile)
            .then(this.updatePosts())
            .catch(this.onError);
    }

    updatePosts() {
        getData()
            .then(this.onPostsLoaded(profile))
            .catch(this.onError);
    }

    onPostsLoaded = (profile) => {
        this.setState({ posts: profile, error: false });
    }

    onError = () => {
        this.setState({ error: true });
        console.log('ERROR');
    }

    renderItems(arr) {
        return arr.map(item => {
            const { src, alt, id, descr, likes } = item;

            return (
                <div key={id} className="profile_photo">
                    <img src={src} alt={alt} />
                    <div className="profile__bottom_wrapper">
                        <div className="profile__descr">
                            {descr}
                        </div>
                        <div className="profile__button">
                            <div className="profile__button__border_wrapper">
                                <LikeButton profile={true} likes={likes} />
                            </div> 
                            <div className="profile__button__border_wrapper">
                                
                                    <Link to={{
                                        pathname: '/comment',
                                        state: {
                                            linkProps: item
                                        }
                                    }} className="profile__link"> 
                                        <CommentButton comments={3} profile={true}/>
                                    </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {

        const { error, posts } = this.state;
        const { name, altname, photo } = this.props;

        if(error) {
            return <ErrorMessage />
        }
        console.log('POSTS - ', posts);

        if(posts.length > 0) {
            posts.map(item => {
                item.photo = photo;
                item.altname = altname;
                item.name = name;
            })
        }

        const items = this.renderItems(posts);

        return (
            <div className="palette_profile">
                {items}
            </div>
        );
    }
}