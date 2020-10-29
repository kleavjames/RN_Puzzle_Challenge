import React, { FC, ReactElement, useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';

import { GRID_PADDING, GRID_SIZE } from '../helpers/constants';
import { Theme } from '../helpers/enums';
import { ITile } from '../redux/types/Tiles';
import Button from './common/Button';
import Tiles from './Tiles';

interface GridProps {
  shuffledTiles: (ITile | null)[];
  swappedTiles: (ITile | null)[];
  generateTileNumbers: () => void;
  swapTiles: (from: number, to: number) => void;
}

const Grid: FC<GridProps> = ({
  shuffledTiles,
  swappedTiles,
  generateTileNumbers,
  swapTiles,
}) => {
  const [puzzleTiles, setPuzzleTiles] = useState(shuffledTiles);

  useEffect(() => {
    generateTileNumbers();
  }, []);

  useEffect(() => {
    setPuzzleTiles(shuffledTiles);
  }, [shuffledTiles]);

  useEffect(() => {
    setPuzzleTiles(swappedTiles);
  }, [swappedTiles]);

  /* handles the swapping of tiles */
  const handleSwapTiles = (index: number) => {
    // go right
    if (shuffledTiles[index + 1] === null) {
      swapTiles(index, index + 1);
    }
    // go left
    if (shuffledTiles[index - 1] === null) {
      swapTiles(index, index - 1);
    }
    // go up
    if (shuffledTiles[index - 4] === null) {
      swapTiles(index, index - 4);
    }
    // go down
    if (shuffledTiles[index + 4] === null) {
      swapTiles(index, index + 4);
    }
  };

  const renderTiles = (): ReactElement[] => {
    return puzzleTiles.map((tile, i) => (
      <Tiles key={i} tile={tile} onTilePress={() => handleSwapTiles(i)} />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Theme.white} />
      <View style={styles.gridContainer}>{renderTiles()}</View>
      <View style={styles.buttonContainer}>
        <Button title="Shuffle" onButtonPress={generateTileNumbers} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.white,
  },
  gridContainer: {
    width: GRID_SIZE,
    marginHorizontal: 'auto',
    backgroundColor: Theme.primary,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: GRID_PADDING,
    paddingTop: GRID_PADDING,
    borderRadius: 5,
  },
});

export default Grid;
