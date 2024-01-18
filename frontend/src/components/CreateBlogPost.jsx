import CurrentUserContext from "../contexts/current-user-context";
import { useContext } from "react";
import { createPost } from "../adapters/post-adapter";

export default function CreateBlogPost() {
  
  const { currentUser } = useContext(CurrentUserContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = await createPost(Object.fromEntries(new FormData(event.target)));

  };

  return <form onSubmit={handleSubmit} aria-labelledby="update-heading">
    <h2 id="create-blog">Create a New Blog Post</h2>
    <label htmlFor='post-title'>Post Title</label>
    <input type='text' id='post-title' name='post-title' required/>
    <label htmlFor='post-content'>Post Body</label>
    <input type="text" id='post-content' name='post-content' required/>
    <label htmlFor="image-url">Image URL</label>
    <input type="text" id="image-url" name="image-url" required/>
    <input type="hidden" name="user-id" value={currentUser.id} required/>

    <button>Update Username</button>
  </form>;
}
