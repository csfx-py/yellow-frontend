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
      <h1>Expenses</h1>
      {expenses.length &&
        expenses.map((expense) => (
          <div key={expense.id}>
            <h2>{expense.id}</h2>
          </div>
        ))}
    </>
  );
}

export default Expenses;
