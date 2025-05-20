import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Pressable } from 'react-native';

export default function App() {

  let sampleList = [{id:1,github_repo:"mobile-dev-labs-8",name:'Andy'}, {id:2, github_repo: "mobile-dev-labs-8",name:'Gerazel'}, {id:3,github_repo:"mobile-dev-labs-8",name:'Cassandra'}]

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {sampleList.map((item) => (
        <Text key={item.id} style={{color:'blue', fontSize:20}}>{item.name}</Text>
      ))}
      <Pressable style={styles.Button} onPress={() => alert('I am done with the Lab')}>
        <Text style={{color:'white', fontSize:20}}>Press Me!</Text>
      </Pressable>
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

  Button: {
    backgroundColor: '#555',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
