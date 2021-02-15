import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import AppContext from '../store/AppStore';

const HomeScreenList = () => {
  const { data } = useContext(AppContext);
  return (
    <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 20, }}>MyKlip</Text>
        <FlatList
            data={Object.values(data)}
            keyExtractor={data => data.item}
            renderItem={({ item, index }) => <ListItem text={item.text} index={index} />} />
    </View>
  );
}

export default HomeScreenList;