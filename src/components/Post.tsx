import { useState } from "react";
import {
  AboutPostCreate,
  PostContainer,
  PostEmotionIcons,
  PostFooterIconsBox,
  PostHeader,
  PostText,
  PostTime,
} from "../styles/postStyles";
import { FaCommentDots, FaEarthAmericas } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Line } from "../styles/authStyles";
import { AiFillLike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { IPost } from "../interfaces/post";

interface IPostProps {
  post: IPost;
  onDelete: (id: number) => void;
}

const Post = ({ post, onDelete }: IPostProps) => {
  const [count, setCount] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleCountLikes = () => {
    setCount((prev) => (clicked ? prev - 1 : prev + 1));
    setClicked((prev) => !prev);
  };

  return (
    <PostContainer>
      <PostHeader>
        <div>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="user"
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          />
          <AboutPostCreate>
            <h3>ლუკა გუგუშვილი</h3>
            <PostTime>
              <p>{post.createdAt}</p>
              <FaEarthAmericas />
            </PostTime>
          </AboutPostCreate>
        </div>
        <MdDelete onClick={() => onDelete(post.id)} />
      </PostHeader>

      <PostText>
        <p>{post.text}</p>
      </PostText>

      <PostEmotionIcons>
        <AiFillLike />
        <p>{count}</p>
      </PostEmotionIcons>

      <Line />

      <PostFooterIconsBox $clicked={clicked}>
        <div onClick={handleCountLikes}>
          <AiFillLike />
          <p>Like</p>
        </div>
        <div>
          <FaCommentDots />
          <p>Comment</p>
        </div>
        <div>
          <IoIosShareAlt />
          <p>Share</p>
        </div>
      </PostFooterIconsBox>
    </PostContainer>
  );
};

export default Post;
