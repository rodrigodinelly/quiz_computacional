# Tarefas: Quiz Computacional

**Entrada**: Documentos em `specs/001-quiz-computacional/`
**Pré-requisitos**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, contrato JSON e `quickstart.md`

## Fase 1: Configuração

**Objetivo**: criar a estrutura estática prevista no plano.

- [x] T001 Criar `index.html`, `css/styles.css`, `data/questions.json`, `js/app.js`, `js/quiz.js` e `tests/quiz.test.js` nos caminhos definidos em `specs/001-quiz-computacional/plan.md`.
- [x] T002 [P] Criar a estrutura semântica inicial da interface em `index.html`, incluindo regiões para início, questão, feedback, resultado e erro.
- [x] T003 [P] Criar a base visual responsiva mobile-first em `css/styles.css` com foco visível, contraste adequado e áreas de toque utilizáveis.
- [x] T004 [P] Configurar em `tests/quiz.test.js` um executor sem dependências para os testes unitários do módulo `js/quiz.js`.

---

## Fase 2: Fundamentos

**Objetivo**: disponibilizar dados válidos e regras puras que bloqueiam todos os fluxos do quiz.

- [x] T005 Criar as 10 questões iniciais em `data/questions.json` conforme `specs/001-quiz-computacional/contracts/questions-json.md`.
- [x] T006 Implementar em `js/quiz.js` a validação do contrato: `version` igual a `1`, exatamente 10 questões, IDs únicos, enunciados não vazios, exatamente quatro alternativas com IDs e textos únicos, e `alternativaCorretaId` correspondente a uma alternativa.
- [x] T007 Implementar em `js/quiz.js` o estado da tentativa com `carregando`, `respondendo`, `feedback` e `concluído`, índice de 0 a 9, respostas e acertos.
- [x] T008 Implementar em `js/quiz.js` as operações puras para selecionar, confirmar uma única vez, avançar e reiniciar somente no estado `concluído`.
- [x] T009 Escrever em `tests/quiz.test.js` testes para validação do JSON, quatro alternativas, uma resposta correta, estados, bloqueio de confirmação sem seleção e ausência de pontuação duplicada.

**Ponto de controle**: dados inválidos não iniciam o quiz e a lógica pode ser verificada sem o DOM.

---

## Fase 3: História de Usuário 1 — Responder ao quiz (P1) 🎯 MVP

**Objetivo**: permitir iniciar, selecionar uma alternativa, confirmar e receber feedback.

**Teste independente**: iniciar uma tentativa, responder uma questão de quatro alternativas, confirmar e
receber feedback de correto ou incorreto.

- [x] T010 [US1] Implementar em `js/app.js` o carregamento de `data/questions.json` por HTTP estático e a mensagem clara para falha de carregamento ou dados inválidos.
- [x] T011 [US1] Implementar em `js/app.js` a renderização de uma questão por vez com `<fieldset>`, `<legend>`, quatro botões de opção e rótulos em `index.html`.
- [x] T012 [US1] Implementar em `js/app.js` a seleção e a confirmação, mantendo a confirmação indisponível até haver uma alternativa selecionada.
- [x] T013 [US1] Implementar em `js/app.js` o feedback textual acessível de resposta correta ou incorreta, bloquear a alteração da resposta confirmada e mover o foco para o feedback.
- [x] T014 [US1] Estilizar em `css/styles.css` as alternativas, estados selecionado e bloqueado, botão de confirmação e feedback sem depender apenas de cor.
- [x] T015 [US1] Validar a História de Usuário 1 pelo roteiro de `specs/001-quiz-computacional/quickstart.md`.

**Ponto de controle**: o estudante consegue responder uma questão válida e obter feedback imediato.

---

## Fase 4: História de Usuário 2 — Avançar entre questões (P2)

**Objetivo**: permitir avançar linearmente somente após o feedback, até a conclusão da décima questão.

**Teste independente**: confirmar uma resposta, avançar para a questão seguinte e chegar ao estado final após a décima resposta.

