# Ejercicio 08 - Catálogo con FlatList

## Qué he aprendido
- `FlatList` muestra listas de forma eficiente.
- `renderItem` define cómo se representa cada elemento.
- `keyExtractor` proporciona una clave estable para cada producto.
- Un array de datos separa la información de la presentación.

## Respuesta a la pregunta de comprensión
¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?

Respuesta:
El array centraliza los datos y permite modificar un producto desde un único lugar. `FlatList` vuelve a utilizar esos datos para renderizar la lista mediante `renderItem`, sin duplicar JSX ni tener que localizar y editar manualmente cada tarjeta.

## Qué he modificado
- He creado ocho productos en un array y los muestro con `FlatList`, `renderItem` y `keyExtractor`.
- He configurado dos columnas y añadido dos productos extra desde los datos, sin duplicar JSX.

## Resultado
La pantalla muestra un catálogo desplazable de ocho productos en dos columnas, generado a partir de los datos.
