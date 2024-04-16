import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import Cbutton from '../component/Cbutton';

const GAP = 8;
export default function CalcScreen() {
  const [rawValue, setRawValue] = React.useState('');
  const [isOpration, setIsOpration] = React.useState(false);
  const [isTitik, setIsTitik] = React.useState(false);
  const [total, setTotal] = React.useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          marginVertical: 24,
          borderRadius: 12,
          backgroundColor: '#a7a7a7',
          padding: 18,
          width: Dimensions.get('window').width - 48,
        }}>
        <View
          style={{
            marginBottom: 12,
            backgroundColor: '#c7ddb5',
            borderRadius: 12,
          }}>
          <Text style={{marginHorizontal: 24, fontSize: 30, fontWeight: '300'}}>
            {rawValue == '' ? 'input Value' : rawValue}
          </Text>
          <Text style={{marginHorizontal: 24, fontSize: 30}}>{total}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: GAP,
          }}>
          <Cbutton
            onPress={() => {
              setRawValue(rawValue + '1');
              setIsOpration(false);
              setIsTitik(false);
            }}
            text={'1'}
          />
          <Cbutton
            onPress={() => {
              setRawValue(rawValue + '2');
              setIsOpration(false);
              setIsTitik(false);
            }}
            text={'2'}
          />
          <Cbutton
            onPress={() => {
              setRawValue(rawValue + '3');
              setIsOpration(false);
              setIsTitik(false);
            }}
            text={'3'}
          />
          <Cbutton
            bg={'#d2d2d2'}
            onPress={() => {
              if (!isOpration) {
                setRawValue(rawValue + '/');
              }
              setIsOpration(true);
              setIsTitik(false);
            }}
            text={'/'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: GAP,
          }}>
          <Cbutton
            onPress={() => {
              setRawValue(rawValue + '4');
              setIsOpration(false);
              setIsTitik(false);
            }}
            text={'4'}
          />
          <Cbutton
            onPress={() => {
              setRawValue(rawValue + '5');
              setIsOpration(false);
              setIsTitik(false);
            }}
            text={'5'}
          />
          <Cbutton
            onPress={() => {
              setRawValue(rawValue + '6');
              setIsOpration(false);
              setIsTitik(false);
            }}
            text={'6'}
          />
          <Cbutton
            bg={'#d2d2d2'}
            onPress={() => {
              if (!isOpration) {
                setRawValue(rawValue + '*');
              }
              setIsOpration(true);
              setIsTitik(false);
            }}
            text={'X'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: GAP,
          }}>
          <Cbutton
            onPress={() => {
              setRawValue(rawValue + '7');
              setIsOpration(false);
              setIsTitik(false);
            }}
            text={'7'}
          />
          <Cbutton
            onPress={() => {
              setRawValue(rawValue + '8');
              setIsOpration(false);
              setIsTitik(false);
            }}
            text={'8'}
          />
          <Cbutton
            onPress={() => {
              setRawValue(rawValue + '9');
              setIsOpration(false);
              setIsTitik(false);
            }}
            text={'9'}
          />
          <Cbutton
            bg={'#d2d2d2'}
            onPress={() => {
              if (!isOpration) {
                setRawValue(rawValue + '+');
              }
              setIsOpration(true);
              setIsTitik(false);
            }}
            text={'+'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Cbutton
            onPress={() => {
              setRawValue(rawValue + '0');
              setIsOpration(false);
              setIsTitik(false);
            }}
            text={'0'}
          />
          <Cbutton
            onPress={() => {
              if (!isTitik) {
                setRawValue(rawValue + '.');
              }
              setIsOpration(false);
              setIsTitik(true);
            }}
            text={'.'}
          />
          <Cbutton
            bg={'#d2d2d2'}
            onPress={() => {
              if (rawValue != '') {
                if (!isOpration) {
                  console.log(eval(rawValue));
                  setTotal(eval(rawValue));
                }
              }
            }}
            text={'='}
          />
          <Cbutton
            bg={'#d2d2d2'}
            onPress={() => {
              if (!isOpration) {
                setRawValue(rawValue + '-');
              }
              setIsOpration(true);
              setIsTitik(false);
            }}
            text={'-'}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'grey',
          paddingHorizontal: 24,
          borderRadius: 12,
          paddingVertical: 6,
        }}
        onPress={() => {
          setRawValue('');
          setTotal('');
        }}>
        <Text style={{fontSize: 24, color: 'white', fontWeight: '300'}}>
          Clear
        </Text>
      </TouchableOpacity>
    </View>
  );
}
