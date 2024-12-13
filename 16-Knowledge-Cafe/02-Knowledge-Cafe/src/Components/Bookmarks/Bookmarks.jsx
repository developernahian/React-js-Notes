import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-yellow-100 text-center ml-4">
            <div className='bg-green-300 p-4 m-4 rounded-2xl'>
                <h3 className='text-2xl'>Spent time on read: {readingTime} min</h3>
            </div>
            <h2 className='text-2xl'> Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>



    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number

};


export default Bookmarks;