import { View, Text, StyleSheet } from 'react-native';
import SessionCard from '../components/SessionCard';

export default function session() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Session</Text>

      <Text style={styles.subtitle}>
        Choose an activity
      </Text>

      <SessionCard title="🚶 Walking" />

      <SessionCard title="🏃 Running" />

      <SessionCard title="🚴 Cycling" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041224',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#A0A0A0',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
  },
});