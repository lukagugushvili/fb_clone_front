import {
  InpBox,
  Line,
  LoginBtn,
  AuthContainer,
  AuthLeft,
  AuthRight,
  NewAccBtn,
} from "../styles/authStyles";

const Register = () => {
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
          <input type="text" placeholder="სახელი" />
        </InpBox>
        <InpBox>
          <input type="text" placeholder="გვარი" />
        </InpBox>
        <InpBox>
          <input type="text" placeholder="შეიყვანეთ თქვენი ელფოსტა" />
        </InpBox>
        <InpBox>
          <input type="text" placeholder="პაროლი" />
        </InpBox>
        <InpBox>
          <input type="text" placeholder="გაიმეორეთ პაროლი" />
        </InpBox>
        <LoginBtn>
          <button>შესვლა</button>
        </LoginBtn>
        <Line></Line>
      </AuthRight>
    </AuthContainer>
  );
};

export default Register;
