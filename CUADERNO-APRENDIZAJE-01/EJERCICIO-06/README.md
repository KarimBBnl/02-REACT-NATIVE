# Ejercicio 06 - Dashboard de métricas

## Qué he aprendido
- `flexWrap: 'wrap'` permite que las tarjetas pasen a una nueva fila.
- Un ancho aproximado de `48%` deja espacio para la separación entre dos tarjetas.
- Un dashboard debe organizar la información para facilitar una lectura rápida.

## Respuesta a la pregunta de comprensión
¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?

Respuesta:
Dos tarjetas con un ancho del 50% ya ocupan todo el ancho disponible. Si además añadimos `gap`, `margin` o cualquier separación, la suma supera el ancho de la fila y puede provocar que una tarjeta salte de línea. El 48% deja espacio para esa separación y hace más estable el diseño.

## Qué he modificado
- He añadido cinco tarjetas con etiqueta, valor y variación positiva en una cuadrícula de dos columnas.
- La quinta tarjeta continúa en la siguiente fila gracias a `flexWrap`, como propone el reto.

## Resultado
La pantalla muestra un dashboard desplazable con las métricas en dos columnas y la quinta tarjeta en una tercera fila.
