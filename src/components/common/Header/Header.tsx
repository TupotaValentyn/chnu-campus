import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

type Props = {};

const useClasses = makeStyles((theme: Theme) => createStyles({
  root: {
    position: 'sticky',
    top: 0
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    display: 'flex',
    width: 60
  },
  name: {
    textDecoration: 'none',
    color: theme.palette.common.white
  }
}));

const Header: FC<Props> = () => {
  const {root, title, logo, name} = useClasses();

  return <AppBar className={root}>
    <Toolbar>
      <div className={title}>
        <Typography variant="h6">
          <NavLink to="/" className={name}>
            ЧНУ кампус
          </NavLink>
        </Typography>
      </div>
      <div>
        <NavLink to='/'>
          <img className={logo} src="/images/logo.png" alt=""/>
        </NavLink>
      </div>
    </Toolbar>
  </AppBar>
};

export default Header;
