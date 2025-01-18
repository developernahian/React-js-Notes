import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const navigate = useNavigate();
    // const params = useParams();
    const {postId} = useParams();

    const { id, title, body} = post

    const handleGoBack = () => {
        navigate(-1);
    }

    // console.log(params); //{postId: '3'} //{postId: '4'} //{postId: '1'} depend on click
    console.log(postId); //2 // 8//1 depend on click // as a string
    

    return (
        <div>
            <h3>Post details about</h3>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Post Details: {body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;