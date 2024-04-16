import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';

const KONT1 = (Dimensions.get('window').width - 48) / 4 - 12;
export default function Cbutton({
  bg = '#757575',
  text = 1,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 4,
        backgroundColor: bg,
        height: KONT1,
        width: KONT1,
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
