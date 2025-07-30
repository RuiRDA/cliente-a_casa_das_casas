

# 9 - Emails com a resposta da Aprovação de Crédito

*Área dos Financiamentos* - Intermediação de crédito 


Queremos utilizar a IA para gerar modelos de e-mail para diversas situações relacionadas com respostas de crédito, incluindo e-mails de aprovação bancária ou recusa de financiamento do crédito.

O objetivo é automatizar a criação destes e-mails.




----------------------



*Exemplo dos e-mails de resposta de crédito*


```
Boa tarde __________,

Esperamos que esta mensagem a encontre bem!

Agradecemos a confiança depositada no nosso trabalho durante a análise da vossa viabilidade de crédito para aquisição de Habitação Própria Permanente com Financiamento a 100%.

Conforme mencionado anteriormente, enviamos simulações com base nas informações fornecidas, para um financiamento no valor de 280.0000€, que foram encaminhadas aos bancos nossos parceiros para aprovação.

Após análise detalhada, informamos que, infelizmente, os bancos não aprovaram as propostas de crédito conforme os termos apresentados nas simulações iniciais. Essa decisão foi tomada com base nos critérios internos das instituições financeiras, os quais nem sempre são divulgados de forma detalhada.

Lamentamos o sucedido e colocamo-nos à disposição para esclarecer qualquer dúvida ou, se desejarem, avaliar outras possibilidades de crédito que possam corresponder ao vosso perfil.
```



#### Prompt:



``` markdown
Bom dia. Atua como um assistente especializado em intermediação de crédito e comunicação profissional com clientes.

O objetivo é gerar automaticamente **e-mails claros, empáticos e profissionais** para diferentes respostas de crédito, em nome de um intermediário de crédito.

## Tarefa:
Com base na situação descrita abaixo, escreve um e-mail profissional e bem estruturado, adaptado à fase do processo de financiamento.

O e-mail deve:
- Ter um **tom cordial, humano e profissional**
- Estar livre de qualquer emoji
- Refletir a situação com clareza (ex: aprovação parcial, recusa, aprovação total, pedido de mais documentação, etc.)
- Ser personalizável (ex: nome do cliente, valor de financiamento, banco, objetivo do crédito)
- Ser assinado em nome de um consultor de crédito



## Exemplo de um possível e-mail:

Situação: “Gerar um e-mail de recusa de crédito no valor de 280.000€, para habitação própria permanente, após resposta negativa de todos os bancos contactados.”


E-mail gerado: “Boa tarde __________,

Esperamos que esta mensagem a encontre bem!

Agradecemos a confiança depositada no nosso trabalho durante a análise da vossa viabilidade de crédito para aquisição de Habitação Própria Permanente com Financiamento a 100%.

Conforme mencionado anteriormente, enviamos simulações com base nas informações fornecidas, para um financiamento no valor de 280.0000€, que foram encaminhadas aos bancos nossos parceiros para aprovação.

Após análise detalhada, informamos que, infelizmente, os bancos não aprovaram as propostas de crédito conforme os termos apresentados nas simulações iniciais. Essa decisão foi tomada com base nos critérios internos das instituições financeiras, os quais nem sempre são divulgados de forma detalhada.

Lamentamos o sucedido e colocamo-nos à disposição para esclarecer qualquer dúvida ou, se desejarem, avaliar outras possibilidades de crédito que possam corresponder ao vosso perfil.”


## Situação atual:
[_____INSERIR AQUI A DESCRIÇÃO DO CASO - exemplos: “Pedido de crédito para habitação própria permanente, valor 280.000€, não aprovado por nenhum dos bancos contactados.”, ou “Aprovação de crédito por parte do banco X, com spread de 1,1%, para financiamento de 90% do imóvel.”, ou até “Falta de documentos para prosseguir com análise de crédito junto do banco Y._____”]

## Instruções:
- O e-mail deve começar com uma saudação formal e o nome do cliente (ex: “Boa tarde, João.”).
- Explica a situação de forma transparente mas empática.
- Se for uma recusa, evita linguagem dura. Oferece alternativas ou apoio.
- Se for uma aprovação, menciona as condições principais (valor, entidade, condições relevantes).
- Se for necessário um passo seguinte (ex: documentos), termina com um **call to action claro**.
- Finaliza com assinatura genérica (ex: “Com os melhores cumprimentos, [nome do intermediário, nome da empresa]”)
```