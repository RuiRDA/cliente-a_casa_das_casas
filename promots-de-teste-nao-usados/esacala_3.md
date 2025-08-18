



Bom dia. És um assistente especialista em planeamento de escalas de trabalho. O teu objetivo é gerar uma **escala mensal** para uma equipa de comerciais, tendo em conta férias, folgas e regras obrigatórias específicas.

Antes de gerar a escala, deves **pensar cuidadosamente** sobre os seguintes pontos:
1. Identifica todas as restrições individuais presentes nas regras obrigatórias (dias de férias, folgas, indisponibilidades e restantes regras obrigatórias).
2. Confirma que os dias do mês estão de acordo com os dias da semana no mês em que pretendemos fazer a escala.

--- 

### Preenche os dados antes de executar:

- Nome dos colaboradores: Alexandre, André, Catarina, Cátia, Cláudio, Inês, José, Marco, Margarida, Miguel, Nuno, Sandro, Venâncio.
- **Mês de referência**: Agosto de 2025
- **As Folgas dos Colaboradores e restrições para o mês pretendido** são:
-Alexandre: 3, 9,10, 17, 23, 24, 31 de agosto
-André: 1, 2, 3, 11, 15, 16, 17, 25, 29, 30, 31 de agosto
-Catarina: não tem folgas
-Cátia: 2, 3, 9, 16, 17, 23, 31 de agosto
-Cláudio: 3, 4, 9, 16, 24, 25, 30 de agosto
-Inês: 1, 2, 8, 9, 15, 22, 23, 29 de agosto
-José: 2, 9, 14, 24, 29, 30 de agosto
-Marco: 1, 2, 8, 15, 22 e 29 de agosto
-Margarida: não tem folgas
-Miguel: 7, 14, 21, 28 de agosto
-Nuno: 2, 10, 16, 17, 24, 30, 31 de agosto
-Sandro: 3, 10, 16, 23, 31 de agosto
-Venâncio: 7, 14, 21, 28 de agosto
-- **As Férias dos Colaboradores para o mês pretendido** são:
-Alexandre: 18 a 31 de agosto
-André: não faz férias
-Catarina: 18 a 31 de agosto
-Cátia: 1 a 6 de setembro
-Cláudio: não faz férias
-Inês: 25 a 31 de agosto
-José: 1 a 13 de agosto
-Marco: 15 a 18 de agosto
-Margarida: não faz férias
-Miguel: 1 a 6 de setembro
-Nuno: não faz férias
-Sandro: 8 a 19 de agosto
-Venâncio: não faz férias

---
**Estas são as regras obrigatórias a seguir para elaborar a escala mensal**:
-Temos um posto de trabalho chamado “serviço” e temos outro chamado “prevenção”. 
-Qualquer trabalhador pode fazer par com qualquer outro trabalhador
-Ninguém trabalha nos serviços e prevenções 2 dias seguidos.
-As folgas são determinadas por cada trabalhador e comunicadas por eles antes de fazermos esta escala. 
-As férias são determinadas por cada trabalhador e comunicadas por eles antes de fazermos esta escala. 
-Ninguém faz serviços nem prevenção 2 dias antes dos dias de folga (exemplo: se a Catarina está de folga sábado e domingo, não pode fazer prevenção nem serviço na sexta nem na quinta). 
-Se o trabalhador for de férias, são 4 dias antes das férias que ele não pode fazer serviços nem prevenções. 
-O limite de serviços é de 3 por mês e o limite de prevenções por mês é de 3 por mês (total de 6 por mês para cada trabalhador). O ideal é ter 2 serviços e 2 prevenções por mês cada trabalhador. (Só aplicar 3 por mês quando outras pessoas estiverem de férias e for estritamente necessário; então é uma exceção, o ideal é 2 serviços e 2 prevenções por mês para cada trabalhador). 
-A Catarina não faz serviços nem prevenções ao fim de semana, e o ideal é ela fazer 1 serviço e 1 prevenção por mês. 
-O Venâncio tem de fazer sempre serviços e prevenções às terças-feiras. 
-O José tem preferência por fazer serviços e prevenções às terças-feiras. 
-O André e o Alexandre têm preferência por fazer serviços e prevenções às segundas-feiras. 
-O Sandro e o Marco têm preferência por fazer serviços e prevenções às quartas-feiras.
---

- **Contagem máxima**  
  - 🔸Máx. de 3× Serviço por colaborador no mês.  
  - 🔸Máx. de 3× Prevenção por colaborador no mês.  
  - 🔸Ideal: 2× Serviço + 2× Prevenção (mais do que 2× apenas em exceção).

- **Formato de saída**  
  - Deve cobrir **todos os dias** de agosto/2025, sem quaisquer vagas.
  - Começa SEMPRE no dia 1 do mês.
  - Faz sempre a escala para o mês COMPLETO!  
  - Cada celula:  
    - `[(DD)] [Nome] `


| Semana | Tarefa | Seg | Ter | Qua | Qui | Sex | Sáb | Dom |
|-----------|---------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| semana 1| Serviço | | ... | ... | ... | ... | ... | ... | … |
| semana 1| Prevenção | ... | ... | ... | ... | ... | ... | … |
| semana 2| Serviço | ... | ... | ... | ... | ... | ... | … |
| semana 2| Prevenção | ... | ... | ... | ... | ... | ... | … |
…

Por favor, gera a escala mensal, criando a lista dos dias do mês e indicando para cada dia qual o trabalhador que vai fazer o trabalho de serviço, e qual o trabalhador que vai fazer o trabalho de prevenção. Para isso, gera uma única tabela para o mês inteiro, em markdown, utilizando o seguinte template de formato:


Antes de responderes, pensa profundamente nesta tarefa e nas regras obrigatórias e preferências que te dei. Analisa quais os dias válidos em que cada trabalhador pode estar escalado e depois cria a escala para o mês pretendido, respeitando ao máximo todas as regras e preferências.
É extremamente importante obter uma escala; então, em situações de impossibilidade absoluta, podes fazer os ajustes necessários para que a escala seja criada, fazendo o mínimo desvio possível das regras e preferências.  Todos os dias têm de estar preenchidos com um trabalhador para serviço e outro para prevenção.
Após a lista, apresenta um pequeno **Resumo de Critérios**, onde explicas:
- Que restrições foram aplicadas a cada colaborador.
- Como garantiste o equilíbrio na distribuição dos turnos.
- Lista dos trabalhadores e número de dias que cada um foi escalado.






