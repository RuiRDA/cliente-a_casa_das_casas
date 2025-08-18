Prompt Folgas Mensais da Receção 
Bom dia. És um assistente especialista em planeamento de escalas de trabalho e folgas. O teu objetivo é gerar uma **escala mensal de folgas** para uma equipa de 4 trabalhadores, tendo em conta férias, folgas e regras obrigatórias específicas.

Antes de gerar a escala, deves **pensar cuidadosamente** sobre os seguintes pontos:
1. Identifica todas as restrições individuais presentes nas regras obrigatórias (dias de férias, folgas, indisponibilidades e restantes regras obrigatórias).
2. Confirma que os dias do mês estão de acordo com os dias da semana no mês em que pretendemos fazer a escala.

--- 

### Preenche os dados antes de executar:

- Nome dos colaboradores: Leandra, Ivone, Ivânia, Extra.
- **Mês de referência**: Agosto de 2025
-- **As Férias dos Colaboradores para o mês pretendido** são:
- Leandra: não tem férias 
- Ivone: de 25 a 29 de agosto 
- Ivânia: 1 de agosto 
- Extra: de 18 a 22 de agosto

---
**Estas são as regras obrigatórias a seguir para elaborar a escala mensal**:
-Cada trabalhador tem 2 folgas por semana.
-As folgas são rotativas, seguindo o seguinte modelo para cada pessoa:
	-Sáb+Dom
	-Sex+Sáb
	-Qua+Dom
	
Exemplo: na semana 1, a Leandra tem folga no Sábado e Domingo, na semana 2 ela tem folga na Sexta e no Sábado, e na semana 3 ela tem folga na Quarta e no Domingo.
-É expressamente proibido 1 trabalhador trabalhar Sábado e Domingo seguidos (ou seja, ninguém trabalha o fim de semana completo).
-Não pode haver sobreposição de folgas e férias, ou seja, se uma pessoa estiver de férias num dia, essa pessoa não pode receber folga nesse dia. 
-Não podem ficar mais de 3 trabalhadores de folga no mesmo dia. Tem de ficar pelo menos 1 trabalhador por dia a trabalhar.
---

- **Formato de saída**  
  - Deve cobrir **todos os dias** de agosto/2025, sem quaisquer vagas.  
  - Começa SEMPRE no dia 1 do mês, no dia da semana correto.
  - Faz sempre a escala de folgas para o mês COMPLETO!  
  - Cada célula:  
    - `[(SSS)] + [SSS] `(3 letras do dia da semana)

Por favor, gera a escala mensal de folgas, criando a lista dos dias do mês e indicando para cada dia qual o trabalhador que vai ter folga naquele dia. Para isso, gera uma única tabela para o mês inteiro, em markdown, utilizando o seguinte template de formato:


| Semana | seg | ter | qua | qui | sex | sab | dom
| semana 1| Leandra | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …]
| semana 1| Ivânia | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …]
| semana 1| Ivone | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …]
| semana 1| Extra | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …]

| semana 2| Leandra | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …]
| semana 2| Ivânia | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …]
| semana 2| Ivone | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …]
| semana 2| Extra | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …]

| semana 3| Leandra | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …]
| semana 3| Ivânia | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …] | [… + …]
...
etc fazer para 5 semanas!

Na tabela de output marcar os dias de folga respeitanto todas as regras.

…
Antes de responderes, pensa profundamente nesta tarefa e nas regras obrigatórias e preferências que te dei. Analisa quais os dias válidos em que cada trabalhador pode estar de folga e depois cria a escala de folgas para o mês pretendido, respeitando ao máximo todas as regras e preferências.
É extremamente importante obter uma escala de folgas; então, em situações de impossibilidade absoluta, podes fazer os ajustes necessários para que a escala seja criada, fazendo o mínimo desvio possível das regras e preferências.  
