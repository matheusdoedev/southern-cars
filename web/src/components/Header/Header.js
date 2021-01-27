import React from "react";

import { Avatar, Container, Grid } from "@material-ui/core";

import "./Header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Grid item container xs={12} justify="flex-end">
          <div className="header-account">
            <p className="header-account-name">Matheus</p>
            <Avatar alt="Matheus" className="header-account-avatar">
              M
            </Avatar>
          </div>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
