import { Dimensions, PixelRatio } from 'react-native';

let DEFAULT_FONT_SIZE = 18;
let DEFAULT_SUB_FONT_SIZE = 16;

if (PixelRatio.get() <= 2) {
  DEFAULT_FONT_SIZE = 16;
  DEFAULT_SUB_FONT_SIZE = 14;
} else if (PixelRatio.get() <= 1) {
  DEFAULT_FONT_SIZE = 14;
  DEFAULT_SUB_FONT_SIZE = 14;
}

export const fontSize = DEFAULT_FONT_SIZE;
export const subFontSize = DEFAULT_SUB_FONT_SIZE;

export const GRID_SIZE = Dimensions.get('window').width * (88 / 100);
export const GRID_PADDING = 10;

export const TILE_MARGIN = GRID_PADDING;
export const TILE_SIZE = (GRID_SIZE - GRID_PADDING) / 4 - TILE_MARGIN;
