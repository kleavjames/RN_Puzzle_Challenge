import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '../components/Grid';
import { tileActions } from '../redux/actions';
import {
  shuffledTilesSelector,
  swapTilesSelector,
} from '../redux/selectors/tileSelector';

const GridContainer: FC = () => {
  const dispatch = useDispatch();
  const shuffledTiles = useSelector(shuffledTilesSelector);
  const swappedTiles = useSelector(swapTilesSelector);

  // dispatched actions
  const generateTileNumbers = () => dispatch(tileActions.generateTileNumbers());
  const swapTiles = (from: number, to: number) =>
    dispatch(tileActions.swapTiles(from, to));

  return (
    <Grid
      shuffledTiles={shuffledTiles}
      swappedTiles={swappedTiles}
      generateTileNumbers={generateTileNumbers}
      swapTiles={swapTiles}
    />
  );
};

export default GridContainer;
