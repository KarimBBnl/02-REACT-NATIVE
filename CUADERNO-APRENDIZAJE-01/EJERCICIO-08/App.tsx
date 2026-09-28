import { FlatList, StyleSheet, Text, View } from 'react-native';

type Product = {
  id: string;
  name: string;
  icon: string;
  price: string;
  color: string;
};

const products: Product[] = [
  { id: 'keyboard', name: 'Teclado mecánico', icon: '⌨️', price: '79,90 €', color: '#e7f0ea' },
  { id: 'mouse', name: 'Ratón inalámbrico', icon: '🖱️', price: '34,50 €', color: '#f2eadb' },
  { id: 'monitor', name: 'Monitor Studio', icon: '🖥️', price: '249,00 €', color: '#e5edf2' },
  { id: 'headphones', name: 'Auriculares', icon: '🎧', price: '89,99 €', color: '#f1e5df' },
  { id: 'laptop', name: 'Portátil Air', icon: '💻', price: '899,00 €', color: '#e9e7f0' },
  { id: 'phone', name: 'Teléfono Pixel', icon: '📱', price: '599,00 €', color: '#e7efe8' },
  { id: 'speaker', name: 'Altavoz portátil', icon: '🔊', price: '54,00 €', color: '#f3ead8' },
  { id: 'camera', name: 'Cámara compacta', icon: '📷', price: '329,00 €', color: '#e5edf2' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        data={products}
        keyExtractor={(product) => product.id}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.eyebrow}>ESTUDIO · SELECCIÓN 2026</Text>
            <Text style={styles.title}>Productos</Text>
            <Text style={styles.subtitle}>Accesorios para tu espacio de trabajo</Text>
          </View>
        }
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={[styles.iconArea, { backgroundColor: item.color }]}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f5f0' },
  list: { padding: 18, paddingTop: 50, paddingBottom: 30 },
  header: { marginBottom: 20 },
  eyebrow: { color: '#57756a', fontSize: 10, fontWeight: '700', letterSpacing: 0.8 },
  title: { marginTop: 8, color: '#1d302c', fontSize: 32, fontWeight: '700' },
  subtitle: { marginTop: 5, color: '#71807b', fontSize: 14 },
  row: { gap: 12, marginBottom: 12 },
  card: { flex: 1, minWidth: 0, padding: 10, borderRadius: 12, backgroundColor: '#ffffff' },
  iconArea: { height: 112, alignItems: 'center', justifyContent: 'center', borderRadius: 9 },
  icon: { fontSize: 42 },
  name: { minHeight: 38, marginTop: 11, color: '#263934', fontSize: 13, fontWeight: '600' },
  price: { marginTop: 5, color: '#167a72', fontSize: 15, fontWeight: '700' },
});
