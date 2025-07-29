
# 3 - Escalas de trabalho 


**Duvida:**

É pretendido que a IA automatize a criação de escalas de trabalho para 15 comerciais, gerando um planeamento inicial da escala semanal com base em férias, folgas e restrições específicas de serviço/prevenção para cada comercial.

O objetivo é que a IA forneça um "arranque inicial" para a escala, que depois poderá ser ajustado manualmente.


Qual o Prompt para gerar um planeamento inicial?





*Exemplo das restrições para escala dos comerciais*
 

 
```
Temos atualmente 12 comerciais + 1 (Catarina): Miguel; José; Venâncio; Alexandre; André; Cláudio; Nuno; Sandro; Cátia; Marco; Inês e Margarida.

 

Em que para fazer a escala temos de ter em conta os critérios:

 

1.º verificar férias e folgas de cada comercial;

2º os comerciais Venâncio e José fazem serviço de Serviço e Prevenção às terças-feiras; André e Alexandre às segundas-feiras; Sandro e Marco às quartas-feiras;

3-º o Cláudio e José devem fazer os serviços e prevenções com os elementos das suas equipas

4.º não podem estar de serviço/prevenção antes das folgas

5.º a Catarina faz apenas 1 a 2 serviços por semana, não trabalha aos fins de semana (folga) e não faz serviço de prevenção.  
```





## Prompt:

```markdown
És um assistente especialista em planeamento de escalas de trabalho. O teu objetivo é gerar uma **escala semanal inicial** para uma equipa de comerciais, tendo em conta férias, folgas e restrições específicas.

Antes de gerar a escala, deves **pensar cuidadosamente** sobre os seguintes pontos:
1. Identifica todas as restrições individuais (dias de férias, folgas, indisponibilidades, serviços de prevenção).
2. Aplica as regras gerais: máximo de 5 dias consecutivos de trabalho por comercial e distribuição equilibrada da carga de trabalho.
3. Confirma a semana de referência.

De seguida, gera a escala no seguinte **formato fixo** (usar sempre este modelo):

| Comercial | Seg | Ter | Qua | Qui | Sex | Sáb | Dom |
|-----------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Nome A    |  W  |  W  |  F  |  W  |  W  |  L  |  W  |
| Nome B    | ... | ... | ... | ... | ... | ... | ... |

Legenda:
- `W` = Trabalho
- `F` = Férias
- `L` = Folga / Dia livre
- `P` = Prevenção ou outro serviço específico

Após a tabela, apresenta um pequeno **Resumo de Critérios**, onde explicas:
- Que restrições foram aplicadas a cada colaborador.
- Como garantiste o equilíbrio na distribuição dos turnos.

---

### Preenche os dados antes de executar:

- **Semana de referência**: [ex.: 29/07/2025 – 04/08/2025]  
- **Colaboradores e restrições** (exemplo):  
  - João: Férias na segunda e terça-feira  
  - Ana: Folga obrigatória ao sábado; de prevenção à quarta-feira  
  - Luís: Indisponível na sexta-feira  
  - Carla: Sem restrições  
  - …

---
Objetivo: Geração de uma escala de trabalho inicial, equilibrada, funcional e coerente com as restrições.

Por favor, gera a escala de acordo com os requisitos.

```



*Este prompt pode ser utilizado em qualquer assistente de IA,sendo que se for utilizado no [Gemini](https://gemini.google.com/app) é possivel  exportar a tabela para um google sheets.*