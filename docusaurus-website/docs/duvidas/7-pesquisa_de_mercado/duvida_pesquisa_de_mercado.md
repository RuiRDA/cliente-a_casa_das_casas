
# 7 - Pesquisa de Mercado


**7.1. Queremos saber se é possível criar um ou mais prompts que façam uma busca atualizada com uma seleção de intervalo de valor de imóveis atualmente em venda, especificando:**

- Seleção do tipo de imóvel (moradia / apartamento / terreno, etc);
- Intervalo de áreas;
- Seleção de tipologias;
- Seleção da localização por freguesia / zona;
- Seleção do estado de conservação
- Seleção de áreas anexas (varandas, terraços, parqueamento, arrecadações, etc.)



*Exemplo:*

*Gostaríamos de saber o que está à venda na Ericeira? Áreas? Moradias com piscina? T3 com vista de mar?*

Resposta: 

Na maioria das vezes, o ChatGPT não consegue dar bons resultados nesta tarefa de pesquisa porque, quando ele vai aos sites (Idealista, Imovirtual, etc.) ler os conteúdos das casas para fazer essa pesquisa de mercado, os sites têm sistemas que detetam que foi um robot que entrou na plataforma deles e bloqueiam. Por isso, na maioria das vezes, a pesquisa fica bastante incompleta, ou até nem a consegue fazer de todo. 

Ainda assim, deixamos aqui um prompt específico para esta pesquisa de mercado, embora haja esta limitação. 

*Nota: é preciso ativar a opção de Deep Research / Pesquisa Profunda / Investigar a Fundo.*
*Nota: Experimentar utilizar este prompt com a IA https://www.perplexity.ai*

**Mesmo com este prompt, a IA pode não conseguir responder caso não encontre ou não existam dados disponíveis para tal.**


#### Prompt:


``` markdown
Bom dia. Atua como um assistente especializado em mercado imobiliário em Portugal, com acesso aos portais Idealista, Imovirtual e Casa Sapo.

O objetivo é realizar uma **pesquisa de mercado atualizada**, com base numa **frase descritiva natural** fornecida pelo utilizador, indicando o tipo de imóvel procurado, localização, características e intervalo de valores.

## Tarefa:
1. Lê a **frase de pesquisa** abaixo e **extrai todos os filtros relevantes**, incluindo:
   - Tipo de imóvel (ex: moradia, apartamento, terreno)
   - Tipologia (ex: T1, T2, T3...)
   - Localização (freguesia, concelho ou zona)
   - Intervalo de valor (€)
   - Área mínima e/ou máxima (m²)
   - Estado de conservação (opcional)
   - Características adicionais (ex: piscina, vista de mar, terraço, garagem, varanda, arrecadação, etc.)

2. Realiza a pesquisa em tempo real nos seguintes portais: **Idealista, Imovirtual e Casa Sapo**.
3. Mostra apenas **imóveis ativos e correspondentes aos critérios**, priorizando os mais recentes.

## Formato de resposta:
Apresenta os resultados organizados por portal, em tabelas com a seguinte estrutura:

| Imóvel | Preço (€) | Área (m²) | Tipologia | Localização | Extras | Link |

4. Indica a **data da pesquisa** no início da resposta.
5. Não inventes dados. Apenas apresenta imóveis reais encontrados online.
6. Inclui os **links diretos dos anúncios** para cada imóvel apresentado.

---

### 📝 Frase de pesquisa a analisar:
[INSERIR AQUI UMA FRASE NATURAL, ex.: “Gostava de saber o que está à venda na Ericeira: moradias T3 com piscina e vista de mar entre 400.000€ e 700.000€, com pelo menos 150m².”]

---

## Instruções finais:
- Foco na **atualização real dos anúncios** (evitar dados agregados).
- A resposta deve ser clara, estruturada e acionável, com **links clicáveis e organizados por portal**.

```
**Mesmo com este prompt, a IA pode não conseguir responder caso não encontre ou não existam dados disponíveis para tal.**



 **7.2. É possível usar a IA para fazer uma pesquisa de Análise Comparativa de Mercado como no exemplo? Se sim, como?**

[Exemplo de pesquisa](avaliaçãoes_de_imóveis/Infocasa_2024-09-30_Lojas-com_99_m2.pdf)

Como é necessário a IA ter conseguido fazer a pesquisa de mercado para depois poder fazer a análise comparativa, os resultados da IA na análise comparativa estão diretamente dependentes da pesquisa mencionada no tópico anterior (7.1.), a qual já vimos que fica manifestamente incompleta se feita com estas IAs pelo motivo mencionado acima. 

*Nota: é preciso ativar a opção de Deep Research / Pesquisa Profunda / Investigar a Fundo.*
*Nota: Experimentar utilizar este prompt com a IA https://www.perplexity.ai*

**Mesmo com este prompt, a IA pode não conseguir responder caso não encontre ou não existam dados disponíveis para tal.**

Ainda assim, deixamos aqui um prompt para obter essa análise:

#### Prompt:

``` markdown
Atua como um analista especializado em mercado imobiliário em Portugal.

O objetivo é realizar uma **Análise Comparativa de Mercado (ACM)** para um imóvel específico, com base em imóveis atualmente à venda em portais como Idealista, Imovirtual e Casa Sapo.

## 1. Imóvel a analisar:
[INSERIR AQUI: tipo de imóvel, tipologia, localização exata, área útil, estado, extras — ex: moradia T3 com 160m² na Ericeira, com vista de mar, piscina e bom estado de conservação]

## 2. Tarefa:
1. Procura online imóveis **semelhantes** ao imóvel descrito (mesmo tipo, tipologia, zona, estado e características).
2. Seleciona os imóveis comparáveis mais relevantes (5 a 10, idealmente).
3. Apresenta os dados comparativos numa **tabela estruturada**, com:

| Imóvel Comparável | Preço (€) | Área (m²) | Preço/m² (€) | Localização | Extras | Link |

4. Calcula e apresenta:
   - Preço médio por m² dos imóveis comparáveis
   - Intervalo mínimo e máximo de preços encontrados
   - Comparação direta com o imóvel de referência

5. Inclui **links diretos** para todos os anúncios usados na comparação.

## Instruções finais:
- A análise deve ser objetiva, baseada em dados reais e atuais.
- Indica a **data da pesquisa** e a **fonte dos dados**.
- Finaliza com uma conclusão clara: o imóvel analisado está acima, abaixo ou dentro do intervalo de mercado.

```
**Mesmo com este prompt, a IA pode não conseguir responder caso não encontre ou não existam dados disponíveis para tal.**


