import { useState } from "react";
import AppDrawer from "./AppDrawer";
import DrawerList from "./DrawerList";
import Header from "./Header";

function Nav() {
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = (val) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setDrawer(val);
  };
  return (
    <>
      <Header handleDrawer={handleDrawer} />
      <AppDrawer drawer={drawer} handleDrawer={handleDrawer}>
        <DrawerList handleDrawer={handleDrawer} />
      </AppDrawer>
    </>
  );
}

export default Nav;
