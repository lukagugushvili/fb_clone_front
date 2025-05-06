import styled from "styled-components";

export const CreatePostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export const CreateBox = styled.div`
  margin-top: 50px;
  width: 500px;
  padding: 10px 15px;
  border-radius: 12px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  background-color: #ffffff;
`;

export const UserImgBox = styled.div`
  width: 50px;
  height: 50px;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const CreateInpBox = styled.form`
  width: calc(100% - 50px);

  & input {
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    border-radius: 30px;
    border: none;
    outline: none;
    background-color: #f2f4f7;

    font-size: 16px;
    color: #000000;

    &:focus {
      background-color: #ffffff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
  }
`;
