"""Produce gráficas de análisis a partir de resultados/unificado/experimento.json.
Ejecutar: python scripts/generar_graficas_reporte.py
Depende de matplotlib (python -m pip install matplotlib).
"""
import json, math, statistics
from pathlib import Path
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

ROOT=Path(__file__).resolve().parents[1]
# In actual repo scripts/ at root and JSON within resultados.
src=ROOT/'resultados'/'unificado'/'experimento.json'
if not src.exists():
    # Local preparation/test fallback: remove this branch in installed project if desired
    src=ROOT/'experimento.json'
dat=json.loads(src.read_text(encoding='utf8'))
runs=dat['corridas']; dest=ROOT/'graficas_reporte';dest.mkdir(exist_ok=True)
COL={'bt':'#2c64a0','sa':'#059669','ga':'#a855a4'}
ALG={'bt':'Backtracking','sa':'Recocido','ga':'Genético'}
PRO={'reinas':'N-Reinas','mochila':'Mochila','grafos':'Grafos','eggholder':'Eggholder'}
def good(r):return r['estado']=='ok' and r['factible'] is True and r['dentro_presupuesto'] is True and isinstance(r.get('objetivo'),(int,float)) and math.isfinite(r['objetivo'])
def save(fig,name):fig.tight_layout();fig.savefig(dest/name,dpi=180,bbox_inches='tight');plt.close(fig)
# 1. Factibilidad separada por problema + algoritmo
pairs=[(p,a) for p in ['reinas','mochila','grafos','eggholder'] for a in ['bt','sa','ga'] if any(r['problema']==p and r['algoritmo']==a for r in runs)]
fig,ax=plt.subplots(figsize=(10,5));xs=list(range(len(pairs)))
for i,(p,a) in enumerate(pairs):
 rr=[r for r in runs if r['problema']==p and r['algoritmo']==a]; v=sum(map(good,rr));ax.bar(i,100*v/len(rr),color=COL[a]);ax.text(i,100*v/len(rr)+1,f'{v}/{len(rr)}',ha='center',fontsize=8)
ax.set_xticks(xs,[f'{PRO[p]}\n{ALG[a]}' for p,a in pairs],rotation=35,ha='right');ax.set_ylabel('Porcentaje de corridas factibles y dentro de presupuesto');ax.set_ylim(0,112);ax.set_title('Tasa de soluciones factibles por problema y algoritmo');save(fig,'01_factibilidad.png')
# 2. comparison times by size across reinas and grafos, with median of valid
fig,axes=plt.subplots(1,2,figsize=(11,4.5));
for ax,p in zip(axes,['reinas','grafos']):
 sizes=sorted({r['tamano'] for r in runs if r['problema']==p});
 for a in ['bt','sa','ga']:
  yy=[]
  for size in sizes:
   v=[r['tiempo_ms'] for r in runs if r['problema']==p and r['tamano']==size and r['algoritmo']==a and good(r)]; yy.append(statistics.median(v) if v else float('nan'))
  ax.plot(range(len(sizes)),yy,marker='o',label=ALG[a],color=COL[a]);
 ax.set_xticks(range(len(sizes)),sizes);ax.set_xlabel('Nodos / tamaño');ax.set_ylabel('Tiempo mediano (ms), sólo factibles');ax.set_title(PRO[p]);ax.grid(alpha=.2)
axes[1].legend();fig.suptitle('Escalabilidad bajo presupuesto: mediana de tiempo');save(fig,'02_escalabilidad_tiempo.png')
# 3. variability objective for egg (all seeds)
fig,ax=plt.subplots(figsize=(7,4.5))
for a in ['sa','ga']:
 rs=[r for r in runs if r['problema']=='eggholder' and r['algoritmo']==a and good(r)];ax.scatter([ALG[a]]*len(rs),[r['objetivo'] for r in rs],s=44,color=COL[a],alpha=.75)
ax.set_title('Eggholder · objetivo final por semilla');ax.set_ylabel('f(x,y), menor es mejor');ax.grid(axis='y',alpha=.2);save(fig,'03_eggholder_variabilidad.png')
# 4. convergence sample for Knapsack; evaluation coordinates are present
fig,ax=plt.subplots(figsize=(8,4.5));conv=dat['convergencia']
for a in ['bt','sa','ga']:
 pts=[c for c in conv if c['problema']=='mochila' and c['instancia']=='kaggle_opcion1_fila_9' and c['algoritmo']==a and c['semilla']==11 and isinstance(c['objetivo'],(int,float)) and isinstance(c.get('evaluaciones'),(int,float))];pts.sort(key=lambda c:c['evaluaciones'])
 if pts: ax.plot([p['evaluaciones'] for p in pts],[p['objetivo'] for p in pts],label=ALG[a],color=COL[a]);
ax.set_title('Mochila (fila 9) · convergencia, semilla 11');ax.set_xlabel('Evaluaciones acumuladas');ax.set_ylabel('Mejor beneficio factible');ax.grid(alpha=.2);ax.legend();save(fig,'04_convergencia_mochila.png')
notes=dest/'METODOLOGIA.md';notes.write_text('''# Notas para el reporte técnico\n\nFuente: `resultados/unificado/experimento.json`. Gráficas generadas directamente a partir del lote indicado en ese archivo.\n\n- Figura 01: el denominador son todas las corridas del grupo, incluyendo inviables y fuera de presupuesto.\n- Figura 02: mediana calculada únicamente sobre soluciones factibles dentro del presupuesto; las celdas sin datos se omiten, no se asignan ceros.\n- Figura 03: valores finales individuales por semilla; una sola corrida no establece convergencia estadística.\n- Figura 04: convergencia de Mochila (fila 9). N-Reinas y Eggholder contienen historiales sin coordenada de evaluaciones; no deben representarse sobre un eje de evaluaciones sin adaptar los solvers.\n- No compares valores objetivos absolutos entre problemas distintos; las métricas tienen unidades y direcciones diferentes.\n- El estado "ok" significa que el algoritmo terminó técnicamente sin excepciones, no que encontró una solución factible.\n- Una corrida fuera de presupuesto se muestra en el diagnóstico, pero se excluye de estadísticas de calidad.\n\nEl archivo describe un **lote de experimentos** y no prueba matemáticamente mínimos globales, salvo en casos en los que el algoritmo registre justificadamente optimalidad demostrada.\n''',encoding='utf8')
print('Gráficas creadas en:',dest)
