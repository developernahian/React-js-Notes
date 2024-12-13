
import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  
  const handleAddToBookmark = (blog) => {
    console.log(blog);
    console.log('bookmark adding soon');
    
    
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    // console.log('marking as read',time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    
    
  }


  return (
    <>
      <Header></Header>
      {/* BOOKMARK: */}
      <main className='md:flex max-w-7xl mx-auto mt-10'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>

    </>
  )
}

export default App
