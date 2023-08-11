import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { fetchPosts } from "../redux/slices/posts";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useResetAndFetch from "../hooks/useResetAndFetch";
import PostsList from "../components/Card/PostsList";


const HomePage = () => {
    const dispatch = useDispatch();
    const { posts, currentPage, loading, hasMore } = useSelector(state => state.posts);

    // Сбрасываем посты и загружаем первую страницу при изменении маршрута
    useResetAndFetch(1);

    // Обработка скроллинга
    const handleScroll = useCallback(() => {
        if (!loading && hasMore) {
            dispatch(fetchPosts(currentPage + 1));
        }
    }, [dispatch, currentPage, loading, hasMore]);

    // Добавляем обработчик скроллинга с помощью созданного хука
    useInfiniteScroll(handleScroll);
    return (
        <PostsList posts={posts} loading={loading} />
    )
}


export default HomePage;