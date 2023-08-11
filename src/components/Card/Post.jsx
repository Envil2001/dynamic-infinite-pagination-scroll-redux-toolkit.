import React from 'react';
import './Post.css'; // Импорт стилей
import { Link } from 'react-router-dom';

const Post = ({ id, title, body, tags, reactions, userId }) => {
    return (
        <Link to={`/posts/${id}`} className="post">
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="reactions">
                <span>{reactions} Reactions</span>
            </div>
        </Link>
    );
};

export default Post;