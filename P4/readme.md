# Práctica 4: Componentes UI

## Paso a producción (Figma Make)
Enlace a figma: https://www.figma.com/design/wTqAyZ7qD5dY66dDGsYn63/Moodboard-PokePok%C3%A9--Copia-?node-id=14056-530&t=Znph6dqHikqNTrDh-1

Enlace al prototipo de figma: https://www.figma.com/proto/wTqAyZ7qD5dY66dDGsYn63/Moodboard-PokePok%C3%A9--Copia-?node-id=14056-530&t=Znph6dqHikqNTrDh-1

**IMPORTANTE: Leer el [README](P4_DIU/README.md)**

Código: [P4_DIU](P4_DIU)

## Briefing

Para crear los componentes de UI de nuestra página, hemos usado Figma Make. Al importar los frames de nuestro diseño, pareces ser que automáticamente se ha importado su código, de forma que la IA ha podido fácilmente crear los componentes usando ese código, sin cambiar el diseño original.

Algo que sí hemos cambiado han sido las scrollbar falsas que habíamos puesto en las páginas que no cabían enteras en las pantallas para dejar claro que se podía scrollear. No sé si ha sido Figma Make, o simplemente al implementarlo automáticamente sale, pero al pasar las páginas a producción, aparecieron scrollbars reales, por lo que las falsas ya no eran necesarias, así que las quitamos. También hemos añadido un overlay para mostrar los detalles de cada plato de la carta. Finalmente, en la versión móvil de la carta, donde el menú desplegable de las secciones antes desplazaba el resto del contenido, ahora se muestra por encima de este.

Un problema que hemos encontrado usando Figma Make, es que a veces, incluso teniendo los componentes, los colocaba mal, en una posición absoluta, o no implementaba la funcionalidad que estos tenían (como desplazar la carta a la sección que se pulse), pero después de dos o tres intentos, acabó haciéndolo bien.

Otro problema es el límite de uso de la IA. Teniendo inicialmente 3000 créditos para Figma Make, al terminar la producción se habían gastado casi todos, quedando menos de 500.