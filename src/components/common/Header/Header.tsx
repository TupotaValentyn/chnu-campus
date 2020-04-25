import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

type Props = {};

const useClasses = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
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
  const {title, logo} = useClasses();

  return <AppBar>
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
