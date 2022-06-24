import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { Post } from '../../components/Post';
import { PostType } from '../../types/Requests/PostType';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL as string;
        fetch(`${url}/posts`)
            .then(response => response.json())
            .then(setPosts)
            .catch(err => {
                window.location.href = '/404';
            })
    }, []);


    return (
        <Container>
            <h1>Posts</h1>

            { posts.length === 0 && <p>Carregando...</p> }

            {posts.map( (post: PostType) =>
                <Post
                    key={ post.id }
                    id={ post.id }
                    title={ post.title as string }
                />
            )}
        </Container>
    );
}

export default Home;