import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useQuiz } from '@/hooks/useQuiz';

describe('useQuiz Hook - Unit Tests', () => {
  it('deve inicializar com a primeira questão (índice 0) e estado inicial correto', () => {
    const { result } = renderHook(() => useQuiz());

    expect(result.current.sessao.indiceQuestaoAtual).toBe(0);
    expect(result.current.sessao.opcaoEmSelecao).toBeNull();
    expect(result.current.sessao.status).toBe('EM_ANDAMENTO');
    expect(result.current.questaoAtual.id).toBe(1);
    expect(result.current.questaoAtual.alternativas).toHaveLength(4);
    expect(result.current.respostaConfirmadaAtual).toBeUndefined();
  });

  it('deve permitir selecionar e alterar a opção antes de confirmar', () => {
    const { result } = renderHook(() => useQuiz());

    act(() => {
      result.current.selecionarOpcao('a');
    });
    expect(result.current.sessao.opcaoEmSelecao).toBe('a');

    act(() => {
      result.current.selecionarOpcao('b');
    });
    expect(result.current.sessao.opcaoEmSelecao).toBe('b');
  });

  it('deve confirmar a resposta e registrar feedback correto', () => {
    const { result } = renderHook(() => useQuiz());

    // Selecionar a alternativa 'b' (correta na questão 1)
    act(() => {
      result.current.selecionarOpcao('b');
    });

    act(() => {
      result.current.confirmarResposta();
    });

    expect(result.current.respostaConfirmadaAtual).toBeDefined();
    expect(result.current.respostaConfirmadaAtual?.correta).toBe(true);
    expect(result.current.sessao.acertos).toBe(1);
    expect(result.current.sessao.erros).toBe(0);
  });

  it('deve travar a alteração de opção após confirmação e avançar para a próxima questão', () => {
    const { result } = renderHook(() => useQuiz());

    act(() => {
      result.current.selecionarOpcao('a');
    });

    act(() => {
      result.current.confirmarResposta();
    });

    // Tentar selecionar outra opção após confirmação não deve alterar nada
    act(() => {
      result.current.selecionarOpcao('c');
    });
    expect(result.current.respostaConfirmadaAtual?.alternativaSelecionadaId).toBe('a');

    // Avançar para próxima questão
    act(() => {
      result.current.proximaQuestao();
    });

    expect(result.current.sessao.indiceQuestaoAtual).toBe(1);
    expect(result.current.sessao.opcaoEmSelecao).toBeNull();
    expect(result.current.respostaConfirmadaAtual).toBeUndefined();
  });
});
