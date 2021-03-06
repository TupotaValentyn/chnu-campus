import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import data from '../../../data/data';
import ItemLink from "../ItemLink/ItemLink";

type Props = {};

const useClasses = makeStyles((theme: Theme) => {
  return {
    campusList: {
      width: '100%',
      boxSizing: 'border-box',
      justifyContent: 'center',
      display: 'grid',
      grid: 'repeat(5, 1fr)/ repeat(auto-fill, minmax(350px, 400px))',
      gridGap: '8px 16px'
    }
  }
});

const CampusList: FC<Props> = () => {

  const {campusList} = useClasses();

  return <ul className={campusList}>
    {data.map((route) => {
      return <ItemLink {...route}/>
    })}
  </ul>
};

export default CampusList;
