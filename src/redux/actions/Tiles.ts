import { AppActions } from '../types/actions';
import { GENERATE_TILE_NUMBERS, SWAP_TILES } from '../types/Tiles';

export function generateTileNumbers(): AppActions {
  return {
    type: GENERATE_TILE_NUMBERS,
  };
}

export function swapTiles(from: number, to: number): AppActions {
  return {
    type: SWAP_TILES,
    payload: {
      from,
      to,
    },
  };
}
