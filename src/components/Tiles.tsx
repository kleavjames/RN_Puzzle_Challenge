import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { fontSize, TILE_MARGIN, TILE_SIZE } from '../helpers/constants';
import { Theme } from '../helpers/enums';
import { ITile } from '../redux/types/Tiles';

interface Props {
  tile: ITile | null;
  onTilePress: () => void;
}

const Tiles: FC<Props> = ({ tile, onTilePress }) => {
  return (
    <TouchableOpacity
      onPress={onTilePress}
      style={[styles.container, tile ? styles.withBg : styles.transparentBg]}>
      <Text style={styles.title}>{tile?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    marginRight: TILE_MARGIN,
    marginBottom: TILE_MARGIN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: fontSize,
    fontWeight: 'bold',
    color: Theme.text,
  },
  withBg: {
    backgroundColor: Theme.white,
  },
  transparentBg: {
    backgroundColor: 'transparent',
  },
});

export default Tiles;
