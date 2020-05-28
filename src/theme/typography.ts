import createTypography, {
  Typography
} from '@material-ui/core/styles/createTypography';
import breakpoints from './breakpoints';
import palette from './palette';

const BASE_FONT_FAMILY = 'Montserrat, sans-serif';

const typography: Typography = createTypography(palette, {
  htmlFontSize: 16,
  fontFamily: BASE_FONT_FAMILY,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 600,
    fontSize: 48,
    lineHeight: 1.2,
    color: palette.primary.main,
    [breakpoints.down('sm')]: {
      fontSize: 24
    }
  },
  h2: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 1.2,
    color: palette.primary.main
  },
  h3: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 1.2,
    color: palette.primary.main,
    [breakpoints.down(600)]: {
      fontSize: 18
    }
  },
  h4: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1.2,
    textTransform: 'initial',
    [breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  h5: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 1.334,
    textTransform: 'initial',
    [breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  h6: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    lineHeight: 1.2,
    [breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  caption: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.2,
    color: palette.primary.main,
    textTransform: 'initial',
    [breakpoints.down('sm')]: {
      fontSize: 12
    }
  },
  subtitle1: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 1.2,
    [breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  subtitle2: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 300,
    fontSize: 14,
    lineHeight: 1.2,
    [breakpoints.down('sm')]: {
      fontSize: 12
    }
  },
  body1: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 300,
    fontSize: 16,
    [breakpoints.down('md')]: {
      fontSize: 14
    },
    lineHeight: 1.2
  },
  body2: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.2,
    color: palette.secondary.main
  },
  button: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 1.2
  }
});

export default typography;
