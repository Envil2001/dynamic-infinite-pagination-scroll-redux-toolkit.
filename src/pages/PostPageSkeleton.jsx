import React from 'react';
import './PostPageSkeleton.css'; // Импорт стилей

const PostPageSkeleton = () => {
    return (
        <div className="post-page-skeleton">
            <div className="title"></div>
            <div className="body"></div>
            <div className="tags"></div>
            <div className="reactions"></div>
        </div>
    );
};

export default PostPageSkeleton;
