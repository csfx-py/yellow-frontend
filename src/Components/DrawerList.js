import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

function DrawerList({ handleDrawer }) {
  return (
    <div
      sx={{ padding: 5 }}
      onClick={handleDrawer(false)}
      onKeyDown={handleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemText primary={`Spleeeeet`} />
        </ListItem>
        <ListItem>
          <Link to="/">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/expenses">
            <ListItemText primary="All expenses" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/active-expenses">
            <ListItemText primary="Active expenses" />
          </Link>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}

export default DrawerList;
