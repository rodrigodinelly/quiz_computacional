# Feature Specification: Quiz Computacional - Aplicação Educacional Base

**Feature Branch**: `001-quiz-computacional`

**Created**: 2026-09-26

**Status**: Draft

**Input**: User description: "Desenvolver uma aplicação educacional chamada Quiz Computacional. A aplicação permitirá que um estudante pratique conhecimentos básicos de Computação respondendo questões de múltipla escolha. Ao iniciar o quiz, o estudante deverá visualizar uma questão por vez. Cada questão deverá apresentar: o enunciado; quatro alternativas; apenas uma alternativa correta. O estudante deverá selecionar uma alternativa e confirmar sua resposta. O quiz terá inicialmente 10 questões. Depois da confirmação, a aplicação deverá informar se a resposta está correta ou incorreta. O estudante poderá então avançar para a próxima questão. Ao finalizar todas as questões, a aplicação deverá apresentar: quantidade de acertos; quantidade de erros; percentual de acertos. O estudante deverá poder reiniciar o quiz. Não haverá cadastro ou autenticação nesta primeira versão."

## Clarifications

### Session 2026-09-26

- Q: O estudante pode alterar a alternativa selecionada antes de confirmar a resposta, e é permitido navegar de volta para questões anteriores já respondidas? → A: Seleção livre da alternativa antes da confirmação; resposta torna-se definitiva após confirmar; navegação estritamente para a frente.
- Q: Ao exibir o feedback de uma resposta incorreta, a aplicação deve indicar apenas que a resposta foi incorreta ou deve também revelar qual era a alternativa correta? → A: Indicar resposta incorreta e revelar a alternativa correta na própria tela de feedback.
- Q: Ao reiniciar o quiz (ou iniciar uma nova tentativa), a ordem das 10 questões e das 4 alternativas deve permanecer fixa ou ser embaralhada (randomizada)? → A: Manter a ordem estática/fixa original das questões e alternativas a cada reinício.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Responder Questões do Quiz (Priority: P1)

Como estudante, quero visualizar e responder questões de múltipla escolha sobre conhecimentos básicos de Computação, uma por vez, recebendo feedback imediato após cada resposta, para praticar e fixar meu aprendizado.

**Why this priority**: Esta é a funcionalidade principal da aplicação educacional (MVP). Sem a apresentação das questões e o feedback imediato, a aplicação não cumpre seu objetivo pedagógico fundamental.

**Independent Test**: Pode ser testada iniciando o quiz, selecionando uma alternativa na primeira questão, confirmando a resposta, verificando o feedback de acerto/erro e avançando para a questão seguinte.

**Acceptance Scenarios**:

1. **Given** que o estudante inicia o quiz, **When** a questão é carregada na tela, **Then** a aplicação exibe o enunciado e exatamente 4 alternativas de resposta sem revelar previamente qual é a resposta correta.
2. **Given** que o estudante selecionou uma das alternativas, **When** ele altera a seleção antes de confirmar, **Then** a aplicação atualiza o destaque para a nova alternativa selecionada.
3. **Given** que o estudante confirmou uma alternativa, **When** a resposta é processada, **Then** a aplicação exibe o feedback visual informando se está correta ou incorreta (destacando claramente a alternativa correta em caso de erro), trava a resposta de forma definitiva e habilita o botão para avançar para a próxima questão sem permitir o retorno às anteriores.

---

### User Story 2 - Visualizar Resultado Final e Desempenho (Priority: P2)

Como estudante, quero visualizar o resumo do meu desempenho ao finalizar as 10 questões, observando a quantidade de acertos, erros e o percentual de aproveitamento, para avaliar meu nível de conhecimento em Computação.

**Why this priority**: Permite que o estudante compreenda o resultado consolidado do seu treino após passar por todas as questões.

**Independent Test**: Pode ser testada completando a resposta das 10 questões em sequência e verificando se a tela final exibe o número exato de acertos, erros e a porcentagem calculada corretamente.

**Acceptance Scenarios**:

1. **Given** que o estudante respondeu e confirmou a 10ª (última) questão, **When** ele avança na tela, **Then** a aplicação apresenta a tela de resultados exibindo o total de acertos, total de erros e o percentual de acertos (ex: 8 acertos, 2 erros, 80% de acerto).

---

### User Story 3 - Reiniciar o Quiz (Priority: P3)

Como estudante, quero poder reiniciar o quiz a partir da tela de resultados para tentar novamente e melhorar minha pontuação.

