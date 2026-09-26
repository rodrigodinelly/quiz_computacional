# Pesquisa Técnica: Quiz Computacional

## Decisão: aplicação estática sem dependências

- **Decisão**: usar HTML5, CSS3 e JavaScript puro.
- **Justificativa**: atende ao escopo educacional com a menor complexidade.
- **Alternativas consideradas**: frameworks e backend foram descartados por não serem necessários.

## Decisão: JSON local carregado por HTTP estático

- **Decisão**: usar `data/questions.json` carregado pelo navegador em HTTP estático.
- **Justificativa**: mantém os dados separados e validáveis, sem backend.
- **Alternativas consideradas**: `file://` foi descartado porque navegadores bloqueiam JSON externo nessa origem.

## Decisão: estados lineares

- **Decisão**: `carregando → respondendo → feedback → concluído`.
- **Justificativa**: impede confirmação sem seleção, alteração pós-confirmação e pontuação duplicada.
- **Alternativas consideradas**: navegação livre foi descartada por contrariar o fluxo definido.

## Decisão: controles nativos responsivos

- **Decisão**: botões de opção nativos, feedback textual e CSS mobile-first.
- **Justificativa**: garante teclado, toque e acessibilidade sem bibliotecas.
- **Alternativas consideradas**: controles customizados foram descartados por complexidade adicional.
