import { View, Text, Image, StyleSheet } from 'react-native';

export default function MangoComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mango</Text>
      <Image
        source={require('../assets/Mango.jpg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
});
