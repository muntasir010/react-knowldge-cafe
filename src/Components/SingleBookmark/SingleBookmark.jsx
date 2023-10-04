import PropTypes from 'prop-types';

const SingleBookmark = ({bookmark}) => {
    const{Title} = bookmark;
    return (
        <div className="bg-slate-200 mt-5 p-4 m-4 rounded-xl">
            <h3 className='text-2xl'>{Title}</h3>
            
        </div>
    );
};

SingleBookmark.propTypes = {
    bookmark: PropTypes.object,
}

export default SingleBookmark;