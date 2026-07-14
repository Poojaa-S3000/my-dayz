import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

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
  moodCard: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  moodEmoji: {
    fontSize: 24,
    marginRight: 10,
  },
  moodCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statsContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#e8f4f8',
  },
  statText: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
});

export default function AnalyticsScreen() {
  const moodData = [
    { emoji: '😊', label: 'Happy', count: 10 },
    { emoji: '😔', label: 'Sad', count: 5 },
    { emoji: '😡', label: 'Angry', count: 2 },
    { emoji: '😴', label: 'Tired', count: 7 },
    { emoji: '😌', label: 'Calm', count: 8 },
  ];

  const totalEntries = moodData.reduce((sum, mood) => sum + mood.count, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mood Analytics</Text>
      
      {moodData.map((mood, index) => (
        <View key={index} style={styles.moodCard}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.moodEmoji}>{mood.emoji}</Text>
            <Text style={styles.moodLabel}>{mood.label}</Text>
          </View>
          <Text style={styles.moodCount}>{mood.count} days</Text>
        </View>
      ))}

      <View style={styles.statsContainer}>
        <Text style={styles.statText}>
          <Text style={{ fontWeight: 'bold' }}>Total Entries:</Text> {totalEntries} days
        </Text>
        <Text style={styles.statText}>
          <Text style={{ fontWeight: 'bold' }}>Most Common Mood:</Text> 😊 Happy
        </Text>
        <Text style={styles.statText}>
          <Text style={{ fontWeight: 'bold' }}>Tracking Since:</Text> Day 1
        </Text>
      </View>
    </ScrollView>
  );
}