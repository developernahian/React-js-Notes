//install PropTypes->    npm install --save prop-types
// import PropTypes
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    // console.log(blog);
    
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog   
    
    return (
        // BOOKMARK:
        <div className='mb-20'>
        {/* Dynamic alt */}
            <img className='w-full mb-8' src={cover} alt={`Cover Picture of the title ${title}`} />



            <div className='flex justify-between bg-red-400 mb-4'>
                
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="img" />

                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>


                <div>
                    <span>{reading_time} min read</span>
                    <button>Bookmark</button>
                </div>


            </div>


            
            <h2>{title}</h2>
            {/* <p>{hashtags}</p>  OUTPUT: beginnerses6 without space. so map korte hobe */}
            {/* BOOKMARK: */}
            {/* hastags map na korle alada alada na hoye without space aksathe show kore */}
            {
                hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
            }
            {/* OUTPUT: #beginners #es6 */}
            {/* NOTE: {} er moddhe comment kora jabe na */}
        </div>
    );
};

//props validation
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
};

export default Blog;