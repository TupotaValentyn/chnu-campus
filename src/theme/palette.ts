import createPalette, {
  PaletteOptions
} from '@material-ui/core/styles/createPalette';

const paletteOptions: PaletteOptions = {
  secondary: {
    main: '#fff'
  }
};

const palette = createPalette(paletteOptions);

export default palette;
