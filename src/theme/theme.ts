import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import typography from './typography';
import breakpoints from './breakpoints';
import palette from './palette';

const theme = createMuiTheme({
  breakpoints,
  direction: 'ltr',
  palette,
  typography,
  overrides: {
    MuiButton: {
      root: {
        boxShadow: 'none',
        padding: '4px 16px',
        height: 32,
        textTransform: 'initial',
        whiteSpace: 'nowrap',
        minWidth: 120
      },
      containedPrimary: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      sizeLarge: {
        height: 40,
        fontSize: 16
      },
      sizeSmall: {
        width: 128
      }
    },
    MuiTableCell: {
      root: {
        fontSize: typography.body1.fontSize
      },
      head: {
        color: palette.secondary.main
      }
    },
    MuiTab: {},
    MuiTabs: {
      flexContainer: {}
    },
    MuiRadio: {
      root: {
        padding: '3px'
      }
    },
    MuiAppBar: {
      root: {
        zIndex: 10
      },
      colorDefault: {
        backgroundColor: 'transparent'
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: 12
      }
    }
  },
  props: {}
});

export default theme;
