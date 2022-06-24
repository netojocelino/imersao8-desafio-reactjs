import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


function Header() {
    return (
        <AppBar position='fixed'>
            <Toolbar variant='dense'>
            <Typography variant='h6' color='inherit'>
                Jocelino Neto
            </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
