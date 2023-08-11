import React from 'react';
import './PostSkeleton.css'; // Импорт стилей

const PostSkeleton = () => {
  return (
    <div className="post-skeleton">
      <div className="title"></div>
      <div className="body"></div>
      <div className="tags"></div>
      <div className="reactions"></div>
    </div>
  );
};

export default PostSkeleton;
