import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { fontSize } from '../../helpers/constants';
import { Theme } from '../../helpers/enums';

interface Props {
  title: string;
  onButtonPress: () => void;
}

const Button: FC<Props> = ({ title, onButtonPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onButtonPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.primary,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: fontSize,
    color: Theme.white,
    textAlign: 'center',
  },
});

export default Button;
