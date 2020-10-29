import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Theme } from '../helpers/enums';

const Splash: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Theme.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.primary,
  },
});

export default Splash;