**Why this priority**: Oferece a reutilização imediata da aplicação sem necessidade de recarregar a página manualmente.

**Independent Test**: Pode ser testada clicando no botão "Reiniciar Quiz" na tela de resultados e confirmando que o quiz retorna à questão 1 com pontuação e histórico zerados.

**Acceptance Scenarios**:

1. **Given** que o estudante está na tela de resultados finais, **When** clica no botão "Reiniciar Quiz", **Then** a aplicação reinicia a sessão, zera a pontuação e exibe novamente a primeira questão do quiz na sua ordem estática original.

---

### Edge Cases

- **Tentativa de confirmar sem selecionar opção**: Se o estudante clicar em confirmar resposta sem ter selecionado nenhuma das 4 alternativas, o sistema MUST manter o botão de confirmação desabilitado ou impedir a ação, solicitando que uma alternativa seja escolhida.
- **Tentativa de navegação direta ou de retorno**: O fluxo do quiz é estritamente sequencial e irreversível (questão 1 até 10). O estudante não pode avançar para a próxima questão sem confirmar a atual e não pode voltar para revisar ou alterar questões já confirmadas.
- **Interrupção no meio do quiz**: Caso o estudante feche ou recarregue a página antes da 10ª questão, a sessão atual é descartada e um novo quiz é iniciado a partir da 1ª questão.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST disponibilizar um conjunto de 10 questões focadas em conhecimentos básicos de Computação dispostas em uma ordem fixa.
- **FR-002**: O sistema MUST exibir uma única questão por vez na interface do usuário.
- **FR-003**: Cada questão MUST conter exatamente quatro alternativas de resposta e um enunciado claro.
- **FR-004**: O sistema MUST garantir que exatamente uma das quatro alternativas seja definida como a resposta correta por questão.
- **FR-005**: O sistema MUST permitir a escolha e alteração da alternativa selecionada antes da confirmação, exigindo contudo que exatamente uma alternativa esteja selecionada no momento da confirmação.
- **FR-006**: O sistema MUST fornecer feedback imediato informando se a resposta confirmada foi "correta" ou "incorreta", e no caso de resposta incorreta, MUST destacar visualmente a alternativa correta para orientação do estudante.
- **FR-007**: O sistema MUST travar a resposta confirmada como definitiva, impedindo seu retorno ou alteração, e permitir avançar estritamente de forma sequencial para a próxima questão.
- **FR-008**: O sistema MUST contabilizar automaticamente a quantidade de acertos e erros do estudante ao longo da sessão.
- **FR-009**: Ao concluir todas as 10 questões, o sistema MUST apresentar uma tela de resultado exibindo a quantidade de acertos, a quantidade de erros e o percentual de acertos.
- **FR-010**: O sistema MUST disponibilizar uma funcionalidade para reiniciar o quiz a partir da tela final, redefinindo o estado para a primeira questão mantendo a ordem estática das questões.
- **FR-011**: O sistema MUST funcionar sem a exigência de cadastro, autenticação ou login de usuários nesta versão.

### Key Entities

- **Questao**: Representa a unidade de pergunta do quiz. Possui os atributos: texto do enunciado, lista com exatamente 4 alternativas e o identificador/índice da alternativa correta.
- **Alternativa**: Representa cada opção de escolha associada a uma questão.
- **SessaoQuiz**: Representa o estado atual do teste do estudante. Armazena: número da questão atual (1 a 10), contagem de acertos, contagem de erros, histórico de respostas e status da sessão (em andamento ou concluída).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% das questões cadastradas e exibidas possuem exatamente 4 alternativas e apenas 1 resposta correta.
- **SC-002**: O feedback de resposta (correta/incorreta) e o gabarito (em caso de erro) são exibidos na interface imediatamente após a confirmação do estudante.
- **SC-003**: A pontuação final exibida na conclusão possui precisão matemática de 100% no cálculo de acertos, erros e percentual (fórmula: `(acertos / 10) * 100`).
- **SC-004**: Um estudante consegue completar o ciclo completo de 10 questões e reiniciar o quiz em menos de 3 minutos sem falhas ou inconsistências de estado.

## Assumptions

- O quiz é uma aplicação cliente web responsiva voltada para estudantes, funcionando adequadamente em telas de computadores e dispositivos móveis.
- O banco inicial de questões é estático e pré-definido com 10 perguntas fundamentais sobre Computação (ex.: conceitos de hardware, software, rede, lógica/algoritmos).
- Nenhuma dependência externa complexa ou autenticação de backend é necessária para este escopo inicial.
