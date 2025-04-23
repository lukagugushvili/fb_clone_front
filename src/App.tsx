import Login from "./pages/Login";
import "./app.css";
import { Container } from "./styles/global";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Container>
  );
}

export default App;
