import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Header from "../../common/Header";
import CampusList from "../../common/CampusList";

type Props = {};

const useClasses = makeStyles((theme: Theme) => createStyles({
  overviewWrapper: {
    height: '100%'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px 0 0 0'
  },
  campusImg: {
    width: 600,
    height: 600,
    objectFit: 'contain'
  }
}));

const Overview: FC<Props> = () => {
  const {overviewWrapper, container, campusImg} = useClasses();

  return (
    <div className={overviewWrapper}>
      <Header/>
      <div className={container}>
        <img src="/resources/campus-main.jpg" className={campusImg} alt="Campus"/>
        <CampusList/>
      </div>
    </div>)
};

export default Overview;
