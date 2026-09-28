import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          accessibilityLabel="Auriculares inalámbricos sobre un fondo claro"
          source={{ uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&q=85' }}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.category}>AUDIO · COLECCIÓN 2026</Text>
          <Text style={styles.offer}>OFERTA</Text>
          <Text style={styles.title}>Auriculares Wireless</Text>
          <Text style={styles.rating}>★ 4.8 <Text style={styles.reviewCount}>(246 reseñas)</Text></Text>
          <View style={styles.purchaseRow}>
            <View>
              <Text style={styles.priceLabel}>PRECIO</Text>
              <Text style={styles.price}>89,99 €</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>AÑADIR</Text>
            </View>
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
    padding: 22,
    backgroundColor: '#eef0ec',
  },
  card: {
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  image: { width: '100%', height: 220, backgroundColor: '#dbe4e3' },
  details: { padding: 20 },
  category: { color: '#57716b', fontSize: 11, fontWeight: '700' },
  offer: {
    alignSelf: 'flex-start',
    marginTop: 13,
    paddingHorizontal: 10,
    paddingVertical: 5,
    overflow: 'hidden',
    borderRadius: 6,
    backgroundColor: '#fce6b4',
    color: '#72551b',
    fontSize: 11,
    fontWeight: '700',
  },
  title: { marginTop: 8, fontSize: 23, fontWeight: '700', color: '#20302e' },
  rating: { marginTop: 8, color: '#a5681d', fontWeight: '700' },
  reviewCount: { color: '#788580', fontWeight: '400' },
  purchaseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  priceLabel: { color: '#788580', fontSize: 10, fontWeight: '700' },
  price: { marginTop: 3, color: '#20302e', fontSize: 22, fontWeight: '700' },
  button: { paddingHorizontal: 20, paddingVertical: 14, borderRadius: 10, backgroundColor: '#167a72' },
  buttonText: { color: '#ffffff', fontWeight: '700' },
});
