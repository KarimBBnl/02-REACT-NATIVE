import { ScrollView, StyleSheet, Text, View } from 'react-native';

type MovementProps = {
  title: string;
  detail: string;
  amount: string;
  kind: 'income' | 'expense';
};

const movements: MovementProps[] = [
  { title: 'Nómina', detail: 'Hoy · 09:42', amount: '+2.340,00 €', kind: 'income' },
  { title: 'Supermercado', detail: 'Ayer · 18:16', amount: '-42,80 €', kind: 'expense' },
  { title: 'Abono transporte', detail: 'Ayer · 08:05', amount: '-35,00 €', kind: 'expense' },
  { title: 'Devolución tienda', detail: '26 sep · 14:21', amount: '+18,90 €', kind: 'income' },
];

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>Buenos días 👋</Text>
      <Text style={styles.name}>Laura</Text>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>SALDO DISPONIBLE</Text>
        <Text style={styles.balance}>4.280,32 €</Text>
        <Text style={styles.account}>Cuenta principal  ·  •••• 2048</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.action}><Text style={styles.actionIcon}>↗</Text><Text style={styles.actionLabel}>Enviar</Text></View>
        <View style={styles.action}><Text style={styles.actionIcon}>＋</Text><Text style={styles.actionLabel}>Añadir</Text></View>
        <View style={styles.action}><Text style={styles.actionIcon}>▤</Text><Text style={styles.actionLabel}>Pagar</Text></View>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Movimientos</Text>
        <Text style={styles.all}>VER TODOS</Text>
      </View>
      <View style={styles.movementList}>
        {movements.map((movement) => (
          <Movement key={`${movement.title}-${movement.detail}`} {...movement} />
        ))}
      </View>
    </ScrollView>
  );
}

function Movement({ title, detail, amount, kind }: MovementProps) {
  const isIncome = kind === 'income';

  return (
    <View style={styles.movement}>
      <View style={[styles.movementIcon, isIncome ? styles.incomeIcon : styles.expenseIcon]}>
        <Text style={styles.movementSymbol}>{isIncome ? '↙' : '↗'}</Text>
      </View>
      <View style={styles.movementDescription}>
        <Text style={styles.movementTitle}>{title}</Text>
        <Text style={styles.movementDetail}>{detail}</Text>
      </View>
      <Text style={[styles.amount, isIncome ? styles.incomeAmount : styles.expenseAmount]}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f5f2' },
  content: { padding: 20, paddingTop: 54, paddingBottom: 30 },
  greeting: { color: '#718079', fontSize: 15 },
  name: { marginTop: 3, color: '#20342e', fontSize: 30, fontWeight: '700' },
  balanceCard: { marginTop: 22, padding: 22, borderRadius: 17, backgroundColor: '#173f36' },
  balanceLabel: { color: '#b5cdc3', fontSize: 11, fontWeight: '700', letterSpacing: 0.7 },
  balance: { marginTop: 12, color: '#ffffff', fontSize: 32, fontWeight: '700' },
  account: { marginTop: 8, color: '#c0d2ca', fontSize: 12 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 22, marginBottom: 28 },
  action: { width: '31%', minHeight: 82, alignItems: 'center', justifyContent: 'center', borderRadius: 13, backgroundColor: '#ffffff' },
  actionIcon: { color: '#187b68', fontSize: 23, fontWeight: '700' },
  actionLabel: { marginTop: 7, color: '#30433d', fontSize: 12, fontWeight: '600' },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  sectionTitle: { color: '#20342e', fontSize: 20, fontWeight: '700' },
  all: { color: '#187b68', fontSize: 10, fontWeight: '700' },
  movementList: { paddingHorizontal: 14, borderRadius: 14, backgroundColor: '#ffffff' },
  movement: { flexDirection: 'row', alignItems: 'center', minHeight: 76, borderBottomWidth: 1, borderBottomColor: '#edf0ed' },
  movementIcon: { width: 38, height: 38, alignItems: 'center', justifyContent: 'center', borderRadius: 12 },
  incomeIcon: { backgroundColor: '#e2f2e8' },
  expenseIcon: { backgroundColor: '#f3e9e2' },
  movementSymbol: { color: '#35554a', fontSize: 18, fontWeight: '700' },
  movementDescription: { flex: 1, marginLeft: 11 },
  movementTitle: { color: '#2b3c36', fontSize: 13, fontWeight: '600' },
  movementDetail: { marginTop: 4, color: '#87928d', fontSize: 11 },
  amount: { fontSize: 12, fontWeight: '700' },
  incomeAmount: { color: '#198256' },
  expenseAmount: { color: '#36413c' },
});
