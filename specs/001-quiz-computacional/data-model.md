# Modelo de Dados: Quiz Computacional

## Questão

| Campo | Regra |
|---|---|
| `id` | Texto não vazio e único. |
| `enunciado` | Texto não vazio. |
| `alternativas` | Exatamente quatro itens. |
| `alternativaCorretaId` | Corresponde a exatamente uma alternativa. |

## Alternativa

| Campo | Regra |
|---|---|
| `id` | Texto não vazio e único dentro da questão. |
| `texto` | Texto não vazio. |

## Tentativa e Resultado

A tentativa mantém índice atual, estado, resposta selecionada, respostas confirmadas e acertos. O resultado
é calculado com `erros = 10 - acertos` e `percentualAcertos = (acertos / 10) × 100`.

## Estados

`carregando → respondendo → feedback → concluído`. O reinício só é permitido em `concluído` e zera
índice, seleção, respostas e pontuação.
