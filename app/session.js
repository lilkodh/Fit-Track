import { View, Text, StyleSheet } from 'react-native';
import SessionCard from '../components/SessionCard';

export default function Session() {
  return (
  <View style={styles.container}>
  <View style={styles.header}>
    <Text style={styles.back}>←</Text>

    <Text style={styles.title}>
      Session
    </Text>

    <Text style={styles.gps}>
      GPS
    </Text>
  </View>

  <View style={styles.activityBadge}>
    <Text style={styles.activityText}>
      🚶 Walking
    </Text>
  </View>
  <View style={styles.timerContainer}>
  <Text style={styles.timer}>
    00:32:45
  </Text>

  <Text style={styles.duration}>
    Duration
  </Text>
</View>
<View style={styles.statsRow}>
  <SessionCard
    value="2.64"
    unit="km"
    label="Distance"
  />

  <SessionCard
    value="5.2"
    unit="km/h"
    label="Speed"
  />

  <SessionCard
    value="11:32"
    unit="/km"
    label="Pace"
  />
</View>
<View style={styles.mapCard}>
  <Text style={styles.mapText}>
    Map Preview
  </Text>
</View>
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

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  back: {
    color: 'white',
    fontSize: 28,
  },

  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },

  gps: {
    color: '#9FEA00',
    fontSize: 18,
  },
  activityBadge: {
  alignSelf: 'center',
  backgroundColor: '#16263B',
  paddingHorizontal: 25,
  paddingVertical: 10,
  borderRadius: 30,
  marginTop: 25,
},

activityText: {
  color: 'white',
  fontSize: 18,
},
timerContainer: {
  alignItems: 'center',
  marginTop: 30,
},

timer: {
  color: 'white',
  fontSize: 64,
  fontWeight: 'bold',
},

duration: {
  color: '#A0A0A0',
  fontSize: 20,
  marginTop: 10,
},
statsRow: {
  flexDirection: 'row',
  gap: 10,
  marginTop: 30,
},
mapCard: {
  height: 220,
  backgroundColor: '#0D1B2A',
  borderRadius: 30,
  marginTop: 25,

  justifyContent: 'center',
  alignItems: 'center',
},

mapText: {
  color: '#A0A0A0',
  fontSize: 16,
},
});