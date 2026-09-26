# Especificação da Funcionalidade: Quiz Computacional

**Ramo da Funcionalidade**: `001-quiz-computacional`

**Criada em**: 2026-09-26

**Status**: Rascunho

**Entrada**: Descrição do usuário: "Desenvolver uma aplicação educacional chamada Quiz
Computacional para prática de conhecimentos básicos de Computação por meio de questões de múltipla
escolha."

## Esclarecimentos

### Sessão 2026-09-26

- P: O estudante pode reiniciar o quiz durante uma tentativa em andamento? → R: Permitir reinício apenas
  após a tela de resultado final.

## Cenários de Usuário e Testes *(obrigatório)*

### História de Usuário 1 - Responder ao quiz (Prioridade: P1)

Como estudante, quero iniciar o quiz e responder uma questão de cada vez para praticar conhecimentos
básicos de Computação.

**Por que esta prioridade**: responder às questões é o valor central da aplicação e, isoladamente, já
permite a prática educacional.

**Teste independente**: um estudante inicia o quiz, responde uma questão de quatro alternativas,
confirma a seleção e recebe o feedback correspondente.

**Cenários de aceitação**:

1. **Dado** que o estudante está na tela inicial, **quando** inicia o quiz, **então** visualiza a
   primeira de 10 questões, seu enunciado e exatamente quatro alternativas.
2. **Dado** que uma questão é exibida, **quando** o estudante seleciona uma alternativa e confirma a
   resposta, **então** recebe a indicação de que ela está correta ou incorreta.
3. **Dado** que nenhuma alternativa foi selecionada, **quando** o estudante tenta confirmar a resposta,
   **então** a aplicação solicita uma seleção e não registra uma resposta.

---

### História de Usuário 2 - Avançar entre questões (Prioridade: P2)

Como estudante, quero avançar para a próxima questão somente após receber o feedback para concluir a
prática em uma sequência clara.

**Por que esta prioridade**: mantém o fluxo pedagógico de resposta seguida de feedback e possibilita
completar todas as questões.

**Teste independente**: após confirmar uma resposta, o estudante recebe feedback, avança e encontra a
questão seguinte; a posição no quiz é atualizada até a décima questão.

**Cenários de aceitação**:

1. **Dado** que o estudante recebeu feedback de uma questão que não é a última, **quando** avança,
   **então** a próxima questão é exibida sem alterar respostas já registradas.
2. **Dado** que o estudante está na décima questão e confirma uma resposta, **quando** avança,
   **então** a aplicação apresenta o resultado final em vez de uma nova questão.

---

### História de Usuário 3 - Consultar resultado e reiniciar (Prioridade: P3)

Como estudante, quero consultar meu desempenho ao fim do quiz e reiniciá-lo para continuar praticando.

**Por que esta prioridade**: o resultado permite compreender o desempenho e o reinício torna possível
realizar novas tentativas sem cadastro.

**Teste independente**: após responder as 10 questões, o estudante visualiza acertos, erros e percentual
de acertos; ao reiniciar, uma nova tentativa começa sem dados da tentativa anterior.

**Cenários de aceitação**:

1. **Dado** que o estudante concluiu as 10 questões, **quando** o resultado é exibido, **então** ele
   vê as quantidades de acertos e erros e o percentual de acertos.
2. **Dado** que o resultado final é exibido, **quando** o estudante escolhe reiniciar, **então** o quiz
   volta à primeira questão com pontuação e respostas zeradas.

### Casos Limite

- O estudante não pode confirmar uma questão sem ter selecionado uma alternativa.
- Após confirmar a resposta, a alternativa escolhida não pode ser alterada naquela tentativa.
- Durante uma tentativa em andamento, o estudante não pode reiniciar o quiz nem descartar o progresso.
- O percentual de acertos é calculado sobre as 10 questões e é exibido de forma compreensível, inclusive
  quando o estudante acerta zero ou todas as questões.
- Questões com quantidade diferente de quatro alternativas ou sem uma única resposta correta não podem
  ser apresentadas ao estudante.

