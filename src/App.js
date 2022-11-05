import { Container } from "@mui/system";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Expenses from "./Routes/Expenses";
import Home from "./Routes/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Container maxWidth="sm">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expenses" element={<Expenses />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
