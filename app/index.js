import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { Pedometer } from 'expo-sensors';
import useActivityStore from '../store/activityStore';
export default function Home () {
  const steps = useActivityStore((state) => state.steps );
  const setSteps = useActivityStore((state)=> state.setSteps);
  const goal = 10000;
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
    <View>
      <Text> Today's Steps : {steps}</Text>
      <Text>Goal for Today is : {goal}</Text>
    </View>
  );
}