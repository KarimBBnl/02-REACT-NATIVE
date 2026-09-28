import { ScrollView, StyleSheet, Text, View } from 'react-native';

type FitnessMetricProps = {
  icon: string;
  value: string;
  label: string;
};

const fitnessMetrics: FitnessMetricProps[] = [
  { icon: '🔥', value: '610', label: 'Calorías' },
  { icon: '◷', value: '55 min', label: 'Actividad' },
  { icon: '♡', value: '69 bpm', label: 'Pulsaciones' },
  { icon: '⌁', value: '6,3 km', label: 'Distancia' },
];

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>MARTES, 29 SEPTIEMBRE</Text>
      <Text style={styles.name}>Buenos días, Maya 👋</Text>
      <View style={styles.goalCard}>
        <View style={styles.goalHeader}>
          <Text style={styles.goalLabel}>OBJETIVO DIARIO</Text>
          <Text style={styles.goalIcon}>↗</Text>
        </View>
        <Text style={styles.steps}>8.200</Text>
        <Text style={styles.stepsLabel}>pasos de 10.000</Text>
        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>
        <Text style={styles.percentage}>82% completado</Text>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Resumen de hoy</Text>
        <Text style={styles.dateLabel}>HOY</Text>
      </View>
      <View style={styles.grid}>
        {fitnessMetrics.map((metric) => <FitnessMetric key={metric.label} {...metric} />)}
      </View>
      <View style={styles.activityHeader}>
        <Text style={styles.sectionTitle}>Actividad reciente</Text>
        <Text style={styles.all}>VER HISTORIAL</Text>
      </View>
      <Activity title="Carrera al aire libre" detail="5,2 km  ·  28 min  ·  08:15" icon="↗" />
      <Activity title="Paseo en bicicleta" detail="12 km  ·  42 min  ·  Ayer" icon="⌁" />
    </ScrollView>
  );
}

function FitnessMetric({ icon, value, label }: FitnessMetricProps) {
  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricIcon}>{icon}</Text>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

function Activity({ title, detail, icon }: { title: string; detail: string; icon: string }) {
  return (
    <View style={styles.activity}>
      <View style={styles.activityIcon}><Text style={styles.activityIconText}>{icon}</Text></View>
      <View style={styles.activityCopy}>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDetail}>{detail}</Text>
      </View>
      <Text style={styles.activityArrow}>›</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4ec' },
  content: { padding: 20, paddingTop: 50, paddingBottom: 34 },
  greeting: { color: '#74817a', fontSize: 10, fontWeight: '700', letterSpacing: 0.9 },
  name: { marginTop: 8, marginBottom: 22, color: '#1f352b', fontSize: 27, fontWeight: '700' },
  goalCard: { padding: 21, borderRadius: 17, backgroundColor: '#1d4536' },
  goalHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  goalLabel: { color: '#b9d0c1', fontSize: 10, fontWeight: '700', letterSpacing: 0.8 },
  goalIcon: { color: '#d5e7a2', fontSize: 20 },
  steps: { marginTop: 18, color: '#ffffff', fontSize: 36, fontWeight: '700' },
  stepsLabel: { marginTop: 2, color: '#c4d4c9', fontSize: 13 },
  progressBackground: { height: 9, overflow: 'hidden', marginTop: 21, borderRadius: 5, backgroundColor: '#456657' },
  progress: { width: '82%', height: '100%', borderRadius: 5, backgroundColor: '#d3e98d' },
  percentage: { marginTop: 9, color: '#e0eacf', fontSize: 11, fontWeight: '600' },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25, marginBottom: 13 },
  sectionTitle: { color: '#1f352b', fontSize: 18, fontWeight: '700' },
  dateLabel: { color: '#78857c', fontSize: 10, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 12 },
  metricCard: { width: '48%', minHeight: 112, padding: 14, borderRadius: 13, backgroundColor: '#ffffff' },
  metricIcon: { color: '#c2783b', fontSize: 19 },
  metricValue: { marginTop: 8, color: '#233b30', fontSize: 20, fontWeight: '700' },
  metricLabel: { marginTop: 3, color: '#79867e', fontSize: 11 },
  activityHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 26, marginBottom: 11 },
  all: { color: '#44725d', fontSize: 9, fontWeight: '700' },
  activity: { flexDirection: 'row', alignItems: 'center', minHeight: 72, marginBottom: 9, paddingHorizontal: 13, borderRadius: 12, backgroundColor: '#ffffff' },
  activityIcon: { width: 38, height: 38, alignItems: 'center', justifyContent: 'center', borderRadius: 11, backgroundColor: '#e8efe0' },
  activityIconText: { color: '#56734d', fontSize: 18, fontWeight: '700' },
  activityCopy: { flex: 1, marginLeft: 11 },
  activityTitle: { color: '#293b31', fontSize: 12, fontWeight: '700' },
  activityDetail: { marginTop: 4, color: '#849087', fontSize: 10 },
  activityArrow: { color: '#7c8981', fontSize: 22 },
});
