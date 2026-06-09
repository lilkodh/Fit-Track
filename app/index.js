import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { Pedometer } from 'expo-sensors';
import useActivityStore from '../store/activityStore';
export default function Home () {
  const steps = useActivityStore((state) => state.steps );
  const setSteps = useActivityStore((state)=> state.setSteps);
  useEffect(() => {
Pedometer.isAvailableAsync()
.then((result)=>{
    console.log('Pedometer available:', result);

});
  },[])
  return (
    <View>
      <Text>{steps}</Text>
    </View>
  );
}