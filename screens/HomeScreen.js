import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 14,
  },
  moodInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  photoContainer: {
    marginTop: 15,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
});

export default function HomeScreen() {
  const [entry, setEntry] = useState('');
  const [mood, setMood] = useState('');
  const [photo, setPhoto] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Dayz Entry</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Write your 5-line diary..."
        multiline
        numberOfLines={5}
        value={entry}
        onChangeText={setEntry}
      />

      <TextInput
        style={styles.moodInput}
        placeholder="Mood (😊, 😔, 😡, 😴)"
        value={mood}
        onChangeText={setMood}
      />

      <Button title="Pick a Photo" onPress={pickImage} />
      {photo && (
        <View style={styles.photoContainer}>
          <Image source={{ uri: photo }} style={styles.photo} />
        </View>
      )}
    </View>
  );
}