import { put, takeLatest } from 'redux-saga/effects';
import {
  GENERATE_TILE_NUMBERS,
  INIT_TILES,
  ITile,
  TilesActionTypes,
} from '../types/Tiles';

function* generateTileNumbers() {
  let tiles: (ITile | null)[] = [];

  // add the empty position in puzzle
  tiles.push(null);

  // add other tiles
  for (let i = 0; i < 15; i++) {
    tiles.push({ title: (i + 1).toString() });
  }

  yield put<TilesActionTypes>({
    type: INIT_TILES,
    payload: {
      tiles,
    },
  });
}

function* initPuzzle() {
  yield takeLatest(GENERATE_TILE_NUMBERS, generateTileNumbers);
}

export default initPuzzle;
