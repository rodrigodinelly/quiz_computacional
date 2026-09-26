import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { QuestionCard } from '@/components/QuestionCard';
import { Questao } from '@/types/quiz';

const mockQuestao: Questao = {
  id: 1,
  enunciado: 'Qual é a CPU?',
  alternativas: [
    { id: 'a', texto: 'RAM' },
    { id: 'b', texto: 'Processador' },
    { id: 'c', texto: 'SSD' },
    { id: 'd', texto: 'Placa de Vídeo' }
  ],
  alternativaCorretaId: 'b'
};

describe('QuestionCard Component', () => {
  it('deve renderizar o enunciado e as 4 alternativas', () => {
    render(
      <QuestionCard
        questao={mockQuestao}
        opcaoEmSelecao={null}
        respostaConfirmada={undefined}
        onSelecionarOpcao={vi.fn()}
      />
    );

    expect(screen.getByText(/Qual é a CPU\?/)).toBeInTheDocument();
    expect(screen.getByText('RAM')).toBeInTheDocument();
    expect(screen.getByText('Processador')).toBeInTheDocument();
    expect(screen.getByText('SSD')).toBeInTheDocument();
    expect(screen.getByText('Placa de Vídeo')).toBeInTheDocument();
  });

  it('deve chamar a função de seleção ao clicar em uma alternativa', () => {
    const handleSelecionar = vi.fn();
    render(
      <QuestionCard
        questao={mockQuestao}
        opcaoEmSelecao={null}
        respostaConfirmada={undefined}
        onSelecionarOpcao={handleSelecionar}
      />
    );

    fireEvent.click(screen.getByText('Processador'));
    expect(handleSelecionar).toHaveBeenCalledWith('b');
  });
});
