//Blogging App using Hooks
//Importing useState hook from react library
import { useState, useRef, useEffect, useReducer } from "react";

//Reducer function to manage the state of the blogs
function blogsReducer(state, action) {
  switch (action.type) {
    case "ADD_BLOG":
      return [action.blog, ...state];
    case "REMOVE_BLOG":
      return state.filter((blog, index) => index !== action.index);
    default:
      return state;
  }
}

export default function Blog() {
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");

  const [formData, setFormData] = useState({ title: "", content: "" });
  // const [blogs, setBlogs] = useState([]); //State variable to store the list of blogs
  const [blogs, dispatch] = useReducer(blogsReducer, []); //State variable to store the list of blogs
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    if (blogs.length && blogs[0].title) {
      document.title = blogs[0].title;
    } else {
      document.title = "No Blogs Available";
    }
  }, [blogs]);

  //Passing the synthetic event as argument to stop refreshing the page on submit
  function handleSubmit(e) {
    e.preventDefault();

    //Creating a new blog object with title and content
    //setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);

    //Dispatching the action to add the blog
    dispatch({
      type: "ADD_BLOG",
      blog: { title: formData.title, content: formData.content },
    });

    setFormData({ title: "", content: "" });
    titleRef.current.focus();
    console.log(blogs);
  }

  //Function to remove the blog from the list
  function removeBlog(index) {
    // setBlogs(blogs.filter((blog, i) => i !== index));
    dispatch({ type: "REMOVE_BLOG", index });
  }
  return (
    <>
      {/* Heading of the page */}
      <h1>Write a Blog!</h1>

      {/* Division created to provide styling of section to the form */}
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          {/* Row component to create a row for first input field */}
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              value={formData.title}
              ref={titleRef}
              onChange={(e) =>
                setFormData({
                  title: e.target.value,
                  content: formData.content,
                })
              }
            />
          </Row>

          {/* Row component to create a row for Text area field */}
          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              value={formData.content}
              required
              onChange={(e) =>
                setFormData({ title: formData.title, content: e.target.value })
              }
            />
          </Row>

          {/* Button to submit the blog */}
          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blogs.map((blog, index) => (
        <div className="blog" key={index}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <div className="blog-btn">
            <button className="remove" onClick={() => removeBlog(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

//Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
