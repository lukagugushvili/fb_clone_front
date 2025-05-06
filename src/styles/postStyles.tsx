import styled from "styled-components";

export const PostContainer = styled.div`
  width: 500px;
  padding: 10px 15px;
  border-radius: 12px;
  background-color: #ffffff;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  & div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
  }

  & svg {
    cursor: pointer;
    font-size: 20px;
    color: red;
  }
`;

export const AboutPostCreate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PostTime = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;

  & p {
    font-size: 14px;
    color: #606770;
  }

  & svg {
    font-size: 14px;
    color: #606770;
  }
`;

export const PostText = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #000000;
`;

export const PostEmotionIcons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  color: #1877f2;

  & p {
    font-size: 16px;
    color: #606770;
  }
`;

export const PostFooterIconsBox = styled.div<{ $clicked: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  & > div:first-child svg {
    color: ${(props) => (props.$clicked ? "#1877f2" : "#606770")};
  }

  & svg {
    font-size: 20px;
    color: #606770;
  }
`;
