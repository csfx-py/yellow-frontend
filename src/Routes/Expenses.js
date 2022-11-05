import { Container, List } from "@mui/material";
import { useEffect, useState } from "react";
import API from "../utils/API";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    API.get("/splitwise/expenses")
      .then((res) => {
        setExpenses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        <h1>Expenses</h1>
        <List>
          {expenses.map((expense) => (
            <li key={expense.id}>{expense.id} {expense.description}</li>
          ))}
        </List>
      </Container>
    </>
  );
}

export default Expenses;
