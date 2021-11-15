import {useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import Index from "../pages/index"
import Edit from "../pages/Edit"

const Main = (props) => {
    // State to hold our list of bookmarks
    const [bookmarks, setBookmarks] = useState(null)

    // your deployed heroku URL
  const URL = "https://bookmarkd-backend.herokuapp.com/bookmark/"

  // function to get updated list of bookmarks
  const getBookmarks = async () => {
    // make the api call
    const response = await fetch(URL)
    // turn the response in an object
    const data = await response.json()
    // set the state to the api data
    setBookmarks(data)
}

  // function that will later be passed data from our new/create form and make the post request to create a new bookmark
  const createBookmarks = async (bookmark) => {
    // make the post request to our API
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookmark)
    })

    // get updated list of bookmark
    getBookmarks()
}
  // function to update a bookmark
  const updateBookmarks = async (bookmark, id) => {
    // make the put request
    await fetch(URL + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookmark)
    })
    // update the list of bookmark
    getBookmarks()
}

// create function to delete a bookmark
const deleteBookmarks = async (id) => {
    // make the delete request
    await fetch(URL + id, {
        method: "delete"
    })
    // update the list of bookmarks
    getBookmarks()
}



   // a useEffect to make a call to getBookmark when page loads
   useEffect(() => {
    getBookmarks()
}, [])

return (
    <main>
      <Routes>
        <Route path="/" element={
        <Index bookmarks={bookmarks} createBookmarks={createBookmarks}/>
        } />
        <Route path="/bookmark/:id" element={
        <Edit bookmarks={bookmarks} updateBookmarks={updateBookmarks} deleteBookmarks={deleteBookmarks}/>} 
        />
      </Routes>
    </main>
  );
}

export default Main;