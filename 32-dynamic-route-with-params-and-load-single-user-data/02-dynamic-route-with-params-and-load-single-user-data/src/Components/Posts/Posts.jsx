import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const userGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: '10px',
}

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts {posts.length}</h2>
            <div style={userGrid}>
            {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
            </div>

        </div>
    );
};

export default Posts;