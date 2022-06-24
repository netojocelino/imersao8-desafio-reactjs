import React from 'react'
import { Avatar, ListItem, ListItemText } from '@material-ui/core';
import { PostType } from '../../types/Requests/PostType';

export function Post (props: PostType) {
    const to = (e: any) => {
        e.preventDefault();
        window.location.href = `/posts/${props.id}`;
    }
    return (
        <ListItem button onClick={to} className='border-right'>
            <Avatar title='Desafio FullStack FullCycle'>
                <span>FS</span>
            </Avatar>
            <ListItemText inset primary={props.title} />
        </ListItem>
    )
}