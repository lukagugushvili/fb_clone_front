import { IPost } from "../pages/NewsFeed";

export interface IPostsProps {
  posts: IPost[];
  onDelete: (id: number) => void;
}
