import { createSelector } from 'reselect';
import { shuffleArray } from '../../helpers/utils';
import { AppState } from '../reducers';
import { ITile } from '../types/Tiles';

const selectedTiles = (state: AppState) => state.tiles.tiles;
const tileFromIndex = (state: AppState) => state.tiles.from;
const tileToIndex = (state: AppState) => state.tiles.to;

const swapTiles = (
  tiles: (ITile | null)[],
  from: number,
  to: number,
): (ITile | null)[] => {
  let temp = tiles[from];
  tiles[from] = tiles[to];
  tiles[to] = temp;

  return [...tiles];
};

const shuffledTilesSelector = createSelector(selectedTiles, tiles =>
  shuffleArray(tiles),
);

const swapTilesSelector = createSelector(
  selectedTiles,
  tileFromIndex,
  tileToIndex,
  swapTiles,
);

export { shuffledTilesSelector, swapTilesSelector };
