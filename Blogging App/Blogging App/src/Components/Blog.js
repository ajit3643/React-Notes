// //Blogging App with Firebase
// //Importing useState hook from react library
// import { useState, useRef, useEffect, useReducer } from "react";

// //Import fireStore reference from frebaseInit file
// import { db } from "../firebaseinit";

// //Import all the required functions from fireStore
// import { collection, doc, getDocs, setDoc } from "firebase/firestore";

// //Reducer function to manage the state of the blogs
// function blogsReducer(state, action) {
//   switch (action.type) {
//     case "ADD_BLOG":
//       return [action.blog, ...state];
//     case "REMOVE_BLOG":
//       return state.filter((blog, index) => index !== action.index);
//     default:
//       return state;
//   }
// }

// export default function Blog() {
//   //   const [title, setTitle] = useState("");
//   //   const [content, setContent] = useState("");

//   const [formData, setFormData] = useState({ title: "", content: "" });
//   // const [blogs, setBlogs] = useState([]); //State variable to store the list of blogs
//   const [blogs, dispatch] = useReducer(blogsReducer, []); //State variable to store the list of blogs
//   const titleRef = useRef(null);

//   useEffect(() => {
//     titleRef.current.focus();
//   }, []);

//   useEffect(() => {
//     /*********************************************************************** */
//     /** get all the documents from the fireStore using getDocs() */
//     /*********************************************************************** */
//     async function fetchData() {
//       const snapShot = await getDocs(collection(db, "blogs"));
//       console.log(snapShot);

//       const blogs = snapShot.docs.map((doc) => {
//         return {
//           id: doc.id,
//           ...doc.data(),
//         };
//       });
//       console.log(blogs);
//     }

//     fetchData();
//     /*********************************************************************** */
//   }, []);

//   useEffect(() => {
//     if (blogs.length && blogs[0].title) {
//       document.title = blogs[0].title;
//     } else {
//       document.title = "No Blogs Available";
//     }
//   }, [blogs]);

//   //Passing the synthetic event as argument to stop refreshing the page on submit
//   async function handleSubmit(e) {
//     e.preventDefault();

//     //Creating a new blog object with title and content
//     //setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);

//     // Add a new document with a generated id.

//     const docRef = await doc(collection(db, "blogs"));
//     // setDoc....
//     await setDoc(docRef, {
//       title: formData.title,
//       content: formData.content,
//       createdOn: new Date(),
//     });
//     // console.log("Document written with ID: ", docRef.id);

//     //Dispatching the action to add the blog
//     dispatch({
//       type: "ADD_BLOG",
//       blog: { title: formData.title, content: formData.content },
//     });

//     setFormData({ title: "", content: "" });
//     titleRef.current.focus();
//     console.log(blogs);
//   }

//   //Function to remove the blog from the list
//   function removeBlog(index) {
//     // setBlogs(blogs.filter((blog, i) => i !== index));
//     dispatch({ type: "REMOVE_BLOG", index });
//   }
//   return (
//     <>
//       {/* Heading of the page */}
//       <h1>Write a Blog!</h1>

//       {/* Division created to provide styling of section to the form */}
//       <div className="section">
//         {/* Form for to write the blog */}
//         <form onSubmit={handleSubmit}>
//           {/* Row component to create a row for first input field */}
//           <Row label="Title">
//             <input
//               className="input"
//               placeholder="Enter the Title of the Blog here.."
//               value={formData.title}
//               ref={titleRef}
//               onChange={(e) =>
//                 setFormData({
//                   title: e.target.value,
//                   content: formData.content,
//                 })
//               }
//             />
//           </Row>

//           {/* Row component to create a row for Text area field */}
//           <Row label="Content">
//             <textarea
//               className="input content"
//               placeholder="Content of the Blog goes here.."
//               value={formData.content}
//               required
//               onChange={(e) =>
//                 setFormData({ title: formData.title, content: e.target.value })
//               }
//             />
//           </Row>

//           {/* Button to submit the blog */}
//           <button className="btn">ADD</button>
//         </form>
//       </div>

//       <hr />

//       {/* Section where submitted blogs will be displayed */}
//       <h2> Blogs </h2>
//       {blogs.map((blog, index) => (
//         <div className="blog" key={index}>
//           <h3>{blog.title}</h3>
//           <p>{blog.content}</p>
//           <div className="blog-btn">
//             <button className="remove" onClick={() => removeBlog(index)}>
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// //Row component to introduce a new row section in the form
// function Row(props) {
//   const { label } = props;
//   return (
//     <>
//       <label>
//         {label}
//         <br />
//       </label>
//       {props.children}
//       <hr />
//     </>
//   );
// }

//Blogging App with Firebase
import { useState, useRef, useEffect } from "react";

//Import fireStore reference from frebaseInit file
import { db } from "../firebaseinit";

//Import all the required functions from fireStore
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

export default function Blog() {
  const [formData, setformData] = useState({ title: "", content: "" });
  const [blogs, setBlogs] = useState([]);

  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    /*********************************************************************** */
    /** get all the documents from the fireStore using getDocs() */
    /*********************************************************************** */
    async function fetchData() {
      const snapShot = await getDocs(collection(db, "blogs"));
      console.log(snapShot);

      const blogs = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(blogs);
      setBlogs(blogs);
    }

    fetchData();
    /*********************************************************************** */
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    titleRef.current.focus();

    // Commenting setBlogs() as realtime Updates will be recieved from the database
    //setBlogs([{title: formData.title,content:formData.content}, ...blogs]);

    /*********************************************************************** */
    /** Add a new document with an auto generated id. */
    /*********************************************************************** */

    const docRef = doc(collection(db, "blogs"));

    await setDoc(docRef, {
      title: formData.title,
      content: formData.content,
      createdOn: new Date(),
    });

    /*********************************************************************** */

    setformData({ title: "", content: "" });
  }

  async function removeBlog(i) {
    setBlogs(blogs.filter((blog, index) => index !== i));
  }

  return (
    <>
      <h1>Write a Blog!</h1>
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              ref={titleRef}
              value={formData.title}
              onChange={(e) =>
                setformData({
                  title: e.target.value,
                  content: formData.content,
                })
              }
            />
          </Row>

          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              required
              value={formData.content}
              onChange={(e) =>
                setformData({ title: formData.title, content: e.target.value })
              }
            />
          </Row>

          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blogs.map((blog, i) => (
        <div className="blog" key={i}>
          <h3>{blog.title}</h3>
          <hr />
          <p>{blog.content}</p>

          <div className="blog-btn">
            <button
              onClick={() => {
                removeBlog(i);
              }}
              className="btn remove"
            >
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
