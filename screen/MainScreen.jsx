import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function MainScreen({navigation}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          borderRadius: 12,
          backgroundColor: '#757575',
          paddingHorizontal: 24,
          paddingVertical: 12,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            marginBottom: 4,
          }}>
          {'Nama :   '}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
          }}>
          {'NIM    :  '}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CalcScreen');
        }}
        style={{
          marginTop: 24,
          backgroundColor: '#a3a3a3',
          borderRadius: 12,
          paddingHorizontal: 24,
          paddingVertical: 12,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '300',
          }}>
          Calculator
        </Text>
      </TouchableOpacity>
    </View>
  );
}
