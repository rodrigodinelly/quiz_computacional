# Checklist de Pré-implementação: Quiz Computacional

**Objetivo**: Avaliar a qualidade, clareza e completude dos requisitos antes da implementação.
**Criada em**: 2026-09-26
**Funcionalidade**: [spec.md](../spec.md)

**Nota**: Esta checklist é um artefato de revisão de requisitos, não um roteiro de testes da implementação.
**Responsabilidade da revisão**: Marque um item como `[x]` somente quando a pessoa revisora determinar que
o critério de qualidade do requisito foi atendido.
**Significado dos marcadores**: `[x]` indica requisito revisado e satisfatório; não indica trabalho de
implementação concluído.

## Completude dos Requisitos

- [x] CHK001 Os requisitos definem integralmente o ciclo de uma tentativa, do início ao resultado final?
  [Completude, Spec §Cenários de Usuário e Testes]
- [x] CHK002 Os requisitos especificam todas as informações obrigatórias de cada questão: enunciado,
  quatro alternativas e uma única resposta correta? [Completude, Spec §FR-002–FR-003]
- [x] CHK003 Os requisitos documentam como a seleção, a confirmação e o bloqueio da resposta se relacionam
  no fluxo de uma questão? [Completude, Spec §FR-004–FR-007]
- [x] CHK004 Os requisitos definem todos os resultados finais exigidos e sua relação com a tentativa?
  [Completude, Spec §FR-008–FR-009]
- [x] CHK005 As exclusões de cadastro, autenticação, persistência, histórico, cronômetro e níveis de
  dificuldade estão suficientemente delimitadas? [Completude, Spec §FR-011, Premissas]

## Clareza e Consistência das Regras do Quiz

- [x] K006 A expressão "confirmar a resposta" tem consequências claramente especificadas para seleção,
  feedback, pontuação e imutabilidade? [Clareza, Spec §FR-004–FR-008]
- [x] CHK007 Os requisitos são consistentes quanto a permitir avanço somente após o feedback da questão
  atual? [Consistência, Spec §FR-006–FR-007, História de Usuário 2]
- [x] CHK008 A regra de reinício apenas na tela de resultado final é consistente entre esclarecimentos,
  casos limite, cenário de usuário e requisito funcional? [Consistência, Spec §Esclarecimentos,
  Casos Limite, FR-010]
- [x] CHK009 A fórmula de percentual, as quantidades de acertos e erros e o total de 10 questões estão
  definidos de modo objetivo e sem ambiguidade? [Clareza, Spec §FR-001, FR-008–FR-009, SC-003]
- [x] CHK010 Os requisitos distinguem claramente o estado de resposta selecionada do estado de resposta
  confirmada? [Clareza, Spec §FR-004–FR-007, Entidades Principais]

## Critérios de Aceitação e Cobertura de Cenários

- [x] CHK011 Cada requisito funcional relevante possui cenários de aceitação que descrevem condições,
  ações e resultados esperados? [Cobertura, Spec §Cenários de Usuário e Testes]
- [x] CHK012 Os critérios de sucesso permitem medir objetivamente a apresentação de 10 questões, os
  cálculos do resultado e a conclusão sem conta? [Mensurabilidade, Spec §SC-001–SC-004]
- [x] CHK013 Os requisitos definem o tratamento da tentativa de confirmação sem alternativa selecionada?
  [Cobertura de exceção, Spec §FR-005, Casos Limite]
- [x] CHK014 Os requisitos definem o comportamento após a confirmação para impedir alteração ou contagem
  duplicada de uma resposta? [Cobertura de exceção, Spec §Casos Limite, FR-006–FR-008]
- [x] CHK015 Os requisitos definem o fluxo da última questão até o resultado sem introduzir uma décima
  primeira questão? [Cobertura de limite, Spec §História de Usuário 2]

## Interface, Responsividade e Acessibilidade

- [x] CHK016 Os requisitos especificam critérios verificáveis de responsividade para desktop e smartphone,
  além da menção genérica aos dois formatos? [Lacuna, Plan §Contexto Técnico]
- [x] CHK017 Os requisitos definem expectativas de acessibilidade para navegação por teclado, foco visível,
  contraste e alternativas compreensíveis? [Lacuna, Constituição §I, Plan §Resumo]
- [x] CHK018 Os requisitos descrevem de modo claro como o feedback de correto ou incorreto deve ser
  comunicado sem depender somente de cor? [Lacuna, Spec §FR-006]
- [x] CHK019 Os requisitos especificam uma apresentação compreensível do progresso no quiz, como posição
  da questão atual entre as 10? [Lacuna, Spec §FR-001–FR-002]

## Dados, Dependências e Falhas

- [x] CHK020 O contrato de dados define regras completas para identificar questões, alternativas e a única
  alternativa correta? [Completude, Contract §Regras do Contrato]
- [x] CHK021 Os requisitos definem o comportamento para JSON inválido, dados com quantidade incorreta de
  questões ou falha no carregamento do arquivo? [Cobertura de exceção, Contract §Regras do Contrato]
- [x] CHK022 A dependência de HTTP estático para carregar o JSON está documentada de modo consistente com a
  expectativa de funcionamento diretamente no navegador? [Consistência, Plan §Contexto Técnico,
  Research §JSON local]
- [x] CHK023 A decisão de não embaralhar questões e alternativas na primeira versão está explicitamente
  registrada como requisito ou exclusão de escopo? [Ambiguidade, Plan §Escopo]

## Notas

- Itens permanecem desmarcados até a revisão humana de qualidade dos requisitos.
- A implementação não deve alterar os marcadores desta checklist.
