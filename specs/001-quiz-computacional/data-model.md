# Data Model & Domain Entities: Quiz Computacional

**Feature**: Quiz Computacional - Aplicação Educacional Base
**Date**: 2026-09-26

## Overview

Este documento especifica o modelo de dados e as entidades de domínio da aplicação **Quiz Computacional**, incluindo os tipos TypeScript e as validações de integridade aplicadas às questões e ao estado da sessão.

---

## Domain Entities & Interfaces

### 1. `Alternativa`

Representa cada opção de escolha vinculada a uma questão.

```typescript
export interface Alternativa {
  id: string;          // Ex: "a", "b", "c", "d"
  texto: string;       // Enunciado da opção de resposta
}
```

**Regras de Validação**:
- `id` não pode ser vazio.
- `texto` não pode ser nulo ou string vazia.

---

### 2. `Questao`

Representa a estrutura de uma pergunta do quiz.

```typescript
export interface Questao {
  id: number;                   // Identificador único (1 a 10)
  enunciado: string;            // Texto da pergunta principal
  alternativas: Alternativa[];  // Lista contendo EXATAMENTE 4 alternativas
  alternativaCorretaId: string; // ID da alternativa correta (deve corresponder a um dos IDs de alternativas)
}
```

**Regras de Validação (Constituição - Princípios III e IV)**:
- `alternativas.length` MUST ser estritamente igual a `4`.
- `alternativaCorretaId` MUST ser idêntico ao `id` de uma das 4 alternativas presentes na lista.
- `enunciado` MUST ser um texto claro e não vazio.

---

### 3. `SessaoQuiz`

Representa o estado reativo em memória da execução do quiz para o estudante.

```typescript
export type StatusSessao = 'EM_ANDAMENTO' | 'CONCLUIDO';

export interface RespostaEstudante {
  questaoId: number;
  alternativaSelecionadaId: string;
  confirmada: boolean;
  correta: boolean;
}

export interface SessaoQuiz {
  indiceQuestaoAtual: number;      // 0 a 9 (índice base 0 para o array de 10 questões)
  respostas: RespostaEstudante[];  // Histórico de respostas
  acertos: number;                 // Total acumulado de respostas corretas
  erros: number;                   // Total acumulado de respostas incorretas
  percentualAcertos: number;       // Calculado como: Math.round((acertos / totalQuestoes) * 100)
  status: StatusSessao;            // 'EM_ANDAMENTO' ou 'CONCLUIDO'
  opcaoEmSelecao: string | null;   // Alternativa selecionada temporariamente antes da confirmação
}
```

---

## State Transitions & Actions

```text
[ Tela Inicial / Questão 1 ]
       │
       ▼  (Ação: selecionarOpcao(id))
 [ Opção Destacada em Seleção ]
       │
       ▼  (Ação: confirmarResposta())
 [ Feedback Visível (Correto / Incorreto + Gabarito) ]
       │
       ├─────────────────────────────────┐
       ▼ (Ação: proximaQuestao)          ▼ (Se era a 10ª questão)
 [ Próxima Questão (N+1) ]        [ Tela de Resultados Finais ]
                                         │
                                         ▼ (Ação: reiniciarQuiz)
                                  [ Retorna à Questão 1 (Zerar Estado) ]
```

---

## JSON Data File Structure (`src/data/questions.json`)

```json
[
  {
    "id": 1,
    "enunciado": "Qual componente é considerado o 'cérebro' do computador, responsável pelo processamento de instruções?",
    "alternativas": [
      { "id": "a", "texto": "Memória RAM" },
      { "id": "b", "texto": "Unidade Central de Processamento (CPU)" },
      { "id": "c", "texto": "Disco Rígido (HD/SSD)" },
      { "id": "d", "texto": "Placa de Vídeo (GPU)" }
    ],
    "alternativaCorretaId": "b"
  }
]
```
