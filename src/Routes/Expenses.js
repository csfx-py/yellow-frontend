import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import API from "../utils/API";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    API.get("/splitwise/expenses")
      .then((res) => {
        console.log("fired");
        setExpenses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Expenses</h1>
      {loading && <h1>Loading...</h1>}
      <List>
        {expenses &&
          expenses.map((expense) => (
            <ListItem key={expense.id}>
              {/* {console.log(expense)} */}
              <ListItemText
                primary={expense.description}
                secondary={
                  <>
                    {expense.repayments.map((repayment, index) => (
                      <Typography key={index}>
                        <b>
                          {`${repayment.toUser.user.first_name} ${repayment.toUser.user.last_name}`}
                        </b>
                        {" paid "}
                        <b>
                          {`${repayment.fromUser.user.first_name} ${repayment.fromUser.user.last_name} `}
                        </b>
                        {repayment.amount}
                      </Typography>
                    ))}
                  </>
                }
              />
            </ListItem>
          ))}
      </List>
    </>
  );
}

export default Expenses;
