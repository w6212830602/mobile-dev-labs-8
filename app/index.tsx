import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import ButtonTemplate from "../components/button_template";

const fruits = ['apple', 'orange', 'mango'];

export default function HomePage() {

  return (
    <View style={styles.container}>
      <Text>welcome to fruit App！</Text>

      <ButtonTemplate link={"/apple"} text={"Apple"} color="green" />
      <ButtonTemplate link={"/orange"} text={"Orange"} color="green" />
      <ButtonTemplate link={"/mango"} text={"Mango"} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});