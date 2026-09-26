import { useState, useMemo } from 'react';
import { Questao, SessaoQuiz, RespostaEstudante } from '@/types/quiz';
import questionsData from '@/data/questions.json';

const questions: Questao[] = questionsData as Questao[];

export function useQuiz() {
  const [sessao, setSessao] = useState<SessaoQuiz>({
    indiceQuestaoAtual: 0,
    respostas: [],
    acertos: 0,
    erros: 0,
    percentualAcertos: 0,
    status: 'EM_ANDAMENTO',
    opcaoEmSelecao: null,
  });

  const totalQuestoes = questions.length;
  const questaoAtual = questions[sessao.indiceQuestaoAtual];

  const respostaConfirmadaAtual = useMemo(() => {
    return sessao.respostas.find((r) => r.questaoId === questaoAtual.id);
  }, [sessao.respostas, questaoAtual.id]);

  const selecionarOpcao = (alternativaId: string) => {
    if (respostaConfirmadaAtual || sessao.status === 'CONCLUIDO') return;
    setSessao((prev) => ({
      ...prev,
      opcaoEmSelecao: alternativaId,
    }));
  };

  const confirmarResposta = () => {
    if (!sessao.opcaoEmSelecao || respostaConfirmadaAtual || sessao.status === 'CONCLUIDO') return;

    const eCorreta = sessao.opcaoEmSelecao === questaoAtual.alternativaCorretaId;

    const novaResposta: RespostaEstudante = {
      questaoId: questaoAtual.id,
      alternativaSelecionadaId: sessao.opcaoEmSelecao,
      confirmada: true,
      correta: eCorreta,
    };

    setSessao((prev) => {
      const novosAcertos = eCorreta ? prev.acertos + 1 : prev.acertos;
      const novosErros = !eCorreta ? prev.erros + 1 : prev.erros;

      return {
        ...prev,
        acertos: novosAcertos,
        erros: novosErros,
        respostas: [...prev.respostas, novaResposta],
      };
    });
  };

  const proximaQuestao = () => {
    if (!respostaConfirmadaAtual) return;

    if (sessao.indiceQuestaoAtual < totalQuestoes - 1) {
      setSessao((prev) => ({
        ...prev,
        indiceQuestaoAtual: prev.indiceQuestaoAtual + 1,
        opcaoEmSelecao: null,
      }));
    } else {
      setSessao((prev) => {
        const percentual = Math.round((prev.acertos / totalQuestoes) * 100);
        return {
          ...prev,
          status: 'CONCLUIDO',
          percentualAcertos: percentual,
          opcaoEmSelecao: null,
        };
      });
    }
  };

  const reiniciarQuiz = () => {
    setSessao({
      indiceQuestaoAtual: 0,
      respostas: [],
      acertos: 0,
      erros: 0,
      percentualAcertos: 0,
      status: 'EM_ANDAMENTO',
      opcaoEmSelecao: null,
    });
  };

  return {
    sessao,
    totalQuestoes,
    questaoAtual,
    respostaConfirmadaAtual,
    selecionarOpcao,
    confirmarResposta,
    proximaQuestao,
    reiniciarQuiz,
  };
}
