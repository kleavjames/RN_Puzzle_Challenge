import { combineReducers } from 'redux';

import tiles from './TileReducer';

export const rootReducer = combineReducers({
  tiles,
});

export type AppState = ReturnType<typeof rootReducer>;
