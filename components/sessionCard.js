import { View, Text, StyleSheet } from 'react-native';

export default function SessionCard({ title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0D1B2A',
    padding: 20,
    borderRadius: 20,
    marginTop: 15,
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});