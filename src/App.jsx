import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'
import Header from './Components/Header/Header'

function App() {
 const [bookmarks, setBookmarks] = useState([]);

 const [readingTime, setReadingTime] = useState(0);

 const handleAddToBookmarks = blog =>{
  const newBookmarks=[...bookmarks, blog];
  setBookmarks(newBookmarks); 
}

const handleMarkAsRead = (Id, time) =>{
 const newReadingTime = readingTime + time;
 setReadingTime(newReadingTime);

//  remove the read blog from bookmark
// console.log('remove bookmark', Id)
const remainingBookmarks = bookmarks.filter(bookmark => bookmark.Id !== Id)
setBookmarks(remainingBookmarks)
}
  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks ={handleAddToBookmarks}></Blogs>
      <Bookmark
      bookmarks = {bookmarks}
      readingTime={readingTime}
      ></Bookmark>
    </div>
    </>
  )
}



export default App
