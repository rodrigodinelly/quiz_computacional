import React from 'react';
import { Questao, RespostaEstudante } from '@/types/quiz';

interface FeedbackCardProps {
  respostaConfirmada: RespostaEstudante;
  questao: Questao;
}

export function FeedbackCard({ respostaConfirmada, questao }: FeedbackCardProps) {
  const eCorreta = respostaConfirmada.correta;
  const alternativaCorreta = questao.alternativas.find(
    (alt) => alt.id === questao.alternativaCorretaId
  );

  return (
    <div
      className={`rounded-xl p-5 mb-6 border ${
        eCorreta
          ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
          : 'bg-rose-50 border-rose-300 text-rose-900'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0 mt-0.5 ${
            eCorreta ? 'bg-emerald-600' : 'bg-rose-600'
          }`}
        >
          {eCorreta ? '✓' : '✕'}
        </div>
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-1">
            {eCorreta ? 'Resposta Correta!' : 'Resposta Incorreta'}
          </h3>
          {eCorreta ? (
            <p className="text-sm sm:text-base text-emerald-800">
              Parabéns! Você acertou esta questão.
            </p>
          ) : (
            <p className="text-sm sm:text-base text-rose-800">
              A alternativa correta era a opção{' '}
              <strong className="uppercase font-bold underline">
                {questao.alternativaCorretaId}) {alternativaCorreta?.texto}
              </strong>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
