import React, { Component } from 'react';
import ErrorMessage from '../Error/Error';
import { getData, createData } from '../../service/Service';
import { data } from '../../../Data/data';
import Post from './Post';

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
    }

    onError = () => {
        this.setState({ error: true });
        console.log('ERROR');
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, src, alt, description, id, likes} = item;

            return (
                <Post 
                    key={id}
                    id={id}
                    src={src} 
                    photo={photo}
                    alt={alt} 
                    altname={altname}
                    name={name}
                    description={description}
                    likes={likes}
                />
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