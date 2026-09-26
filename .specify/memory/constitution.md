<!--
Relatório de Impacto de Sincronização
- Alteração de versão: 1.0.0 -> 1.0.1
- Princípios modificados: nenhum; tradução para português do Brasil
- Seções adicionadas: nenhuma
- Seções removidas: nenhuma
- Pendências: nenhuma
-->
# Constituição do Quiz Computacional

## Princípios Fundamentais

### I. Interface Centrada no Estudante
A interface DEVE ser simples, clara e apropriada para estudantes. Telas, instruções e controles DEVEM
usar linguagem compreensível e minimizar distrações para que a realização do quiz seja direta.

Justificativa: como a aplicação é educacional, a usabilidade deve apoiar a aprendizagem sem criar atrito.

### II. Código de Fácil Manutenção
O código DEVE ser organizado em unidades coesas, usar nomes claros e permanecer legível para a
manutenção rotineira. Alterações DEVEM evitar acoplamento e duplicação desnecessários.

Justificativa: uma base de código sustentável permite que o conteúdo educacional e a aplicação evoluam
com segurança.

### III. Quatro Alternativas por Questão
Cada questão DEVE definir exatamente quatro alternativas de resposta. Uma questão com menos ou mais de
quatro alternativas é inválida e NÃO DEVE ser apresentada a um estudante.

Justificativa: um formato fixo proporciona aos estudantes uma experiência de avaliação consistente.

### IV. Exatamente Uma Resposta Correta
Cada questão DEVE indicar exatamente uma alternativa correta. A validação de conteúdo DEVE rejeitar
questões sem alternativa correta ou com mais de uma alternativa correta.

Justificativa: respostas inequívocas são necessárias para oferecer feedback e pontuação justos.

### V. Feedback Imediato da Resposta
Após cada resposta enviada, a aplicação DEVE fornecer ao estudante um feedback que indique se a
resposta estava correta antes que a próxima questão seja respondida.

Justificativa: o feedback oportuno reforça a aprendizagem e torna os resultados compreensíveis.

### VI. Pontuação Automática
A aplicação DEVE calcular automaticamente a pontuação do estudante com base nas respostas enviadas e
nos gabaritos das questões. Estudantes NÃO DEVEM calcular nem informar sua própria pontuação.

Justificativa: a pontuação automática evita erros aritméticos e mantém resultados consistentes.

### VII. Simplicidade Intencional
O projeto DEVE preferir o design mais simples que atenda a um requisito declarado e DEVE evitar
dependências desnecessárias. Uma dependência ou abstração adicional exige uma necessidade concreta e
documentada.

Justificativa: a simplicidade reduz o custo de manutenção e mantém a aplicação acessível a colaboradores.

### VIII. Verificação Objetiva
Todo recurso entregue DEVE possuir testes automatizados ou critérios de aceitação explícitos e
objetivamente verificáveis. A validação DEVE cobrir o comportamento relevante, incluindo integridade
de questões, feedback ou pontuação sempre que esses comportamentos forem alterados.

Justificativa: a verificação objetiva torna o comportamento educacional confiável e as regressões visíveis.

## Integridade das Questões

Os dados das questões e os fluxos de autoria DEVEM aplicar os Princípios III e IV antes de as questões
ficarem disponíveis em um quiz. Dados inválidos DEVEM ser relatados claramente e excluídos das sessões
de quiz voltadas ao estudante.

## Desenvolvimento e Critérios de Qualidade

Antes de uma alteração ser aceita, as pessoas revisoras DEVEM confirmar a conformidade com esta
constituição. Alterações na experiência do quiz DEVEM ser verificadas conforme o princípio de interface
centrada no estudante; alterações no tratamento de questões ou respostas DEVEM demonstrar, quando
aplicável, quatro alternativas, uma resposta correta, feedback e pontuação automática. Complexidade e
novas dependências DEVEM ser justificadas no registro da alteração.

## Governança

Esta constituição substitui práticas conflitantes do projeto. Emendas DEVEM ser documentadas neste
arquivo, incluir um Relatório de Impacto de Sincronização e atualizar a versão conforme versionamento
semântico: MAJOR para alterações de governança incompatíveis com versões anteriores, MINOR para
governança nova ou materialmente ampliada e PATCH para esclarecimentos que não alterem o significado da
governança. Toda revisão DEVE avaliar a conformidade com a constituição e registrar qualquer exceção
aprovada, com sua justificativa e prazo de expiração ou plano de remoção.

**Versão**: 1.0.1 | **Ratificada em**: 2026-09-26 | **Última alteração**: 2026-09-26