- [x] T016 [US2] Implementar em `js/app.js` o controle de avanço disponível somente no estado `feedback` e a atualização da questão atual.
- [x] T017 [US2] Implementar em `js/app.js` a transição da décima questão para o estado de resultado, sem criar uma questão adicional.
- [x] T018 [US2] Exibir em `index.html` e `js/app.js` a posição atual de forma compreensível, mantendo o foco no enunciado após cada avanço.
- [x] T019 [US2] Adicionar em `tests/quiz.test.js` testes das transições `feedback → respondendo` e `feedback → concluído`.
- [x] T020 [US2] Validar em `specs/001-quiz-computacional/quickstart.md` o fluxo de avanço e a conclusão após 10 questões.

**Ponto de controle**: o estudante avança em sequência, sem editar respostas anteriores, e alcança o resultado após 10 questões.

---

## Fase 5: História de Usuário 3 — Resultado e reinício (P3)

**Objetivo**: mostrar desempenho final e iniciar uma nova tentativa somente no resultado.

**Teste independente**: concluir 10 questões, conferir acertos, erros e percentual, e reiniciar com estado zerado.

- [x] T021 [US3] Implementar em `js/quiz.js` o cálculo final: `erros = 10 - acertos` e `percentualAcertos = (acertos / 10) × 100`.
- [x] T022 [US3] Implementar em `js/app.js` a tela de resultado com quantidade de acertos, erros, percentual e a ação de reiniciar.
- [x] T023 [US3] Implementar em `js/app.js` a ação de reiniciar somente no estado `concluído`, retornando à primeira questão com respostas e pontuação zeradas.
- [x] T024 [US3] Adicionar em `tests/quiz.test.js` testes para acertos, erros, percentual, reinício permitido no resultado e reinício bloqueado durante a tentativa.
- [x] T025 [US3] Estilizar em `css/styles.css` a tela de resultado e o reinício para desktop e smartphone.
- [x] T026 [US3] Validar em `specs/001-quiz-computacional/quickstart.md` os resultados para zero, parte e total de acertos, e o reinício.

**Ponto de controle**: o resultado representa corretamente a tentativa e o reinício não mantém dados anteriores.

---

## Fase 6: Acabamento e Verificação Integrada

- [x] T027 [P] Revisar em `index.html`, `css/styles.css` e `js/app.js` semântica, teclado, foco, regiões de anúncio e contraste conforme a constituição.
- [x] T028 [P] Revisar em `js/quiz.js` a separação entre apresentação, dados e lógica e remover duplicações desnecessárias.
- [x] T029 Executar todos os testes em `tests/quiz.test.js` e corrigir falhas.
- [x] T030 Executar todos os cenários de `specs/001-quiz-computacional/quickstart.md` em desktop e smartphone.
- [x] T031 Revisar `specs/001-quiz-computacional/checklists/pre-implementacao.md` e registrar achados de requisitos antes da entrega.
- [x] T032 Medir em `specs/001-quiz-computacional/quickstart.md` que a primeira questão é apresentada em até 10 segundos após o início, conforme SC-001.

## Dependências e Ordem de Execução

- A Fase 1 não possui dependências.
- A Fase 2 depende da Fase 1 e bloqueia as histórias de usuário.
- US1 depende da Fase 2; US2 depende de US1 porque amplia a mesma sessão de quiz; US3 depende de US2 para receber uma tentativa concluída.
- A Fase 6 depende das três histórias.

## Oportunidades de Paralelismo

- T002, T003 e T004 podem ocorrer em paralelo após T001.
- T005 e T006 podem ocorrer em paralelo, desde que o contrato JSON seja seguido.
- T027 e T028 podem ocorrer em paralelo após a conclusão das histórias.

## Estratégia de Implementação

1. Entregar o MVP com as Fases 1, 2 e 3: uma questão pode ser respondida com feedback.
2. Adicionar a Fase 4 para concluir o fluxo linear de 10 questões.
3. Adicionar a Fase 5 para resultados e reinício.
4. Executar a Fase 6 como validação de qualidade e acessibilidade.

## Phase 7: Convergence

- [ ] T033 Adicionar em `index.html` e `js/app.js` uma tela inicial com ação explícita para iniciar a tentativa após as questões serem carregadas, conforme FR-001 e US1/AC1 (partial).
