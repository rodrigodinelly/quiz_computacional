# Quiz Computacional

Aplicação web educacional para praticar conhecimentos básicos de Computação por meio de questões de
múltipla escolha.

## Funcionalidades

- 10 questões apresentadas uma por vez;
- quatro alternativas por questão, com apenas uma resposta correta;
- feedback imediato após a confirmação da resposta;
- avanço controlado para a próxima questão;
- resultado final com acertos, erros e percentual de acertos;
- reinício do quiz ao final da tentativa;
- interface responsiva para desktop e smartphone;
- navegação por teclado e feedback textual acessível.

## Tecnologias

- HTML5;
- CSS3;
- JavaScript puro;
- arquivo JSON local para as questões.

Não há frameworks, backend, banco de dados, autenticação ou dependências externas.

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica o site automaticamente a cada envio para a
branch `main`.

No GitHub, abra **Settings → Pages**, selecione **GitHub Actions** em *Build and deployment* e salve.
Após o próximo push, o site ficará disponível em:

`https://rodrigodinelly.github.io/quiz_computacional/`


## Estrutura do projeto

```text
css/styles.css       Interface responsiva
data/questions.json  Questões do quiz
js/app.js            Integração da interface com o quiz
js/quiz.js           Regras, estados e pontuação
tests/quiz.test.js   Testes unitários
```
