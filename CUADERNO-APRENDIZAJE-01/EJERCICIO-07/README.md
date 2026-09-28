# Ejercicio 07 - Feed de noticias

## Qué he aprendido
- `ScrollView` permite desplazar una lista de contenido.
- Un componente reutilizable evita repetir la misma estructura.
- Las `props` permiten personalizar cada noticia.

## Respuesta a la pregunta de comprensión
¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?

Respuesta:
Entre noticias deben cambiar los datos, como la categoría, el título, la imagen y el texto. La estructura visual, los estilos y la forma de mostrar cada noticia deberían permanecer iguales. Para conseguirlo, se puede crear un componente que reciba esos datos mediante `props`.

## Qué he modificado
- He creado `NewsCard` con props para categoría, título, resumen e índice visual.
- He mostrado cuatro noticias distintas dentro de un `ScrollView`, incluida la noticia adicional del reto.

## Resultado
La pantalla muestra un feed desplazable de cuatro noticias mediante una misma tarjeta reutilizable.
