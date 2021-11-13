import {useState} from "react"
import {Link} from "react-router-dom"

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
    props.createBookmark(newForm)
    // reset the form to empty
    setNewForm({
        title: "",
        url: ""
  })
}
const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.image}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <input type="submit" value="Create Bookmark" />
    </form>
  );

  if (props.bookmark) {
    return (
      <section>
        {form}
        {props.bookmark.map((bookmark) => {
          return (
            <div key={bookmark._id} className="bookmark">
              <Link to={`/bookmark/${bookmark._id}`}>
                <h1>{bookmark.name}</h1>
              </Link>
              <img src={bookmark.image} alt={bookmark.name} />
              <h3>{bookmark.title}</h3>
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