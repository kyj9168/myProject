import React from 'react';
import BigText from '../components/BigText';
import './containers.css';

const Post = ({params}) => {
    return (
        <div>
            {<BigText>{params.id}</BigText>}
        </div>
    );
};

export default Post;