import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Profile
      </Text>
      <View style={styles.profileInfo}>
  <View style={styles.avatar} />

  <Text style={styles.name}>
    Khalid
  </Text>

  <Text style={styles.email}>
    khalid@example.com
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

  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  profileInfo: {
  alignItems: 'center',
  marginTop: 30,
},

avatar: {
  width: 100,
  height: 100,
  borderRadius: 50,
  backgroundColor: '#9FEA00',
},

name: {
  color: 'white',
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 15,
},

email: {
  color: '#A0A0A0',
  marginTop: 5,
},
});