import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 bg-green-300">
            <h2 className="text-4xl">Blogs: {blogs.length}</h2>

            <div>
                {
                    blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
            
        </div>
    );
};

export default Blogs;