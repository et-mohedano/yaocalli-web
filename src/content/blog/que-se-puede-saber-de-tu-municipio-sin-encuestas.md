---
title: "Qué se puede saber de tu municipio sin levantar una sola encuesta"
keyword: "datos abiertos municipio INEGI CONEVAL"
pilar: "Territorio y datos"
pubDate: 2026-10-20
updatedDate: 2026-10-20
description: "Qué se puede saber de un municipio con fuentes públicas gratuitas —INEGI, CONEVAL, CONAPO— antes de levantar una sola encuesta propia, y qué no."
tiempoLectura: "7 min"
servicioRelacionado: ["cartografia-y-analisis-territorial"]
---

¿Qué se puede saber de un municipio sin haber levantado todavía ninguna encuesta propia? Bastante más de lo que parece. Antes de gastar un peso en campo, las fuentes públicas mexicanas —el Instituto Nacional de Estadística y Geografía (INEGI), el Consejo Nacional de Evaluación de la Política de Desarrollo Social (CONEVAL) y el Consejo Nacional de Población (CONAPO)— ya permiten construir una fotografía demográfica, socioeconómica y territorial razonablemente completa. Lo que esas fuentes no dan es percepción, opinión ni evaluación de gestión: eso sí requiere levantamiento propio.

## Cuatro fuentes, cuatro preguntas distintas

Cada fuente pública responde una pregunta distinta y ninguna sustituye a la otra:

- **INEGI**, a través del Censo de Población y Vivienda, responde cuántas personas hay, cómo se distribuyen por edad y sexo, y cómo ha cambiado esa población en el tiempo. También publica el Marco Geoestadístico, que es la base territorial —manzana, localidad, municipio— sobre la que se cruza cualquier otro dato.
- **CONEVAL** responde qué tan extendida está la pobreza y con qué carencias específicas: rezago educativo, acceso a servicios de salud, calidad de la vivienda, acceso a la alimentación. Su Índice de Rezago Social ordena a los municipios según carencias estructurales.
- **CONAPO** responde qué tan concentrada está la marginación en un territorio, con un índice que no mide lo mismo que el de CONEVAL aunque a veces se confunden en el uso cotidiano.
- **La Red Nacional de Caminos**, que documenta la infraestructura vial del país, responde qué tan cerca o lejos está una zona de los servicios que dependen de que exista un camino: escuela, clínica, ruta de transporte.

## Cómo se cruzan, no solo se consultan

El valor real no está en consultar cada fuente por separado, sino en cruzarlas sobre una misma unidad territorial. Con infraestructura geoespacial —PostgreSQL con la extensión PostGIS es la que se usa en los proyectos de cartografía de Yaocalli— es posible tomar la capa de marginación de CONAPO, la de rezago social de CONEVAL y los datos demográficos de INEGI, y superponerlas a nivel de manzana o sección, no solo de municipio.

Sobre esa base se pueden calcular *buffers*: áreas de cobertura alrededor de un punto de interés —una escuela, una clínica, una parada de transporte— cruzando la Red Nacional de Caminos para medir distancia real por camino, no distancia en línea recta. Esa técnica es la misma que permite calcular, por ejemplo, un puntaje de prioridad de intervención vial por calle y por colonia: se integran los índices de marginación urbana, el estado físico de la red vial y la cercanía a servicios clave, sin necesidad de una sola encuesta.

Este cruce es también el que permite, en un operativo de campo real, dar seguimiento georreferenciado municipio por municipio al avance de un levantamiento: superponer dónde ya se encuestó sobre la capa territorial y saber, en tiempo real, qué zonas faltan.

## Un ejemplo con números reales: Mineral de la Reforma

Mineral de la Reforma, Hidalgo, es un caso donde los datos abiertos ya cuentan una historia clara antes de levantar una sola encuesta. Según el Censo de Población y Vivienda 2020 del INEGI, el municipio pasó de 127,404 a 202,749 habitantes en una década —un crecimiento de 59.1%, tres veces superior al de la capital estatal—, con 52.5% de mujeres y 47.5% de hombres, y se convirtió en el segundo municipio más poblado de Hidalgo, con 6.6% de la población estatal. La mitad de su población tiene 30 años o menos, y 17,477 personas (8.6%) tienen 60 años o más.

Sobre ese mismo municipio, las estimaciones municipales de pobreza 2020 de [CONEVAL](https://www.coneval.org.mx/) señalan que 17.5% de la población estaba en pobreza moderada y 1.21% en pobreza extrema; 36.6% era vulnerable por carencias sociales y 6.41% vulnerable por ingresos. En conjunto, alrededor de 55.3% de la población presentaba al menos una carencia social. Ninguno de estos números requirió una encuesta: son estimaciones oficiales, con fuente y fecha de corte identificables, disponibles para cualquier municipio del país.

Lo que esas cifras no dicen es si la población de Mineral de la Reforma percibe que sus Centros Comunitarios de Aprendizaje están bien mantenidos, si confía en su gobierno municipal, o qué tan satisfecha está con el transporte público. Eso solo lo responde un levantamiento propio, como el descrito en la nota sobre [cuánto tamaño de muestra hace falta para medir un municipio](/publicaciones/cuantas-encuestas-hacen-falta-para-medir-un-municipio/).

## Los límites de los datos abiertos

Tres límites conviene tener presentes antes de construir un diagnóstico solo con fuentes públicas:

**Desfase temporal.** El Censo de Población y Vivienda se levanta cada diez años, y las estimaciones intercensales cada cinco. Un municipio en crecimiento acelerado —como el del ejemplo anterior— puede tener, para el año en que se consulta el dato, una población meaningfully distinta a la del último censo disponible.

**Resolución territorial desigual.** No todas las fuentes bajan al mismo nivel de detalle. Algunas están disponibles a nivel manzana, otras solo a nivel municipio, y mezclar resoluciones sin cuidado produce lecturas engañosas: aplicar un promedio municipal a una colonia específica esconde exactamente la variación que se necesita ver para decidir.

**No miden percepción.** Ninguna fuente pública dice qué piensa la gente, cómo evalúa a su gobierno o qué tan satisfecha está con un servicio. Marginación, rezago social y pobreza —que además no son lo mismo entre sí, un tema que merece su propia explicación— son condiciones objetivas medidas desde fuera; la percepción solo se mide preguntando directamente.

## Por dónde empezar

Antes de diseñar el instrumento de una encuesta, tiene sentido construir primero esta capa de datos abiertos: dice qué ya se sabe, qué preguntas ya están respondidas y dónde exactamente hace falta levantamiento propio. Es más barato revisar tres fuentes públicas gratuitas que descubrir, ya en campo, que la mitad del cuestionario preguntaba algo que el Censo ya había respondido.

---

**Ficha de método.** Las cifras demográficas y de pobreza de Mineral de la Reforma citadas en este texto provienen del Censo de Población y Vivienda 2020 del [INEGI](https://www.inegi.org.mx/) y de las estimaciones municipales de pobreza 2020 de [CONEVAL](https://www.coneval.org.mx/), retomadas del diagnóstico participativo sobre presupuesto 2027 de ese municipio.

¿Necesita cruzar estas capas con levantamiento propio o cartografía a nivel de manzana o sección? Así se construye en la ficha de [cartografía y análisis territorial](/servicios/cartografia-y-analisis-territorial/).
