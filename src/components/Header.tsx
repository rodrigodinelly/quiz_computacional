import React from 'react';

export function Header() {
  return (
    <header className="w-full bg-slate-900 text-white py-6 px-4 shadow-md mb-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-400">
          Quiz Computacional
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-1">
          Pratique seus conhecimentos básicos de Computação
        </p>
      </div>
    </header>
  );
}
