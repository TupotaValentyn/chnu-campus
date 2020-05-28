import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useClasses = makeStyles((theme: Theme) => {
  type InputProps = {
    imageSrc: string
  }
  return {
    wrapper: {
      padding: '32px 120px 0',
      height: '100%',
      boxSizing: 'border-box'
    },
    imageBox: {
      height: 364,
      position: 'relative',
      '&::after': {
        backgroundSize: 'cover',
        backgroundImage: (props: InputProps): string => `url(${props.imageSrc})`,
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: .7,
        // filter: 'blur(1px) brightness(50%)'
      },
      "&::before": {
        content: '""',
        position: 'absolute',
        backgroundColor: '#000',
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: .7,
      }
    },
    imageContentBox: {
      display: 'flex',
      flexDirection: 'column',
      padding: '48px',
      zIndex: 1,
      position: 'relative',
      height: '100%',
      boxSizing: 'border-box',
      justifyContent: 'space-between'
    },
    titleClass: {
      margin: '0 0 16px'
    },
    subtitleClass: {
      margin: '0 0 16px'
    },
    infoContentBox: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    contentWrapper: {
      padding: '32px 0 ',
      // height: '100%',
      display: 'flex'
    },

    contentWrapperImage: {
      // width: '60%',
      height: 300,
      objectFit: 'contain',
      margin: '0 32px 8px 0'
    },
    contentImageCaption: {
      textAlign: 'center'
    },
    imageContent: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
});


type Props = {
  imageSrc: string;
  title: string;
  subtitle: string;
  address: string;
  phone?: string;
  info?: string;
  location?: string;
};

const CampusItem: FC<Props> = ({imageSrc, address, subtitle, title, phone, info, location}) => {
  const {wrapper, imageBox, imageContentBox, titleClass, subtitleClass, contentWrapperImage, contentWrapper, infoContentBox, contentImageCaption, imageContent} = useClasses({imageSrc});

  return (
    <div className={wrapper}>
      <div className={imageBox}>
        <div className={imageContentBox}>
          <div>
            <Typography className={titleClass} color="secondary" variant="h1">{title}</Typography>
            <Typography className={subtitleClass} color="secondary" variant="h5">{subtitle}</Typography>
          </div>
          <div className={infoContentBox}>
            <Typography variant="body2" color="secondary">
              {address}
            </Typography>
            {
              phone && <Typography color="secondary">
                Телефон: {phone}
              </Typography>
            }
          </div>

        </div>
      </div>

      <div className={contentWrapper}>
        <div className={imageContent}>
          <img src={imageSrc} alt={title} className={contentWrapperImage}/>
          <Typography className={contentImageCaption} variant="caption">
            {title}
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="textPrimary">
            {info}
          </Typography>
        </div>
      </div>
    </div>
  )
};


export default CampusItem;
