import Post from "./Post"
import PostSkeleton from "./PostSkeleton"
import { v4 as uuidv4 } from 'uuid';



const PostsList = ({ posts, loading }) => {
    return (
        <div className="post-grid">
            {posts.map((post) => (
                <Post
                    key={uuidv4()}
                    {...post}
                />
            ))}

            {/* Вывод плейсхолдера для следующих страниц */}
            {loading && (
                <>
                    {[...Array(10)].map((_, index) => (
                        <PostSkeleton key={index} />
                    ))}
                </>
            )}
        </div>
    )
}

export default PostsList