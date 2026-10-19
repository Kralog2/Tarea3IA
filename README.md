# OptiLab — Laboratorio de búsqueda y optimización

Implementación y comparación experimental de **Backtracking con filtrado y ordenamiento**, **Recocido Simulado** y **Algoritmo Genético** aplicados a cuatro problemas: **N-Reinas**, **Mochila 0/1**, **Coloreado de Grafos** y **función Eggholder**.

Desarrollado con **Next.js (App Router)**, **JavaScript**, **React** y **Tailwind CSS**. Los algoritmos pueden ejecutarse desde la interfaz web; además, el proyecto incluye scripts para reproducir experimentos por lotes y exportar resultados.

> **Objetivo académico:** no basta con encontrar una solución; se comparan factibilidad, calidad, tiempo, evaluaciones, convergencia, variabilidad y escalabilidad. Una solución factible no equivale necesariamente a un óptimo demostrado.

## Requisitos del sistema

- **Node.js 20 o superior** y npm.
- **Python 3** solamente para ejecutar el importador opcional de Mochila (`scripts/import_knapsack.py`).
- **ExcelJS** figura en las dependencias de desarrollo y permite producir el libro `.xlsx` desde los experimentos.

## Cómo ejecutarlo

Clona el repositorio:

```bash
git clone https://github.com/Kralog2/Tarea3IA.git
cd Tarea3IA
```

Instala las dependencias e inicia el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre **http://localhost:3000**. Selecciona el problema, la instancia y los algoritmos que quieras comparar. Los parámetros pueden ajustarse desde el formulario de cada problema. Para generar una versión de producción:

```bash
npm run build
npm run start
```

## Problemas y algoritmos

| Problema | Instancias | Backtracking | Recocido simulado | Algoritmo genético | Objetivo |
|---|---|:---:|:---:|:---:|---|
| N-Reinas | N = 8, 50 y 100 | ✓ | ✓ | ✓ | Minimizar conflictos; factible con cero conflictos |
| Mochila 0/1 | 10 filas del conjunto `knapsack_5_items.csv` | ✓ | ✓ | ✓ | Maximizar valor sin superar la capacidad |
| Coloreado de Grafos | 50 y 1000 nodos; semillas 101, 202 y 303 | ✓ | ✓ | ✓ | Minimizar colores entre coloraciones válidas |
| Eggholder | Dominio `[-512, 512]²` | No requerido | ✓ | ✓ | Minimizar el valor de la función |

### Representación y operadores

- **N-Reinas:** representación mediante permutaciones; Backtracking emplea *forward checking* y MRV; Recocido Simulado modifica la permutación mediante intercambios; el Genético usa cruza OX, torneo, mutación por intercambio y elitismo.
- **Mochila 0/1:** vector binario para seleccionar objetos; Backtracking utiliza orden por valor/peso y cota superior fraccionaria (*Branch and Bound*); Recocido invierte bits y repara selecciones inviables; el Genético usa cromosomas binarios, cruza de un punto, mutación y elitismo.
- **Coloreado de Grafos:** un color por nodo; Backtracking emplea DSATUR y búsqueda con restricciones; Recocido explora recoloraciones; el Genético usa cruce uniforme, mutación y selección por torneo. Se reportan conflictos y colores utilizados por separado.
- **Eggholder:** par de coordenadas reales `(x, y)`; Recocido Simulado aplica perturbaciones gaussianas; el Genético utiliza codificación real, BLX-α y mutación gaussiana.

> Los métodos de Backtracking pueden detenerse por los límites establecidos antes de demostrar optimalidad. En los algoritmos estocásticos, alcanzar una buena solución tampoco implica probar que es la óptima.

## Organización del proyecto

```text
app/
  page.js                     Página principal y selección de problemas
  problema/[id]/page.js       Ejecución y comparación desde la interfaz
  globals.css                 Estilos y variables de Tailwind
components/
  Board.js                    Visualización de N-Reinas
  Chart.js                    Gráficas de resultados
lib/
  registry.js                 Registro de problemas, algoritmos y parámetros
  nqueens.js                  Algoritmos de N-Reinas
  knapsack.js                 Algoritmos de Mochila 0/1
  graphcoloring.js            Algoritmos de Coloreado de Grafos
  eggholder.js                Algoritmos de Eggholder
  rng.js                      Utilidades para aleatoriedad reproducible
data/
  knapsack-instances.js       Diez instancias de Mochila
  graph-instances.js          Seis instancias de Grafos
  knapsack_5_items.csv        Datos originales utilizados en Mochila
scripts/
  experimentar_todo.mjs       Batería unificada de experimentos
  worker_experimento.mjs      Ejecución aislada y verificación de corridas
  experimentar_mochila.mjs    Experimentos específicos de Mochila
  experimentar_grafos.mjs     Experimentos específicos de Grafos
  import_knapsack.py          Importación y verificación del CSV de Mochila
resultados/
  unificado/                  Registros consolidados y Excel
  mochila/                    Resultados específicos de Mochila
```

La carpeta y la página de análisis comparativo (`app/analisis/`, `components/ExperimentDashboard.js`, etc.) corresponden a una **ampliación posterior del panel**, si está integrada en la versión de trabajo. No forman parte de la estructura del ZIP base revisado para este README.

## Contrato común de ejecución

