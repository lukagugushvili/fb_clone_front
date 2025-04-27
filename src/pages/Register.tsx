import { useNavigate } from "react-router-dom";
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
import { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const navigate = useNavigate();

  const validateForm = () => {
    const fields = [firstName, lastName, email, password, confirmPassword];
    const isEmpty = fields.some((field) => field.trim() === "");
    if (isEmpty) {
      setErrorMsg("ყველა ველი უნდა იყოს შევსებული!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg("ელფოსტის ფორმატი არასწორია!");
      return false;
    }

    const user = localStorage.getItem("user");

    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.email.trim() === email.trim()) {
        setErrorMsg("ელფოსტა უკვე რეგისტრირებულია!");
        return false;
      }
    }

    if (password.trim().length < 8) {
      setErrorMsg("პაროლი უნდა შეადგენდეს მინიმუმ 8 ინიციალს!");
      return false;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setErrorMsg("გამეორებული პაროლი არ ემთხვევა!");
      return false;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ firstName, lastName, email, password })
    );

    setErrorMsg("");
    return true;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/");
    }
  };

  const handleLogIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
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
            type="text"
            name="firstName"
            placeholder="სახელი"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InpBox>
        <InpBox>
          <input
            type="text"
            name="lastName"
            placeholder="გვარი"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InpBox>
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
        <InpBox>
          <input
            type="password"
            name="confirmPassword"
            placeholder="გაიმეორეთ პაროლი"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InpBox>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        <LoginBtn>
          <button onClick={(e) => handleSubmit(e)}>შესვლა</button>
        </LoginBtn>
        <Line></Line>
        <NewAccBtn>
          <button onClick={(e) => handleLogIn(e)}>უკვე გააქვთ ანგარიში?</button>
        </NewAccBtn>
      </AuthRight>
    </AuthContainer>
  );
};

export default Register;
