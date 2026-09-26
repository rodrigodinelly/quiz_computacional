# Contrato de Dados: `data/questions.json`

```json
{
  "version": 1,
  "questions": [
    {
      "id": "q01",
      "enunciado": "Pergunta",
      "alternativas": [
        { "id": "a", "texto": "Opção A" },
        { "id": "b", "texto": "Opção B" },
        { "id": "c", "texto": "Opção C" },
        { "id": "d", "texto": "Opção D" }
      ],
      "alternativaCorretaId": "b"
    }
  ]
}
```

- `version` DEVE ser 1 e `questions` DEVE conter exatamente 10 itens.
- IDs de questões e alternativas DEVEM ser únicos nos respectivos escopos.
- Cada enunciado e texto de alternativa DEVE ser não vazio.
- `alternativaCorretaId` DEVE apontar para uma das quatro alternativas.
- Dados inválidos, JSON inválido ou falha de carregamento DEVEM exibir erro claro e impedir o início.
