import {
  INIT_TILES,
  ITilesState,
  SWAP_TILES,
  TilesActionTypes,
} from '../types/Tiles';

const initTileState: ITilesState = {
  tiles: [],
  from: -1,
  to: -1,
};

export default (
  state = initTileState,
  action: TilesActionTypes,
): ITilesState => {
  switch (action.type) {
    case INIT_TILES:
      return { ...state, tiles: [...action.payload.tiles] };
    case SWAP_TILES:
      return {
        ...state,
        from: action.payload.from,
        to: action.payload.to,
      };
    default:
      return state;
  }
};
