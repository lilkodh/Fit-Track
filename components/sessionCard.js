import { View, Text, StyleSheet } from 'react-native';

export default function SessionCard({ value, unit, label }) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>

      <Text style={styles.unit}>{unit}</Text>

      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
  },

  value: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  unit: {
    color: '#A0A0A0',
    fontSize: 12,
    marginTop: 2,
  },

  label: {
    color: '#A0A0A0',
    marginTop: 10,
    fontSize: 14,
  },
});