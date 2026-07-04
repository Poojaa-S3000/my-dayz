import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>My Dayz Entry</Text>

      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Write your 5-line diary..."
        multiline
        numberOfLines={5}
        value={entry}
        onChangeText={setEntry}
      />

      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Mood (😊, 😔, 😡)"
        value={mood}
        onChangeText={setMood}
      />

      <Button title="Pick a Photo" onPress={pickImage} />
      {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200, marginTop: 10 }} />}
    </View>
  );
}
