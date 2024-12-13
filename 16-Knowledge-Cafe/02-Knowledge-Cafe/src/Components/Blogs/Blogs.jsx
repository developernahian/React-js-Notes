import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmark}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 bg-green-200">
            <h2 className="text-4xl">Blogs: {blogs.length}</h2>

            <div>
                {
                    blogs.map(blog=> <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark}></Blog>)
                }
            </div>
            
        </div>
    );
};


Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blogs;