import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles.js';

const Posts = () => {    
    const posts = useSelector((state) => state.posts);
const classes = useStyles();
    //
    console.log(posts);
    return ( 
    <>
    <div className={classes.mainContainer}></div>
        <h1>Posts</h1>
        <Post />
        <Post />
     </>
    );
}

export default Posts;