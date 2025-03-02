# Problema 1 
Crear un repositorio local.
# Problema 2 
Crear un repositorio remoto. 
Sincronizar los repositorios.
Configurar user.name  y user.email
## Desarrollo del problema
Apesar de configurar user.name  y user.email con el git config me quedan dudas sobre la formar correcta de verificar en las herramientas del programa que esta cuenta se conecto 
Al sincronizar el repositorio local con el remoto no puede conectarlo facilmente pues habia creado un repositorio en otro repositorio. 
Despues de organizar las carpetas en el repositorio local pude conectar y verificar que la informacion este en GIHUB.
Esta descripcion se hace necesaria pues en un primer momento por no sincronizar bien el repositorio perdi el trabajo en clase
clone los repositorios realizados por dos compañeros y he verificado el suministrado por el profesor, tambien me di cuenta que en GITHUB las lineas de programacion se traducen al español.
# Problema  3 
Crear una pàgina que muestre un mapa centrado en mi barrio 
## Solucion propuesta
Utilizar una biblioteca de visor geogràfico: Leaflet, open layers, mapopen.
## Desarrollo del problema
Hay en algunos procesos que por desconocimiento me generar errores que no identifico facilmente y en este caso me demore en que el zoom quedara en los parametros que yo queria, ademas, en el trabajo en clase no logre generar una visualizacion en la escala y lugar esperada.
En el trabajo autonomo los cambios de zoom en el codigo si se vieron refernciados en la pagina.
# Problema 4
Crear un botón con el nombre de Arboles y asignarle un manejador de eventos. 
# Problema 5
Mostrar el poligono de mi barrio 
## Solucion propuesta 
Buscar geojson de terceros utilizando la informacion de la siguiente pagina: https://bogota-laburbano.opendatasoft.com/explore/dataset/barrios_prueba/map/?flg=es&q=el+pesebre&location=16,4.57446,-74.11666&basemap=jawg.streets&dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6ImJhcnJpb3NfcHJ1ZWJhIiwib3B0aW9ucyI6eyJmbGciOiJlcyJ9fSwiY2hhcnRzIjpbeyJhbGlnbk1vbnRoIjp0cnVlLCJ0eXBlIjoiY29sdW1uIiwiZnVuYyI6IkFWRyIsInlBeGlzIjoib2JqZWN0aWQiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiIjMDA3MzdDIn1dLCJ4QXhpcyI6Im9iamVjdGlkIiwibWF4cG9pbnRzIjo1MCwic29ydCI6IiJ9XSwidGltZXNjYWxlIjoiIiwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D
Cargar el geojson usando async await
## Desarrollo del problema
En el trabajo autonomo me genero demora la visualizacion del poligono al parecer no habia ningun error, como estaba utilizando un repositorio clonado pense en que toda la sintaxis habia algo que generaba dicho error.
Utilice otro repositorio clonado y me seguia sucediendo lo mismo pero cambie la linea 
let myData = await fetch('El_Pesebre.geojson'); por let myData = await fetch('Data/El_Pesebre.geojson'); esto una indiaccion de chatgpt pero tampoco funciono, me devolvi al codigo anterior y funciono. de todas maneras demore un tiempo largo en que se visuallizara el poligono.
# Problema 6 
Crear el BBox de mi barrio
## Solucion propuesta 
Utilizar la siguiente pagina en la web: https://geojson.io/#map=15.86/4.574882/-74.116969
# Problema 7
Obtener el datos geograficos de los arboles de Bogota https://datosabiertos.bogota.gov.co/dataset/censo-arbolado-urbano
## Solucion propuesta 
Buscar la informacion de terceros utilizando la siguiente pagina: https://geoportal.jbb.gov.co/agc/rest/services/SIGAU/CensoArbol/MapServer/0/query
## Desarrollo del problema
# Problema 8
Descargar los datos de arboles filtrados desde la API Servicio REST con phyton.
# Solucion propuesta 
Utilizar cuaderno Jupiter para filtrar datos el codidigo geenrado fue compartido al profesor y esta refrenciado en esta pagina https://colab.research.google.com/drive/1w2x5rwZ8HejbdEmo5I8TiSIErRzOvJkE?authuser=1
## Desarrollo del problema
Se realiza el procedimiento en clase, se crea el goejson de los arboles utilizando el bounding box y los datos Servicio REST pero al generar el archivo 'arboles_pesebre.geojson' no me aparece ningun elemento dentro del archivo .geojson
Se verifica que el link utilizado para utilizar el Servicio REST no tenga ningun filtro de informacion con compañeros de clase.
Verifico con compañeros de clase la cantidad de arboles que aparecen en sus respectivos barrios y la cantidades son significativas.
Para segir la verificacion observo el visor de la pagina donde se referencian los datos e identifico que hay muy pocos arboles en el sector donde se localiza mi barrio pero me quedan dudas.
sigo buscando otras referencias para identificar los arboles y encuentro un visor que muestra una base de datos mas detallada, este visor utiliza la misma base de datos con la que se realizo el filtrado en python. la pagina es la siguiente: https://mapas.bogota.gov.co/?l=48106&e=-74.85085126188838,4.310012792276676,-73.38623639372375,5.0087566024468755,4686&b=7256&show_menu=true
Al tener dos repositorios clonados me remito a observar la cantidad de datos que contiene cada geojeson, generandome mas dudas respecto a la cantidad de arboles en mi zona de estudio.
Despues de verificar en las pagians refernciadas, ver los erroor en sintaxis no encuentro un error en el codigo y prosigo con la generacion del resto de lineas de codigo para la pagina.
Cabe mencionar que en la consola del explorador no aparecen errores en los codigos.
# Problema 9
Crear dos botónes con los nombres de distancia y Siniestros y asignarle un manejador de eventos.
# Problema 10
Mostrar los arboles despues de dar click en el boton arboles.
## Desarrollo del problema
Teniendo como referencia la incositencia anterior la pagina carga, pero al dar click en el boton arboles no muestra ningun arbol.
# Problema 11
Crear un pdf que mida las distancias entre arboles despues de dar click en el boton distancias y que genere un PDF para mostrar estas relaciones de distancia entre arboles.
## Desarrollo del problema
La escritura del codigo genera un PDF con las caracteristicas definidas pero sin informacion, esto por la incositencia mencionada anteriormente con el archvo 'arboles_pesebre.geojson'.
# Problema 12
Obtener el Servicio REST de los Siniestros en Bogota
