# Quiz Computacional

O **Quiz Computacional** é uma aplicação web educacional desenvolvida para auxiliar estudantes na prática e fixação de conhecimentos básicos da Ciência da Computação por meio de um quiz de múltipla escolha simples, intuitivo e responsivo.

---

## 🚀 Funcionalidades

- **10 Questões de Computação**: Banco estático cobrindo conceitos essenciais de hardware, software, redes, algoritmos e linguagens.
- **Estrutura Padronizada**: Cada questão apresenta exatamente 4 alternativas de resposta com 1 única opção correta.
- **Feedback Imediato & Gabarito**: Exibição instantânea após cada resposta ("Correto" ou "Incorreto"), destacando a alternativa correta em caso de erro.
- **Fluxo Sequencial & Imutabilidade**: Navegação estritamente sequencial (questão 1 a 10) com trava de resposta após a confirmação.
- **Resultado Automático & Aproveitamento**: Tela final com contabilização de acertos, erros e percentual exato de aproveitamento (`(acertos / 10) * 100`).
- **Reinício do Quiz**: Funcionalidade para reiniciar o teste a partir da tela de resultados mantendo a ordem estática das questões.
- **100% Client-Side**: Sem necessidade de cadastro, autenticação ou banco de dados externo.
- **Design Responsivo**: Adaptado para telas de computadores (desktop) e dispositivos móveis (smartphones).

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router & React)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Testes Automatizados**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## 📂 Estrutura do Projeto

```text
src/
├── app/                      # Layout e Página Principal (Next.js App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/               # Camada de Apresentação (UI Components)
│   ├── Header.tsx
│   ├── ProgressBar.tsx
│   ├── QuestionCard.tsx
│   ├── FeedbackCard.tsx
│   └── ScoreSummary.tsx
├── data/                     # Camada de Dados (JSON Estático)
│   └── questions.json
├── hooks/                    # Camada de Lógica (State Machine)
│   └── useQuiz.ts
└── types/                    # Tipagem TypeScript
    └── quiz.ts
```

---

## 💻 Como Executar o Projeto

### Pré-requisitos
- Node.js 18.x ou superior
- npm

### Passo a passo

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse a aplicação em: `http://localhost:3000`

3. **Executar a suíte de testes automatizados**:
   ```bash
   npm test
   ```

4. **Gerar a versão otimizada de produção**:
   ```bash
   npm run build
   ```

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
