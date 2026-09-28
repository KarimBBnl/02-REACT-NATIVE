# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido
- Una pantalla compleja se puede dividir en componentes más pequeños.
- La composición permite organizar cabecera, saldo, movimientos y acciones por separado.
- Los componentes reutilizables hacen que el código sea más fácil de leer y mantener.

## Respuesta a la pregunta de comprensión
¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en `App`? Justifica.

Respuesta:
Convertiría en componentes la tarjeta de saldo, cada movimiento, las acciones rápidas y posiblemente la cabecera. Son bloques con una estructura propia que podrían reutilizarse o recibir datos mediante `props`. En `App` dejaría la composición general de la pantalla y el orden de esos bloques, porque es el lugar donde se organiza la vista completa.

## Qué he modificado
- He compuesto la pantalla con saludo, saldo disponible, tres acciones rápidas y una lista de movimientos.
- He creado el componente reutilizable `Movement` y añadido cuatro movimientos, incluido un ingreso positivo extra.

## Resultado
La pantalla muestra el saldo, las acciones y cuatro movimientos con ingresos y gastos diferenciados visualmente.
