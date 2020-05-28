import React, { FC } from "react";
import { Card, Theme, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { RouteData } from "../../../data/data";

const useClasses = makeStyles((theme: Theme) => {
  return {
    wrapper: {
      height: 160,
      display: 'flex',
      textDecoration: 'none'
    },
    contentBox: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 16
    },
    imageBox: {
      width: 160,
      height: 160
    },
    imageClass: {
      width: 160,
      height: 160,
    }
  }
})

const ItemLink: FC<RouteData> = ({imageSrc, info, address, title, subtitle, path, location}) => {
  const {wrapper, contentBox, imageBox, imageClass} = useClasses();

  return <Card>
    <NavLink to={path} className={wrapper}>
      <div className={contentBox}>
        <Typography variant="h2">
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
        <Typography>
          {location || ''}
        </Typography>
        <Typography variant='caption'>
          Читати ...
        </Typography>
      </div>
      <div className={imageBox}>
        <img className={imageClass} src={imageSrc} alt="corpus img"/>
      </div>
    </NavLink>
  </Card>
};


export default ItemLink;
