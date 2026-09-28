import { ScrollView, StyleSheet, Text, View } from 'react-native';

const news = [
  { category: 'TECNOLOGÍA', title: 'IA y desarrollo', summary: 'Equipos pequeños están creando herramientas digitales más útiles con ayuda de modelos inteligentes.' },
  { category: 'MÓVIL', title: 'React Native', summary: 'Las nuevas mejoras permiten compartir más lógica entre aplicaciones móviles y web.' },
  { category: 'CLOUD', title: 'Arquitecturas cloud', summary: 'Diseñar servicios sencillos y escalables empieza por entender bien las necesidades.' },
  { category: 'DISEÑO', title: 'Interfaces accesibles', summary: 'Contraste, jerarquía y controles claros hacen que una app funcione para más personas.' },
];

type NewsCardProps = {
  category: string;
  title: string;
  summary: string;
  index: number;
};

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>EL BOLETÍN DIGITAL</Text>
      <Text style={styles.title}>Noticias</Text>
      <Text style={styles.subtitle}>Ideas y actualidad para seguir aprendiendo.</Text>
      {news.map((article, index) => (
        <NewsCard key={article.title} {...article} index={index} />
      ))}
    </ScrollView>
  );
}

function NewsCard({ category, title, summary, index }: NewsCardProps) {
  return (
    <View style={[styles.card, index === 0 && styles.featuredCard]}>
      <View style={styles.cardTop}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.readTime}>4 MIN</Text>
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.summary}>{summary}</Text>
      <Text style={styles.link}>LEER ARTÍCULO  ↗</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f1e8' },
  content: { padding: 22, paddingTop: 54, paddingBottom: 36 },
  eyebrow: { color: '#a34c32', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  title: { marginTop: 8, color: '#222a2d', fontSize: 34, fontWeight: '700' },
  subtitle: { marginTop: 6, marginBottom: 24, color: '#687276', fontSize: 15 },
  card: { marginBottom: 14, padding: 18, borderRadius: 14, backgroundColor: '#ffffff' },
  featuredCard: { borderLeftWidth: 4, borderLeftColor: '#d56a45' },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between' },
  category: { color: '#a34c32', fontSize: 11, fontWeight: '700', letterSpacing: 0.8 },
  readTime: { color: '#98a1a0', fontSize: 10, fontWeight: '700' },
  cardTitle: { marginTop: 12, color: '#222a2d', fontSize: 20, fontWeight: '700' },
  summary: { marginTop: 7, color: '#667276', fontSize: 14, lineHeight: 21 },
  link: { marginTop: 17, color: '#167a72', fontSize: 11, fontWeight: '700' },
});
