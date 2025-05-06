import Login from "./pages/Login";
import "./app.css";
import { Container } from "./styles/global";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import NewsFeed from "./pages/NewsFeed";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<NewsFeed />} />
      </Routes>
    </Container>
  );
}

export default App;
