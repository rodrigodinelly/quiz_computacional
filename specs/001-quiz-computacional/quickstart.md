# Guia de Validação Rápida

## Pré-requisitos

Use um servidor HTTP estático local ou hospedagem estática. Não abra por `file://`, pois o navegador pode
bloquear o carregamento de `data/questions.json`.

## Cenários

1. Inicie e confirme enunciado mais quatro alternativas.
2. Tente confirmar sem selecionar; a resposta não deve ser registrada.
3. Selecione, confirme e valide feedback correto/incorreto.
4. Confirme que a resposta fica bloqueada e que só então é possível avançar.
5. Conclua as 10 questões e valide acertos, erros e percentual.
6. Confirme `acertos + erros = 10` e `percentual = acertos / 10 × 100`.
7. Confirme que reiniciar só aparece no resultado final e inicia uma tentativa zerada.
8. Valide em largura de smartphone e com teclado.
9. Torne o JSON inválido e confirme que o quiz não inicia e informa o erro.
