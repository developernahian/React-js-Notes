import { Link } from "react-router-dom";


const Post = ({post}) => {
    console.log(post);
    const {id, title} = post
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px',
    }
    
    return (
        <div style={userStyle}>

            <h4>Post of Id: {id}</h4>
            <p>Title: {title}</p>

            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Click Me</button></Link>

        </div>
    );
};

export default Post;