import { useLoaderData } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();

    const { id, title, body} = post
    return (
        <div>
            <h3>Post details about</h3>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Post Details: {body}</p>
        </div>
    );
};

export default PostDetails;