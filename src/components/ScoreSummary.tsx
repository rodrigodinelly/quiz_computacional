import React from 'react';

interface ScoreSummaryProps {
  acertos: number;
  erros: number;
  percentual: number;
  onReiniciar: () => void;
}

export function ScoreSummary({ acertos, erros, percentual, onReiniciar }: ScoreSummaryProps) {
  let mensagemFeedback = 'Bom trabalho!';
  if (percentual >= 80) {
    mensagemFeedback = 'Excelente desempenho!';
  } else if (percentual < 50) {
    mensagemFeedback = 'Continue praticando!';
  }

  return (
    <div className="bg-white rounded-xl p-6 sm:p-10 shadow-md border border-slate-200 text-center max-w-xl mx-auto">
      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
        🎓
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
        Quiz Concluído!
      </h2>
      <p className="text-slate-600 text-sm sm:text-base mb-8">{mensagemFeedback}</p>

      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-8 grid grid-cols-3 gap-4">
        <div className="p-3">
          <span className="block text-2xl sm:text-3xl font-bold text-emerald-600">
            {acertos}
          </span>
          <span className="text-xs sm:text-sm text-slate-500 font-medium uppercase">
            Acertos
          </span>
        </div>
        <div className="p-3 border-x border-slate-200">
          <span className="block text-2xl sm:text-3xl font-bold text-rose-600">
            {erros}
          </span>
          <span className="text-xs sm:text-sm text-slate-500 font-medium uppercase">
            Erros
          </span>
        </div>
        <div className="p-3">
          <span className="block text-2xl sm:text-3xl font-bold text-blue-600">
            {percentual}%
          </span>
          <span className="text-xs sm:text-sm text-slate-500 font-medium uppercase">
            Aproveitamento
          </span>
        </div>
      </div>

      <button
        onClick={onReiniciar}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg shadow transition-colors text-base"
      >
        Reiniciar Quiz
      </button>
    </div>
  );
}
