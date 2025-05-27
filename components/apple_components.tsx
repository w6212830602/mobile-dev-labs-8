import { View, Text, Image, StyleSheet } from 'react-native';

export default function AppleComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Apple</Text>
      <Image
        source={require('../assets/apple.jpg')}
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
    borderRadius: 100, // Making the image circular
  },
});

