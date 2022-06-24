import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { CommentType } from '../../types/Requests/PostType';

function Comment(props: CommentType) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar title='Desafio FullStack FullCycle'>
                    <span>FS</span>
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.name}
                secondary={<React.Fragment>{props.body}</React.Fragment>}
            >
            </ListItemText>
        </ListItem>
    );
}

export default Comment;