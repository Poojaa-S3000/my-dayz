import React from 'react';
import { View, Text, FlatList } from 'react-native';

const mockEntries = [
  { id: '1', text: 'Had a great day!', mood: '😊' },
  { id: '2', text: 'Feeling tired but okay.', mood: '😴' },
  { id: '3', text: 'A bit stressed today.', mood: '😔' },
];

export default function HistoryScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Diary History</Text>
      <FlatList
        data={mockEntries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{item.text}</Text>
            <Text>Mood: {item.mood}</Text>
          </View>
        )}
      />
    </View>
  );
}
