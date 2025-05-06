import { useState } from "react";
import Posts from "../components/Posts";
import {
  CreateBox,
  CreateInpBox,
  CreatePostContainer,
  UserImgBox,
} from "../styles/newsFeedStyles";
import { IPost } from "../interfaces/post";

const NewsFeed = () => {
  const [inpValue, setInpValue] = useState<string>("");
  const [posts, setPosts] = useState<IPost[]>([]);
  const [show, setShow] = useState<boolean>(false);

  const handleCreatePost = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newPost = {
      id: Date.now(),
      text: inpValue,
      createdAt: new Date().toLocaleString(),
    };

    if (inpValue.trim() !== "") {
    }

    if (e.key === "Enter") {
      e.preventDefault();

      setPosts((prev) => [...prev, newPost]);
      setShow(true);

      setInpValue("");
    }
  };

  const handleDeletePost = (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <CreatePostContainer>
      <CreateBox>
        <UserImgBox>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="user"
          />
        </UserImgBox>
        <CreateInpBox>
          <input
            type="text"
            name="text"
            placeholder="what's on your mind, ლუკა?"
            value={inpValue}
            onChange={(e) => setInpValue(e.target.value)}
            onKeyDown={(e) => handleCreatePost(e)}
          />
        </CreateInpBox>
      </CreateBox>

      {show && <Posts posts={posts} onDelete={handleDeletePost} />}
    </CreatePostContainer>
  );
};

export default NewsFeed;
