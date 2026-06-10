import { View, Text , StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { Pedometer } from 'expo-sensors';
import useActivityStore from '../store/activityStore';
import ProgressRing from '../components/ProgressRing';
export default function home () {
  const steps = useActivityStore((state) => state.steps );
  const setSteps = useActivityStore((state)=> state.setSteps);
  const goal = 100;
  const percentage = Math.min(
  Math.floor((steps / goal) * 100),
  100
);
 useEffect(() => {
  let stepestotal;

  Pedometer.isAvailableAsync()
    .then((result) => {
      console.log('Pedometer available:', result);
      if (result) {
        stepestotal = Pedometer.watchStepCount((data) => {
         setSteps(data.steps);
        });
      }
    });
}, []);
  return (
   <View style={styles.container}>
  <View style={styles.header}>

    <View>
      <Text style={styles.greeting}>
        HI 👋
      </Text>
      <Text style={styles.name}>
        Khalid
      </Text>
    </View>
    <View style={styles.avatar} />
  </View>
<ProgressRing
  steps={steps}
  goal={goal}
  percentage={percentage}
/>
 <View style={styles.statsContainer}>
      <View style={styles.statCard}>
        <Text style={styles.statValue}>420</Text>
        <Text style={styles.statLabel}>Calories</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.statValue}>32m</Text>
        <Text style={styles.statLabel}>Time</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.statValue}>2.4km</Text>
        <Text style={styles.statLabel}>Distance</Text>
      </View>
    </View>
    <View style={styles.sessionButton}>
  <Text style={styles.sessionButtonText}>
    Start Session
  </Text>
</View>
</View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#041224",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    color: "white",
    fontSize: 20,
  },
  name: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 5,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#9FEA00",
  },
  statsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 30,
},

statCard: {
  flex: 1,
  backgroundColor: '#0D1B2A',
  paddingVertical: 20,
  borderRadius: 20,
  alignItems: 'center',
  marginHorizontal: 5,
},

statValue: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
},

statLabel: {
  color: '#A0A0A0',
  marginTop: 5,
},
sessionButton: {
  backgroundColor: '#9FEA00',
  borderRadius: 30,
  paddingVertical: 20,
  marginTop: 30,
  alignItems: 'center',
},

sessionButtonText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#041224',
},
});