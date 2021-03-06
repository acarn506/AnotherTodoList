import React from "react";
import Aux from "../../Hoc/Aux";
import classes from "./Layout.module.css";

const Layout = props => {
  return (
    <Aux>
      <div>Toolbar SideDrawer BackDrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
