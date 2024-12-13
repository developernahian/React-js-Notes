
import { useEffect, useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  
  const handleAddToBookmark = (blog) => {
    console.log(blog);
    console.log('bookmark adding soon');
    
    
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }


  return (
    <>
      <Header></Header>
      {/* BOOKMARK: */}
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>

    </>
  )
}

export default App
