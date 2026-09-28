import { ScrollView, StyleSheet, Text, View } from 'react-native';

const metrics = [
  { label: 'Ventas', value: '12.450 €', change: '+12,8 %' },
  { label: 'Clientes', value: '348', change: '+8,2 %' },
  { label: 'Pedidos', value: '1.024', change: '+16,4 %' },
  { label: 'Conversión', value: '7,4 %', change: '+1,3 %' },
  { label: 'Recompra', value: '42 %', change: '+3,8 %' },
];

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>LUNES, 28 SEPTIEMBRE</Text>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Rendimiento de este mes</Text>
      <View style={styles.grid}>
        {metrics.map((metric) => (
          <View key={metric.label} style={styles.metricCard}>
            <Text style={styles.label}>{metric.label}</Text>
            <Text style={styles.value}>{metric.value}</Text>
            <Text style={styles.change}>{metric.change} vs. mes anterior</Text>
          </View>
        ))}
      </View>
      <Text style={styles.footer}>Datos actualizados hace 12 minutos</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f2' },
  content: { padding: 22, paddingTop: 54 },
  eyebrow: { color: '#58756a', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  title: { marginTop: 8, color: '#18332c', fontSize: 32, fontWeight: '700' },
  subtitle: { marginTop: 4, marginBottom: 24, color: '#6c7d75', fontSize: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 14 },
  metricCard: {
    width: '48%',
    minHeight: 142,
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#ffffff',
  },
  label: { color: '#65776e', fontSize: 13, fontWeight: '600' },
  value: { marginTop: 18, color: '#18332c', fontSize: 23, fontWeight: '700' },
  change: { marginTop: 8, color: '#17734e', fontSize: 11, fontWeight: '600' },
  footer: { marginTop: 22, color: '#819087', fontSize: 12, textAlign: 'center' },
});
