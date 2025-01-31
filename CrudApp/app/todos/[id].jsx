import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TextInput, Pressable, View } from "react-native";
export default function EditScreen() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <View>
        <Text>{id}</Text>
      </View>
    </>
  );
}
