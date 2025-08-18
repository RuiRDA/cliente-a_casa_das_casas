
### **Prompt Otimizado para Escala Mensal**

**Assunto:** Geração de Escala Mensal Otimizada (Agosto 2025)

**Persona:** Bom dia. És um assistente especialista em **planeamento e otimização de escalas de trabalho**. O teu objetivo é gerar a **única e melhor escala mensal possível** para uma equipa de comerciais, aplicando uma análise profunda e uma estratégia de otimização para encontrar a solução com a maior "pontuação de fitness".

---

### **Dados de Entrada (Inalterados)**

-   **Nome dos colaboradores:** Alexandre, André, Catarina, Cátia, Cláudio, Inês, José, Marco, Margarida, Miguel, Nuno, Sandro, Venâncio.
-   **Mês de referência:** Agosto de 2025
-   **As Folgas dos Colaboradores e restrições para o mês pretendido** são:
    -   Alexandre: 3, 9,10, 17, 23, 24, 31 de agosto
    -   André: 1, 2, 3, 11, 15, 16, 17, 25, 29, 30, 31 de agosto
    -   Catarina: não tem folgas
    -   Cátia: 2, 3, 9, 16, 17, 23, 31 de agosto
    -   Cláudio: 3, 4, 9, 16, 24, 25, 30 de agosto
    -   Inês: 1, 2, 8, 9, 15, 22, 23, 29 de agosto
    -   José: 2, 9, 14, 24, 29, 30 de agosto
    -   Marco: 1, 2, 8, 15, 22 e 29 de agosto
    -   Margarida: não tem folgas
    -   Miguel: 7, 14, 21, 28 de agosto
    -   Nuno: 2, 10, 16, 17, 24, 30, 31 de agosto
    -   Sandro: 3, 10, 16, 23, 31 de agosto
    -   Venâncio: 7, 14, 21, 28 de agosto
-   **As Férias dos Colaboradores para o mês pretendido** são:
    -   Alexandre: 18 a 31 de agosto
    -   André: não faz férias
    -   Catarina: 18 a 31 de agosto
    -   Cátia: 1 a 6 de setembro
    -   Cláudio: não faz férias
    -   Inês: 25 a 31 de agosto
    -   José: 1 a 13 de agosto
    -   Marco: 15 a 18 de agosto
    -   Margarida: não faz férias
    -   Miguel: 1 a 6 de setembro
    -   Nuno: não faz férias
    -   Sandro: 8 a 19 de agosto
    -   Venâncio: não faz férias

---

### **Hierarquia de Regras e Sistema de Otimização**

A tua tarefa é construir a escala seguindo rigorosamente esta hierarquia.

#### **1. Regras Obrigatórias (Invioláveis)**
Estas regras não podem ser quebradas sob nenhuma circunstância. Uma escala que viole qualquer uma destas regras é considerada inválida.

-   **Cobertura Diária:** Todos os dias de agosto de 2025 devem ter um colaborador para "Serviço" e um para "Prevenção".
-   **Férias e Folgas:** Respeitar integralmente todos os dias de férias e folgas comunicados.
-   **Blocos de Indisponibilidade:**
    -   Ninguém trabalha nos 2 dias que antecedem um dia de folga.
    -   Ninguém trabalha nos 4 dias que antecedem o início de um período de férias.
-   **Regras Específicas de Colaboradores:**
    -   **Venâncio:** Tem de fazer sempre serviços e prevenções exclusivamente às terças-feiras.
    -   **Catarina:** Não faz serviços nem prevenções ao fim de semana (Sábados e Domingos).
    -   **Proibição de Dias Seguidos:** Ninguém pode ser escalado para Serviço ou Prevenção em dois dias consecutivos.
-   **Limites Máximos:** Nenhum colaborador pode exceder 3 Serviços ou 3 Prevenções no mês.

#### **2. Objetivo Principal: Maximizar a Pontuação de Fitness**
Após garantir todas as regras obrigatórias, o teu objetivo é encontrar a escala que alcança a maior pontuação num sistema de "Fitness". A escala começa com **100 pontos**, e as penalizações abaixo são subtraídas.

-   **Penalização por Sobrecarga de Trabalho (Prioridade Máxima): `-8` pontos**
    -   O número ideal de turnos totais (Serviço + Prevenção) por colaborador é 4.
    -   Por **cada turno** que um colaborador faça acima do ideal de 4, a escala é penalizada em 8 pontos. (Ex: um colaborador com 6 turnos gera uma penalidade de -16 pontos).
-   **Penalização por Pares Preferenciais Não Formados (Prioridade Secundária): `-1` ponto**
    -   Por cada vez que um par ideal (`Cláudio + Parceiro` ou `José + Parceiro`) pudesse ser formado (ambos disponíveis e sem violar regras obrigatórias) mas não foi, a escala é penalizada em 1 ponto.
-   **Penalização por Dias Preferenciais Não Cumpridos (Prioridade Baixa): `-1` ponto**
    -   Por cada vez que um colaborador com preferência de dia (André/Alexandre: Seg; José: Ter; Sandro/Marco: Qua) é escalado noutro dia quando o seu dia preferencial estava disponível, a escala é penalizada em 1 ponto.

#### **3. Estratégia de Otimização Sugerida (Processo Evolutivo)**
Para encontrar a escala com a pontuação máxima, deves:
1.  Gerar uma primeira escala que cumpra todas as regras obrigatórias.
2.  Calcular a sua Pontuação de Fitness inicial.
3.  Entrar num ciclo de otimização: introduzir pequenas "mutações" (trocas de turnos) que visem reduzir as penalidades (principalmente a de sobrecarga).
4.  A cada mutação, recalcular a pontuação. Se a nova pontuação for maior, a escala mutante torna-se a nova base.
5.  Repetir este processo até atingir um "plateau", onde nenhuma troca consegue melhorar a pontuação. Este é o sinal de que a solução ótima foi encontrada.

---

### **Formato de Saída (Inalterado)**

-   Gera uma única tabela para o mês inteiro, em markdown, utilizando o seguinte template:
    `| Semana | Tarefa | Seg | Ter | Qua | Qui | Sex | Sáb | Dom |`
-   Cada célula deve seguir o formato: `[(DD)] [Nome]`

---

### **Relatório de Otimização Final**
Após apresentar a escala final, deves incluir um pequeno relatório que explique:
1.  **A Pontuação de Fitness Final:** Apresenta a pontuação máxima alcançada.
2.  **Detalhe das Penalidades:** Mostra o cálculo exato da pontuação (ex: 100 - X por Carga - Y por Pares - Z por Dias).
3.  **Justificação da Otimização:** Explica por que esta escala é considerada a melhor possível, mencionando o "plateau de fitness" e as trocas que foram feitas para equilibrar a carga de trabalho.
4.  **Tabela de Carga de Trabalho Final:** Apresenta uma tabela simples que resume o número de Serviços (S) e Prevenções (P) de cada colaborador na escala final, pois este é o critério mais importante.