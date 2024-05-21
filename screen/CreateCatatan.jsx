import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import React from 'react';
import { ApiConstant } from '../values/ApiConstant';

export default function CreateCatatan({navigation}) {
  const [rawValue, setRawValue] = React.useState('');
  const [judulCatatan, setJudulCatatan] = React.useState('');
  const [isiCatatan, setIsiCatatan] = React.useState('');

  const doSubmit = () => {
    fetch(ApiConstant.postCatatan, {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        // 'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        req: "tambah_catatan",
        nim: '0102523708',
        judul_catatan: judulCatatan,
        detail_catatan: isiCatatan,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.success) { 
          Alert.alert('Information', json.pesan);
          setJudulCatatan('');
          setIsiCatatan('');
        } else {
          Alert.alert('waduh');
        }
      })
      .catch(error => {
        console.log(error);
        console.error(error);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 24,
        marginVertical: 12,
      }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 8,
          color: 'black',
        }}>
        Buat Catatan
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
        }}>
        Ini Catatan Saya
      </Text>

      <Text
        style={{
          marginTop: 24,
          fontSize: 18,
          color: 'red',
          marginBottom: 12,
        }}>
        Judul Catatan
      </Text>
      <TextInput
        value={judulCatatan}
        style={{
          borderWidth: 1,
          borderColor: '#757575',
          borderRadius: 8,
          padding: 12,
          fontSize: 18,
          color: 'black',
        }}
        placeholder="judul catatan"
        onChangeText={setJudulCatatan}
      />

      <Text
        style={{
          marginTop: 24,
          fontSize: 18,
          color: 'red',
          marginBottom: 12,
        }}>
        Isi Catatan
      </Text>
      <TextInput
        value={isiCatatan}
        multiline
        style={{
          borderWidth: 1,
          borderColor: '#757575',
          borderRadius: 8,
          padding: 12,
          fontSize: 18,
          color: 'black',
        }}
        placeholder="isi catatan"
        onChangeText={setIsiCatatan}
      />

      <TouchableOpacity
        onPress={() => {
          if (isiCatatan == '' || judulCatatan == '') {
            Alert.alert('information', 'Catatan Tidak Boleh Kosong');
          } else {
            // Alert.alert('information', 'Catatan Berhasil');
            doSubmit();
          }
        }}
        style={{
          marginBottom: 54,
          marginTop: 24,
          backgroundColor: 'red',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
          }}>
          Tambahkan Catatan
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MyCatatan');
        }}
        style={{
          width: Dimensions.get('window').width - 48,
          position: 'absolute',
          bottom: 24,
          backgroundColor: 'red',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
          }}>
          Catatan Saya
        </Text>
      </TouchableOpacity>
    </View>
  );
}
