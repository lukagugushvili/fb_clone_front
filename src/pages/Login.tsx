import React from "react";
import {
  InpBox,
  Line,
  LoginBtn,
  AuthContainer,
  AuthLeft,
  AuthRight,
  NewAccBtn,
  ErrorMsg,
} from "../styles/authStyles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [errorMsg, setErrorMsg] = React.useState<string>("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.trim() || !password.trim()) {
      setErrorMsg("შეავსეთ ორივე ველი!");
      return false;
    }

    const user = localStorage.getItem("user");

    if (!user) {
      setErrorMsg("მომხმარებელი ვერ მოიძებნა");
      return false;
    }

    const { email: storedEmail, password: storedPassword } = JSON.parse(user);

    if (storedEmail.trim() !== email.trim()) {
      setErrorMsg("ამ ელფოსტით მომხმარებელი ვერ მოიძებნა");
      return false;
    }

    if (storedPassword.trim() !== password.trim()) {
      setErrorMsg("პაროლი არასწორია");
      return false;
    }

    setErrorMsg("");
    return true;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/news");
    }
  };

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate("/register");
  };

  return (
    <AuthContainer>
      <AuthLeft>
        <h1>facebook</h1>
        <h2>
          Facebook-ი გაძლევთ საშუალებას დაუკავშირდეთ და იურთიერთოთ ხალხთან
          თქვენს ცხოვრებაში
        </h2>
      </AuthLeft>

      <AuthRight>
        <InpBox>
          <input
            type="email"
            name="email"
            placeholder="შეიყვანეთ თქვენი ელფოსტა"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InpBox>
        <InpBox>
          <input
            type="password"
            name="password"
            placeholder="პაროლი"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InpBox>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        <LoginBtn>
          <button onClick={(e) => handleSubmit(e)}>შესვლა</button>
        </LoginBtn>
        <Line></Line>
        <NewAccBtn>
          <button onClick={(e) => handleNavigate(e)}>
            ახალი ანგარიშის შექმნა
          </button>
        </NewAccBtn>
      </AuthRight>
    </AuthContainer>
  );
};

export default Login;
