import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/posts';
const userPostUrl = '/api/users/:id/posts';

export const createPost = async ({ title, content, url, user_id }) => (
  fetchHandler(baseUrl, getPostOptions({ title, content, url, user_id }))
);

export const getAllPosts = async () => {
  const [posts] = await fetchHandler(baseUrl);
  return posts || [];
};

export const getPostsByUser = async (id) => {
  const [posts] = await fetchHandler(userPostUrl.replace(':id', id));
  return posts || [];
};

export const updatePostInfo = async ({ post_id, title, content, url }) => (
  fetchHandler(`${baseUrl}/${post_id}`, getPatchOptions({ post_id, title, content, url }))
);