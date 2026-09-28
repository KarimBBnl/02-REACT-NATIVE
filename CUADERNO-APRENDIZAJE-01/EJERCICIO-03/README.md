# Ejercicio 03 - Ficha de perfil

## Qué he aprendido
- `Image` permite mostrar una imagen o avatar.
- `flexDirection: 'row'` coloca los elementos en una fila.
- `gap` controla la separación entre elementos.
- Un avatar circular se consigue haciendo iguales `width` y `height` y usando un `borderRadius` suficientemente grande.

## Respuesta a la pregunta de comprensión
Si quieres que dos estadísticas aparezcan una al lado de otra, ¿en qué `View` aplicarías `flexDirection: 'row'` y por qué?

Respuesta:
Aplicaría `flexDirection: 'row'` en la `View` que contiene las dos estadísticas. Así sus hijos se distribuyen horizontalmente en lugar de colocarse uno debajo del otro. El estilo debe estar en el contenedor común, no en cada estadística.

## Qué he modificado
- He construido una ficha con avatar circular, nombre, profesión y estadísticas distribuidas en una fila.
- He añadido la estadística `Contactos: 86`, como propone el reto.

## Resultado
La pantalla muestra la ficha de Laura con tres estadísticas alineadas horizontalmente.
