import { View, Text, StyleSheet } from 'react-native';

export default function ProgressRing({ steps, goal, percentage }) {
    let progressColor = '#EF4444';

if (percentage > 30) {
  progressColor = '#F59E0B';
}

if (percentage > 70) {
  progressColor = '#9FEA00';
}
  return (
    <View style={styles.container}>

      <View  style={[
    styles.circle,
    { borderColor: progressColor }
  ]}>
        <Text style={styles.steps}>
          {steps}
        </Text>

        <Text style={styles.label}>
          Steps
        </Text>

        <Text style={styles.goal}>
          of {goal} steps
        </Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>
          {percentage}%
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
  circle: {
    width: 360,
    height: 150,
    borderRadius: 130,
    borderWidth: 18,
    

    justifyContent: 'center',
    alignItems: 'center',
  },
  steps: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },
  label: {
    color: 'white',
    fontSize: 22,
    marginTop: 4,
  },
  goal: {
    color: '#A0A0A0',
    marginTop: 6,
    fontSize: 16,
  },
  badge: {
    marginTop: -20,
    backgroundColor: '#1A2433',
    paddingHorizontal: 18,
    paddingVertical: 10,

    borderRadius: 20,
  },
  badgeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});