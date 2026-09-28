# Ejercicio 04 - Pantalla de acceso

## Qué he aprendido
- `TextInput` permite introducir texto.
- `Pressable` sirve para crear superficies interactivas.
- `secureTextEntry` oculta el contenido de un campo de contraseña.

## Respuesta a la pregunta de comprensión
¿Por qué en este ejercicio no necesitamos todavía `useState`?

No necesitamos todavía `useState` porque el objetivo es construir la apariencia de la pantalla de acceso. Aunque `TextInput` podrá recibir texto, en esta fase no vamos a guardar ni utilizar esos valores para cambiar la interfaz o validar el formulario.

## Qué he modificado
- He creado campos de correo y contraseña; el campo de contraseña usa `secureTextEntry`.
- He añadido un botón visual con `Pressable` y el texto centrado para registrarse.
- No he añadido estado ni validaciones, tal como pide el ejercicio.

## Resultado
La pantalla muestra el formulario de acceso con campos diferenciados, contraseña oculta y un botón destacado.
