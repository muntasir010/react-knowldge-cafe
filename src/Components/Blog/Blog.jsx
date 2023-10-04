import PropTypes from 'prop-types';
import {  FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const {Id, Title, Cover, Author_img, Author, Posted_Date, Reading_Time, Hashtags } = blog;
    return (
        <div className='justify-between mb-10 space-y-5'>
            <img className='w-full h-[500px]' src={Cover} alt={`Cover pic of the title${Title}`} />

            <div className='flex justify-between'>
                <div className='flex'>
                    <div>
                        <img className='w-14 h-14 rounded-full' src={Author_img}
                            alt="" />
                    </div>
                    <div className='ml-4'>
                        <p className='text-xl font-semibold'>{Author}</p>
                        <p>{Posted_Date}</p>
                    </div>
                </div>

                <div>
                    <span>{Reading_Time} read</span>
                    <button
                    onClick={() =>handleAddToBookmarks(blog)}
                    className='ml-2 text-2xl text-green-400 mt-2'>
                        <FaBookmark></FaBookmark>
                    </button>

                </div>

            </div>
            <h2 className="text-4xl mt-4 mb-4">{Title}</h2>
            <p>
                {
                Hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button
             onClick={() => handleMarkAsRead(Id, Reading_Time)}
             className='text-purple-600  font-bold underline'
             >Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}

export default Blog;