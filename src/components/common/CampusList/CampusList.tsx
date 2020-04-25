import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

type Props = {};

const useClasses = makeStyles((theme: Theme) => {
  return {
    campusList: {
      display: 'grid',
      grid: 'repeat(5, 1fr)/ 1fr 1fr'
    },
    listItem: {
      display: 'flex'
    },
    firstColumn: {
      gridColumn: 1
    },
    secondColumn: {
      gridColumn: 2
    }
  }
});

const CampusList:FC<Props> = () => {

  const {campusList, firstColumn, secondColumn, listItem} = useClasses();

  return <ul className={campusList}>
    <li className={`${firstColumn} ${listItem}`}>list-item1</li>
    <li className={`${firstColumn} ${listItem}`}>list-item2</li>
    <li className={`${firstColumn} ${listItem}`}>list-item3</li>
    <li className={`${firstColumn} ${listItem}`}>list-item4</li>
    <li className={`${firstColumn} ${listItem}`}>list-item5</li>
    <li className={`${secondColumn} ${listItem}`}>list-item6</li>
    <li className={`${secondColumn} ${listItem}`}>list-item7</li>
    <li className={`${secondColumn} ${listItem}`}>list-item8</li>
    <li className={`${secondColumn} ${listItem}`}>list-item9</li>
    <li className={`${secondColumn} ${listItem}`}>list-item10</li>
  </ul>
};

export default CampusList;
