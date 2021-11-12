import {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom";

const Edit = (props) => {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  const bookmarks = props.bookmarks;
  const [editForm, setEditForm] = useState({})
  useEffect(() => {
      if(props.bookmarks){
          const bookmark = bookmarks.find((b) => b._id === id);
          setEditForm(bookmark)
      }
  }, [props.bookmarks])
  if (props.bookmarks) {
    const bookmark = bookmarks.find((b) => b._id === id);
    
    const handleChange = (event) => {
        const newState = {...editForm}
        newState[event.target.name] = event.target.value
        setEditForm(newState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateBookmarks(editForm, bookmark._id)
        navigate("/")
    }

    const removeBookmark = () => {
        props.deleteBookmarks(bookmark._id)
        navigate("/")
    }

    const form = (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.url}
            name="url"
            placeholder="url"
            onChange={handleChange}
          />
          <input type="submit" value="Update Bookmark" />
        </form>
      );

    return (
      <div className="bookmark">
        <h1>{bookmark.title}</h1>
        <h2>{bookmark.url}</h2>
        {form}
        <button onClick={removeBookmark}>DELETE BOOKMARK</button>
      </div>
    );
  }
};

export default Edit;