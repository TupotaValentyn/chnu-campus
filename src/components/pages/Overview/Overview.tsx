import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CampusList from '../../common/CampusList';
import { Typography } from '@material-ui/core';

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
  maps: {
    margin: '0 0 32px 0'
  },
  campusImg: {
    width: 600,
    objectFit: 'contain'
  },
  imageBox: {
    display: 'flex'
  },
  imageCaption: {
    textAlign: 'center'
  },
  namingBox: {
    display: 'flex'
  },
  namingImg: {
    width: 480,
    objectFit: 'contain'
  }
}));

const Overview: FC<Props> = () => {
  const { overviewWrapper, container, campusImg, imageBox, imageCaption, maps, namingBox, namingImg } = useClasses();

  return (
    <div className={overviewWrapper}>
      <div className={container}>
        <div className={imageBox}>
          <div className={maps}>
            <img src="/resources/campus-main.jpg" className={campusImg} alt="Campus"/>
            <Typography className={imageCaption}>
              Карта 1
            </Typography>
          </div>
          <div>
            <img src="/resources/plan-2.jpg" className={campusImg} alt="Campus"/>
            <Typography className={imageCaption}>
              Карта 2
            </Typography>
          </div>
        </div>
        <div className={namingBox}>
          <img className={namingImg} src="/images/naming-1.png" alt=""/>
          <img className={namingImg} src="/images/naming-2.png" alt=""/>
        </div>
        <CampusList/>
      </div>
    </div>)
};

export default Overview;
