import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.mark}>
          <Text style={styles.markText}>N</Text>
        </View>
        <Text style={styles.eyebrow}>NORTE STUDIO</Text>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Introduce tus datos para continuar</Text>

        <TextInput
          accessibilityLabel="Correo electrónico"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Correo electrónico"
          placeholderTextColor="#84929e"
          style={styles.input}
        />
        <TextInput
          accessibilityLabel="Contraseña"
          placeholder="Contraseña"
          placeholderTextColor="#84929e"
          secureTextEntry
          style={styles.input}
        />
        <Pressable accessibilityRole="button" style={styles.button}>
          <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
        </Pressable>
        <Text style={styles.register}>¿No tienes cuenta? Regístrate</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f4f2ed',
  },
  form: {
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
  },
  mark: {
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#d14d36',
  },
  markText: { color: '#ffffff', fontSize: 24, fontWeight: '700' },
  eyebrow: {
    marginTop: 28,
    color: '#a34432',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  title: { marginTop: 6, fontSize: 32, fontWeight: '700', color: '#202b33' },
  subtitle: { marginTop: 8, marginBottom: 28, color: '#65737d', fontSize: 16 },
  input: {
    height: 54,
    marginBottom: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#d6d8d4',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    color: '#202b33',
  },
  button: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    borderRadius: 12,
    backgroundColor: '#d14d36',
  },
  buttonText: { color: '#ffffff', fontWeight: '700' },
  register: { marginTop: 22, textAlign: 'center', color: '#56646d' },
});
