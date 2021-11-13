import {useState} from "react"
import { Link } from "react-router-dom";

const Index = (props) => {

    // state to hold form data
    const [newForm, setNewForm] = useState({
        title: "",
        url: ""
    })

    //handleChange function to sync input with state
  const handleChange = (event) => {
    // make a copy of state
    const newState = {...newForm}
    // update the newState
    newState[event.target.name] = event.target.value
    // update the state
    setNewForm(newState)
}

// handleSubmit function for when form is submitted
const handleSubmit = (event) => {
    // prevent the page from refreshing
    event.preventDefault()
    // pass the form data to createPeople function
    props.createPeople(newForm)
    // reset the form to empty
    setNewForm({
      title: "",
      url: ""
   })
}

    const form = <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={newForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}
        />
        <input
        type="text"
        value={newForm.url}
        name="url"
        placeholder="Image URL"
        onChange={handleChange}
        />
        <input type="submit" value="Create Bookmark"/>
    </form>

if (props.bookmarks) {
    return (
      <section>
        {form}
        {props.bookmarks.map((bookmark) => {
          return (
            <div key={bookmark._id} className="bookmark">
              <Link to={`/bookmarks/${bookmark._id}`}>
                <h1>{bookmark.title}</h1>
              </Link>
              <img src={bookmark.url} alt={bookmark.title} />
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section>
        {form}
        <h1>Loading...</h1>
      </section>
    );
  }
};



export default Index;