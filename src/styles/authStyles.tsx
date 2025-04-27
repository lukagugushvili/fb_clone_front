import styled from "styled-components";

export const AuthContainer = styled.form`
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
`;

export const AuthLeft = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  & h1 {
    font-size: 50px;
    font-weight: 900;
    color: #1877f2;
  }

  & h2 {
    font-size: 28px;
    font-weight: normal;
    color: #1c1e21;
  }
`;

export const AuthRight = styled.div`
  padding: 20px 20px 28px;
  width: 396px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const InpBox = styled.div<{ $error?: boolean }>`
  width: 100%;

  & input {
    width: 100%;
    font-size: 17px;
    color: #1d2129;

    padding: 10px 15px;
    border-radius: 6px;
    border: ${(props) => (props.$error ? "2px solid #f00" : "1px solid #ddd")};
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 16px;
  background-color: #dddfe2;
`;

export const LoginBtn = styled.div`
  width: 100%;

  & button {
    cursor: pointer;
    width: 100%;
    padding: 0 16px;
    font-size: 20px;
    text-align: center;
    line-height: 48px;
    border-radius: 6px;
    border: none;
    color: #fff;
    background-color: #0866ff;
  }
`;

export const NewAccBtn = styled.div`
  & button {
    cursor: pointer;
    padding: 0 16px;
    border-radius: 6px;
    font-size: 17px;
    line-height: 48px;
    border: none;
    color: #fff;
    background-color: #42b72a;
  }
`;

export const ErrorMsg = styled.p`
  color: #f00;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;
