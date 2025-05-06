import { IPost } from "./post";

export interface IPostsProps {
  posts: IPost[];
  onDelete: (id: number) => void;
}
