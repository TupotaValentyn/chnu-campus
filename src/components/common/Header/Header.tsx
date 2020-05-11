import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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
    height: '100%'
  }
}));

const Header: FC<Props> = () => {
  const {root, title, logo} = useClasses();

  return <AppBar className={root}>
    <Toolbar>
      <div className={title}>
        <Typography variant="h6">
          ЧНУ кампус
        </Typography>
      </div>
      <div className={logo}>
        <img src="/logo-cnu-small.png" alt=""/>
      </div>
    </Toolbar>
  </AppBar>
};

export default Header;
