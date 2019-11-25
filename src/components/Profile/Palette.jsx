import React, { Component } from 'react';
import ErrorMessage from '../Error/Error';
import { getData, createData } from '../../service/Service';
import { profile } from '../../../Data/profile';
import LikeButton from '../Comments/LikeButton';
import CommentButton from '../Comments/CommentButton';
import { Link } from 'react-router-dom';


export default class Palette extends Component {

    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        profile[0].name = JSON.parse(localStorage.getItem('usersInfo.name'));
        const currentProfile = profile.filter(item => item.name == this.props.name);
        console.log('currentProfile - ', currentProfile);
        const { info } = currentProfile[0];
        createData(info)
            .then(this.updatePosts(info))
            .catch(this.onError);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.name !== this.props.name) {
            const currentProfile = profile.filter(item => item.name == this.props.name);
            const { info } = currentProfile[0];
            createData(info)
                .then(this.updatePosts(info))
                .catch(this.onError);
        }
    }

    updatePosts(info) {
        getData()
            .then(this.onPostsLoaded(info))
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
            const { src, alt, id, description, likes } = item;

            return (
                <div key={id} className="profile_photo">
                    <img src={src} alt={alt} />
                    <div className="profile__bottom_wrapper">
                        <div className="profile__descr">
                            {description}
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