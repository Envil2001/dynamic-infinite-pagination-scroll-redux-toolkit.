import { useEffect } from 'react';

const useInfiniteScroll = (callback) => {
    useEffect(() => {
        const handleScroll = (e) => {
            if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
                callback();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [callback]);
};

export default useInfiniteScroll;
