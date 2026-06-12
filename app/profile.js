import { View, Text, StyleSheet } from 'react-native';

export default function profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          History
        </Text>

        <Text style={styles.settings}>
          ⚙️
        </Text>
      </View>
      <View style={styles.profileCard}>
  <View style={styles.avatar} />

  <View>
    <Text style={styles.name}>
      Ahmed
    </Text>

    <Text style={styles.level}>
      Level 8
    </Text>
  </View>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020B1A',
    padding: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },

  settings: {
    fontSize: 28,
  },
  profileCard: {
  backgroundColor: '#0D1B2A',
  borderRadius: 25,
  padding: 20,
  marginTop: 25,

  flexDirection: 'row',
  alignItems: 'center',
},

avatar: {
  width: 80,
  height: 80,
  borderRadius: 40,
  backgroundColor: '#9FEA00',
  marginRight: 20,
},

name: {
  color: 'white',
  fontSize: 28,
  fontWeight: 'bold',
},

level: {
  color: '#9FEA00',
  fontSize: 18,
  marginTop: 5,
},
});