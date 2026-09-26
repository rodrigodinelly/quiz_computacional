import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ScoreSummary } from '@/components/ScoreSummary';

describe('ScoreSummary Component', () => {
  it('deve exibir os acertos, erros e percentual correto', () => {
    render(
      <ScoreSummary
        acertos={8}
        erros={2}
        percentual={80}
        onReiniciar={vi.fn()}
      />
    );

    expect(screen.getByText('80%')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('deve chamar a função de reiniciar ao clicar no botão', () => {
    const handleReiniciar = vi.fn();
    render(
      <ScoreSummary
        acertos={8}
        erros={2}
        percentual={80}
        onReiniciar={handleReiniciar}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /reiniciar quiz/i }));
    expect(handleReiniciar).toHaveBeenCalledTimes(1);
  });
});
