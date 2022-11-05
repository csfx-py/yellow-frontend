import { useEffect, useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";

function ActiveExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    API.get("/splitwise/active-expenses")
      .then((res) => {
        setExpenses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div>
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
                    {expense.repayments.map((repayment) => (
                      <Typography>
                        <b>
                          {`${repayment.fromUser.user.first_name} ${repayment.fromUser.user.last_name}`}
                        </b>
                        {" paid "}
                        <b>
                          {`${repayment.toUser.user.first_name} ${repayment.toUser.user.last_name} `}
                        </b>
                        {repayment.amount}
                      </Typography>
                    ))}
                    <Button
                      variant="contained"
                      onClick={() => {
                        navigate(`/repay/${expense.id}`);
                      }}
                    >
                      Settle
                    </Button>
                  </>
                }
              />
            </ListItem>
          ))}
      </List>
    </div>
  );
}

export default ActiveExpenses;
