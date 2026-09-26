# Tasks: Quiz Computacional - Aplicação Educacional Base

**Feature**: Quiz Computacional | **Branch**: `001-quiz-computacional`

**Spec**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Next.js project with App Router, TypeScript, and Tailwind CSS configuration in package.json, tsconfig.json, and tailwind.config.ts
- [x] T002 [P] Configure Vitest and React Testing Library setup in vitest.config.ts and tests/setup.ts
- [x] T003 [P] Setup global CSS styling and color palette suitable for students in src/app/globals.css

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core data models and static JSON database that MUST be complete before user story work

- [x] T004 Create domain TypeScript interfaces (`Alternativa`, `Questao`, `SessaoQuiz`, `RespostaEstudante`) in src/types/quiz.ts
- [x] T005 [P] Populate the static 10 questions database in src/data/questions.json ensuring each entry has alternatives length equal to 4 and a valid alternativaCorretaId

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Responder Questões do Quiz (Priority: P1) 🎯 MVP

**Goal**: Enable students to answer 10 multiple-choice questions on computing basics, one at a time, receiving immediate feedback (with correct answer highlighting on error) and advancing sequentially.

**Independent Test**: Start quiz, select an option, change selection before confirming, click confirm, verify feedback/gabarito, and advance to question 2.

### Tests for User Story 1

- [x] T006 [P] [US1] Create unit tests for useQuiz state machine (navigating questions, option selection, answer locking, and feedback) in tests/hooks/useQuiz.test.ts
- [x] T007 [P] [US1] Create component tests for QuestionCard in tests/components/QuestionCard.test.tsx

### Implementation for User Story 1

- [x] T008 [US1] Implement useQuiz hook state logic (indiceQuestaoAtual, opcaoEmSelecao, respostas, selecionarOpcao, confirmarResposta, proximaQuestao) in src/hooks/useQuiz.ts
- [x] T009 [P] [US1] Implement Header component in src/components/Header.tsx
- [x] T010 [P] [US1] Implement ProgressBar component showing current step (1 to 10) in src/components/ProgressBar.tsx
- [x] T011 [P] [US1] Implement QuestionCard component (rendering statement and 4 selectable option buttons) in src/components/QuestionCard.tsx
- [x] T012 [P] [US1] Implement FeedbackCard component (displaying "Correto" / "Incorreto" status and highlighting the correct answer ID as gabarito) in src/components/FeedbackCard.tsx
- [x] T013 [US1] Assemble User Story 1 UI components in src/app/page.tsx rendering active question, feedback card, and action buttons

**Checkpoint**: User Story 1 is fully functional and testable independently (MVP ready!)

---

## Phase 4: User Story 2 - Visualizar Resultado Final e Desempenho (Priority: P2)

**Goal**: Display final results screen upon completing the 10th question showing total hits, total misses, and exact percentage score.

**Independent Test**: Complete all 10 questions and verify the final screen displays exact count of hits, misses, and percentage calculated via formula Math.round((acertos / 10) * 100).

### Tests for User Story 2

- [x] T014 [P] [US2] Create component test for ScoreSummary in tests/components/ScoreSummary.test.tsx

### Implementation for User Story 2

- [x] T015 [US2] Extend useQuiz hook in src/hooks/useQuiz.ts to transition status to 'CONCLUIDO' after 10th question and compute acertos, erros, and percentualAcertos
- [x] T016 [P] [US2] Implement ScoreSummary component in src/components/ScoreSummary.tsx displaying hits count, misses count, and percentage score
- [x] T017 [US2] Integrate ScoreSummary view into src/app/page.tsx when status is 'CONCLUIDO'

**Checkpoint**: User Stories 1 AND 2 work independently

---

## Phase 5: User Story 3 - Reiniciar o Quiz (Priority: P3)

**Goal**: Allow students to restart the quiz from the final results screen, resetting state to question 1 and zeroing scores while keeping the static question order.

**Independent Test**: Click "Reiniciar Quiz" button on results screen and verify return to Question 1 of 10 with zeroed scores and history.

### Implementation for User Story 3

- [x] T018 [US3] Add reiniciarQuiz action to useQuiz hook in src/hooks/useQuiz.ts resetting session state to question index 0 while maintaining static question order
- [x] T019 [US3] Add "Reiniciar Quiz" action button to ScoreSummary in src/components/ScoreSummary.tsx triggering reiniciarQuiz

**Checkpoint**: All user stories are independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Responsive design refinements and end-to-end validation

- [x] T020 [P] Refine responsive design for mobile screens (<640px) and desktop layouts in src/app/globals.css
- [x] T021 Run quickstart.md validation scenarios to confirm feature readiness

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - Proceed sequentially in priority order (P1 → P2 → P3) or in parallel if staffed
- **Polish (Phase 6)**: Depends on completion of User Stories 1, 2, and 3

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational (Phase 2)
- **User Story 2 (P2)**: Starts after Foundational (Phase 2) and extends `useQuiz` state for completion
- **User Story 3 (P3)**: Starts after US2 and connects restart trigger to `useQuiz`

### Parallel Opportunities

- All Setup tasks marked `[P]` (T002, T003) can run in parallel
- Foundational task T005 `[P]` can run in parallel with T004
- UI components within User Story 1 marked `[P]` (T006, T007, T009, T010, T011, T012) can run in parallel
- ScoreSummary UI components marked `[P]` (T014, T016) can run in parallel

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T003)
2. Complete Phase 2: Foundational (T004–T005)
3. Complete Phase 3: User Story 1 (T006–T013)
4. **STOP and VALIDATE**: Test User Story 1 independently

### Incremental Delivery

1. Setup + Foundational → Core Ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test results screen
4. Add User Story 3 → Test restart feature
