import React from 'react';
import { View, Text } from 'react-native';

export default function AnalyticsScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Mood Analytics</Text>
      <Text>😊 Happy: 10 days</Text>
      <Text>😔 Sad: 5 days</Text>
      <Text>😡 Angry: 2 days</Text>
      <Text>😴 Tired: 7 days</Text>
    </View>
  );
}
