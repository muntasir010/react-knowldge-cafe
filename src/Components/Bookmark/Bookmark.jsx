import PropTypes from 'prop-types';
import SingleBookmark from '../SingleBookmark/SingleBookmark';

const Bookmark = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 text-center">
            <div>
                <h3 className='text-3xl'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl ">BookMarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <SingleBookmark
                    key={idx} bookmark={bookmark}
                ></SingleBookmark>)
            }
            
        </div>)
}

Bookmark.propTypes = {
bookmarks: PropTypes.array,
readingTime: PropTypes.number,
}

export default Bookmark