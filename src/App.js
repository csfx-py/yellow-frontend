import { Container } from "@mui/system";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import ActiveExpenses from "./Routes/ActiveExpenses";
import Expenses from "./Routes/Expenses";
import Home from "./Routes/Home";
import Repay from "./Routes/Repay";

function App() {
  return (
    <div className="App">
      <Router>
        <Container maxWidth="sm">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/active-expenses" element={<ActiveExpenses />} />
            <Route path="/repay/:id" element={<Repay />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
