import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Post } from './Post';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { postState$ } from '../../redux/selectors';

export const PostList = () => {

    const dispatch = useDispatch();
    const posts = useSelector(postState$);

    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch])

    return <Grid container spacing={2} alignItems='stretch'>
        {
            posts.map((post, index) => <Grid key={index} item xs={12} sm={6}>
                <Post post={post} />
            </Grid>)
        }
    </Grid>
}