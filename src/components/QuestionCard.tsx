import React from 'react';
import { Questao, RespostaEstudante } from '@/types/quiz';

interface QuestionCardProps {
  questao: Questao;
  opcaoEmSelecao: string | null;
  respostaConfirmada?: RespostaEstudante;
  onSelecionarOpcao: (id: string) => void;
}

export function QuestionCard({
  questao,
  opcaoEmSelecao,
  respostaConfirmada,
  onSelecionarOpcao,
}: QuestionCardProps) {
  const estaConfirmado = !!respostaConfirmada;

  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-6">
      <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-6 leading-relaxed">
        {questao.id}. {questao.enunciado}
      </h2>

      <div className="space-y-3">
        {questao.alternativas.map((alt) => {
          const estaSelecionada = opcaoEmSelecao === alt.id;
          const eCorreta = questao.alternativaCorretaId === alt.id;
          const eASelecionadaPeloEstudante = respostaConfirmada?.alternativaSelecionadaId === alt.id;

          let estiloBotao =
            'w-full text-left p-4 rounded-lg border text-sm sm:text-base transition-all font-medium flex items-center justify-between ';

          if (estaConfirmado) {
            if (eCorreta) {
              estiloBotao += 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-400';
            } else if (eASelecionadaPeloEstudante && !respostaConfirmada.correta) {
              estiloBotao += 'bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-400';
            } else {
              estiloBotao += 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
            }
          } else {
            if (estaSelecionada) {
              estiloBotao += 'bg-blue-50 border-blue-600 text-blue-900 shadow-sm ring-2 ring-blue-500';
            } else {
              estiloBotao += 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300';
            }
          }

          return (
            <button
              key={alt.id}
              onClick={() => onSelecionarOpcao(alt.id)}
              disabled={estaConfirmado}
              className={estiloBotao}
            >
              <span>
                <strong className="mr-2 uppercase font-semibold text-slate-500">
                  {alt.id})
                </strong>
                {alt.texto}
              </span>
              {estaConfirmado && eCorreta && (
                <span className="text-emerald-600 font-bold text-xs bg-emerald-100 px-2.5 py-1 rounded-full uppercase">
                  Correta
                </span>
              )}
              {estaConfirmado && eASelecionadaPeloEstudante && !respostaConfirmada.correta && (
                <span className="text-rose-600 font-bold text-xs bg-rose-100 px-2.5 py-1 rounded-full uppercase">
                  Sua Escolha
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
