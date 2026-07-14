import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockEntries = [
  { id: '1', date: '2026-07-14', text: 'Had a great day!', mood: '😊' },
  { id: '2', date: '2026-07-13', text: 'Feeling tired but okay.', mood: '😴' },
  { id: '3', date: '2026-07-12', text: 'A bit stressed today.', mood: '😔' },
  { id: '4', date: '2026-07-11', text: 'Productive day!', mood: '😊' },
  { id: '5', date: '2026-07-10', text: 'Feeling calm and peaceful.', mood: '😌' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  entryCard: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  mood: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default function HistoryScreen() {
  const renderEntry = ({ item }) => (
    <View style={styles.entryCard}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.text}>{item.text}</Text>
      <Text style={styles.mood}>Mood: {item.mood}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diary History</Text>
      <FlatList
        data={mockEntries}
        keyExtractor={(item) => item.id}
        renderItem={renderEntry}
        scrollEnabled={true}
      />
    </View>
  );
}