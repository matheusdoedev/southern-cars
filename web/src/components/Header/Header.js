import React from "react";

import { Avatar, Container, Grid } from "@material-ui/core";

import MenuMobileToggle from "../MenuMobileToggle/MenuMobileToggle";

import "./Header.styles.scss";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item container xs={4}>
            <MenuMobileToggle />
          </Grid>
          <Grid item container xs={8} justify="flex-end">
            <div className="header-account">
              <p className="header-account-name">Matheus</p>
              <Avatar alt="Matheus" className="header-account-avatar">
                M
              </Avatar>
            </div>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
