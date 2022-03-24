import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Coder!</Text>
      <Image 
      style={{width: '100%', height: '50%'}}
      source={{uri:'https://media3.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif?cid=ecf05e47gu8o845xpan5k8ktiwip5kfdf4fgpyfqq3wo3lwr&rid=giphy.gif&ct=g'}}
      ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
