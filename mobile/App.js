import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import HomeScreenList from './src/screen/HomeScreenList';
import colors from './src/utils/colors'
import AppContext, { AppProvider } from './src/store/AppStore'

const App = () => {
  const [ipServer, setIpServer] = useState('');
  const { changeIp, ip } = useContext(AppContext);
  
  const handleConnection = () => {
    if (!!ipServer) changeIp(ipServer);
  }

  return (
    <AppProvider>
      {
        ip ? <HomeScreenList /> :
        <View style={styles.container}>
        <Text style={styles.title}>MyKlip</Text>
        <TextInput
          style={styles.input}
          placeholder="Your IP Server"
          value={ipServer}
          onChangeText={(text) => setIpServer(text)}
        />
        <TouchableHighlight onPress={handleConnection} style={styles.button}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableHighlight>
      </View>
      }
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
  },
  button: { 
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.light
  },
})

export default App;
