import {View, Text, FlatList, Alert, Dimensions} from 'react-native';
import React from 'react';
import {ApiConstant} from '../values/ApiConstant';

export default function MyCatatan() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(ApiConstant.getCatatan)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.success) {
          setData(json.data_catatan);
        } else {
          Alert.alert('waduh');
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const RenderItem = ({item}) => {
    return (
      <View style={{
        marginTop: 12,
        borderBottomWidth: 1,borderColor: '#a7a7a7'}}>
        <View
          style={{
            marginBottom:12,
            marginHorizontal: 12,
            borderRadius: 12,  
            width: Dimensions.get('window').width - 48,
          }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 8,
                color: 'black',
              }}
            >{item.judul_catatan}</Text>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
              }}
            >
              {item.detail_catatan}
            </Text>
          </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, marginTop: 24}}>
      <FlatList
        renderi
        ListEmptyComponent={<Text style={{textAlign: 'center'}}>No Data</Text>}
        data={data}
        renderItem={RenderItem}
      />
    </View>
  );
}
