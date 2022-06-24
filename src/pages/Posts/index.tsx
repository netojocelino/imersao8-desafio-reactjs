import React, { useEffect, useState } from 'react';
import { PostType } from '../../types/Requests/PostType';

function Posts(props: PostType) {
    const [post, setPost] = useState({
        id: null,
        userId: null,
        username: null,
        title: null,
        body: null,
    })

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL as string; 
        fetch(`${url}/posts/${props.id}`)
            .then(response => response.json())
            .then(setPost)
            .catch(err => {
                window.location.href = '/404';
            })
    }, [props.id]);

    useEffect(() => {
        if(post.userId === null) return;

        const url = process.env.REACT_APP_API_URL as string; 
        fetch(`${url}/users/${post.userId}`)
            .then(response => response.json())
            .then(({ name }) => {
                const newPost = post;
                newPost.username = name;
                setPost( newPost)
            })
            .catch(err => {
                console.error(err)
            })
    }, [post, post.userId]);
    return (
        <div>
            <h2>{ post.title }</h2>
            <small>Posted by { post.username }</small>

            <p>{ post.body }</p>
        </div>
    );
}

export default Posts;