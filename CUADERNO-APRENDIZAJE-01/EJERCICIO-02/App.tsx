import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>
      <View style={styles.alternateCard}>
        <Text style={styles.alternateTitle}>Otra forma de empezar</Text>
        <Text style={styles.alternateSubtitle}>Una segunda tarjeta con una paleta fresca.</Text>
        <View style={styles.alternateButton}>
          <Text style={styles.alternateButtonText}>EXPLORAR</Text>
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
    gap: 18,
    backgroundColor: '#eef2f7',
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  alternateCard: {
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#d9f3eb',
  },
  alternateTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#14594e',
  },
  alternateSubtitle: {
    marginTop: 8,
    color: '#356b60',
  },
  alternateButton: {
    marginTop: 18,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#167a72',
  },
  alternateButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});