import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          accessibilityLabel="Retrato de Laura Martínez"
          source={{ uri: 'https://i.pravatar.cc/300?img=47' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Laura Martínez</Text>
        <Text style={styles.job}>Diseñadora UX/UI</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.number}>24</Text>
            <Text style={styles.label}>Proyectos</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>1280</Text>
            <Text style={styles.label}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>86</Text>
            <Text style={styles.label}>Contactos</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#e2e8f0',
  },
  card: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  name: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: '700',
    color: '#182b3a',
  },
  job: {
    marginTop: 4,
    color: '#64748b',
  },
  stats: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    marginTop: 24,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  number: {
    fontSize: 20,
    fontWeight: '700',
    color: '#167a72',
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: '#64748b',
  },
});
