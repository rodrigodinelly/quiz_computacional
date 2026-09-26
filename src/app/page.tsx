'use client';

import React from 'react';
import { useQuiz } from '@/hooks/useQuiz';
import { Header } from '@/components/Header';
import { ProgressBar } from '@/components/ProgressBar';
import { QuestionCard } from '@/components/QuestionCard';
import { FeedbackCard } from '@/components/FeedbackCard';
import { ScoreSummary } from '@/components/ScoreSummary';

export default function Home() {
  const {
    sessao,
    totalQuestoes,
    questaoAtual,
    respostaConfirmadaAtual,
    selecionarOpcao,
    confirmarResposta,
    proximaQuestao,
    reiniciarQuiz,
  } = useQuiz();

  const estaConcluido = sessao.status === 'CONCLUIDO';
  const eUltimaQuestao = sessao.indiceQuestaoAtual === totalQuestoes - 1;

  return (
    <div className="flex-1 flex flex-col pb-12">
      <Header />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4">
        {estaConcluido ? (
          <ScoreSummary
            acertos={sessao.acertos}
            erros={sessao.erros}
            percentual={sessao.percentualAcertos}
            onReiniciar={reiniciarQuiz}
          />
        ) : (
          <div className="max-w-2xl mx-auto">
            <ProgressBar
              atual={sessao.indiceQuestaoAtual + 1}
              total={totalQuestoes}
            />

            <QuestionCard
              questao={questaoAtual}
              opcaoEmSelecao={sessao.opcaoEmSelecao}
              respostaConfirmada={respostaConfirmadaAtual}
              onSelecionarOpcao={selecionarOpcao}
            />

            {respostaConfirmadaAtual && (
              <FeedbackCard
                respostaConfirmada={respostaConfirmadaAtual}
                questao={questaoAtual}
              />
            )}

            <div className="flex justify-end mt-4">
              {!respostaConfirmadaAtual ? (
                <button
                  onClick={confirmarResposta}
                  disabled={!sessao.opcaoEmSelecao}
                  className={`w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-base transition-all shadow ${
                    sessao.opcaoEmSelecao
                      ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300'
                  }`}
                >
                  Confirmar Resposta
                </button>
              ) : (
                <button
                  onClick={proximaQuestao}
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-base shadow transition-colors cursor-pointer"
                >
                  {eUltimaQuestao ? 'Ver Resultado Final →' : 'Próxima Questão →'}
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
