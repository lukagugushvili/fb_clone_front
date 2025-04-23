import {
  InpBox,
  Line,
  LoginBtn,
  AuthContainer,
  AuthLeft,
  AuthRight,
  NewAccBtn,
} from "../styles/authStyles";

const Login = () => {
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
          <input type="text" placeholder="შეიყვანეთ თქვენი ელფოსტა" />
        </InpBox>
        <InpBox>
          <input type="text" placeholder="პაროლი" />
        </InpBox>
        <LoginBtn>
          <button>შესვლა</button>
        </LoginBtn>
        <Line></Line>
        <NewAccBtn>
          <button>ახალი ანგარიშის შექმნა</button>
        </NewAccBtn>
      </AuthRight>
    </AuthContainer>
  );
};

export default Login;
