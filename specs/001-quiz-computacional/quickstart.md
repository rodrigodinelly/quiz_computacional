# Quickstart & Validation Guide: Quiz Computacional

**Feature**: Quiz Computacional - Aplicação Educacional Base
**Date**: 2026-09-26

## Overview

Este guia descreve as instruções para executar e validar a aplicação **Quiz Computacional** no ambiente de desenvolvimento local, cobrindo cenários de teste manuais e automatizados.

---

## Prerequisites

- **Node.js**: v18.x ou superior
- **npm** ou **pnpm** / **yarn**
- **Navegador Web**: Chrome, Firefox, Edge ou Safari atualizado

---

## Setup & Running Locally

1. **Instalação das dependências** (na raiz do projeto):
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em: `http://localhost:3000`

3. **Execução da suíte de testes automatizados**:
   ```bash
   npm run test
   ```

---

## Validation Scenarios & Acceptance Tests

### Cenário 1: Fluxo de Resposta Imediata e Feedback
- **Passo 1**: Abra `http://localhost:3000`.
- **Passo 2**: Verifique se a Questão 1 (de 10) é exibida com enunciado e 4 alternativas.
- **Passo 3**: Verifique se o botão "Confirmar Resposta" está desabilitado antes de selecionar uma opção.
- **Passo 4**: Selecione uma alternativa. Clique em "Confirmar Resposta".
- **Resultado Esperado**: O feedback de "Correto" ou "Incorreto" é exibido. Em caso de erro, a opção correta é destacada com o gabarito. O botão "Próxima Questão" é habilitado e a seleção de opções é travada.

### Cenário 2: Conclusão das 10 Questões e Tela de Resultados
- **Passo 1**: Responda sequencialmente até a 10ª questão.
- **Passo 2**: Confirme a resposta da 10ª questão e clique para finalizar.
- **Resultado Esperado**: A tela de resultados finais é exibida com:
  - Quantidade de acertos (ex: 8)
  - Quantidade de erros (ex: 2)
  - Percentual exato de aproveitamento (ex: 80%)
  - Botão "Reiniciar Quiz" visível.

### Cenário 3: Reinício do Quiz
- **Passo 1**: Na tela de resultados finais, clique no botão "Reiniciar Quiz".
- **Resultado Esperado**: O estado é resetado e a aplicação retorna à Questão 1 de 10 na sua ordem estática original com pontuação zerada.
