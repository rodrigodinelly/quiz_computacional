# Plano de Implementação: Quiz Computacional

**Ramo**: `001-quiz-computacional` | **Data**: 2026-09-26 | **Especificação**: [spec.md](spec.md)

**Entrada**: Aplicação web estática em HTML5, CSS3 e JavaScript puro, com dados em JSON local.

## Resumo

Implementar um quiz educacional com 10 questões, quatro alternativas por questão, feedback imediato,
pontuação automática, resultado final e reinício apenas após a conclusão. A apresentação, os dados e a
lógica serão mantidos separados, sem frameworks, backend, banco de dados ou autenticação.

## Contexto Técnico

**Linguagem/Versão**: HTML5, CSS3 e JavaScript ECMAScript em navegadores modernos.

**Dependências Primárias**: Nenhuma; somente APIs padrão do navegador.

**Armazenamento**: `data/questions.json`, carregado em memória durante a tentativa; sem persistência.

**Testes**: Testes unitários sem dependências para validação, pontuação e estados; roteiro de aceitação em
[quickstart.md](quickstart.md).

**Plataforma-alvo**: Desktop e smartphone em navegadores modernos, por HTTP estático.

**Tipo de Projeto**: Aplicação web estática, apenas frontend.

**Metas de Desempenho**: Exibir a primeira questão em até 10 segundos e responder às ações sem espera
perceptível.

**Restrições**: Sem frameworks, backend, banco, autenticação, persistência ou dependências. O JSON tem
exatamente 10 questões válidas, quatro alternativas e uma única correta por questão. Por restrições de
segurança do navegador, o JSON externo deve ser carregado por HTTP estático; `file://` não é suportado.

**Escopo**: Uma sessão individual, ordem fixa, estados de carregamento, resposta, feedback e resultado;
reinício somente após a conclusão.

## Verificação da Constituição

*GATE: aprovado antes da pesquisa e reavaliado após o design.*

| Princípio | Atendimento |
|---|---|
| Interface centrada no estudante | Uma questão por vez, controles claros, feedback textual e layout responsivo. |
| Código de fácil manutenção | Separação de apresentação, dados e lógica do quiz. |
| Quatro alternativas e uma resposta correta | Contrato JSON e validação bloqueiam dados inválidos. |
| Feedback e pontuação automática | Estados explícitos exibem feedback e impedem pontuação duplicada. |
| Simplicidade intencional | Aplicação estática sem bibliotecas ou serviços. |
| Verificação objetiva | Testes de lógica e roteiro de aceitação cobrem todas as regras centrais. |

**Resultado pós-design**: aprovado; não há violações de complexidade.

## Estrutura do Projeto

### Documentação desta funcionalidade

```text
specs/001-quiz-computacional/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── questions-json.md
└── tasks.md
```

### Código-fonte (raiz do repositório)

```text
index.html
css/styles.css
data/questions.json
js/app.js
js/quiz.js
tests/quiz.test.js
```

**Decisão de estrutura**: `index.html` e `css/styles.css` representam a apresentação;
`data/questions.json` contém os dados; `js/quiz.js` implementa regras puras e estados; `js/app.js`
integra a lógica com o DOM. Isso permite testar as regras sem navegador.
