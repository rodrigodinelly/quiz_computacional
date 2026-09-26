export interface Alternativa {
  id: string;
  texto: string;
}

export interface Questao {
  id: number;
  enunciado: string;
  alternativas: Alternativa[];
  alternativaCorretaId: string;
}

export type StatusSessao = 'EM_ANDAMENTO' | 'CONCLUIDO';

export interface RespostaEstudante {
  questaoId: number;
  alternativaSelecionadaId: string;
  confirmada: boolean;
  correta: boolean;
}

export interface SessaoQuiz {
  indiceQuestaoAtual: number;
  respostas: RespostaEstudante[];
  acertos: number;
  erros: number;
  percentualAcertos: number;
  status: StatusSessao;
  opcaoEmSelecao: string | null;
}
