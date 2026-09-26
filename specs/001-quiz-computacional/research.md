# Research Artifact: Quiz Computacional

**Feature**: Quiz Computacional - Aplicação Educacional Base
**Date**: 2026-09-26
**Status**: Completed

## Executive Summary

Este documento consolida as decisões técnicas e de arquitetura para a aplicação **Quiz Computacional**, em conformidade com as diretrizes do usuário e os princípios de simplicidade da Constituição do projeto.

---

## Technical Decisions

### 1. Framework & UI Library

- **Decision**: Next.js (TypeScript, React App Router) + Tailwind CSS
- **Rationale**: 
  - Oferece suporte nativo a TypeScript para tipagem estática segura dos modelos de dados (`Questao`, `Alternativa`, `SessaoQuiz`).
  - Permite renderização rápida no navegador (Static Site Generation / Client Components) sem necessidade de servidor Node.js ativo em tempo de execução.
  - Tailwind CSS garante responsividade imediata (desktop e mobile) através de utilitários flex/grid intuitivos, mantendo o visual limpo e amigável para estudantes.
- **Alternatives Considered**:
  - *Vite + React*: Excelente alternativa SPA, porém o Next.js oferece rotas simplificadas, otimizações padrão e facilidade de deploy estático (`output: 'export'`).
  - *Vanilla HTML/JS*: Muito simples, mas dificulta a separação clara e mantável entre lógica, estado e apresentação para escalar e testar.

### 2. State Management & Architecture Pattern

- **Decision**: Custom Hook encapsulado (`useQuiz`) para gerenciamento de estado da sessão do quiz.
- **Rationale**:
  - Atende perfeitamente à exigência de separar **Apresentação** (Componentes React), **Dados** (JSON de questões) e **Lógica do Quiz** (State Machine no hook `useQuiz`).
  - Mantém o estado encapsulado sem introduzir dependências externas pesadas (como Redux ou Zustand), respeitando o Princípio VII da Constituição (Simplicidade Arquitetural e Mínimas Dependências).
- **Alternatives Considered**:
  - *Zustand / Redux*: Desnecessário (overengineering) para uma sessão local de quiz de 10 questões de tela única.

### 3. Data Storage & Schema Format

- **Decision**: Arquivo JSON local estático (`src/data/questions.json`) validado com TypeScript Interfaces.
- **Rationale**:
  - Atende estritamente ao requisito de ausência de backend, banco de dados ou autenticação nesta versão v1.
  - Permite fácil edição e adição de novas questões no futuro por parte dos educadores sem necessidade de alterar o código da aplicação.
- **Alternatives Considered**:
  - *Fetch de API mockada*: Adicionaria assincronia e complexidade desnecessária para dados estáticos locais.

### 4. Testing Framework

- **Decision**: Vitest + React Testing Library (RTL)
- **Rationale**:
  - Testes rápidos e diretos para validar os componentes de apresentação e a lógica de estado do hook `useQuiz` (Princípio VIII da Constituição - Verificabilidade).
- **Alternatives Considered**:
  - *Jest*: Totalmente viável, porém Vitest tem integração instantânea e execução extremamente veloz com ESM e Next.js.

---

## Architecture Layering & Code Separation

```text
[ Camada de Apresentação (UI) ]
  ├── Header / TitleBar
  ├── ProgressBar (Progresso 1 a 10)
  ├── QuestionCard (Enunciado + 4 Alternativas)
  ├── FeedbackCard (Acerto / Erro + Gabarito)
  └── ScoreSummary (Acertos, Erros, % e Botão Reiniciar)
          │
          ▼ (Consome Hook)
[ Camada de Lógica do Quiz ]
  └── useQuiz (Estado da SessaoQuiz, seleção, confirmação, pontuação e reinício)
          │
          ▼ (Importa Dados)
[ Camada de Dados ]
  ├── src/data/questions.json (10 Questões sobre Computação)
  └── src/types/quiz.ts (Interfaces Questao, Alternativa, SessaoQuiz)
```
