import React, { useState } from "react";
import { Text, TextInput, View, FlatList } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { MonoText } from "../../../components/StyledText";
import { styles } from "../styles";

export default function HomeScreen() {
  const [movies, setMovies] = useState([
    {
      title: "Matrix 4",
      description: "topzera",
      platforms: ["Netflix", "Prime Videos"]
    },
    {
      title: "Vingadores 4",
      description: "topzera",
      platforms: ["Netflix", "Prime Videos"]
    }
  ]);
  const [serachValue, setSearchValue] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setSearchValue(text)}
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <View>
            <MonoText>{item.title}</MonoText>
            <MonoText>{item.description}</MonoText>
            <MonoText>{item.platforms}</MonoText>
          </View>
        )}
        contentContainerStyle={{}}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
