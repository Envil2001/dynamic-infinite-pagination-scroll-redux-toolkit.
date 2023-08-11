

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PostPage.css'; // Импорт стилей
import { fetchPost } from '../redux/slices/posts';
import PostPageSkeleton from './PostPageSkeleton';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { post, loading } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPost(id)); // Загрузка данных выбранного поста по его id
    }, [dispatch, id]);
    if (loading || !post) {
        return <PostPageSkeleton />
    }


    return (
        <div className="post-page">
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
            <div className="tags">
                {post?.tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="reactions">
                <span>{post?.reactions} Reactions</span>
            </div>
        </div>
    );
};

export default PostPage;