Los algoritmos devuelven resultados normalizados para que la interfaz pueda presentar métricas y soluciones. Entre las propiedades utilizadas están:

```js
{
  solution,       // representación de la solución obtenida
  value,          // objetivo natural del problema
  feasible,       // cumple o no las restricciones
  evals,          // evaluaciones contabilizadas
  iters,          // nodos, movimientos o generaciones, según algoritmo
  history,        // historial para visualización
  historyPoints,  // puntos de convergencia, cuando están disponibles
  stopReason,     // motivo de terminación, cuando el módulo lo proporciona
  optimal         // indica optimalidad demostrada, no solo factibilidad
}
```

La firma del registro es `run(instancia, parametros, rnd)`. Algunas entradas se adaptan en `lib/registry.js` para traducir el identificador seleccionado a los datos reales de la instancia.

## Experimentos reproducibles

El módulo unificado realiza las comparaciones con **las mismas instancias**, **cinco semillas** (`11, 22, 33, 44, 55`) y un presupuesto objetivo de **10 000 evaluaciones y 10 segundos por corrida**. Backtracking incorpora además un límite de nodos. La ejecución registra también fallos, cortes y excedentes de presupuesto.

**Prueba rápida** (no reemplaza el experimento final):

```bash
node scripts/experimentar_todo.mjs --smoke
```

**Batería completa:**

```bash
node scripts/experimentar_todo.mjs
```

**Ejecutar únicamente algunos problemas:**

```bash
node scripts/experimentar_todo.mjs --problemas reinas,eggholder
```

> Importante: volver a ejecutar el script actualiza los archivos de `resultados/unificado/`. Antes de hacerlo, conserva una copia de los resultados utilizados en el reporte técnico. Las ejecuciones largas —en particular el Backtracking para grafos grandes— pueden agotar el límite establecido. El supervisor registra los cortes correspondientes.

### Cantidad de corridas del lote completo

| Problema | Instancias | Algoritmos | Semillas | Corridas |
|---|---:|---:|---:|---:|
| N-Reinas | 3 | 3 | 5 | 45 |
| Mochila 0/1 | 10 | 3 | 5 | 150 |
| Coloreado de Grafos | 6 | 3 | 5 | 90 |
| Eggholder | 1 | 2 | 5 | 10 |
| **Total** | **20** | | | **295** |

Para los métodos deterministas, repetir una misma instancia con varias semillas sirve como control; no constituye variabilidad estocástica independiente.

## Métricas y archivos generados

El script unificado escribe en `resultados/unificado/`:

| Archivo | Contenido |
|---|---|
| `corridas.csv` | Resultados por problema, algoritmo, instancia y semilla |
| `resumen.csv` | Estadísticas agrupadas del lote |
| `instancias.csv` | Manifiesto de instancias |
| `convergencia.csv` | Evolución del objetivo y referencia de evaluación, cuando existe |
| `experimento.json` | Configuración, corridas y detalles estructurados |
| `experimentos_unificados.xlsx` | Libro Excel con Corridas, Resumen, Instancias y Convergencia |

Se registran, según el algoritmo, el objetivo, la factibilidad, el tiempo, las evaluaciones, las iteraciones, los conflictos, los colores, el peso, el estado, el motivo de parada y si se demostró optimalidad.

**Interpretación correcta:** `iters` representa **nodos** en Backtracking, **movimientos** en Recocido y **generaciones** en Genético; no son unidades directamente comparables. También existen historiales heredados sin eje exacto de evaluaciones, que deben tratarse como muestras por iteración. No se deben comparar valores objetivo de problemas o instancias diferentes.

## Resultados del lote documentado

La batería unificada incluida como referencia contiene **295 corridas**, de las cuales **274** resultaron factibles y dentro del presupuesto, **20** no alcanzaron factibilidad (N-Reinas) y **1** quedó fuera de presupuesto (Grafos), sin errores de ejecución registrados. Estos números describen ese lote concreto, no una garantía para futuras ejecuciones.

El análisis e interpretación se encuentran en el **reporte técnico**. Para conclusiones válidas, se compara la calidad de las soluciones únicamente entre corridas de la misma instancia y con condiciones experimentales equivalentes.

## Entregables de la actividad

1. **Código fuente y aplicación:** este repositorio de GitHub.
2. **Resultados experimentales:** `resultados/unificado/experimentos_unificados.xlsx`.
3. **Reporte técnico:** PDF entregado por separado, con metodología, tablas, visualizaciones, análisis comparativo, discusión y conclusiones.

## Fuentes de las instancias

- **Mochila 0/1:** dataset [Knapsack Problem — warcoder (Kaggle)](https://www.kaggle.com/datasets/warcoder/knapsack-problem), archivo `knapsack_5_items.csv`, primeras diez filas. Se excluyen las columnas con soluciones de referencia de la entrada a los algoritmos.
- **Grafos:** generación Erdős–Rényi mediante NetworkX, con `p = 6 / (n − 1)` y semillas de instancia `101`, `202` y `303` para cada tamaño.
- **Eggholder:** formulación clásica, dominio `[-512, 512]²`; referencia: [Simon Fraser University — Eggholder](https://www.sfu.ca/~ssurjano/egg.html).

---

**OptiLab · Tarea 3 de Inteligencia Artificial** — laboratorio de búsqueda, optimización y análisis experimental reproducible.
