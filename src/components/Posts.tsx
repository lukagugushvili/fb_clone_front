import { IPostsProps } from "../interfaces/posts";
import Post from "./Post";

const Posts = ({ posts, onDelete }: IPostsProps) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Posts;
