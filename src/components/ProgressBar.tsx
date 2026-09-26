import React from 'react';

interface ProgressBarProps {
  atual: number; // 1-based (ex: 1 a 10)
  total: number;
}

export function ProgressBar({ atual, total }: ProgressBarProps) {
  const porcentagem = Math.round((atual / total) * 100);

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center text-sm font-semibold text-slate-700 mb-2">
        <span>Questão {atual} de {total}</span>
        <span>{porcentagem}%</span>
      </div>
      <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-300 ease-out"
          style={{ width: `${porcentagem}%` }}
        />
      </div>
    </div>
  );
}
