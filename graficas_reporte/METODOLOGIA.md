# Notas para el reporte técnico

Fuente: `resultados/unificado/experimento.json`. Gráficas generadas directamente a partir del lote indicado en ese archivo.

- Figura 01: el denominador son todas las corridas del grupo, incluyendo inviables y fuera de presupuesto.
- Figura 02: mediana calculada únicamente sobre soluciones factibles dentro del presupuesto; las celdas sin datos se omiten, no se asignan ceros.
- Figura 03: valores finales individuales por semilla; una sola corrida no establece convergencia estadística.
- Figura 04: convergencia de Mochila (fila 9). N-Reinas y Eggholder contienen historiales sin coordenada de evaluaciones; no deben representarse sobre un eje de evaluaciones sin adaptar los solvers.
- No compares valores objetivos absolutos entre problemas distintos; las métricas tienen unidades y direcciones diferentes.
- El estado "ok" significa que el algoritmo terminó técnicamente sin excepciones, no que encontró una solución factible.
- Una corrida fuera de presupuesto se muestra en el diagnóstico, pero se excluye de estadísticas de calidad.

El archivo describe un **lote de experimentos** y no prueba matemáticamente mínimos globales, salvo en casos en los que el algoritmo registre justificadamente optimalidad demostrada.
