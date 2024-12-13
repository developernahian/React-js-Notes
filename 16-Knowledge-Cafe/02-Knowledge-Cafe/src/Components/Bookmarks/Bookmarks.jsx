import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-yellow-100 text-center ml-4">
            <h2 className='text-3xl'> Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>



    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,

};


export default Bookmarks;