## Requisitos *(obrigatório)*

### Requisitos Funcionais

- **FR-001**: A aplicação DEVE permitir que o estudante inicie um quiz com exatamente 10 questões.
- **FR-002**: A aplicação DEVE apresentar uma única questão por vez, incluindo enunciado e exatamente
  quatro alternativas.
- **FR-003**: Cada questão DEVE possuir exatamente uma alternativa correta.
- **FR-004**: O estudante DEVE poder selecionar uma alternativa e confirmar sua resposta.
- **FR-005**: A aplicação NÃO DEVE confirmar uma resposta sem uma alternativa selecionada e DEVE informar
  ao estudante que a seleção é necessária.
- **FR-006**: Depois da confirmação, a aplicação DEVE informar se a resposta está correta ou incorreta.
- **FR-007**: A aplicação DEVE permitir o avanço para a próxima questão somente após a confirmação e o
  feedback da questão atual.
- **FR-008**: A aplicação DEVE calcular automaticamente os acertos, os erros e o percentual de acertos
  da tentativa.
- **FR-009**: Ao final da décima questão, a aplicação DEVE exibir a quantidade de acertos, a quantidade
  de erros e o percentual de acertos.
- **FR-010**: A aplicação DEVE permitir que o estudante reinicie o quiz somente na tela de resultado
  final, a partir da primeira questão e sem manter as respostas ou a pontuação da tentativa anterior.
- **FR-011**: A primeira versão NÃO DEVE solicitar cadastro, autenticação nem identificação do estudante.
- **FR-012**: A aplicação DEVE funcionar no navegador sem backend, banco de dados ou autenticação e DEVE
  ser acessada por HTTP estático para carregar o arquivo JSON local; a abertura por `file://` não é
  suportada.
- **FR-013**: A interface DEVE adaptar-se a desktop e smartphone, mantendo textos e controles legíveis.
- **FR-014**: Os controles DEVEM ser utilizáveis por teclado e apresentar foco visível; o feedback DEVE
  conter texto compreensível e não depender somente de cores.
- **FR-015**: Durante a tentativa, a interface DEVE informar a posição da questão atual no total de 10.

### Entidades Principais

- **Questão**: item de avaliação composto por enunciado, quatro alternativas e a indicação de uma única
  alternativa correta.
- **Alternativa**: uma das quatro opções de resposta de uma questão.
- **Tentativa de quiz**: sessão de um estudante que reúne respostas dadas, posição atual e resultados
  calculados para as 10 questões.
- **Resultado**: resumo final da tentativa, composto por quantidade de acertos, quantidade de erros e
  percentual de acertos.

## Critérios de Sucesso *(obrigatório)*

### Resultados Mensuráveis

- **SC-001**: Um estudante consegue iniciar uma tentativa e visualizar a primeira questão com quatro
  alternativas em até 10 segundos após decidir começar.
- **SC-002**: Em uma tentativa concluída, a aplicação apresenta exatamente 10 questões, uma por vez.
- **SC-003**: Em 100% das tentativas concluídas, acertos mais erros totalizam 10 e o percentual exibido
  corresponde à proporção de acertos sobre 10 questões.
- **SC-004**: Em teste de aceitação, estudantes conseguem concluir o quiz, identificar o próprio resultado
  e iniciar uma nova tentativa sem precisar criar ou acessar uma conta.

## Premissas

- O conjunto inicial de 10 questões será disponibilizado pela própria aplicação e aborda conhecimentos
  básicos de Computação.
- O estudante realiza uma tentativa individual em um único dispositivo; não há necessidade de salvar ou
  recuperar tentativas nesta primeira versão.
- A expressão "funcionar diretamente no navegador" significa uma aplicação sem backend, servida por HTTP
  estático; abrir o arquivo HTML por `file://` não faz parte do escopo suportado.
- Cada alternativa é apresentada com texto suficiente para que o estudante possa diferenciá-la das demais.
- O escopo inicial não inclui cronômetro, histórico de tentativas, níveis de dificuldade, cadastro ou
  autenticação.
