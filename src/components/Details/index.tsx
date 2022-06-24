import React from 'react';
import PropTypes from 'prop-types';

type PropTypes = {
    children: any;
    bounce: boolean;
    icon: string;
};

function Detail(props: PropTypes) {
    const bounce = (props.bounce == true)
        ? 'detail-bounce'
        : '';

    return (
        <span className={ bounce }>
            { props.children }
            <span className='detail-bounce-icon'>
                { props.icon || '' }
            </span>
        </span>
    );
}

export default Detail;