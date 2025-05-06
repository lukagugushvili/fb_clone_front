export interface IPost {
  id: number;
  text: string;
  createdAt: string;
}

export interface IPostProps {
  post: IPost;
  onDelete: (id: number) => void;
}
