import React, { Component } from 'react';
import User from './User';
import ErrorMessage from './Error';
import { getData, createData } from '../service/service';
import { data } from '../../data';

export default class Posts extends Component {

    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        createData(data)
            .then(this.updatePosts())
            .catch(this.onError);
    }

    updatePosts() {
        getData()
            .then(this.onPostsLoaded(data))
            .catch(this.onError);
    }

    onPostsLoaded = (data) => {
        this.setState({ posts: data, error: false });
        console.log('state - ', this.state);
    }

    onError = () => {
        this.setState({ error: true });
        console.log('ERROR');
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, src, alt, descr, id} = item;

            return (
                <div key={id} className="post">
                    <User 
                        src={photo} 
                        alt={altname}
                        name={name}
                        min 
                    />
                    <img src={src} alt={alt}></img>
                    <div className="post_name">
                        {name}
                    </div>
                    <div className="post_descr">
                        {descr}
                    </div>
                </div>
            );
        });
    }

    render() {

        const { error, posts } = this.state;

        if(error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(posts);

        return (
            <div className="left">
                {items}
            </div>
        );
    }
}