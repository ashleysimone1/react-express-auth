import { createPost } from "../../../src/controllers/post";
import CurrentUserContext from "../contexts/current-user-context";

export default function UpdateUsernameForm() {
  
  const { currentUser } = useContext(CurrentUserContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = await createPost({ post_title: event.target['post-title'].value, post_content: event.target['post-content'].value, post_url: event.target['image-url'].value, user_id: event.target['user-id'].value });

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
