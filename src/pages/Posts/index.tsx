import { Container, Divider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Comment from '../../components/Comment';
import { CommentType, PostType } from '../../types/Requests/PostType';

function Posts(props: PostType) {
    const [post, setPost] = useState({
        id: null,
        userId: null,
        username: null,
        title: null,
        body: null,
    })

    const [postComments, setPostComments] = useState([])

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL as string; 
        fetch(`${url}/posts/${props.id}`)
            .then(response => response.json())
            .then(setPost)
            .catch(err => {
                window.location.href = '/404';
            })
    }, [props, props.id]);

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL as string; 
        fetch(`${url}/posts/${props.id}/comments`)
            .then(response => response.json())
            .then(setPostComments)
            .catch(err => {
            })
    }, [props, props.id]);

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
        <Container style={{ marginTop: '5rem' }}>
            <div>
                <Typography variant='h6'>
                    { post.username }
                </Typography>
            </div>
            <div>
                <h2>{ post.title }</h2>

                <p>{ post.body }</p>
            </div>

            <div>
                <h4>Comentários</h4>
                { postComments.length === 0 && <h1>Não existem comentários para esta postagem</h1> }

                {postComments.map((postComment: CommentType, index: number) => {
                    return (
                        <React.Fragment>
                            <Comment
                                key={postComment.id}
                                name={postComment.name}
                                body={postComment.body}
                                />
                            { index < postComments.length && <Divider variant='inset' /> }
                        </React.Fragment>
                    )
                }
                        )}
            </div>
        </Container>
    );
}

export default Posts;