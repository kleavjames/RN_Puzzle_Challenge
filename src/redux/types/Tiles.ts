export const INIT_TILES = 'INIT_TILES';
export const GENERATE_TILE_NUMBERS = 'GENERATE_TILE_NUMBERS';
export const SWAP_TILES = 'SWAP_TILES';

export interface ITilesState {
  tiles: (ITile | null)[];
  from: number;
  to: number;
}

export interface ITile {
  title: string;
}

export interface IGenerateTileNumbersAction {
  type: typeof GENERATE_TILE_NUMBERS;
}

export interface IInitTilesAction {
  type: typeof INIT_TILES;
  payload: {
    tiles: (ITile | null)[];
  };
}

export interface ISwapTilesAction {
  type: typeof SWAP_TILES;
  payload: {
    from: number;
    to: number;
  };
}

export type TilesActionTypes =
  | IInitTilesAction
  | IGenerateTileNumbersAction
  | ISwapTilesAction;
