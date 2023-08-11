import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts, resetPosts } from '../redux/slices/posts';

const useResetAndFetch = (currentPage) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetPosts());
        dispatch(fetchPosts(currentPage));
    }, [dispatch, currentPage]);
};

export default useResetAndFetch;
