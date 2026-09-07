// Plano Mestre - Câmara de Meruoca 2026 (Técnico Legislativo)

// =========================================================================
// BANCO DE FLASHCARDS INTERATIVOS (MEMORIZAÇÃO ATIVA & MNEMÔNICOS)
// =========================================================================
const FLASHCARDS_DATA = [
  {
    id: 1,
    category: "legislacao",
    tag: "Lei Orgânica de Meruoca",
    question: "Qual o prazo que o Prefeito de Meruoca tem para sancionar ou vetar um Projeto de Lei aprovado pela Câmara?",
    answer: "15 dias úteis.",
    explanation: "O silêncio do Prefeito após os 15 dias úteis importa em sanção tácita. Se ele vetar, o veto deve ser apreciado pela Câmara em até 30 dias."
  },
  {
    id: 2,
    category: "legislacao",
    tag: "Lei Orgânica de Meruoca",
    question: "Qual é o quórum necessário na Câmara de Meruoca para REJEITAR o parecer prévio do Tribunal de Contas (TCE) sobre as contas do Prefeito?",
    answer: "2/3 (dois terços) dos membros da Câmara.",
    explanation: "O parecer prévio do Tribunal de Contas só deixará de prevalecer por decisão de 2/3 dos membros da Câmara Municipal."
  },
  {
    id: 3,
    category: "legislacao",
    tag: "Regimento Interno",
    question: "Quais são as duas funções TÍPICAS do Poder Legislativo Municipal?",
    answer: "1. Legislar (criar leis) e 2. Fiscalizar (controle externo).",
    explanation: "Funções atípicas: Administrar seus próprios serviços e Julgar (ex: julgar o Prefeito e Vereadores por infrações político-administrativas)."
  },
  {
    id: 4,
    category: "constitucional",
    tag: "Constitucional — Art. 5º",
    question: "Quais são os únicos crimes INAFIANÇÁVEIS e IMPRESCRITÍVEIS segundo a CF/88? (Mnemônico)",
    answer: "Mnemônico: RAÇÃO\n• RA = Racismo (Art. 5º, XLII)\n• ÇÃO = Ação de grupos armados (Art. 5º, XLIV)",
    explanation: "Estão sujeitos à pena de reclusão. Não prescrevem jamais e não admitem fiança."
  },
  {
    id: 5,
    category: "constitucional",
    tag: "Constitucional — Art. 5º",
    question: "Quais são os crimes INAFIANÇÁVEIS e INSUSCETÍVEIS DE GRAÇA OU ANISTIA? (Mnemônico)",
    answer: "Mnemônico: 3T.H\n• Tráfico ilícito de entorpecentes\n• Tortura\n• Terrorismo\n• Hediondos",
    explanation: "Art. 5º, XLIII: São inafiançáveis e não recebem graça/anistia/indulto. (Atenção: eles PRESCREVEM, diferentemente de racismo e ação de grupos armados)."
  },
  {
    id: 6,
    category: "constitucional",
    tag: "Remédios Constitucionais",
    question: "Qual o prazo decadencial para impetrar Mandado de Segurança?",
    answer: "120 dias corridos.",
    explanation: "Art. 23 da Lei 12.016/09 e Súmula 632 do STF. Conta-se a partir da ciência oficial, pelo interessado, do ato impugnado."
  },
  {
    id: 7,
    category: "constitucional",
    tag: "Constitucional — Art. 5º",
    question: "A entrada forçada em domicílio por determinação JUDICIAL só pode ocorrer em qual horário?",
    answer: "Apenas DURANTE O DIA.",
    explanation: "Art. 5º, XI: Determinação judicial = só de dia. Flagrante delito, desastre ou socorro = a qualquer hora (dia ou noite)."
  },
  {
    id: 8,
    category: "constitucional",
    tag: "Remédios Constitucionais",
    question: "Quem tem legitimidade ativa para propor Ação Popular?",
    answer: "Exclusivamente o CIDADÃO (no gozo dos direitos políticos).",
    explanation: "Art. 5º, LXXIII: Estrangeiros, pessoas jurídicas e partidos políticos não podem propor Ação Popular; exige-se título de eleitor regular."
  },
  {
    id: 9,
    category: "administrativo",
    tag: "Direito Administrativo",
    question: "Quais são os 5 REQUISITOS / ELEMENTOS de validade do Ato Administrativo? (Mnemônico)",
    answer: "Mnemônico: CO-M-FI-FO-R\n• Competência\n• Motivo\n• Finalidade\n• Forma\n• Objeto",
    explanation: "Competência, Finalidade e Forma são sempre VINCULADOS. Motivo e Objeto podem ser discricionários."
  },
  {
    id: 10,
    category: "administrativo",
    tag: "Direito Administrativo",
    question: "Quais são os 4 ATRIBUTOS do Ato Administrativo? (Mnemônico)",
    answer: "Mnemônico: P-A-T-I\n• Presunção de legitimidade/veracidade\n• Autoexecutoriedade\n• Tipicidade\n• Imperatividade",
    explanation: "A Presunção e a Tipicidade estão presentes em TODOS os atos administrativos."
  },
  {
    id: 11,
    category: "administrativo",
    tag: "Lei 14.133/2021 (Licitações)",
    question: "Quais são as 5 MODALIDADES de licitação previstas na Nova Lei 14.133/2021?",
    answer: "1. Pregão\n2. Concorrência\n3. Concurso\n4. Leilão\n5. Diálogo Competitivo",
    explanation: "ATENÇÃO: Tomada de Preços e Convite foram EXTINTOS pela Lei 14.133/21!"
  },
  {
    id: 12,
    category: "administrativo",
    tag: "Lei 14.133/2021 (Licitações)",
    question: "Qual a diferença fundamental entre INEXIGIBILIDADE e DISPENSA de licitação?",
    answer: "• Inexigibilidade = Inviabilidade de competição (rol exemplificativo).\n• Dispensa = Competição é viável, mas a lei permite dispensar (rol taxativo).",
    explanation: "Exemplos de Inexigibilidade: fornecedor exclusivo, artista consagrado, serviços técnicos especializados singulares."
  },
  {
    id: 13,
    category: "administrativo",
    tag: "Orçamento / LRF (LC 101/00)",
    question: "Qual o limite MÁXIMO de despesa total com PESSOAL para o Poder Legislativo Municipal (Câmara)?",
    answer: "6% (seis por cento) da Receita Corrente Líquida (RCL).",
    explanation: "No Município: Poder Executivo = 54%, Poder Legislativo = 6%. Total municipal = 60% da RCL."
  },
  {
    id: 14,
    category: "legislacao",
    tag: "Técnica Legislativa (LC 95/98)",
    question: "Como se desdobra hierarquicamente a estrutura de uma lei conforme a LC 95/98?",
    answer: "Artigo (Art.) ➔ Parágrafo (§) ➔ Inciso (I, II) ➔ Alínea (a, b) ➔ Item (1, 2).",
    explanation: "Os artigos são indicados por ordinais até o nono (Art. 1º ao Art. 9º) e por cardinais a partir do décimo (Art. 10, Art. 11)."
  },
  {
    id: 15,
    category: "constitucional",
    tag: "Constitucional — Art. 5º",
    question: "O direito de reunião pacífica (Art. 5º, XVI) exige autorização policial?",
    answer: "NÃO. Independe de autorização.",
    explanation: "Exige-se apenas: fins pacíficos, sem armas, em locais abertos ao público, prévio aviso (para evitar choque com outra reunião) e não frustração de reunião anterior."
  },
  {
    id: 16,
    category: "administrativo",
    tag: "Responsabilidade do Estado",
    question: "Qual é a regra geral da Responsabilidade Civil do Estado no Brasil (Art. 37, § 6º da CF)?",
    answer: "Responsabilidade OBJETIVA (Teoria do Risco Administrativo).",
    explanation: "A vítima precisa provar apenas: Conduta estatal, Dano e Nexo Causal. Não precisa provar dolo nem culpa da administração."
  },
  {
    id: 17,
    category: "administrativo",
    tag: "Improbidade (Lei 8.429/92)",
    question: "Atos de improbidade administrativa admitem modalidade CULPOSA após a reforma da Lei 14.230/21?",
    answer: "NÃO. Exige-se DOLO ESPECÍFICO em todas as hipóteses.",
    explanation: "A mera voluntariedade ou negligência/imprudência não configura mais ato de improbidade administrativa."
  },
  {
    id: 18,
    category: "legislacao",
    tag: "LGPD (Lei 13.709/18)",
    question: "O que é considerado 'Dado Pessoal Sensível' na LGPD?",
    answer: "Dados sobre origem racial/étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, dado genético ou biométrico.",
    explanation: "Possuem regime de tratamento muito mais rigoroso e restritivo que os dados pessoais comuns."
  },
  {
    id: 19,
    category: "legislacao",
    tag: "LAI (Lei 12.527/11)",
    question: "Qual o prazo que a Administração Pública tem para responder a um pedido de acesso à informação (LAI) se a informação não puder ser concedida de imediato?",
    answer: "Até 20 dias (prorrogáveis por mais 10 dias justificadamente).",
    explanation: "A regra geral é o acesso imediato. Se não for possível, o prazo é de 20 + 10 dias."
  },
  {
    id: 20,
    category: "constitucional",
    tag: "Poder Legislativo",
    question: "Qual a diferença entre SANÇÃO, VETO e PROMULGAÇÃO de uma lei?",
    answer: "• Sanção = Concordância do Chefe do Executivo.\n• Veto = Recusa expressa (por inconstitucionalidade ou interesse público).\n• Promulgação = Atestado formal de existência e executoriedade da lei.",
    explanation: "Se o Prefeito vetar e a Câmara derrubar o veto, o Prefeito tem 48h para promulgar. Se não o fizer, o Presidente da Câmara promulgará em 48h."
  },
  {
    id: 21,
    category: "portugues",
    tag: "Língua Portuguesa",
    question: "Qual a diferença entre TEXTO INJUNTIVO e TEXTO PRESCRITIVO?",
    answer: "• Injuntivo = Sugestão/instrução/conselho (ex: receita culinária, manual).\n• Prescritivo = Ordem impositiva e obrigatória (ex: cláusulas de contrato, leis, placas de trânsito).",
    explanation: "Ambos usam verbos no imperativo, mas o prescritivo não dá margem de escolha ao leitor."
  },
  {
    id: 22,
    category: "legislacao",
    tag: "Orçamento Público",
    question: "Qual a função de cada instrumento orçamentário: PPA, LDO e LOA?",
    answer: "• PPA (4 anos) = Diretrizes, objetivos e metas de médio prazo.\n• LDO (Anual) = Metas, prioridades e orienta a elaboração da LOA.\n• LOA (Anual) = Estima a receita e fixa a despesa para o exercício.",
    explanation: "A LOA é o orçamento executivo real; a LDO faz a ponte estratégica entre o PPA e a LOA."
  },

  // =========================================================================
  // FLASHCARDS ESPECÍFICOS DO DIA 3 (02/09/2026 — D. ADMINISTRATIVO & INFORMÁTICA)
  // =========================================================================
  {
    id: 23,
    category: "administrativo",
    day: "dia3",
    tag: "D. Administrativo — Princípios LIMPE",
    question: "Quais são os 5 Princípios Expressos da Administração Pública no Art. 37, caput da CF/88? (Mnemônico)",
    answer: "Mnemônico: L - I - M - P - E\n• L = Legalidade\n• I = Impessoalidade\n• M = Moralidade\n• P = Publicidade\n• E = Eficiência (EC 19/98)",
    explanation: "Atenção: Razoabilidade, Proporcionalidade e Supremacia do Interesse Público são princípios IMPLÍCITOS, não estão expressos no LIMPE!"
  },
  {
    id: 24,
    category: "administrativo",
    day: "dia3",
    tag: "D. Administrativo — Impessoalidade",
    question: "Qual a regra constitucional sobre publicidade de atos e campanhas de órgãos públicos (Art. 37, § 1º)?",
    answer: "Deve ter caráter educativo, informativo ou de orientação social, sendo VEDADA a promoção pessoal (nomes, fotos, símbolos de autoridades).",
    explanation: "A vedação de autopromoção de prefeitos e vereadores decorre diretamente do princípio da IMPESSOALIDADE."
  },
  {
    id: 25,
    category: "administrativo",
    day: "dia3",
    tag: "D. Administrativo — Moralidade",
    question: "O que estabelece a Súmula Vinculante nº 13 do STF sobre Nepotismo?",
    answer: "É proibida a nomeação de cônjuge, companheiro ou parente até o 3º GRAU da autoridade nomeante para cargo em comissão ou função de confiança.",
    explanation: "Ofende os princípios da Moralidade, Impessoalidade e Isonomia em todos os Poderes da União, Estados e Municípios."
  },
  {
    id: 26,
    category: "administrativo",
    day: "dia3",
    tag: "D. Administrativo — Autotutela",
    question: "O que é o Princípio da Autotutela (Súmulas 346 e 473 do STF)?",
    answer: "A Administração pode rever seus próprios atos:\n• ANULAR os atos ILEGAIS (efeito ex tunc - retroage).\n• REVOGAR os atos INOPORTUNOS/INCONVENIENTES (efeito ex nunc - não retroage).",
    explanation: "A Administração não precisa pedir autorização judicial para anular seus atos ilegais nem para revogar atos inoportunos."
  },
  {
    id: 27,
    category: "administrativo",
    day: "dia3",
    tag: "D. Administrativo — Organização",
    question: "Qual a diferença essencial entre DESCONCENTRAÇÃO e DESCENTRALIZAÇÃO? (Mnemônico)",
    answer: "• DescoNcentração (com O de Órgão) = Divisão interna na MESMA pessoa jurídica (com hierarquia).\n• DesceNtralização (com E de Entidade) = Criação/transferência para OUTRA pessoa jurídica (sem hierarquia, apenas tutela).",
    explanation: "Órgãos públicos NÃO têm personalidade jurídica própria nem patrimônio separado; entidades da administração indireta têm."
  },
  {
    id: 28,
    category: "administrativo",
    day: "dia3",
    tag: "D. Administrativo — Administração Indireta",
    question: "Qual é a ÚNICA entidade da Administração Indireta que é criada DIRETAMENTE por lei específica?",
    answer: "A AUTARQUIA (personalidade jurídica de direito público).",
    explanation: "Art. 37, XIX da CF/88: Somente a Autarquia é criada por lei específica. Empresas Públicas, SEM e Fundações têm sua criação apenas AUTORIZADA por lei."
  },
  {
    id: 29,
    category: "administrativo",
    day: "dia3",
    tag: "D. Administrativo — Empresas Públicas vs SEM",
    question: "Quais as 2 principais diferenças entre Empresa Pública (EP) e Sociedade de Economia Mista (SEM)?",
    answer: "1. Capital:\n• EP = 100% público\n• SEM = Misto (maioria votante pública)\n2. Formato:\n• EP = Qualquer formato (Ltda, S/A)\n• SEM = Obrigatoriamente S/A",
    explanation: "Exemplo de Empresa Pública: Caixa Econômica / Correios. Exemplo de Sociedade de Economia Mista: Banco do Brasil / Petrobras."
  },
  {
    id: 30,
    category: "administrativo",
    day: "dia3",
    tag: "D. Administrativo — Órgãos Públicos",
    question: "Qual teoria explica a relação entre o agente público e o órgão/Estado no Brasil?",
    answer: "Teoria do Órgão (ou da Imputação Volitiva) de Otto Gierke.",
    explanation: "A vontade e os atos praticados pelo servidor público são imputados diretamente à pessoa jurídica do Estado (ex: Município de Meruoca)."
  },
  {
    id: 31,
    category: "informatica",
    day: "dia3",
    tag: "Windows 11 — Nomes de Arquivos",
    question: "Quais são os 9 caracteres PROIBIDOS em nomes de arquivos e pastas no Windows?",
    answer: "Barras (\\ /), Dois pontos (:), Asterisco (*), Interrogação (?), Aspas (\"), Menor (<), Maior (>) e Pipe (|).",
    explanation: "Mnemônico: 'Dois pontos, duas barras, aspas, asterisco, interrogação, menor, maior e pipe'."
  },
  {
    id: 32,
    category: "informatica",
    day: "dia3",
    tag: "Windows 11 — Atalhos de Teclado",
    question: "Quais as funções dos atalhos: Win + L, Win + E e Shift + Delete no Windows 11?",
    answer: "• Win + L = Bloqueia a tela do computador (Lock)\n• Win + E = Abre o Explorador de Arquivos (Explorer)\n• Shift + Delete = Exclui permanentemente (sem passar pela Lixeira)",
    explanation: "Ctrl + Shift + Esc abre o Gerenciador de Tarefas diretamente."
  },
  {
    id: 33,
    category: "informatica",
    day: "dia3",
    tag: "Linux Ubuntu — Diretórios",
    question: "No Linux Ubuntu, para que servem os diretórios /etc, /home e /root?",
    answer: "• /etc = Arquivos de configuração globais do sistema\n• /home = Pastas dos usuários comuns\n• /root = Pasta pessoal do superusuário (administrador)",
    explanation: "/bin armazena comandos executáveis essenciais; /var armazena dados variáveis (logs e spool)."
  },
  {
    id: 34,
    category: "informatica",
    day: "dia3",
    tag: "Linux Ubuntu — Comandos",
    question: "No terminal do Linux, o que fazem os comandos 'ls', 'mkdir' e 'pwd'?",
    answer: "• ls = Lista arquivos e pastas\n• mkdir = Cria novo diretório (pasta)\n• pwd = Exibe o caminho absoluto do diretório atual (Print Working Directory)",
    explanation: "O Linux é Case Sensitive (diferencia maiúsculas de minúsculas: Relatorio.txt ≠ relatorio.txt)."
  },
  {
    id: 35,
    category: "informatica",
    day: "dia3",
    tag: "Hardware — Memórias",
    question: "Qual a diferença fundamental entre Memória RAM e Memória ROM?",
    answer: "• RAM = Primária, ultrarrápida e VOLÁTIL (apaga tudo ao desligar o PC).\n• ROM = Primária, NÃO-VOLÁTIL, gravada de fábrica com a BIOS/firmware.",
    explanation: "SSD e HD são memórias secundárias (armazenamento permanente de arquivos do usuário)."
  },
  {
    id: 36,
    category: "informatica",
    day: "dia3",
    tag: "Hardware — CPU",
    question: "Quais são as 3 unidades fundamentais da CPU (Processador)?",
    answer: "1. ULA (Unidade Lógica e Aritmética - cálculos matemáticos e lógicos)\n2. UC (Unidade de Controle - gerencia fluxo de dados)\n3. Registradores (memória interna ultrarrápida)",
    explanation: "A CPU executa o ciclo de busca, decodificação e execução das instruções dos programas."
  },
  {
    id: 37,
    category: "informatica",
    day: "dia3",
    tag: "Backup — Tipos e Regra 3-2-1",
    question: "Qual a diferença entre Backup Incremental e Backup Diferencial, e o que é a Regra 3-2-1?",
    answer: "• Incremental = Copia alterações desde o ÚLTIMO backup (qualquer tipo).\n• Diferencial = Copia alterações desde o último backup FULL.\n• Regra 3-2-1 = 3 cópias, 2 mídias diferentes, 1 cópia fora do local (nuvem).",
    explanation: "O Incremental é mais rápido de gravar; o Diferencial é mais rápido de restaurar."
  }
,
{
  "id": 31,
  "category": "portugues",
  "day": "dia4",
  "tag": "Português — Proparoxítonas",
  "question": "Qual é a regra geral de acentuação gráfica das palavras PROPAROXÍTONAS na Língua Portuguesa?",
  "answer": "TODAS as palavras proparoxítonas são acentuadas graficamente.",
  "explanation": "Exemplos clássicos da INBRASP: po-LÍ-ti-ca, CÔM-pu-to, TÉC-ni-co, CÂ-ma-ra, DÉ-fi-cit."
},
{
  "id": 32,
  "category": "portugues",
  "day": "dia4",
  "tag": "Português — Crase Proibida",
  "question": "Quais são os 3 casos mais cobrados em concursos em que a CRASE é expressamente PROIBIDA?",
  "answer": "1. Antes de palavras masculinas;\n2. Antes de verbos no infinitivo;\n3. Antes de pronomes que não aceitam artigo (esta, essa, quem, alguém, todos).",
  "explanation": "Crase é a fusão de preposição 'a' + artigo 'a'. Se a palavra seguinte não aceita artigo feminino, a crase não pode ocorrer."
},
{
  "id": 33,
  "category": "portugues",
  "day": "dia4",
  "tag": "Português — Crase Facultativa",
  "question": "Quais são os 3 casos clássicos em que a CRASE é FACULTATIVA (opcional)? (Mnemônico)",
  "answer": "Mnemônico: ATÉ, NOME DE MULHER, POSSESSIVO\n1. Depois da palavra 'até';\n2. Antes de nomes próprios femininos sem qualificativo;\n3. Antes de pronome possessivo feminino singular (minha, sua, tua).",
  "explanation": "Exemplos: 'Fui até a/à praça'; 'Entreguei o ofício a/à Maria'; 'Dirigi-me a/à sua sala'."
},
{
  "id": 34,
  "category": "portugues",
  "day": "dia4",
  "tag": "Português — Hiatos Tônicos",
  "question": "Por que 'SAÍDA' e 'BAÚ' têm acento gráfico, mas 'RAINHA' e 'JUIZ' não têm?",
  "answer": "'I' e 'U' tônicos em hiato recebem acento quando sozinhos na sílaba (ou com 's'). Não recebem acento se seguidos de 'nh' (ra-i-nha) ou de outra consoante como 'z' (ju-iz).",
  "explanation": "Sa-í-da (acentua); Ba-ú (acentua); Ju-iz (não acentua, mas 'ju-í-zes' acentua porque o 'i' fica sozinho com a divisão silábica)."
},
{
  "id": 35,
  "category": "constitucional",
  "day": "dia4",
  "tag": "Constitucional — Direitos Sociais",
  "question": "Quais são os limites constitucionais de jornada de trabalho para empregados urbanos e rurais (Art. 7º, XIII)?",
  "answer": "Até 8 HORAS diárias e até 44 HORAS semanais.",
  "explanation": "É facultada a compensação de horários e a redução de jornada mediante acordo ou convenção coletiva de trabalho."
},
{
  "id": 36,
  "category": "constitucional",
  "day": "dia4",
  "tag": "Constitucional — Menores de Idade",
  "question": "Quais são as 3 idades-chave para o trabalho de menores segundo a CF/88 (Art. 7º, XXXIII)?",
  "answer": "• 18 anos: Proibido trabalho noturno, perigoso ou insalubre.\n• 16 anos: Proibido qualquer trabalho em geral.\n• 14 anos: Permitido exclusivamente na condição de APRENDIZ.",
  "explanation": "Atenção: A INBRASP adora tentar colocar aprendiz a partir de 12 anos ou trocar 16 por 14 anos na regra geral!"
},
{
  "id": 37,
  "category": "constitucional",
  "day": "dia4",
  "tag": "Constitucional — Horas Extras e Férias",
  "question": "Qual o percentual MÍNIMO de adicional de horas extras e o acréscimo de férias na CF/88?",
  "answer": "• Hora extra: no mínimo 50% superior à hora normal.\n• Férias: acréscimo de pelo menos 1/3 (um terço) a mais do salário normal.",
  "explanation": "Art. 7º, XVI e XVII da CF/88."
},
{
  "id": 38,
  "category": "constitucional",
  "day": "dia4",
  "tag": "Constitucional — Estabilidade Sindical",
  "question": "Qual o período da estabilidade provisória do dirigente sindical (Art. 8º, VIII da CF)?",
  "answer": "A partir do registro da candidatura e, se eleito (mesmo suplente), até 1 ANO após o término do mandato.",
  "explanation": "Salvo se cometer falta grave devidamente apurada nos termos da lei."
},
{
  "id": 39,
  "category": "legislacao",
  "day": "dia4",
  "tag": "Lei Orgânica de Meruoca",
  "question": "Quem são os únicos detentores dos Poderes Políticos no âmbito do Município de Meruoca?",
  "answer": "O Poder Legislativo (Câmara Municipal) e o Poder Executivo (Prefeitura).",
  "explanation": "Município NÃO possui Poder Judiciário nem Ministério Público local. O Judiciário é estadual."
},
{
  "id": 40,
  "category": "legislacao",
  "day": "dia4",
  "tag": "Lei Orgânica de Meruoca",
  "question": "Qual a diferença essencial entre Competência Privativa e Competência Comum do Município de Meruoca?",
  "answer": "• Privativa: Assuntos de interesse estritamente local, tributos municipais, fixação de tarifas e zoneamento urbano.\n• Comum: Saúde, proteção ao meio ambiente, educação e assistência pública (exercida em cooperação com Estado e União).",
  "explanation": "Competência privativa = só o município faz; comum = município, Estado e União atuam juntos."
}
];

// =========================================================================
// BANCO OFICIAL DE QUESTÕES INBRASP (30 Questões - 4 Alternativas)
// =========================================================================
const QUIZ_QUESTIONS_DATA = [
  {
    "id": 1,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, XI (Inviolabilidade do Domicílio)",
    "question": "Conforme o Art. 5º, XI, da CF/88, a casa é asilo inviolável do indivíduo. A entrada no domicílio sem o consentimento do morador por determinação judicial só pode ocorrer:",
    "options": [
      "Durante o dia.",
      "A qualquer hora do dia ou da noite.",
      "Apenas durante a noite, com a presença de testemunhas.",
      "Em dias úteis, no período das 6h às 22h."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 5º, XI da CF/88: 'A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial'."
  },
  {
    "id": 2,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, XLII e XLIV (Crimes Inafiançáveis e Imprescritíveis)",
    "question": "Segundo a Constituição Federal de 1988, constituem crimes inafiançáveis e imprescritíveis:",
    "options": [
      "A prática da tortura e o tráfico ilícito de entorpecentes.",
      "Os crimes hediondos e o terrorismo.",
      "A prática do racismo e a ação de grupos armados contra a ordem constitucional.",
      "O roubo qualificado e a corrupção passiva."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Mnemônico 'RAÇÃO': Racismo (Art. 5º, XLII) e Ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (Art. 5º, XLIV) são os dois únicos crimes inafiançáveis e imprescritíveis na CF/88."
  },
  {
    "id": 3,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, XLIII (Crimes Inafiançáveis e Insuscetíveis de Graça)",
    "question": "A Constituição Federal define o crime de tráfico ilícito de entorpecentes e drogas afins como:",
    "options": [
      "Imprescritível e afiançável mediante depósito judicial.",
      "Inafiançável e insuscetível de graça ou anistia.",
      "Suscetível de graça, desde que cumprido 1/3 da pena.",
      "Prescritível e passível de liberdade provisória com fiança."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 5º, XLIII da CF/88: Os crimes '3T.H' (Tráfico de drogas, Tortura, Terrorismo e Hediondos) são inafiançáveis e insuscetíveis de graça ou anistia."
  },
  {
    "id": 4,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, LXVIII (Habeas Corpus)",
    "question": "O remédio constitucional cabível para garantir a liberdade de locomoção, sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de ir e vir, por ilegalidade ou abuso de poder, é o:",
    "options": [
      "Habeas Corpus.",
      "Mandado de Segurança.",
      "Habeas Data.",
      "Mandado de Injunção."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 5º, LXVIII da CF/88: Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder."
  },
  {
    "id": 5,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, LXXII (Habeas Data)",
    "question": "A respeito do Habeas Data (Art. 5º, LXXII), assinale a afirmativa correta:",
    "options": [
      "Pode ser impetrado para requerer certidões sobre atos e contratos de terceiros.",
      "Destina-se a assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros de entidades governamentais.",
      "É uma ação judicial onerosa que exige o recolhimento prévio de taxas.",
      "Não exige a intervenção de advogado para a sua propositura em juízo."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 5º, LXXII da CF/88: O Habeas Data é ação personalíssima para assegurar o conhecimento/retificação de informações relativas à pessoa do impetrante em bancos de dados governamentais. É gratuito (Art. 5º, LXXVII), mas exige advogado."
  },
  {
    "id": 6,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, LXIX (Mandado de Segurança)",
    "question": "Para proteger direito líquido e certo, não amparado por Habeas Corpus ou Habeas Data, quando o responsável pela ilegalidade for autoridade pública, concede-se:",
    "options": [
      "Mandado de Segurança.",
      "Ação Popular.",
      "Mandado de Injunção.",
      "Arguição de Descumprimento de Preceito Fundamental."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 5º, LXIX da CF/88: Conceder-se-á Mandado de Segurança para proteger direito líquido e certo, não amparado por Habeas Corpus ou Habeas Data, contra ilegalidade de autoridade pública."
  },
  {
    "id": 7,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Mandado de Segurança (Prazo Decadencial)",
    "question": "O prazo decadencial para a impetração de Mandado de Segurança é de:",
    "options": [
      "30 dias contados da publicação da portaria.",
      "60 dias contados da ocorrência do fato danoso.",
      "90 dias contados da notificação do ato coator.",
      "120 dias contados da ciência, pelo interessado, do ato impugnado."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 23 da Lei nº 12.016/2009 e Súmula 632 do STF: Prazo decadencial de 120 dias contados da ciência do ato impugnado."
  },
  {
    "id": 8,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, LXXI (Mandado de Injunção)",
    "question": "Sempre que a falta de norma regulamentadora tornar inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania, conceder-se-á:",
    "options": [
      "Habeas Corpus.",
      "Mandado de Segurança Coletivo.",
      "Mandado de Injunção.",
      "Ação Civil Pública."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 5º, LXXI da CF/88: Conceder-se-á Mandado de Injunção diante da ausência de norma regulamentadora que inviabilize o exercício de direito constitucional."
  },
  {
    "id": 9,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, LXXIII (Ação Popular)",
    "question": "A legitimidade ativa para a propositura de Ação Popular (Art. 5º, LXXIII) pertence exclusivamente ao:",
    "options": [
      "Membro do Ministério Público.",
      "Estrangeiro residente há mais de cinco anos no país.",
      "Partido político com representação na Câmara Municipal.",
      "Cidadão no gozo de seus direitos políticos."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 5º, LXXIII da CF/88: 'Qualquer cidadão é parte legítima para propor ação popular...'. A cidadania comprova-se pelo título de eleitor."
  },
  {
    "id": 10,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, IV (Manifestação do Pensamento)",
    "question": "A manifestação do pensamento é garantida a todos no Art. 5º, IV, da CF/88, sendo expressamente:",
    "options": [
      "Permitida sob a égide do anonimato.",
      "Condicionada à aprovação prévia de órgão censor municipal.",
      "Restrita a maiores de 21 anos em pleno gozo de direitos civis.",
      "Vedado o anonimato."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 5º, IV da CF/88: 'É livre a manifestação do pensamento, sendo vedado o anonimato'."
  },
  {
    "id": 11,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, XII (Sigilo das Comunicações)",
    "question": "A inviolabilidade do sigilo da correspondência e das comunicações telegráficas e de dados é garantida pela CF/88. Já a interceptação de comunicações telefônicas:",
    "options": [
      "Pode ser realizada por ordem judicial, para fins de investigação criminal ou instrução processual penal.",
      "É terminantemente proibida sob qualquer hipótese no território nacional.",
      "Pode ser determinada por autoridade policial durante o inquérito administrativo.",
      "Depende de autorização do Presidente da Câmara Municipal quando envolver servidores públicos."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 5º, XII da CF/88: A quebra de sigilo telefônico exige ordem judicial para fins de investigação criminal ou instrução processual penal."
  },
  {
    "id": 12,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, XVI (Direito de Reunião)",
    "question": "No que diz respeito ao direito de reunião pacífica (Art. 5º, XVI), a Constituição Federal exige que:",
    "options": [
      "Haja prévia autorização da autoridade policial competente.",
      "Não haja frustração de outra reunião anteriormente convocada para o mesmo local, sendo exigido prévio aviso.",
      "Os participantes estejam armados para garantir a própria segurança.",
      "O número de participantes seja previamente aprovado pelo Poder Executivo local."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 5º, XVI da CF/88: Reunião pacífica sem armas independe de autorização, exigindo-se apenas prévio aviso à autoridade."
  },
  {
    "id": 13,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, XVII e XVIII (Liberdade de Associação)",
    "question": "Sobre a criação e funcionamento de associações (Art. 5º, XVII a XXI):",
    "options": [
      "O Poder Executivo pode dissolver compulsoriamente uma associação por meio de decreto.",
      "As atividades de uma associação só podem ser suspensas por ato fundamentado do delegado de polícia.",
      "Ninguém poderá ser compelido a associar-se, exceto se houver previsão em convenção coletiva.",
      "A criação independe de autorização e é vedada a interferência estatal em seu funcionamento."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 5º, XVIII da CF/88: A criação de associações independe de autorização e é vedada a interferência estatal em seu funcionamento."
  },
  {
    "id": 14,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, XXV (Requisição Administrativa)",
    "question": "Em caso de iminente perigo público, a autoridade competente poderá usar de propriedade particular, assegurada ao proprietário:",
    "options": [
      "Indenização prévia, justa e em títulos da dívida pública.",
      "Indenização ulterior, se houver dano.",
      "Isenção permanente de tributos imobiliários sobre o imóvel.",
      "Nenhuma contraprestação financeira por se tratar de encargo cívico."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 5º, XXV da CF/88: Na requisição administrativa por iminente perigo público, a indenização é ulterior (posterior) e condicionada ao dano."
  },
  {
    "id": 15,
    "category": "constitucional",
    "discipline": "D. Constitucional",
    "topic": "Art. 5º, XXXVIII (Tribunal do Júri)",
    "question": "É reconhecida a instituição do júri pela CF/88, com a organização que lhe der a lei, assegurada expressamente a competência para o julgamento dos:",
    "options": [
      "Crimes praticados por servidores públicos contra a administração em geral.",
      "Crimes de responsabilidade praticados por prefeitos e vereadores.",
      "Crimes dolosos contra a vida.",
      "Crimes culposos de trânsito que resultem em morte."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 5º, XXXVIII, alínea 'd' da CF/88: Competência do Tribunal do Júri para julgamento dos crimes dolosos contra a vida."
  },
  {
    "id": 16,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Tipologia Textual: Narração",
    "question": "O tipo textual que se caracteriza pela sucessão temporal de fatos e pela presença de personagens, narrador, tempo e espaço denomina-se:",
    "options": [
      "Narrativo.",
      "Expositivo.",
      "Descritivo.",
      "Injuntivo."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. O tipo narrativo estrutura-se em torno de uma sequência de acontecimentos no tempo e no espaço vividos por personagens."
  },
  {
    "id": 17,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Tipologia Textual: Descrição",
    "question": "O excerto 'O casarão antigo possuía portas largas de madeira escura, paredes descascadas pelo tempo e um assoalho de tábuas corridas que rangia' classifica-se predominantemente como:",
    "options": [
      "Argumentativo.",
      "Descritivo.",
      "Injuntivo.",
      "Expositivo."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. A tipologia descritiva constrói um retrato estático de um ambiente ou objeto com adjetivos e qualificadores."
  },
  {
    "id": 18,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Tipologia Textual: Dissertação Argumentativa",
    "question": "O texto que se estrutura com o objetivo principal de defender um ponto de vista (tese), recorrendo a argumentos, dados e raciocínio lógico para convencer o leitor, é do tipo:",
    "options": [
      "Dissertativo-argumentativo.",
      "Narrativo.",
      "Dissertativo-expositivo.",
      "Instrucional."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. O texto dissertativo-argumentativo visa persuadir o leitor por meio da defesa de uma tese com argumentos lógicos."
  },
  {
    "id": 19,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Tipologia Textual: Injunção / Instrução",
    "question": "Os manuais de instalação de equipamentos, receitas culinárias e bulas de medicamentos (na seção posologia) têm em comum a presença de verbos no imperativo ou infinitivo com instruções ao leitor. Essa tipologia é a:",
    "options": [
      "Descritiva.",
      "Narrativa.",
      "Dialógica.",
      "Injuntiva ou instrucional."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. O tipo textual injuntivo orienta ou instrui ações ao leitor com verbos no imperativo ou infinitivo."
  },
  {
    "id": 20,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Gênero Textual: Editorial",
    "question": "Assinale a alternativa que define corretamente o gênero textual Editorial:",
    "options": [
      "Texto jornalístico que expressa o posicionamento institucional da empresa/jornal e não leva assinatura individual.",
      "Texto assinado por um colunista que expressa sua visão pessoal e subjetiva sobre um fato.",
      "Comunicação estritamente interna trocada entre departamentos de uma mesma empresa.",
      "Relatório técnico produzido por peritos judiciais para embasar decisões do tribunal."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. O Editorial expressa a opinião do jornal/empresa de comunicação e não leva assinatura de um articulista individual."
  },
  {
    "id": 21,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Redação Oficial: Ofício",
    "question": "A comunicação formal e padronizada emitida por autoridades públicas para tratar de assuntos oficiais de serviço com outras autoridades ou cidadãos denomina-se:",
    "options": [
      "Ofício.",
      "Carta comercial.",
      "Abaixo-assinado.",
      "Artigo de opinião."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. O Ofício é o documento padrão de comunicação da Administração Pública com outras entidades ou cidadãos."
  },
  {
    "id": 22,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Funções da Linguagem: Conotativa / Apelativa",
    "question": "Em um cartaz institucional afixado em repartição pública constam os dizeres: 'Economize energia elétrica. Apague as lâmpadas ao sair da sala.' O texto emprega tipologia injuntiva com a função de linguagem predominantemente:",
    "options": [
      "Fática.",
      "Emotiva.",
      "Conotativa (ou apelativa).",
      "Metalinguística."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. A função conotativa/apelativa busca influenciar e orientar o comportamento do leitor ('economize', 'apague')."
  },
  {
    "id": 23,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Teoria Textual: Tipo vs. Gênero",
    "question": "Sobre a diferença entre Tipo Textual e Gênero Textual, é correto afirmar que:",
    "options": [
      "Os tipos textuais são infinitos e adaptáveis às situações sociais do cotidiano.",
      "Os gêneros textuais constituem um conjunto fixo e fechado de apenas cinco modelos gramaticais.",
      "Os tipos textuais dizem respeito à estrutura formal interna do texto, enquanto os gêneros referem-se aos usos sociais da língua.",
      "Não há diferença técnica entre eles, sendo termos perfeitamente sinônimos em concursos públicos."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Tipos textuais são modelos teóricos finitos (5 estruturas); gêneros textuais são infinitos e práticos (usos sociais)."
  },
  {
    "id": 24,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Gênero Textual: Artigo de Divulgação Científica",
    "question": "Um texto de Artigo de Divulgação Científica tem como finalidade primordial:",
    "options": [
      "Contar uma narrativa fictícia com elementos mágicos e fabulosos.",
      "Transmitir conhecimentos científicos ao público geral por meio de linguagem acessível e informativa.",
      "Vender produtos cosméticos por meio de apelos emocionais e imagens publicitárias.",
      "Estabelecer normas jurídicas imperativas para cumprimento obrigatório de pesquisadores."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. O artigo de divulgação científica adapta a linguagem acadêmica para informar o público leigo."
  },
  {
    "id": 25,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Gênero Textual: Artigo de Opinião",
    "question": "O gênero textual Artigo de Opinião caracteriza-se formalmente por:",
    "options": [
      "Apresentar a visão neutra do veículo de comunicação sem a identificação do autor.",
      "Conter exclusivamente tabelas numéricas e dados matemáticos sem texto explicativo.",
      "Limitar-se a narrar uma sequência cronológica de eventos policiais sem emitir juízo de valor.",
      "Ser um texto argumentativo assinado pelo próprio autor, que assume a responsabilidade pela tese defendida."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. O Artigo de Opinião é assinado pelo articulista e defende uma tese com argumentação subjetiva."
  },
  {
    "id": 26,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Gênero Textual: Carta Comercial",
    "question": "A correspondência escrita formal utilizada especificamente no meio corporativo e privado para transações mercantis, pedidos de cotação ou cobranças é a:",
    "options": [
      "Petição inicial.",
      "Portaria ministerial.",
      "Carta comercial.",
      "Notícia de jornal."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. A Carta Comercial é o gênero formal para comunicação de negócios entre empresas privadas."
  },
  {
    "id": 27,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Tipologia Textual: Dissertação Expositiva",
    "question": "O trecho 'A inflação é o aumento persistente e generalizado dos preços em uma economia. Ocorre quando a demanda por bens supera a capacidade produtiva' exemplifica a tipologia:",
    "options": [
      "Narrativa.",
      "Dissertativa-expositiva.",
      "Injuntiva.",
      "Prescritiva."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. A dissertação expositiva define e explica um conceito com neutralidade e impessoalidade."
  },
  {
    "id": 28,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Semiótica: Texto Multimodal / Misto",
    "question": "Um anúncio publicitário que mescla ilustrações, cores contrastantes, slogan curto e texto explicativo é considerado um texto:",
    "options": [
      "Exclusivamente não-verbal.",
      "Puramente descritivo sem intenção persuasiva.",
      "Científico rigoroso.",
      "Multimodal (ou misto), por conjugar recursos verbais e visuais."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Textos multimodais conjugam linguagem verbal e não-verbal (imagens, cores, diagramação)."
  },
  {
    "id": 29,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Gênero Textual: Crônica",
    "question": "O gênero Crônica destaca-se na imprensa e na literatura por:",
    "options": [
      "Registrar normas regimentais e decretos administrativos com rigor técnico.",
      "Exigir obrigatoriamente a assinatura de um colegiado de juristas para ser publicado.",
      "Abordar situações cotidianas e corriqueiras com estilo leve, reflexivo e por vezes poético.",
      "Apresentar fórmulas matemáticas aplicadas a cálculos orçamentários."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. A crônica parte de fatos cotidianos para desenvolver reflexões leves, críticas ou bem-humoradas."
  },
  {
    "id": 30,
    "category": "portugues",
    "discipline": "Língua Portuguesa",
    "topic": "Tipologia Textual: Prescrição / Sinalização",
    "question": "A placa indicativa que estampa 'Velocidade máxima permitida: 60 km/h' possui caráter essencialmente:",
    "options": [
      "Narrativo ficcional.",
      "Prescritivo / Injuntivo.",
      "Descritivo poético.",
      "Argumentativo subjetivo."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Placas com regras e ordens obrigatórias possuem caráter prescritivo/injuntivo."
  },
  {
    "id": 31,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Princípios Expressos (Art. 37, caput CF/88)",
    "question": "Conforme o Art. 37, caput, da Constituição Federal de 1988, a administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos seguintes princípios expressos:",
    "options": [
      "Legalidade, Supremacia do interesse público, Moralidade, Finalidade e Eficiência.",
      "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.",
      "Proporcionalidade, Impessoalidade, Razoabilidade, Publicidade e Celeridade.",
      "Legalidade, Isonomia, Moralidade, Transparência e Motivação."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 37, caput da CF/88 (Mnemônico LIMPE): Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (incluído pela EC 19/98)."
  },
  {
    "id": 32,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Princípio da Impessoalidade (Vedação de Promoção Pessoal)",
    "question": "De acordo com o Art. 37, § 1º, da CF/88, a publicidade dos atos, programas, obras, serviços e campanhas dos órgãos públicos deverá ter caráter educativo, informativo ou de orientação social, dela não podendo constar nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos. Tal comando decorre diretamente do princípio da:",
    "options": [
      "Continuidade do serviço público.",
      "Autotutela.",
      "Especialidade.",
      "Impessoalidade."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. A vedação de nomes, símbolos e imagens para autopromoção de prefeitos/vereadores é aplicação direta do princípio da IMPESSOALIDADE."
  },
  {
    "id": 33,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Princípio da Moralidade & Súmula Vinculante 13 (Nepotismo)",
    "question": "A nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, da autoridade nomeante para o exercício de cargo em comissão ou de confiança viola a Constituição Federal (Súmula Vinculante nº 13 do STF). Essa proibição fundamenta-se principalmente no princípio da:",
    "options": [
      "Moralidade administrativa.",
      "Eficiência econômica.",
      "Subsidiariedade.",
      "Segurança jurídica."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. A vedação ao nepotismo (Súmula Vinculante 13) tem como pilar maior a MORALIDADE e a Impessoalidade administrativa."
  },
  {
    "id": 34,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Princípio da Autotutela (Súmulas 346 e 473 do STF)",
    "question": "A prerrogativa conferida à Administração Pública de rever seus próprios atos, anulando os ilegais e revogando os inoportunos ou inconvenientes, sem a necessidade de intervenção judicial prévia, decorre do princípio da:",
    "options": [
      "Autotutela.",
      "Legalidade estrita.",
      "Continuidade.",
      "Razoabilidade."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Princípio da Autotutela (Súmulas 346 e 473 do STF): a Administração anula atos ilegais (efeito ex tunc) e revoga atos inoportunos (efeito ex nunc)."
  },
  {
    "id": 35,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Organização Administrativa: Desconcentração vs. Descentralização",
    "question": "A distribuição interna de competências e atribuições dentro de uma mesma pessoa jurídica, criando uma relação de subordinação hierárquica e dando origem a órgãos públicos despersonalizados, denomina-se:",
    "options": [
      "Descentralização por serviços.",
      "Delegação por colaboração.",
      "Terceirização administrativa.",
      "Desconcentração."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. DescoNcentração (com 'O' de Órgão): distribuição interna de atribuições na mesma pessoa. DesceNtralização (com 'E' de Entidade): criação de nova pessoa jurídica."
  },
  {
    "id": 36,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Administração Indireta: Criação de Autarquias",
    "question": "Sobre as entidades que integram a Administração Pública Indireta, assinale a entidade que é criada DIRETAMENTE por lei específica e possui personalidade jurídica de direito público:",
    "options": [
      "Autarquia.",
      "Empresa Pública.",
      "Sociedade de Economia Mista.",
      "Fundação Pública de direito privado."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 37, XIX da CF/88: Somente a AUTARQUIA é criada diretamente por lei específica. As demais entidades têm sua criação autorizada por lei."
  },
  {
    "id": 37,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Sociedade de Economia Mista (Forma Societária)",
    "question": "A respeito das Sociedades de Economia Mista, assinale a afirmativa correta segundo o regime jurídico-constitucional brasileiro:",
    "options": [
      "Seu capital social é integralmente pertencente ao Poder Público.",
      "Possuem personalidade jurídica de direito público e seus bens são inpenhoráveis.",
      "Podem adotar qualquer formato societário, como Sociedade Limitada (Ltda).",
      "Devem ser constituídas obrigatoriamente sob a forma de Sociedade Anônima (S/A)."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Sociedades de Economia Mista adotam OBRIGATORIAMENTE a forma de S/A (Art. 235 da Lei 6.404/76 e Art. 4º da Lei 13.303/16). Já a Empresa Pública pode adotar qualquer formato."
  },
  {
    "id": 38,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Empresa Pública vs. Sociedade de Economia Mista (Capital)",
    "question": "Uma Empresa Pública distingue-se de uma Sociedade de Economia Mista quanto à composição de seu capital porque a Empresa Pública:",
    "options": [
      "Admite a participação de capital privado minoritário na sua constituição.",
      "É criada obrigatoriamente sob a forma de cooperativa sem fins lucrativos.",
      "Possui seu capital social formado 100% (exclusivamente) por recursos públicos.",
      "Não se submete à fiscalização do Tribunal de Contas respectivo."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. O capital social da Empresa Pública é 100% público (da União, Estados ou Municípios). Na SEM, o capital é misto (maioria com direito a voto pública)."
  },
  {
    "id": 39,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Teoria do Órgão / Imputação Volitiva",
    "question": "A teoria adotada no Brasil segundo a qual a manifestação de vontade dos agentes públicos é diretamente atribuída (imputada) à pessoa jurídica a qual pertencem denomina-se:",
    "options": [
      "Teoria do Órgão (ou da Imputação Volitiva).",
      "Teoria do Mandato.",
      "Teoria da Representação.",
      "Teoria do Risco Integral."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. A Teoria do Órgão (criada por Otto Gierke) estabelece que a atuação do servidor/agente é imputada diretamente à pessoa jurídica (ente estatal)."
  },
  {
    "id": 40,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Órgãos Públicos (Personalidade e Capacidade)",
    "question": "Os órgãos públicos são centros de competência desprovidos de personalidade jurídica própria. Como regra geral em juízo, os órgãos públicos:",
    "options": [
      "Podem ser réus diretos em qualquer ação de cobrança sem representação do Município.",
      "Têm patrimônio próprio separado das contas gerais da Prefeitura ou Câmara.",
      "Podem emitir notas fiscais comerciais em nome próprio para prestar serviços a terceiros.",
      "Não possuem capacidade processual, cabendo ao ente federativo figurar no polo da ação."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Como regra geral, órgãos não possuem capacidade processual nem patrimônio próprio; quem responde em juízo é a pessoa jurídica (ex: Município de Meruoca)."
  },
  {
    "id": 41,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Princípio da Proporcionalidade e Razoabilidade",
    "question": "O princípio que impõe à Administração Pública e aos seus agentes a adequação entre os meios empregados e os fins a serem alcançados, vedando a imposição de restrições ou sanções em medida superior à estritamente necessária, é o princípio da:",
    "options": [
      "Continuidade do serviço.",
      "Publicidade.",
      "Hierarquia funcional.",
      "Proporcionalidade e Razoabilidade."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. A Razoabilidade e a Proporcionalidade proíbem o excesso de poder e exigem a justa medida entre meios e fins na atuação administrativa."
  },
  {
    "id": 42,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Autarquias (Imunidade Tributária Recíproca)",
    "question": "As Autarquias gozam de prerrogativas próprias de entidades de direito público. Entre elas destaca-se expressamente na CF/88:",
    "options": [
      "Isenção absoluta de prestar concurso público para admissão de seus servidores.",
      "Imunidade tributária recíproca sobre seu patrimônio, renda e serviços vinculados às suas finalidades essenciais.",
      "Livre contratação de serviços e compras sem necessidade de licitação.",
      "Possibilidade de decretação de falência por credores privados."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 150, § 2º da CF/88: A imunidade tributária recíproca é expressamente extensiva às autarquias e fundações mantidas pelo Poder Público."
  },
  {
    "id": 43,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Princípio da Continuidade do Serviço Público",
    "question": "O princípio da Continuidade do Serviço Público fundamenta diversas regras na administração, EXCETO:",
    "options": [
      "A exigência de regras rígidas para manutenção de serviços essenciais em caso de greve.",
      "A autorização para que o servidor público abandone suas funções a qualquer momento sem responder por processo disciplinar.",
      "A prerrogativa da administração de utilizar equipamentos do contratado para evitar paralisação de serviço essencial.",
      "A restrição temporária à rescisão unilateral imediata por parte de concessionárias privadas."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. O abandono de cargo é falta funcional gravíssima que gera demissão, decorrendo justamente do dever de continuidade dos serviços públicos."
  },
  {
    "id": 44,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Fundações Públicas (Art. 37, XIX CF/88)",
    "question": "Segundo o Art. 37, XIX, da CF/88, as Fundações Públicas:",
    "options": [
      "São criadas diretamente por decreto do Chefe do Poder Executivo.",
      "Não necessitam de autorização em lei, bastando registro em cartório civil.",
      "Têm sua criação autorizada por lei específica, cabendo a lei complementar definir as áreas de sua atuação.",
      "Devem atuar exclusivamente na exploração comercial com fins lucrativos."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 37, XIX da CF/88: Somente por lei específica é autorizada a instituição de fundação pública, cabendo a lei complementar definir as áreas de sua atuação."
  },
  {
    "id": 45,
    "category": "administrativo",
    "day": "dia3",
    "discipline": "D. Administrativo",
    "topic": "Princípio da Segurança Jurídica & Confiança Legítima",
    "question": "O princípio da Segurança Jurídica, em sua vertente de Proteção à Confiança Legítima, visa precipuamente a:",
    "options": [
      "Garantir que qualquer servidor possa alterar regras de editais após a homologação do concurso.",
      "Permitir a anulação de atos favoráveis ao administrado a qualquer tempo, mesmo após decorridos 40 anos.",
      "Proteger a boa-fé do administrado contra alterações retroativas e abruptas de interpretação normativa pela administração.",
      "Impedir que o Poder Legislativo crie ou altere leis municipais."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. A proteção à confiança legítima (vertente subjetiva da segurança jurídica) impede que novas interpretações retroajam para prejudicar situações consolidadas de boa-fé."
  },
  {
    "id": 46,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Windows 11: Caracteres Proibidos em Nomes de Arquivos",
    "question": "No sistema operacional Microsoft Windows 11, ao tentar renomear um arquivo ou pasta, o usuário é impedido de utilizar determinados caracteres reservados pelo sistema. Assinale a alternativa que contém apenas caracteres PROIBIDOS em nomes de arquivos no Windows:",
    "options": [
      "@ # $ % _ - +",
      "\\ / : * ? \" < > |",
      "( ) [ ] { } .",
      "! & = ~ ^ ;"
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Os 9 caracteres proibidos no Windows são: barras (\\ /), dois pontos (:), asterisco (*), interrogação (?), aspas (\"), menor (<), maior (>) e pipe (|)."
  },
  {
    "id": 47,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Windows 11: Atalho de Bloqueio de Tela",
    "question": "No Windows 11, o atalho de teclado padrão utilizado para BLOQUEAR rapidamente o computador ao se ausentar da mesa de trabalho é:",
    "options": [
      "Ctrl + Alt + B",
      "Alt + F4",
      "Logotipo do Windows + L",
      "Ctrl + Shift + Esc"
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Win + L (Lock) bloqueia a sessão imediatamente sem fechar os programas abertos, exigindo senha para desbloqueio."
  },
  {
    "id": 48,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Windows 11: Exclusão Permanente (Shift + Delete)",
    "question": "No Windows 11, ao selecionar um arquivo e pressionar a combinação de teclas Shift + Delete, o sistema:",
    "options": [
      "Move o arquivo para a Lixeira do sistema para posterior restauração.",
      "Cria um atalho na área de trabalho e oculta o arquivo original.",
      "Exclui permanentemente o arquivo sem enviá-lo para a Lixeira.",
      "Envia o arquivo automaticamente por e-mail para a nuvem."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Shift + Delete executa exclusão permanente direta sem passar pela Lixeira do Windows."
  },
  {
    "id": 49,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Windows 11: Atalho do Explorador de Arquivos",
    "question": "O atalho de teclado padrão para abrir instantaneamente o Explorador de Arquivos (File Explorer) no Windows 11 é:",
    "options": [
      "Logotipo do Windows + R",
      "Logotipo do Windows + E",
      "Ctrl + E",
      "Alt + Tab"
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Win + E (Explorer) abre o Explorador de Arquivos. Win + R abre o diálogo Executar."
  },
  {
    "id": 50,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Linux Ubuntu: Diretório de Configurações (/etc)",
    "question": "Na estrutura de diretórios do sistema operacional Linux (como o Ubuntu), o diretório responsável por armazenar os arquivos de configuração globais do sistema e dos serviços instalados é o:",
    "options": [
      "/bin",
      "/home",
      "/dev",
      "/etc"
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. O diretório /etc armazena arquivos de configuração essenciais de programas e do sistema no Linux."
  },
  {
    "id": 51,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Linux Ubuntu: Diretório dos Usuários (/home)",
    "question": "No Linux Ubuntu, o diretório onde são armazenados os arquivos pessoais, pastas e documentos de cada usuário comum do sistema é o:",
    "options": [
      "/root",
      "/var",
      "/usr",
      "/home"
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. O diretório /home contém as pastas de cada usuário comum (ex: /home/ruan). O diretório /root é a pasta pessoal do superusuário."
  },
  {
    "id": 52,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Linux: Comando para Listar Arquivos (ls)",
    "question": "No terminal de comandos do Linux, o comando utilizado para LISTAR os arquivos e subdiretórios contidos no diretório atual é:",
    "options": [
      "ls",
      "cd",
      "pwd",
      "mkdir"
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. O comando 'ls' (list) lista arquivos e pastas. 'cd' navega, 'pwd' mostra o caminho atual e 'mkdir' cria diretório."
  },
  {
    "id": 53,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Linux: Comando para Criar Diretório (mkdir)",
    "question": "No Linux, para CRIAR um novo diretório chamado 'documentos_camara' via linha de comando no terminal, deve-se utilizar:",
    "options": [
      "rmdir documentos_camara",
      "touch documentos_camara",
      "mkdir documentos_camara",
      "cat documentos_camara"
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. 'mkdir' (make directory) cria novas pastas. 'touch' cria arquivos vazios."
  },
  {
    "id": 54,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Hardware: Memória RAM (Volatilidade)",
    "question": "A respeito da memória RAM (Random Access Memory) de um computador, assinale a afirmativa correta:",
    "options": [
      "É uma memória secundária de armazenamento permanente de fotos e vídeos.",
      "É uma memória volátil, cujo conteúdo é totalmente apagado quando o computador é desligado.",
      "Armazena a BIOS e não pode ser gravada nem alterada pelo usuário.",
      "Possui velocidade de leitura e gravação muito inferior à de um disco rígido tradicional (HD)."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. A memória RAM é memória primária e VOLÁTIL: necessita de energia elétrica contínua para reter suas informações."
  },
  {
    "id": 55,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Hardware: Memória ROM / BIOS (Não-volatilidade)",
    "question": "A memória do tipo ROM (Read Only Memory), presente na placa-mãe de computadores, caracteriza-se por:",
    "options": [
      "Ser não-volátil, retendo instruções essenciais de inicialização (firmware/BIOS) mesmo com o computador desligado.",
      "Permitir que o usuário instale programas e salve arquivos pessoais diretamente nela no dia a dia.",
      "Perder todos os dados gravados a cada reinicialização do sistema operacional.",
      "Ter capacidade de armazenamento na ordem de dezenas de Terabytes (TB)."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. A ROM é NÃO-VOLÁTIL (mantém dados sem energia) e é de somente leitura na operação normal, gravada de fábrica com a BIOS/firmware."
  },
  {
    "id": 56,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Hardware: Comparativo SSD vs. Disco Rígido (HD)",
    "question": "Em comparação aos discos rígidos magnéticos convencionais (HDs), as unidades de estado sólido (SSDs):",
    "options": [
      "Utilizam discos metálicos giratórios que produzem mais ruído e aquecimento.",
      "Utilizam chips de memória flash sem peças móveis mecânicas, oferecendo taxas de transferência muito mais rápidas e maior resistência a impactos.",
      "São muito mais lentas na inicialização do sistema operacional Windows.",
      "Só podem ser conectadas a computadores via rede sem fio (Wi-Fi)."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. SSDs gravam dados em circuitos integrados de memória flash (sem peças mecânicas), sendo muito mais rápidos, silenciosos e resistentes."
  },
  {
    "id": 57,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Hardware: Componentes da CPU (ULA, UC e Registradores)",
    "question": "A Unidade Central de Processamento (CPU) é o cérebro do computador. Ela é composta internamente por três blocos principais fundamentais:",
    "options": [
      "Fonte de alimentação, cooler e placa de som.",
      "Unidade Lógica e Aritmética (ULA), Unidade de Controle (UC) e Registradores.",
      "Teclado, mouse e monitor de vídeo.",
      "Memória Cache, porta USB e leitor óptico de DVD."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. A arquitetura clássica da CPU divide-se em: ULA (cálculos matemáticos e lógicos), UC (orquestração das instruções) e Registradores (memória interna)."
  },
  {
    "id": 58,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Backup: Backup Incremental",
    "question": "O tipo de cópia de segurança (backup) que grava APENAS os arquivos que foram criados ou modificados desde o último backup (seja ele um backup completo ou outro incremental) é o:",
    "options": [
      "Backup Completo (Full).",
      "Backup Espelho (Mirror).",
      "Backup Incremental.",
      "Backup Residual."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. O Backup Incremental salva apenas as alterações ocorridas desde o último backup realizado, sendo o mais rápido de executar."
  },
  {
    "id": 59,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Backup: Backup Diferencial",
    "question": "A diferença básica entre o Backup DIFERENCIAL e o Backup INCREMENTAL é que o Backup Diferencial:",
    "options": [
      "Copia sempre todos os arquivos criados ou modificados desde o último backup COMPLETO (Full).",
      "Apaga todos os arquivos originais do computador após a conclusão da cópia.",
      "Só pode ser executado em disquetes ou fitas magnéticas antigas.",
      "Não armazena nenhum arquivo com tamanho superior a 1 Megabyte (MB)."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. O Backup Diferencial copia todas as alterações feitas a partir do último backup FULL (acumulando os dados modificados até novo Full)."
  },
  {
    "id": 60,
    "category": "informatica",
    "day": "dia3",
    "discipline": "Informática",
    "topic": "Segurança de Dados: Regra 3-2-1 de Backup",
    "question": "A consagrada regra de segurança de dados '3-2-1 para Backup' recomenda manter:",
    "options": [
      "3 cópias dos dados, em 2 tipos de mídia diferentes, com pelo menos 1 cópia armazenada fora do local de trabalho (offsite/nuvem).",
      "3 computadores ligados ao mesmo tempo, durante 2 horas por dia, com 1 funcionário supervisionando.",
      "3 senhas iguais em 2 sistemas diferentes para 1 único usuário.",
      "3 antivírus instalados simultaneamente na mesma máquina durante 2 dias."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Regra 3-2-1: 3 cópias no total (1 primária + 2 backups), em pelo menos 2 tipos de mídia diferentes, e 1 cópia mantida fora da empresa/offsite (nuvem)."
  },
  {
    "id": 61,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Acentuação Gráfica: Regra das Proparoxítonas",
    "question": "No padrão da banca INBRASP, a regra de acentuação gráfica que justifica o acento na palavra 'LEGISLATIVO' não existe pois a palavra é paroxítona sem acento. Entretanto, assinale a alternativa em que TODAS as palavras são acentuadas rigorosamente pela regra das proparoxítonas:",
    "options": [
      "Técnico, caráter, público e relatório.",
      "Orgânico, histórico, mérito e autarquia.",
      "Político, cômputo, câmara e déficit.",
      "Público, relógio, secretária e país."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Todas as palavras de (A) são proparoxítonas (po-LÍ-ti-co, CÔM-pu-to, CÂ-ma-ra, DÉ-fi-cit), que são 100% acentuadas. Em (B), 'caráter' e 'relatório' são paroxítonas; em (C), 'autarquia' é paroxítona terminada em ditongo; em (D), 'país' é hiato e 'relógio' é paroxítona terminada em ditongo."
  },
  {
    "id": 62,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Acentuação Gráfica: Regra dos Hiatos",
    "question": "Assinale a alternativa em que a palavra destacada recebe acento gráfico pela MESMA regra que justifica o acento na palavra 'SAÚDE':",
    "options": [
      "A saída de emergência da Câmara Municipal foi desobstruída pela fiscalização.",
      "O servidor municipal goza de total autonomia no exercício da função pública.",
      "O vereador realizou um discurso com alto teor patriótico perante a mesa.",
      "A assembleia legislativa deliberou favoravelmente à concessão do benefício."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. 'Sa-ú-de' e 'sa-í-da' são acentuadas pela REGRA DO HIATO: a vogal 'i' ou 'u' tônica, segunda vogal do hiato, sozinha na sílaba (ou com 's'), sem ser seguida de 'nh' e sem estar precedida de ditongo em paroxítona. 'Autonomia' e 'assembleia' não recebem acento; 'patriótico' é proparoxítona."
  },
  {
    "id": 63,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Ortografia: Novo Acordo Ortográfico (Ditongos Abertos)",
    "question": "De acordo com o Acordo Ortográfico vigente da Língua Portuguesa, os ditongos abertos 'EI' e 'OI' perderam o acento gráfico quando se encontram na posição de:",
    "options": [
      "Monossílabos tônicos (ex: dói, réis, méis).",
      "Oxítonas (ex: herói, troféu, constrói).",
      "Paroxítonas (ex: ideia, jiboia, assembleia, heroico).",
      "Proparoxítonas (ex: helicóptero, cômputo)."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. O Acordo Ortográfico eliminou o acento dos ditongos abertos 'EI' e 'OI' exclusivamente nas palavras PAROXÍTONAS (i-dei-a, ji-boi-a, as-sem-blei-a, pla-tei-a). Nas oxítonas e monossílabos tônicos, o acento PERMANECE: he-rói, cons-trói, céu, réis."
  },
  {
    "id": 64,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Fonologia: Contagem de Fonemas e Letras",
    "question": "A palavra 'MUNICÍPIO' e a palavra 'TRABALHO' apresentam, respectivamente, o seguinte número de letras e fonemas:",
    "options": [
      "9 letras e 8 fonemas; 8 letras e 8 fonemas.",
      "9 letras e 10 fonemas; 8 letras e 6 fonemas.",
      "9 letras e 9 fonemas; 8 letras e 7 fonemas.",
      "8 letras e 8 fonemas; 7 letras e 6 fonemas."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Em 'MU-NI-CÍ-PIO': 9 letras e 9 fonemas (não há dígrafos). Em 'TRA-BA-LHO': 8 letras e 7 fonemas, pois o dígrafo 'lh' representa um único fonema consonantal [λ]."
  },
  {
    "id": 65,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Fonologia: Encontros Vocálicos (Hiato vs Ditongo)",
    "question": "Considere as palavras: I. História; II. Juízes; III. Rainha; IV. Coordenar. Classificam-se, respectivamente, quanto aos encontros vocálicos, como:",
    "options": [
      "Ditongo decrescente, Ditongo crescente, Tritongo e Hiato.",
      "Ditongo crescente, Hiato, Hiato e Hiato.",
      "Hiato, Ditongo crescente, Ditongo decrescente e Tritongo.",
      "Ditongo crescente, Hiato, Ditongo decrescente e Hiato."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. I. His-tó-ria: semivogal + vogal (ditongo crescente oral); II. Ju-í-zes: duas vogais em sílabas separadas (hiato acentuado); III. Ra-i-nha: duas vogais em sílabas separadas (hiato, não acentuado antes de 'nh'); IV. Co-or-de-nar: repetição de vogais em sílabas separadas (hiato)."
  },
  {
    "id": 66,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Emprego do Sinal Indicativo de Crase: Casos Proibidos",
    "question": "O emprego do sinal indicativo de crase é rigorosamente PROIBIDO na seguinte frase:",
    "options": [
      "O presidente da Câmara dirigiu-se a todos os vereadores com respeito.",
      "O projeto de lei foi remetido à Comissão de Constituição e Justiça.",
      "A sessão solene teve início às nove horas da manhã em ponto.",
      "O servidor compareceu à reunião extraordinária do plenário."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Em 'a todos os vereadores', o 'a' antecede pronome indefinido ('todos') e palavra masculina no plural ('vereadores'). Não há artigo definido feminino 'a', logo a crase é terminantemente proibida."
  },
  {
    "id": 67,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Emprego da Crase: Casos Facultativos",
    "question": "A ocorrência do acento grave indicativo de crase é FACULTATIVA (opcional) em:",
    "options": [
      "O técnico legislativo entregou a ata à sua chefia imediata.",
      "A comissão parlamentar passou a investigar os fatos noticiados.",
      "O cidadão compareceu a pé até a portaria do prédio público.",
      "Ele redigiu a ata a lápis para posterior digitação oficial."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. A crase é facultativa em três casos clássicos (Mnemônico 'NOME DE MULHER, ATÉ, MINHA'): 1. Antes de pronome possessivo feminino no singular ('à sua' ou 'a sua'); 2. Antes de nomes próprios femininos sem especificador ('à Maria' ou 'a Maria'); 3. Após a preposição 'até' ('até à' ou 'até a')."
  },
  {
    "id": 68,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Emprego da Crase: Antes de Verbos",
    "question": "Analise a frase: 'O relator começou ___ expor as razões do veto e colocou o parecer ___ disposição da bancada'. Assinale a alternativa que preenche correta e respectivamente as lacunas:",
    "options": [
      "à — à",
      "a — à",
      "a — a",
      "à — a"
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Antes de verbo ('expor'), não ocorre artigo feminino, logo usa-se apenas a preposição simples 'a' (sem crase). Na expressão 'à disposição', trata-se de locução adverbial/prepositiva com núcleo feminino, exigindo crase obrigatória."
  },
  {
    "id": 69,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Ortografia Oficial: Emprego de Mal vs Mau",
    "question": "Assinale a alternativa em que o termo sublinhado foi empregado em estrita conformidade com o padrão culto da língua:",
    "options": [
      "O servidor desempenhou mau as atribuições do seu cargo comissionado.",
      "Ele é um homem mal, incapaz de agir com empatia no atendimento ao público.",
      "O projeto de lei foi mau redigido pela assessoria parlamentar.",
      "Mal o presidente declarou aberta a sessão, o plenário ficou em silêncio."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. 'Mal' é conjunção temporal com sentido de 'assim que / logo que' ('Mal o presidente declarou aberta...'). Em (A), deveria ser 'desempenhou mal' (oposto de bem); em (B), 'homem mau' (oposto de bom); em (D), 'mal redigido' (oposto de bem redigido)."
  },
  {
    "id": 70,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Divisão Silábica e Separação de Dígrafos",
    "question": "Assinale a alternativa em que a partição silábica de todas as palavras está inteiramente CORRETA:",
    "options": [
      "Su-bli-nhar, ex-ce-ção, car-ro e p-neu-má-ti-co.",
      "Sub-li-nhar, e-xce-ção, ca-rro e pneu-má-ti-co.",
      "Sub-lin-har, ex-ce-ção, car-ro e pneu-má-ti-co.",
      "Sub-lin-har, ex-ce-ç-ão, ca-rro e pne-u-má-ti-co."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Os dígrafos 'rr', 'ss', 'sc', 'sç', 'xc' se SEPARAM na partição silábica (ex-ce-ção, car-ro). O prefixo 'sub' seguido de consoante mantém o 'b' na sílaba anterior: sub-lin-har. Encontros consonantais no início de palavra não se separam: pneu-má-ti-co."
  },
  {
    "id": 71,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Emprego do Porquê / Por quê / Porque / Por que",
    "question": "Identifique a frase em que o uso do porquê está rigorosamente CORRETO:",
    "options": [
      "O projeto foi rejeitado por que a comissão apontou inconstitucionalidade.",
      "Os vereadores protestaram porque? Não houve justificativa clara.",
      "Por quê você não compareceu à audiência pública de Meruoca ontem?",
      "Não entendi o porquê de tanta discussão em torno de uma emenda simples."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. 'O porquê' é substantivo (vem acompanhado de artigo ou determinante) e deve ser grafado junto e com acento circunflexo. Em (A), deveria ser 'porque' (conjunção explicativa/causal); em (C), 'por quê' (fim de frase interrogativa); em (D), 'Por que' (início de pergunta direta, separado e sem acento)."
  },
  {
    "id": 72,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Acentuação Gráfica: Oxítonas Terminadas em A, E, O, EM",
    "question": "A palavra 'TAMBÉM' e a palavra 'PARABÉNS' recebem acento gráfico pela regra de acentuação das palavras:",
    "options": [
      "Paroxítonas terminadas em consoante nasal.",
      "Monossílabos tônicos terminados em ditongo nasal.",
      "Oxítonas terminadas em -em e -ens.",
      "Proparoxítonas aparentes ou eventuais."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Acentuam-se as palavras oxítonas terminadas em -a(s), -e(s), -o(s), -em e -ens (ex: tam-bém, pa-ra-béns, ar-ma-zém, vinténs)."
  },
  {
    "id": 73,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Crase diante de Pronomes Demonstrativos",
    "question": "Assinale a frase em que a crase foi empregada CORRETAMENTE antes de pronome demonstrativo:",
    "options": [
      "Ele entregou o requerimento à esta servidora do protocolo.",
      "O parecer foi contrário à essa proposta orçamentária do prefeito.",
      "A moção de repúdio foi dirigida à quem faltou à sessão solene.",
      "Refiro-me àquele vereador que presidiu a comissão de finanças."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Ocorre crase na junção da preposição 'a' (exigida pela regência de 'referir-se a') com a letra 'a' inicial dos pronomes aquele, aquela, aquilo: 'Refiro-me àquele'. Antes de 'esta', 'essa' ou 'quem', a crase é proibida."
  },
  {
    "id": 74,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Acentuação Diferencial e Novo Acordo",
    "question": "O Novo Acordo Ortográfico manteve o acento gráfico diferencial em um número muito reduzido de pares de palavras. Assinale a alternativa que contém uma palavra com acento diferencial OBRIGATÓRIO mantido:",
    "options": [
      "Pára (verbo parar, em oposição à preposição para).",
      "Pêlo (substantivo, em oposição à contração pelo).",
      "Pôde (pretérito perfeito do verbo poder, em oposição a pode, presente).",
      "Pólo (substantivo, em oposição à combinação polo)."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. O Acordo Ortográfico aboliu o acento diferencial de pára/para, pêlo/pelo, pólo/polo. Foi MANTIDO obrigatoriamente em: PÔDE (passado) vs. PODE (presente) e PÔR (verbo) vs. POR (preposição). É facultativo em fôrma/forma."
  },
  {
    "id": 75,
    "category": "portugues",
    "day": "dia4",
    "discipline": "Língua Portuguesa",
    "topic": "Emprego do Hífen com Prefixos",
    "question": "Com o Novo Acordo Ortográfico, usa-se o hífen quando o prefixo termina com a mesma vogal com que se inicia o segundo elemento. Assinale a grafia CORRETA:",
    "options": [
      "Micro-ondas e anti-inflamatório.",
      "Microondas e antiinflamatório.",
      "Micro-ondas e antiinflamatório.",
      "Microondas e anti-inflamatório."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Regra geral do hífen com prefixos: vogais iguais se separam por hífen (mi-cro-on-das, an-ti-in-fla-ma-tó-rio, au-to-ob-ser-va-ção); vogais diferentes se unem sem hífen (au-toes-ti-ma, an-ti-a-é-re-o)."
  },
  {
    "id": 76,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 6º da CF/88: Rol dos Direitos Sociais",
    "question": "O Art. 6º da Constituição Federal de 1988 estabelece os direitos sociais fundamentais. Assinale a alternativa que contém APENAS direitos sociais expressamente elencados no caput desse dispositivo:",
    "options": [
      "Propriedade, liberdade de crença, previdência social e segurança.",
      "Inviolabilidade de domicílio, direito de herança, lazer e trabalho.",
      "Nacionalidade, direitos políticos, saúde e assistência aos desamparados.",
      "Educação, saúde, alimentação, trabalho, moradia e transporte."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Mnemônico 'EDU MORA LÁ, SAÚ TRABALHA ALI EM TRANSPORTE, SEGURA ASSIS PROSSEGUE PRENDENDO': Educação, Saúde, Alimentação, Trabalho, Moradia, Transporte, Lazer, Segurança, Previdência Social, Proteção à Maternidade e à Infância, e Assistência aos Desamparados (Art. 6º da CF/88)."
  },
  {
    "id": 77,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 7º, XIII da CF/88: Duração do Trabalho",
    "question": "Conforme o Art. 7º, XIII, da CF/88, a duração do trabalho normal dos trabalhadores urbanos e rurais não poderá ser superior a:",
    "options": [
      "8 horas diárias e 44 horas semanais, facultada a compensação de horários e a redução da jornada, mediante acordo ou convenção coletiva de trabalho.",
      "8 horas diárias e 40 horas semanais, vedada qualquer forma de compensação de horário.",
      "6 horas diárias e 36 horas semanais para todas as categorias profissionais urbanas.",
      "10 horas diárias e 48 horas semanais, desde que haja autorização do sindicato da categoria."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 7º, XIII da CF/88: 'duração do trabalho normal não superior a oito horas diárias e quarenta e quatro semanais, facultada a compensação de horários e a redução da jornada, mediante acordo ou convenção coletiva de trabalho'."
  },
  {
    "id": 78,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 7º, XIV da CF/88: Turnos Ininterruptos de Revezamento",
    "question": "A jornada de trabalho fixada pela Constituição Federal para o trabalho realizado em turnos ininterruptos de revezamento é de:",
    "options": [
      "8 horas improrrogáveis em qualquer hipótese.",
      "4 horas diárias com intervalo de 30 minutos.",
      "6 horas, salvo negociação coletiva.",
      "12 horas seguidas de 36 horas de descanso."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 7º, XIV da CF/88: 'jornada de seis horas para o trabalho realizado em turnos ininterruptos de revezamento, salvo negociação coletiva'."
  },
  {
    "id": 79,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 7º, XVI da CF/88: Remuneração da Hora Extra",
    "question": "Nos termos da Constituição Federal de 1988, a remuneração do serviço extraordinário (horas extras) será superior, no mínimo, à do normal em:",
    "options": [
      "20% (vinte por cento).",
      "100% (cem por cento).",
      "30% (trinta por cento).",
      "50% (cinquenta por cento)."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 7º, XVI da CF/88: 'remuneração do serviço extraordinário superior, no mínimo, em cinquenta por cento à do normal'."
  },
  {
    "id": 80,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 7º, XVIII e XIX da CF/88: Licenças Gestante e Paternidade",
    "question": "Quanto à proteção à maternidade e à paternidade, a CF/88 assegura licença à gestante, sem prejuízo do emprego e do salário, com a duração de:",
    "options": [
      "120 dias, e licença-paternidade nos termos fixados em lei.",
      "90 dias, e licença-paternidade de 30 dias improrrogáveis.",
      "180 dias obrigatórios em todas as empresas privadas do país.",
      "60 dias, renováveis por igual período mediante atestado médico."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 7º, XVIII da CF/88: 'licença à gestante, sem prejuízo do emprego e do salário, com a duração de cento e vinte dias'. A prorrogação para 180 dias (Programa Empresa Cidadã / Estatutos de Servidores) decorre de lei, mas o texto constitucional expresso fixa 120 dias."
  },
  {
    "id": 81,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 7º, XXXIII da CF/88: Trabalho do Menor",
    "question": "Sobre a proibição de trabalho a menores de idade, a Constituição Federal estabelece expressamente a proibição de:",
    "options": [
      "Qualquer trabalho a menores de dezoito anos, mesmo na condição de aprendiz em empresas familiares.",
      "Trabalho noturno, perigoso ou insalubre a menores de dezoito e de qualquer trabalho a menores de dezesseis anos, salvo na condição de aprendiz, a partir de quatorze anos.",
      "Trabalho noturno a menores de dezesseis anos e de qualquer trabalho a menores de catorze anos, sem exceções.",
      "Trabalho insalubre a menores de vinte e um anos e aprendizagem a partir de doze anos."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 7º, XXXIII da CF/88 (redação da EC 20/98): 'proibição de trabalho noturno, perigoso ou insalubre a menores de dezoito e de qualquer trabalho a menores de dezesseis anos, salvo na condição de aprendiz, a partir de quatorze anos'. Regra de ouro da INBRASP: 18 (noturno/perigoso/insalubre), 16 (regra geral de vedação) e 14 (aprendiz)."
  },
  {
    "id": 82,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 7º, XXI da CF/88: Aviso Prévio",
    "question": "A Constituição Federal de 1988 assegura o aviso prévio proporcional ao tempo de serviço, sendo de no mínimo:",
    "options": [
      "15 (quinze) dias para contratos de até um ano.",
      "30 (trinta) dias, nos termos da lei.",
      "60 (sessenta) dias para todos os trabalhadores urbanos.",
      "45 (quarenta e cinco) dias incondicionalmente."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 7º, XXI da CF/88: 'aviso prévio proporcional ao tempo de serviço, sendo no mínimo de trinta dias, nos termos da lei'."
  },
  {
    "id": 83,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 7º, XVII da CF/88: Férias Remuneradas",
    "question": "O gozo de férias anuais remuneradas assegurado pela Constituição Federal de 1988 prevê o pagamento de remuneração com acréscimo de:",
    "options": [
      "Pelo menos, um terço a mais do que o salário normal.",
      "Cinquenta por cento a mais do que a remuneração ordinária.",
      "Metade do salário base calculado sobre o último mês de trabalho.",
      "Vinte por cento a título de gratificação de descanso anual."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 7º, XVII da CF/88: 'gozo de férias anuais remuneradas com, pelo menos, um terço a mais do que o salário normal'."
  },
  {
    "id": 84,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 7º, IX da CF/88: Remuneração do Trabalho Noturno",
    "question": "Nos termos do Art. 7º, IX, da CF/88, em relação ao trabalho noturno, é direito constitucional do trabalhador:",
    "options": [
      "Jornada máxima reduzida para 4 horas sem adicional monetário.",
      "Remuneração do trabalho noturno superior à do diurno.",
      "Folga semanal dobrada para quem cumpre jornada noturna.",
      "Aposentadoria especial automática aos cinco anos de trabalho noturno."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 7º, IX da CF/88: 'remuneração do trabalho noturno superior à do diurno'."
  },
  {
    "id": 85,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 7º, VI da CF/88: Irredutibilidade Salarial",
    "question": "A regra constitucional acerca do salário dos trabalhadores estabelece a sua irredutibilidade, SALVO:",
    "options": [
      "Decisão unilateral discricionária do empregador em época de crise.",
      "Atraso no pagamento de tributos pelo estabelecimento comercial.",
      "O disposto em convenção ou acordo coletivo de trabalho.",
      "Determinação verbal do delegado regional do trabalho."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 7º, VI da CF/88: 'irredutibilidade do salário, salvo o disposto em convenção ou acordo coletivo'."
  },
  {
    "id": 86,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 8º, I da CF/88: Autonomia e Liberdade Sindical",
    "question": "Conforme o Art. 8º, I, da CF/88, é livre a associação profissional ou sindical, sendo expressamente VEDADA:",
    "options": [
      "Ao Poder Público a interferência e a intervenção na organização sindical, ressalvado o registro no órgão competente.",
      "A criação de sindicatos representativos de categorias diferenciadas.",
      "A filiação de servidores públicos a entidades de classe municipais.",
      "A cobrança de mensalidade associativa voluntária pelo sindicato."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 8º, I da CF/88: 'a lei não poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente, vedadas ao Poder Público a interferência e a intervenção na organização sindical'."
  },
  {
    "id": 87,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 8º, II da CF/88: Princípio da Unicidade Sindical",
    "question": "O princípio da unicidade sindical estabelecido no Art. 8º, II, da CF/88 veda a criação de mais de uma organização sindical, em qualquer grau, representativa da mesma categoria:",
    "options": [
      "No mesmo Estado da federação, devendo haver sindicato único estadual.",
      "Em todo o território nacional para uma mesma profissão regulamentada.",
      "Na mesma base territorial, que será definida pelos trabalhadores interessados, não podendo ser inferior à área de um Município.",
      "Na mesma microrregião geográfica estabelecida pelo IBGE."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 8º, II da CF/88: 'é vedada a criação de mais de uma organização sindical, em qualquer grau, representativa de categoria profissional ou econômica, na mesma base territorial, que será definida pelos trabalhadores ou empregadores interessados, não podendo ser inferior à área de um Município'."
  },
  {
    "id": 88,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 8º, VIII da CF/88: Estabilidade do Dirigente Sindical",
    "question": "A estabilidade provisória do empregado sindicalizado que se candidata a cargo de direção ou representação sindical compreende o período:",
    "options": [
      "Apenas durante os meses de exercício efetivo do mandato sindical na sede.",
      "A partir da posse até o dia do término estrito do mandato parlamentar.",
      "Desde o registro da candidatura e, se eleito, ainda que suplente, até um ano após o final do mandato, salvo se cometer falta grave nos termos da lei.",
      "Desde a fundação do sindicato até a sua dissolução voluntária."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 8º, VIII da CF/88: 'é vedada a dispensa do empregado sindicalizado a partir do registro da candidatura a cargo de direção ou representação sindical e, se eleito, ainda que suplente, até um ano após o final do mandato, salvo se cometer falta grave nos termos da lei'."
  },
  {
    "id": 89,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 9º da CF/88: Direito de Greve",
    "question": "O direito de greve é expressamente garantido pelo Art. 9º da Constituição Federal de 1988, competindo aos:",
    "options": [
      "Empregadores autorizar previamente a paralisação das atividades operacionais.",
      "Magistrados do trabalho convocar a greve mediante portaria ministerial.",
      "Prefeitos municipais decretar a legalidade do movimento paradista.",
      "Trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 9º, caput da CF/88: 'É assegurado o direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender'."
  },
  {
    "id": 90,
    "category": "constitucional",
    "day": "dia4",
    "discipline": "D. Constitucional",
    "topic": "Art. 11 da CF/88: Representação de Empregados",
    "question": "Nas empresas com mais de quantos empregados é assegurada a eleição de um representante destes com a finalidade exclusiva de promover o entendimento direto com os empregadores (Art. 11 da CF)?",
    "options": [
      "Mais de 200 (duzentos) empregados.",
      "Mais de 100 (cem) empregados.",
      "Mais de 500 (quinhentos) empregados.",
      "Mais de 50 (cinquenta) empregados."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 11 da CF/88: 'Nas empresas de mais de duzentos empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores'."
  },
  {
    "id": 91,
    "category": "legislacao",
    "day": "dia4",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Arts. 1º e 2º: Princípios e Autonomia Municipal",
    "question": "De acordo com os princípios fundamentais da Lei Orgânica do Município de Meruoca/CE, o Município integra a República Federativa do Brasil e o Estado do Ceará, sendo dotado de autonomia:",
    "options": [
      "Política, administrativa e financeira.",
      "Soberana, judiciária e militar.",
      "Legislativa apenas, dependendo administrativamente do Estado.",
      "Econômica, porém subordinada hierarquicamente ao Governo Estadual."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. A Lei Orgânica de Meruoca consagra a tríplice autonomia municipal conferida pelo Art. 18 e 29 da CF/88: Autonomia Política (eleição de prefeitos e vereadores), Administrativa (organização dos serviços locais) e Financeira (instituição e arrecadação de tributos próprios)."
  },
  {
    "id": 92,
    "category": "legislacao",
    "day": "dia4",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Soberania Popular no Município de Meruoca",
    "question": "Nos termos da Lei Orgânica Municipal, todo o poder emana do povo meruoquense, que o exerce por meio de representantes eleitos ou diretamente. São formas de exercício direto da soberania popular no Município:",
    "options": [
      "Ação popular, mandado de segurança e inquérito civil público.",
      "Plebiscito, referendo e iniciativa popular de projetos de lei.",
      "Audiência prévia do Tribunal de Contas e veto do prefeito.",
      "Votação nominal em comissões parlamentares de inquérito."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Em consonância com o Art. 14 da CF/88 e a Lei Orgânica de Meruoca, a soberania popular direta é exercida mediante: 1. Plebiscito (consulta prévia); 2. Referendo (consulta posterior à lei); 3. Iniciativa popular de leis perante a Câmara Municipal."
  },
  {
    "id": 93,
    "category": "legislacao",
    "day": "dia4",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Símbolos Oficiais do Município de Meruoca",
    "question": "São símbolos oficiais do Município de Meruoca expressamente consagrados em sua legislação fundamental:",
    "options": [
      "O Selo Municipal, o Estandarte e o Brasão do Estado do Ceará.",
      "O Brasão e a Bandeira apenas, sendo o Hino de competência estadual.",
      "A Faixa do Prefeito e a Insígnia do Presidente da Câmara.",
      "O Brasão, a Bandeira e o Hino do Município."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Conforme preceitua a Lei Orgânica Municipal (em harmonia com o Art. 13, § 2º da CF/88), os símbolos representativos do Município de Meruoca são a Bandeira, o Brasão e o Hino municipais."
  },
  {
    "id": 94,
    "category": "legislacao",
    "day": "dia4",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Poderes do Município de Meruoca",
    "question": "São Poderes do Município de Meruoca, independentes e harmônicos entre si:",
    "options": [
      "O Legislativo, o Executivo e o Judiciário.",
      "O Executivo, o Judiciário e o Ministério Público Municipal.",
      "Apenas o Executivo, sendo o Legislativo um órgão consultivo auxiliar.",
      "O Legislativo e o Executivo."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. No âmbito municipal NÃO HÁ Poder Judiciário nem Ministério Público local (ambos são órgãos estaduais/federais). Os únicos poderes municipais são o Poder Legislativo (Câmara Municipal) e o Poder Executivo (Prefeitura Municipal)."
  },
  {
    "id": 95,
    "category": "legislacao",
    "day": "dia4",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Competência Privativa do Município: Tributos e Orçamento",
    "question": "Compete privativamente ao Município de Meruoca, no exercício de sua autonomia legislativa e administrativa:",
    "options": [
      "Legislar privativamente sobre direito civil, penal e processual eleitoral.",
      "Instituir e arrecadar os tributos de sua competência e aplicar suas rendas, bem como fixar tarifas de serviços públicos municipais.",
      "Emitir moeda municipal e controlar as taxas de juros bancários locais.",
      "Organizar e manter o Poder Judiciário e a Defensoria Pública da Comarca."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Compete ao Município instituir tributos municipais (IPTU, ISS, ITBI, taxas e contribuições de iluminação pública), aplicar rendas e fixar tarifas de transporte e serviços locais. Legislar sobre direito civil/penal e emitir moeda são competências privativas da União (Art. 22 da CF)."
  },
  {
    "id": 96,
    "category": "legislacao",
    "day": "dia4",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Competência Privativa: Uso e Ocupação do Solo Urbano",
    "question": "É matéria de interesse local inserida na competência privativa do Município de Meruoca:",
    "options": [
      "Explorar diretamente os serviços de telecomunicações e radiodifusão sonora.",
      "Promover o adequado ordenamento territorial, mediante planejamento e controle do uso, do parcelamento e da ocupação do solo urbano.",
      "Disciplinar a navegação aérea e a infraestrutura aeroespacial da Serra da Meruoca.",
      "Autorizar a exploração de jazidas minerais e riquezas do subsolo na região."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 30, VIII da CF/88 e Lei Orgânica de Meruoca: o ordenamento territorial, zoneamento urbano e controle de parcelamento/ocupação do solo (Plano Diretor, código de obras) é competência eminentemente municipal."
  },
  {
    "id": 97,
    "category": "legislacao",
    "day": "dia4",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Competência Comum do Município com a União e o Estado",
    "question": "Assinale a alternativa que indica uma competência COMUM do Município de Meruoca em cooperação com o Estado do Ceará e a União:",
    "options": [
      "Criar e extinguir cargos privativos da Mesa Diretora da Assembleia Legislativa.",
      "Instituir o Imposto sobre Circulação de Mercadorias e Serviços (ICMS).",
      "Expedir passaportes e carteiras de identidade civil para estrangeiros.",
      "Cuidar da saúde e assistência pública, da proteção e garantia das pessoas com deficiência."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 23 da CF/88 e Lei Orgânica de Meruoca: a prestação de serviços de saúde, proteção de vulneráveis e pessoas com deficiência, meio ambiente e educação básica é matéria de competência comum dos três entes federados."
  },
  {
    "id": 98,
    "category": "legislacao",
    "day": "dia4",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Guarda Municipal e Segurança Patrimonial",
    "question": "Nos termos da Lei Orgânica e do Art. 144, § 8º da CF/88, o Município de Meruoca poderá constituir guarda municipal destinada precipuamente à:",
    "options": [
      "Investigação de crimes eleitorais e tráfico interestadual de drogas.",
      "Proteção de seus bens, serviços e instalações.",
      "Substituição das polícias militar e civil nas ações de policiamento ostensivo geral.",
      "Fiscalização do recolhimento de impostos da União e execução fiscal federal."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 144, § 8º da CF/88 e legislação municipal: os municípios poderão constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações, atuando também na segurança comunitária e patrimonial."
  },
  {
    "id": 99,
    "category": "legislacao",
    "day": "dia4",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Patrimônio e Bens Municipais",
    "question": "Constituem bens do Município de Meruoca, conforme sua Lei Orgânica:",
    "options": [
      "Exclusivamente os edifícios onde funcionam a Prefeitura e a Câmara Municipal.",
      "Todas as coisas móveis e imóveis, direitos e ações que a qualquer título lhe pertençam.",
      "Apenas as praças e ruas pavimentadas pelo poder público municipal.",
      "Os rios navegáveis que banham mais de dois estados da federação."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Constituem patrimônio e bens do Município todos os bens móveis e imóveis, direitos, títulos da dívida pública, créditos e ações pertencentes à municipalidade a qualquer título."
  },
  {
    "id": 100,
    "category": "legislacao",
    "day": "dia4",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Princípio da Publicidade e Publicação dos Atos Municipais",
    "question": "A publicação das leis e dos atos administrativos normativos da Câmara Municipal e da Prefeitura de Meruoca é requisito essencial de:",
    "options": [
      "Revogação tácita de todas as normas jurídicas anteriores.",
      "Descentralização administrativa forçada dos poderes públicos.",
      "Conversão obrigatória de projeto de lei em medida provisória.",
      "Eficácia e validade perante os munícipes e a sociedade."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Nenhum ato normativo ou lei municipal produz efeitos externos sem a devida publicação no órgão oficial ou mural público da Câmara/Prefeitura. A publicação é condição de EFICÁCIA e vigência da norma jurídica."
  },
  {
    "id": 101,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Poder Vinculado vs Discricionário",
    "question": "Quanto à margem de liberdade conferida ao administrador público na prática de seus atos, assinale a opção correta:",
    "options": [
      "No ato vinculado, o administrador pode avaliar livremente a conveniência de conceder ou não uma licença quando o particular preencher todos os requisitos.",
      "No ato discricionário, a lei concede margem de escolha ao gestor quanto à oportunidade e conveniência (mérito administrativo), sempre nos limites da lei.",
      "O mérito do ato discricionário pode ser revisto pelo Poder Judiciário sob o aspecto da conveniência e da oportunidade da autoridade administrativa.",
      "Todo ato administrativo é discricionário, cabendo à autoridade decidir as sanções disciplinares independentemente de previsão legal."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. A discricionariedade confere juízo de mérito (conveniência e oportunidade) estritamente dentro das balizas da lei. O Judiciário fiscaliza a legalidade/moralidade, mas não pode substituir o mérito administrativo da decisão discricionária."
  },
  {
    "id": 102,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Abuso de Poder: Excesso vs Desvio de Poder",
    "question": "O abuso de poder constitui conduta ilegítima do agente público e manifesta-se sob duas modalidades distintas: o excesso de poder e o desvio de poder (ou desvio de finalidade). Ocorre EXCESSO DE PODER quando o agente público:",
    "options": [
      "Atua fora dos limites de sua competência legal ou excede os poderes que a lei lhe conferiu.",
      "Atua dentro de sua competência, mas com objetivo alheio ao interesse público ou para beneficiar amigo.",
      "Pratica um ato perfeitamente vinculado que cumpriu todas as formalidades do edital.",
      "Revoga um ato legal de sua própria lavra com base em razões supervenientes de interesse público."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Mnemônico clássico: Excesso de Poder = vício de COMPETÊNCIA (o agente faz o que a lei não lhe permitiu). Desvio de Poder (ou Finalidade) = vício de FINALIDADE (o agente é competente, mas busca interesse privado ou perseguição)."
  },
  {
    "id": 103,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Poder Disciplinar",
    "question": "O Poder Disciplinar é a prerrogativa conferida à Administração Pública para:",
    "options": [
      "Aplicar multas e penalidades indistintamente a qualquer cidadão que transite em logradouro municipal sem habilitação.",
      "Fixar tarifas gerais de transporte urbano para toda a população da cidade.",
      "Apurar infrações e aplicar penalidades aos servidores públicos e a particulares que possuam vínculo jurídico específico com o Estado.",
      "Editar decretos normativos de caráter autônomo sem previsão em lei formal."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. O poder disciplinar atinge quem tem vínculo especial/interno com o Estado (servidores públicos e contratados administrativos via licitação). A punição aos cidadãos em geral sem vínculo específico decorre do Poder de Polícia."
  },
  {
    "id": 104,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Poder Regulamentar / Normativo",
    "question": "A respeito do Poder Regulamentar conferido aos Chefes do Poder Executivo, é correto afirmar que os decretos regulamentares:",
    "options": [
      "Destinam-se a dar fiel execução às leis, não podendo criar direitos, obrigações ou inovar originariamente na ordem jurídica.",
      "Podem contrariar a lei em caso de emergência orçamentária do município.",
      "Permitem a criação originária de novos tributos municipais sem passar pela Câmara de Vereadores.",
      "Subordinam hierarquicamente as leis votadas pelo Poder Legislativo municipal."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 84, IV da CF/88. O poder regulamentar é de caráter secundário (intra legem): serve apenas para explicitar e regulamentar a lei existente para sua fiel execução, sendo vedado criar obrigações novas ou inovar originariamente."
  },
  {
    "id": 105,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Poder de Polícia: Conceito e Atributos",
    "question": "Conforme o Art. 78 do Código Tributário Nacional (CTN), o Poder de Polícia é a atividade da administração pública que condiciona ou restringe o uso de bens, atividades e direitos em prol do interesse público. São atributos clássicos do poder de polícia:",
    "options": [
      "Irrevogabilidade, subordinação e imprescritibilidade.",
      "Gratuidade obrigatória, oralidade e retroatividade.",
      "Inalienabilidade, impenhorabilidade e imutabilidade.",
      "Discricionariedade, autoexecutoriedade e coercibilidade."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Mnemônico 'DAC': Discricionariedade (margem de escolha de atuação/sanção), Autoexecutoriedade (execução material direta sem prévia autorização judicial) e Coercibilidade (imposição imperativa de limites com força pública se necessário)."
  },
  {
    "id": 106,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Poder Hierárquico",
    "question": "São faculdades e prerrogativas típicas decorrentes do exercício do Poder Hierárquico na Administração Pública, EXCETO:",
    "options": [
      "Dar ordens aos subordinados, ressalvadas as ordens manifestamente ilegais.",
      "Aplicar sanções de interdição a estabelecimentos comerciais privados que violarem o código de posturas sanitárias.",
      "Fiscalizar e controlar as atividades desempenhadas pelos órgãos inferiores.",
      "Delegar e avocar competências, nos termos e limites previstos na legislação."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. A interdição de comércio privado decorre do Poder de Polícia (sobre particulares). O Poder Hierárquico atua estritamente na relação interna de subordinação e coordenação entre órgãos e agentes públicos (dar ordens, fiscalizar, delegar e avocar)."
  },
  {
    "id": 107,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Atributos do Ato Administrativo: PATI",
    "question": "A doutrina de Direito Administrativo consagrada nas provas da banca INBRASP sintetiza os atributos do ato administrativo no mnemônico 'PATI'. Quais são esses atributos?",
    "options": [
      "Publicidade, Autonomia, Temporalidade e Impessoalidade.",
      "Previsibilidade, Anterioridade, Transparência e Intangibilidade.",
      "Probidade, Acessibilidade, Tipicidade e Igualdade.",
      "Presunção de legitimidade, Autoexecutoriedade, Tipicidade e Imperatividade."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Mnemônico PATI: Presunção de legitimidade/veracidade (atos presumem-se válidos até prova em contrário); Autoexecutoriedade (execução direta pelo Estado); Tipicidade (deve corresponder a figura prevista em lei); Imperatividade (impõe obrigações a terceiros independentemente de concordância)."
  },
  {
    "id": 108,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Presunção de Legitimidade e Veracidade",
    "question": "A presunção de legitimidade do ato administrativo produz como efeito prático processual a:",
    "options": [
      "Inversão do ônus da prova, cabendo a quem contesta o ato provar a sua ilegalidade ou falsidade.",
      "Impossibilidade definitiva de anulação do ato pelo Poder Judiciário.",
      "Dispensabilidade total de publicação dos atos no diário oficial do município.",
      "Transformação automática de atos discricionários em atos de império irrecorríveis."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. A presunção de legitimidade é relativa (juris tantum): o ato nasce com aparência de legalidade e verdade fática, cabendo ao particular comprovar eventual defeito (inversão do ônus da prova)."
  },
  {
    "id": 109,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Autoexecutoriedade do Ato Administrativo",
    "question": "O atributo da AUTOEXECUTORIEDADE autoriza a Administração Pública a executar diretamente as suas decisões materiais sem a necessidade de prévia autorização judicial. Esse atributo:",
    "options": [
      "Existe indistintamente em 100% dos atos da administração, inclusive na cobrança coercitiva imediata de multas pecuniárias não pagas.",
      "Impede que o particular ingresse com mandado de segurança caso se sinta lesado em seu direito líquido e certo.",
      "Aplica-se somente aos atos editados pelo Poder Judiciário em suas funções típicas.",
      "Não está presente em todos os atos administrativos, existindo quando expressamente previsto em lei ou em situações urgentes de defesa do interesse público."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Pegadinha clássica: a autoexecutoriedade NÃO está em todos os atos! Ela não existe, por exemplo, na cobrança de multa em dinheiro (se o cidadão não pagar, o Estado não pode tomar o dinheiro à força; deve ingressar com Execução Fiscal no Judiciário)."
  },
  {
    "id": 110,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Imperatividade e Poder Extrínseco",
    "question": "A IMPERATIVIDADE (ou poder extroverso) do ato administrativo caracteriza-se por:",
    "options": [
      "Conceder vantagens que dependem do prévio requerimento e anuência do cidadão.",
      "Garantir a imutabilidade dos atos municipais após decorridos 30 dias de sua publicação.",
      "Permitir ao servidor público o descumprimento de ordens emanadas de seus superiores diretos.",
      "Impor deveres e obrigações a terceiros unilateralmente, independentemente da concordância do destinatário."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. A imperatividade permite impor obrigações coercitivas ao administrado (ex: multa de trânsito, interdição de vigilância sanitária). Não está presente em atos enunciativos (certidões) ou negociais (autorização, licença)."
  },
  {
    "id": 111,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Tipicidade no Ato Administrativo",
    "question": "O atributo da TIPICIDADE, formulado pela professora Maria Sylvia Zanella Di Pietro, preceitua que o ato administrativo deve:",
    "options": [
      "Ser redigido exclusivamente na língua portuguesa arcaica do período colonial.",
      "Conter obrigatoriamente cláusula de sigilo prévio por até 5 anos.",
      "Corresponder a figuras previamente delineadas na lei para produzir os efeitos desejados, impedindo a prática de atos totalmente inominados.",
      "Ser publicado em pelo menos três jornais impressos de circulação nacional."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Pela tipicidade, para cada finalidade pretendida a lei já define a espécie de ato cabível (ex: se quer punir, usa demissão/advertência; se quer autorizar, usa alvará). Isso impede que a autoridade crie atos extravagantes ou sem modelo na lei."
  },
  {
    "id": 112,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Ciclo do Poder de Polícia",
    "question": "A doutrina divide o Poder de Polícia em quatro fases ou ciclos: I. Ordem de polícia (legislação); II. Consentimento de polícia (licença/autorização); III. Fiscalização de polícia (inspeção); IV. Sanção de polícia (multa/interdição). É passível de delegação a entidades estatais de direito privado integrantes da administração indireta (ex: empresas públicas e sociedades de economia mista):",
    "options": [
      "Apenas a ordem de polícia, sendo vedada a fiscalização.",
      "Todas as fases sem qualquer restrição, inclusive legislar privativamente sobre crimes.",
      "Nenhuma das fases, pois o poder de polícia é indelegável a qualquer ente.",
      "As fases de consentimento, fiscalização e sanção, conforme entendimento fixado pelo STF no Tema 532 de repercussão geral."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. O STF fixou a tese de que é constitucional a delegação do poder de polícia (consentimento, fiscalização e sanção) a pessoas jurídicas de direito privado integrantes da administração pública indireta de capital majoritariamente público que prestem serviços públicos em regime não concorrencial (ex: BHTrans, CET)."
  },
  {
    "id": 113,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Desvio de Finalidade (Art. 2º da Lei da Ação Popular)",
    "question": "O prefeito de determinado município remove 'ex officio' um guarda municipal para posto de serviço remoto em área rural unicamente como forma de castigo pessoal por divergência política partidária. Essa conduta do administrador público caracteriza vício insanável de:",
    "options": [
      "Excesso de forma meramente acidental com convalidação automática.",
      "Exercício regular do poder disciplinar sem possibilidade de recurso ao Judiciário.",
      "Desvio de finalidade (ou desvio de poder), tornando o ato de remoção nulo de pleno direito.",
      "Incompetência absoluta por ausência de concurso público."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. A remoção de servidor tem como finalidade atender à necessidade do serviço público. Usá-la para perseguir ou punir desvia a finalidade legal do ato (desvio de poder), gerando nulidade absoluta por violação direta ao princípio da impessoalidade."
  },
  {
    "id": 114,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Taxas de Polícia vs Preços Públicos",
    "question": "Pela atividade regular do Poder de Polícia exercida pelo Município de Meruoca, a Constituição Federal autoriza a instituição de:",
    "options": [
      "Taxas pelo exercício do poder de polícia.",
      "Impostos progressivos de natureza punitiva.",
      "Contribuições de melhoria extraordinárias sem obra pública.",
      "Tarifas alfandegárias de fiscalização internacional."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 145, II da CF/88 e Art. 77 do CTN: as taxas são tributos cobrados em razão do exercício regular do poder de polícia (ex: taxa de fiscalização de funcionamento, taxa de vigilância sanitária) ou pela utilização efetiva/potencial de serviço público específico e divisível."
  },
  {
    "id": 115,
    "category": "administrativo",
    "day": "dia5",
    "discipline": "D. Administrativo",
    "topic": "Distinção entre Atos Nulos e Anuláveis",
    "question": "No regime jurídico administrativo, quando um ato apresenta defeito quanto aos elementos de COMPETÊNCIA (desde que não seja exclusiva) ou de FORMA (desde que a lei não a exija como requisito de validade), o ato é passível de:",
    "options": [
      "Revogação obrigatória e irrecusável pelo Poder Judiciário.",
      "Cassação automática por descumprimento de deveres pelo particular.",
      "Prescrição imediata em 24 horas a contar da data de protocolo.",
      "Convalidação pela Administração Pública, aproveitando-se o ato com efeitos retroativos (ex tunc)."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Mnemônico FO-CO: defeitos de Forma (não essencial) e Competência (não exclusiva) geram atos ANULÁVEIS que admitem convalidação pela própria Administração, desde que não acarretem lesão ao interesse público nem prejuízo a terceiros."
  },
  {
    "id": 116,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Conceito de Algoritmo",
    "question": "No contexto da ciência da computação e do edital da Câmara de Meruoca, um ALGORITMO pode ser conceituado como:",
    "options": [
      "Uma sequência finita de passos lógicos, ordenados e bem definidos, que visa à resolução de um problema ou à execução de uma tarefa.",
      "Um programa executável binário restrito a sistemas operacionais de grande porte.",
      "Uma peça de hardware instalada na placa-mãe responsável por resfriar o processador.",
      "Um protocolo de rede utilizado exclusivamente para tráfego seguro de e-mails corporativos."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Algoritmo é uma sequência lógica, finita, ordenada e não ambígua de instruções que, ao ser processada, transforma entradas em saídas para solucionar um problema."
  },
  {
    "id": 117,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Fluxogramas: Símbolo de Decisão (Losango)",
    "question": "Em um fluxograma que representa o fluxo de tramitação de um processo administrativo, o símbolo geométrico que representa uma tomada de DECISÃO ou desvio condicional (onde o fluxo pode seguir caminhos diferentes conforme a resposta Sim/Não) é o:",
    "options": [
      "Retângulo.",
      "Círculo ou elipse.",
      "Paralelogramo.",
      "Losango."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Símbolos universais de fluxogramas: Losango = Decisão / Condição (teste lógico Se/Senão); Retângulo = Ação / Processamento / Atribuição; Oval/Elipse = Início ou Fim; Paralelogramo = Entrada ou Saída de dados."
  },
  {
    "id": 118,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Pseudocódigo e Estruturas Condicionais",
    "question": "Considere o seguinte trecho de pseudocódigo:\n\nSE (idade >= 18) ENTÃO\n    ESCREVA('Apto ao concurso')\nSENÃO\n    ESCREVA('Inapto por idade')\nFIMSE\n\nCaso o valor atribuído à variável 'idade' seja exatamente 18, o programa exibirá:",
    "options": [
      "Apto ao concurso",
      "Inapto por idade",
      "Erro de compilação por operador inexistente",
      "Nenhuma mensagem será exibida na tela"
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. O operador `>=` significa 'maior ou igual'. Como 18 é igual a 18, a condição é VERDADEIRA e o bloco do SE é executado, exibindo 'Apto ao concurso'."
  },
  {
    "id": 119,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Estruturas de Repetição (Laços / Loops)",
    "question": "Em lógica de programação, a estrutura que executa repetidamente um bloco de instruções ENQUANTO uma condição prévia permanecer verdadeira é chamada de:",
    "options": [
      "Função recursiva estática imutável.",
      "Laço de repetição ou loop (while / enquanto).",
      "Declaração de constante booleana.",
      "Instrução de salto incondicional irrestrita."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. As estruturas de repetição (laços ou loops) permitem executar comandos várias vezes. No laço `enquanto` (`while`), o teste é feito no início e o bloco roda enquanto o teste for verdadeiro."
  },
  {
    "id": 120,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Linguagem Python: Indentação Obrigatória",
    "question": "Diferentemente de linguagens como C ou Java que utilizam chaves `{ }` para delimitar blocos de comandos, a linguagem Python utiliza como delimitador obrigatório de blocos de código a:",
    "options": [
      "Indentação (espaçamento consistente à esquerda com espaços ou tabs).",
      "Utilização de ponto e vírgula ';' ao final de cada instrução.",
      "Inclusão da palavra reservada 'END' ao final de cada linha.",
      "Abertura e fechamento de colchetes '[ ]' em cada função."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Em Python, a indentação não é apenas estética: ela define a hierarquia e o escopo dos blocos de código (corpo de funções, laços for/while, estruturas if/else)."
  },
  {
    "id": 121,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Python: Tipos de Dados Básicos",
    "question": "Em Python, considere a atribuição: `total = 100`, `preco = 45.50` e `cargo = 'Técnico'`. Os tipos de dados primitivos dessas variáveis são, respectivamente:",
    "options": [
      "number, decimal e char.",
      "integer, currency e varchar.",
      "int (inteiro), float (número de ponto flutuante) e str (string / texto).",
      "long, double e text."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Em Python, inteiros são do tipo `int`, números com casas decimais são do tipo `float` e cadeias de caracteres entre aspas são do tipo `str`."
  },
  {
    "id": 122,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Python: Operadores Aritméticos Divisão e Resto",
    "question": "Na linguagem Python, o operador `//` realiza a divisão inteira e o operador `%` retorna o resto da divisão. Qual será o resultado das expressões `7 // 2` e `7 % 2`?",
    "options": [
      "3.5 e 0.5",
      "3 e 0",
      "4 e 1",
      "3 e 1"
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. 7 dividido por 2 dá quociente 3 e sobra resto 1. Logo, a divisão inteira `7 // 2` resulta em 3, e o módulo/resto `7 % 2` resulta em 1."
  },
  {
    "id": 123,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Python: Listas e Indexação",
    "question": "Em Python, as listas são coleções ordenadas de elementos e possuem indexação baseada em zero. Dada a lista `bancas = ['CETREDE', 'CONSULPAM', 'INBRASP', 'IDECAN']`, a instrução `print(bancas[2])` exibirá na tela:",
    "options": [
      "CONSULPAM",
      "INBRASP",
      "CETREDE",
      "IDECAN"
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. A indexação em Python inicia em zero: `bancas[0]` = 'CETREDE', `bancas[1]` = 'CONSULPAM', `bancas[2]` = 'INBRASP', `bancas[3]` = 'IDECAN'."
  },
  {
    "id": 124,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Python: Comentários de Linha",
    "question": "Na linguagem Python, qual caractere é utilizado para inserir comentários de linha única (instruções que são ignoradas pelo interpretador)?",
    "options": [
      "// (duas barras inclinadas)",
      "/* (barra e asterisco)",
      "# (cerquilha / hashtag)",
      "-- (dois traços)"
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Em Python, comentários de linha única começam com o caractere `#`. Em linguagens como C, Java e PHP usa-se `//`; em SQL usa-se `--`."
  },
  {
    "id": 125,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Python: Estrutura Condicional (if / elif / else)",
    "question": "Analise o seguinte código em Python:\n\npontos = 85\nif pontos >= 90:\n    print('Aprovado em 1º Lugar')\nelif pontos >= 50:\n    print('Classificado')\nelse:\n    print('Reprovado')\n\nQual será a saída exibida no terminal?",
    "options": [
      "Aprovado em 1º Lugar",
      "Classificado",
      "Reprovado",
      "Aprovado em 1º Lugar e Classificado simultaneamente"
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. `pontos = 85`. A primeira condição (`85 >= 90`) é Falsa. O interpretador salta para o `elif`: `85 >= 50` é Verdadeira. Portanto, executa `print('Classificado')` e encerra a estrutura condicional."
  },
  {
    "id": 126,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Python: Operador de Exponenciação",
    "question": "Qual operador matemático é utilizado na linguagem Python para calcular a exponenciação (potência), por exemplo, dois elevado à terceira potência (2³)?",
    "options": [
      "^ (acento circunflexo, ex: 2 ^ 3)",
      "** (dois asteriscos, ex: 2 ** 3)",
      "pow$ (ex: 2 pow$ 3)",
      "^^ (dois circunflexos, ex: 2 ^^ 3)"
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Em Python, a potência é calculada com `**` (ex: `2 ** 3 = 8`). O operador `^` em Python é o operador bit a bit XOR (ou exclusivo), uma pegadinha clássica de concurso!"
  },
  {
    "id": 127,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Python: Função len()",
    "question": "A função nativa `len()` em Python tem como finalidade:",
    "options": [
      "Converter um texto em letras maiúsculas.",
      "Ler uma entrada de dados digitada pelo usuário no teclado.",
      "Retornar a quantidade de elementos de um objeto (como tamanho de uma lista ou comprimento de uma string).",
      "Finalizar imediatamente a execução do programa em caso de erro."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. `len()` é a abreviação de 'length'. Exemplo: `len('Meruoca')` retorna 7; `len([10, 20, 30])` retorna 3."
  },
  {
    "id": 128,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Python: Operadores Lógicos (and, or, not)",
    "question": "Em Python, os operadores lógicos booleanos para conjunção, disjunção e negação são grafados por extenso como:",
    "options": [
      "&&, ||, !",
      "and, or, not",
      ".AND., .OR., .NOT.",
      "e, ou, nao"
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Python preza pela legibilidade e usa palavras em inglês em minúsculas: `and` (conjunção), `or` (disjunção) e `not` (negação). `&&` e `||` são de C/Java/JS."
  },
  {
    "id": 129,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Python: Laço for e Função range()",
    "question": "Considere o código Python:\n\nsoma = 0\nfor i in range(1, 4):\n    soma += i\nprint(soma)\n\nLembrando que `range(1, 4)` gera os números 1, 2 e 3 (o limite superior 4 é exclusivo), qual valor será impresso?",
    "options": [
      "10",
      "4",
      "6",
      "3"
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. `range(1, 4)` produz os valores 1, 2 e 3. Na 1ª iteração: soma = 0 + 1 = 1. Na 2ª iteração: soma = 1 + 2 = 3. Na 3ª iteração: soma = 3 + 3 = 6. Saída: 6."
  },
  {
    "id": 130,
    "category": "informatica",
    "day": "dia5",
    "discipline": "Informática",
    "topic": "Python: Função print() e input()",
    "question": "As funções nativas de entrada e saída padrão em um terminal na linguagem Python são, respectivamente:",
    "options": [
      "input() para entrada de dados do usuário e print() para saída em tela.",
      "read() para entrada e write() para saída.",
      "scanf() para entrada e printf() para saída.",
      "cin para entrada e cout para saída."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Em Python padrão: `input('Digite algo:')` lê dados do teclado em formato string, e `print('Mensagem')` imprime dados na tela do console."
  },
  {
    "id": 131,
    "category": "legislacao",
    "day": "dia5",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Poder Legislativo Municipal e Composição",
    "question": "O Poder Legislativo do Município de Meruoca é exercido pela Câmara Municipal, composta por Vereadores eleitos pelo sistema proporcional para um mandato de:",
    "options": [
      "4 (quatro) anos, correspondendo a uma legislatura.",
      "2 (dois) anos, permitida uma recondução consecutiva.",
      "5 (cinco) anos, em consonância com o mandato dos senadores.",
      "3 (três) anos, renovando-se por terços anuais."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Em conformidade com a CF/88 e a Lei Orgânica de Meruoca, o mandato dos Vereadores é de 4 anos. Cada período de 4 anos de mandato parlamentar corresponde a uma LEGISLATURA."
  },
  {
    "id": 132,
    "category": "legislacao",
    "day": "dia5",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Posse dos Vereadores, Prefeito e Vice",
    "question": "Nos termos da Lei Orgânica Municipal, a posse dos Vereadores, do Prefeito e do Vice-Prefeito de Meruoca realizar-se-á em sessão solene de instalação no dia:",
    "options": [
      "1º de fevereiro do ano da posse legislativa federal.",
      "15 de novembro, data da proclamação da República.",
      "1º de março, após o encerramento do recesso carnavalesco.",
      "1º de janeiro do ano subsequente ao da eleição."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. A instalação da legislatura e a posse dos Vereadores, Prefeito e Vice-Prefeito ocorre obrigatoriamente no dia 1º de JANEIRO do ano subsequente à eleição municipal."
  },
  {
    "id": 133,
    "category": "legislacao",
    "day": "dia5",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Mesa Diretora da Câmara Municipal",
    "question": "Imediatamente após a posse dos Vereadores de Meruoca, sob a presidência do vereador mais votado dentre os presentes, proceder-se-á à eleição dos membros da:",
    "options": [
      "Comissão Mista de Finanças e Tributação.",
      "Mesa Diretora da Câmara Municipal.",
      "Bancada Governista de Apoio ao Poder Executivo.",
      "Junta Comercial e Fiscalizatória dos Bairros."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Conforme a Lei Orgânica e o Regimento Interno, logo após o compromisso de posse no dia 1º de janeiro, os parlamentares elegem a Mesa Diretora da Câmara (Presidente, Vice-Presidente e Secretários)."
  },
  {
    "id": 134,
    "category": "legislacao",
    "day": "dia5",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Quórum Geral de Deliberação na Câmara",
    "question": "Salvo disposição expressa em contrário da Lei Orgânica de Meruoca ou da Constituição Federal, as deliberações da Câmara Municipal e de suas Comissões serão tomadas por:",
    "options": [
      "Dois terços de votos, independentemente do número de presentes.",
      "Unanimidade obrigatória dos parlamentares diplomados.",
      "Maioria de votos, presente a maioria absoluta de seus membros.",
      "Voto exclusivo e soberano do Presidente da Mesa Diretora."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. É a regra geral da maioria simples (ou relativa): maioria dos votos dos presentes na sessão, desde que esteja presente a maioria absoluta (metade mais um) dos membros da Casa (Art. 47 da CF e Lei Orgânica)."
  },
  {
    "id": 135,
    "category": "legislacao",
    "day": "dia5",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Imunidade Material dos Vereadores (Inviolabilidade)",
    "question": "Conforme o Art. 29, VIII da Constituição Federal e a Lei Orgânica de Meruoca, os Vereadores gozam de inviolabilidade por suas opiniões, palavras e votos:",
    "options": [
      "Em qualquer lugar do território nacional, inclusive em viagens privadas de lazer.",
      "No exercício do mandato e na circunscrição do Município.",
      "Apenas durante as sessões plenárias dentro do edifício da Câmara Municipal.",
      "Exclusivamente quando autorizados previamente pelo Presidente da Casa."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. A imunidade material do Vereador é local: ele possui inviolabilidade civil e penal por palavras, votos e opiniões proferidas no exercício das funções parlamentares e restritas à CIRCUNSCRIÇÃO DO MUNICÍPIO de Meruoca."
  },
  {
    "id": 136,
    "category": "legislacao",
    "day": "dia5",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Perda do Mandato por Falta às Sessões",
    "question": "Perderá o mandato o Vereador de Meruoca que deixar de comparecer, em cada sessão legislativa anual, sem justificativa legal ou licença concedida pela Casa, à:",
    "options": [
      "Metade (1/2) das sessões extraordinárias convocadas pelo prefeito.",
      "Duas sessões solenes comemorativas consecutivas.",
      "Quinta parte (1/5) das reuniões das comissões temáticas.",
      "Terça parte (1/3) das sessões ordinárias da Câmara Municipal."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 55, III da CF e Lei Orgânica: acarreta a perda do mandato parlamentar a ausência injustificada a 1/3 (uma terça parte) das sessões ordinárias do ano legislativo."
  },
  {
    "id": 137,
    "category": "legislacao",
    "day": "dia5",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Remuneração dos Vereadores (Subsídio)",
    "question": "O subsídio dos Vereadores de Meruoca é fixado pela Câmara Municipal em cada legislatura para vigorar na subsequente, observados os limites constitucionais e o teto da receita municipal. O subsídio deve ser fixado sob a modalidade de:",
    "options": [
      "Parcela única, vedado o acréscimo de qualquer gratificação, adicional, abono, prêmio ou verba de representação.",
      "Salário base acrescido de 40% de gratificação de produtividade por projeto aprovado.",
      "Diárias cumulativas por sessão ordinária comparecida no mês.",
      "Comissão percentual sobre a arrecadação mensal do IPTU de Meruoca."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 39, § 4º da CF/88 e Lei Orgânica: os agentes políticos remuneram-se exclusivamente por SUBSÍDIO fixado em parcela única, sendo expressamente proibido o pagamento de penduricalhos, adicionais ou gratificações de gabinete."
  },
  {
    "id": 138,
    "category": "legislacao",
    "day": "dia5",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Fiscalização Financeira e Controle Externo",
    "question": "A fiscalização contábil, financeira e orçamentária do Município de Meruoca será exercida pela Câmara Municipal, mediante controle externo, com o auxílio do:",
    "options": [
      "Tribunal de Contas da União (TCU) em primeira e última instância.",
      "Conselho Fiscal Popular eleito por voto secreto em cada bairro.",
      "Tribunal de Contas do Estado do Ceará (TCE/CE).",
      "Ministério da Fazenda e Receita Federal do Brasil."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. O controle externo da Câmara Municipal sobre as contas do Município e do Prefeito é exercido com o auxílio do Tribunal de Contas do Estado (TCE/CE), que emite parecer prévio."
  },
  {
    "id": 139,
    "category": "legislacao",
    "day": "dia5",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Rejeição do Parecer Prévio do TCE",
    "question": "O parecer prévio emitido pelo Tribunal de Contas sobre as contas que o Prefeito de Meruoca deve prestar anualmente só deixará de prevalecer por decisão de:",
    "options": [
      "Maioria absoluta dos vereadores presentes.",
      "Dois terços (2/3) dos membros da Câmara Municipal.",
      "Maioria simples mediante votação secreta.",
      "Unanimidade dos integrantes da comissão de orçamento."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 31, § 2º da CF/88 e Lei Orgânica de Meruoca: o parecer técnico do Tribunal de Contas tem peso qualificado e só pode ser derrubado pelo voto de 2/3 (dois terços) dos vereadores."
  },
  {
    "id": 140,
    "category": "legislacao",
    "day": "dia5",
    "discipline": "Lei Orgânica de Meruoca",
    "topic": "Comissões Parlamentares de Inquérito (CPIs)",
    "question": "As Comissões Parlamentares de Inquérito (CPI) na Câmara Municipal de Meruoca, que terão poderes de investigação próprios das autoridades judiciais, serão criadas mediante requerimento de:",
    "options": [
      "Metade mais um dos vereadores, para investigar condutas genéricas sem prazo determinado.",
      "Dois terços dos membros da Casa, exigindo-se aval prévio do juiz de direito da comarca.",
      "Um terço (1/3) dos membros da Câmara Municipal, para a apuração de fato determinado e por prazo certo.",
      "Qualquer cidadão que apresente abaixo-assinado com 50 assinaturas."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 58, § 3º da CF/88 e Lei Orgânica: a CPI é criada por requerimento de 1/3 (um terço) dos membros da Câmara, para apuração de FATO DETERMINADO e por PRAZO CERTO, sendo suas conclusões encaminhadas ao Ministério Público se for o caso."
  },
  {
    "id": 141,
    "simuladoQNum": 1,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Tipologia Textual: Narração",
    "topic": "Simulado Oficial 01 • Questão 1",
    "question": "[Simulado 01 - Q01] O tipo textual que se caracteriza pela sucessão temporal de fatos e pela presença de personagens, narrador, tempo e espaço denomina-se:",
    "options": [
      "Expositivo.",
      "Descritivo.",
      "Narrativo.",
      "Injuntivo."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Morfossintaxe - Oração subordinada adverbial temporal."
  },
  {
    "id": 142,
    "simuladoQNum": 2,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Tipologia Textual: Descrição",
    "topic": "Simulado Oficial 01 • Questão 2",
    "question": "[Simulado 01 - Q02] O excerto \"O casarão antigo possuía portas largas de madeira escura, paredes descascadas pelo tempo e um assoalho de tábuas corridas que rangia\" classifica-se predominantemente como:",
    "options": [
      "Argumentativo.",
      "Descritivo.",
      "Injuntivo.",
      "Expositivo."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Crase antes de palavra feminina sem artigo definido."
  },
  {
    "id": 143,
    "simuladoQNum": 3,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Tipologia Textual: Dissertação Argumentativa",
    "topic": "Simulado Oficial 01 • Questão 3",
    "question": "[Simulado 01 - Q03] O texto que se estrutura com o objetivo principal de defender um ponto de vista (tese), recorrendo a argumentos, dados e raciocínio lógico para convencer o leitor, é do tipo:",
    "options": [
      "Narrativo.",
      "Dissertativo-argumentativo.",
      "Dissertativo-expositivo.",
      "Instrucional."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Concordância verbal com partícula apassivadora \"se\"."
  },
  {
    "id": 144,
    "simuladoQNum": 4,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Tipologia Textual: Injunção",
    "topic": "Simulado Oficial 01 • Questão 4",
    "question": "[Simulado 01 - Q04] Os manuais de instalação de equipamentos, receitas culinárias e bulas de medicamentos (na seção posologia) têm em comum a presença de verbos no imperativo ou infinitivo com instruções ao leitor. Essa tipologia é a:",
    "options": [
      "Descritiva.",
      "Dialógica.",
      "Narrativa.",
      "Injuntiva ou instrucional."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Regência verbal do verbo assistir no sentido de ver/presenciar."
  },
  {
    "id": 145,
    "simuladoQNum": 5,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Gênero Textual: Editorial",
    "topic": "Simulado Oficial 01 • Questão 5",
    "question": "[Simulado 01 - Q05] Assinale a alternativa que define corretamente o gênero textual Editorial:",
    "options": [
      "Texto assinado por um colunista que expressa sua visão pessoal e subjetiva sobre um fato.",
      "Comunicação estritamente interna trocada entre departamentos de uma mesma empresa.",
      "Relatório técnico produzido por peritos judiciais para embasar decisões do tribunal.",
      "Texto jornalístico que expressa o posicionamento institucional da empresa/jornal e não leva assinatura individual."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Gênero textual Editorial - institucional do jornal, sem assinatura."
  },
  {
    "id": 146,
    "simuladoQNum": 6,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Redação Oficial: Ofício",
    "topic": "Simulado Oficial 01 • Questão 6",
    "question": "[Simulado 01 - Q06] A comunicação formal e padronizada emitida por autoridades públicas para tratar de assuntos oficiais de serviço com outras autoridades ou cidadãos denomina-se:",
    "options": [
      "Carta comercial.",
      "Abaixo-assinado.",
      "Ofício.",
      "Artigo de opinião."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Ofício - comunicação formal da administração pública."
  },
  {
    "id": 147,
    "simuladoQNum": 7,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Funções da Linguagem",
    "topic": "Simulado Oficial 01 • Questão 7",
    "question": "[Simulado 01 - Q07] Em um cartaz institucional afixado em repartição pública constam os dizeres: \"Economize energia elétrica. Apague as lâmpadas ao sair da sala.\" O texto emprega tipologia injuntiva com a função de linguagem predominantemente:",
    "options": [
      "Conotativa (ou apelativa).",
      "Fática.",
      "Emotiva.",
      "Metalinguística."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Função Conotativa/Apelativa - foco no leitor, verbos no imperativo."
  },
  {
    "id": 148,
    "simuladoQNum": 8,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Gênero: Divulgação Científica",
    "topic": "Simulado Oficial 01 • Questão 8",
    "question": "[Simulado 01 - Q08] Um texto de Artigo de Divulgação Científica tem como finalidade primordial:",
    "options": [
      "Transmitir conhecimentos científicos ao público geral por meio de linguagem acessível e informativa.",
      "Contar uma narrativa fictícia com elementos mágicos e fabulosos.",
      "Vender produtos cosméticos por meio de apelos emocionais e imagens publicitárias.",
      "Estabelecer normas jurídicas imperativas para cumprimento obrigatório de pesquisadores."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Divulgação científica - transmitir conhecimento ao leigo."
  },
  {
    "id": 149,
    "simuladoQNum": 9,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Gênero: Artigo de Opinião",
    "topic": "Simulado Oficial 01 • Questão 9",
    "question": "[Simulado 01 - Q09] O gênero textual Artigo de Opinião caracteriza-se formalmente por:",
    "options": [
      "Apresentar a visão neutra do veículo de comunicação sem a identificação do autor.",
      "Ser um texto argumentativo assinado pelo próprio autor, que assume a responsabilidade pela tese defendida.",
      "Conter exclusivamente tabelas numéricas e dados matemáticos sem texto explicativo.",
      "Limitar-se a narrar uma sequência cronológica de eventos policiais sem emitir juízo de valor."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Artigo de opinião - texto argumentativo e assinado."
  },
  {
    "id": 150,
    "simuladoQNum": 10,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Gênero: Crônica",
    "topic": "Simulado Oficial 01 • Questão 10",
    "question": "[Simulado 01 - Q10] O gênero Crônica destaca-se na imprensa e na literatura por:",
    "options": [
      "Registrar normas regimentais e decretos administrativos com rigor técnico.",
      "Abordar situações cotidianas e corriqueiras com estilo leve, reflexivo e por vezes poético.",
      "Exigir obrigatoriamente a assinatura de um colegiado de juristas para ser publicado.",
      "Apresentar fórmulas matemáticas aplicadas a cálculos orçamentários."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Crônica - cotidiano em tom leve e reflexivo."
  },
  {
    "id": 151,
    "simuladoQNum": 11,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Windows 11: Nomenclatura de Arquivos",
    "topic": "Simulado Oficial 01 • Questão 11",
    "question": "[Simulado 01 - Q11] No sistema operacional Microsoft Windows 11, ao tentar renomear um arquivo ou pasta, o usuário é impedido de utilizar determinados caracteres reservados pelo sistema. Assinale a alternativa que contém apenas caracteres PROIBIDOS em nomes de arquivos no Windows:",
    "options": [
      "\\ / : * ? \" &lt; &gt; |",
      "@ # $ % _ - +",
      "( ) [ ] { } .",
      "! &amp; = ~ ^ ;"
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Caracteres proibidos no Windows: \\ / : * ? \" < > |."
  },
  {
    "id": 152,
    "simuladoQNum": 12,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Windows 11: Atalhos",
    "topic": "Simulado Oficial 01 • Questão 12",
    "question": "[Simulado 01 - Q12] No Windows 11, o atalho de teclado padrão utilizado para BLOQUEAR rapidamente o computador ao se ausentar da mesa de trabalho é:",
    "options": [
      "Ctrl + Alt + B",
      "Logotipo do Windows + L",
      "Alt + F4",
      "Ctrl + Shift + Esc"
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Win + L - atalho de bloqueio rápido da sessão do Windows."
  },
  {
    "id": 153,
    "simuladoQNum": 13,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Linux Ubuntu: Diretórios",
    "topic": "Simulado Oficial 01 • Questão 13",
    "question": "[Simulado 01 - Q13] Na estrutura de diretórios do sistema operacional Linux (como o Ubuntu), o diretório responsável por armazenar os arquivos de configuração globais do sistema e dos serviços instalados é o:",
    "options": [
      "/bin",
      "/home",
      "/etc",
      "/dev"
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. /etc - pasta de arquivos de configuração globais do Linux."
  },
  {
    "id": 154,
    "simuladoQNum": 14,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Hardware: Memórias",
    "topic": "Simulado Oficial 01 • Questão 14",
    "question": "[Simulado 01 - Q14] A respeito da memória RAM (Random Access Memory) de um computador, assinale a afirmativa correta:",
    "options": [
      "É uma memória secundária de armazenamento permanente de fotos e vídeos.",
      "É uma memória volátil, cujo conteúdo é totalmente apagado quando o computador é desligado.",
      "Armazena a BIOS e não pode ser gravada nem alterada pelo usuário.",
      "Possui velocidade de leitura e gravação muito inferior à de um disco rígido tradicional (HD)."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Memória RAM é primária e volátil."
  },
  {
    "id": 155,
    "simuladoQNum": 15,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Segurança: Backup 3-2-1",
    "topic": "Simulado Oficial 01 • Questão 15",
    "question": "[Simulado 01 - Q15] A consagrada regra de segurança de dados \"3-2-1 para Backup\" recomenda manter:",
    "options": [
      "3 computadores ligados ao mesmo tempo, durante 2 horas por dia, com 1 funcionário supervisionando.",
      "3 senhas iguais em 2 sistemas diferentes para 1 único usuário.",
      "3 cópias dos dados, em 2 tipos de mídia diferentes, com pelo menos 1 cópia armazenada fora do local de trabalho (offsite/nuvem).",
      "3 antivírus instalados simultaneamente na mesma máquina durante 2 dias."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Regra 3-2-1 de Backup (3 cópias, 2 mídias, 1 fora/nuvem)."
  },
  {
    "id": 156,
    "simuladoQNum": 16,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Conjuntos Numéricos",
    "topic": "Simulado Oficial 01 • Questão 16",
    "question": "[Simulado 01 - Q16] Em uma pesquisa com 100 servidores da Câmara Municipal, 60 utilizam o sistema de processo eletrônico no Windows e 50 utilizam o sistema no Linux. Sabendo que 20 servidores utilizam ambos os sistemas, o número de servidores que não utilizam nenhum dos dois sistemas é:",
    "options": [
      "5 servidores.",
      "15 servidores.",
      "20 servidores.",
      "10 servidores."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Conjuntos: 60 + 50 - 20 = 90 servidores. 100 - 90 = 10 servidores."
  },
  {
    "id": 157,
    "simuladoQNum": 17,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Razão e Proporção",
    "topic": "Simulado Oficial 01 • Questão 17",
    "question": "[Simulado 01 - Q17] A razão entre o número de processos analisados pela manhã e à tarde por um Técnico Legislativo é de 3 para 5. Se em determinado dia ele analisou 40 processos no total, quantos foram analisados no período da manhã?",
    "options": [
      "12 processos.",
      "15 processos.",
      "18 processos.",
      "25 processos."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Razão e proporção: 3x + 5x = 40 -> 8x = 40 -> x = 5. Manhã: 3 * 5 = 15."
  },
  {
    "id": 158,
    "simuladoQNum": 18,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Porcentagem",
    "topic": "Simulado Oficial 01 • Questão 18",
    "question": "[Simulado 01 - Q18] O orçamento anual de custeio de um setor legislativo era de R$ 50.000,00 e sofreu um acréscimo de 15%. Qual passou a ser o novo valor orçamentário?",
    "options": [
      "R$ 55.000,00.",
      "R$ 57.500,00.",
      "R$ 58.000,00.",
      "R$ 60.000,00."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Porcentagem: 50.000 + 15% = R$ 57.500,00."
  },
  {
    "id": 159,
    "simuladoQNum": 19,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Regra de Três Simples",
    "topic": "Simulado Oficial 01 • Questão 19",
    "question": "[Simulado 01 - Q19] Três técnicos legislativos realizam a digitalização de 120 atas em 4 horas. Mantendo o mesmo ritmo de trabalho, quantos técnicos seriam necessários para digitalizar as mesmas 120 atas em apenas 2 horas?",
    "options": [
      "6 técnicos.",
      "4 técnicos.",
      "5 técnicos.",
      "8 técnicos."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Regra de três inversa: 3 téc * 4h = X * 2h -> X = 6 técnicos."
  },
  {
    "id": 160,
    "simuladoQNum": 20,
    "category": "matematica",
    "day": "dia6",
    "discipline": "Lógica Proposicional",
    "topic": "Simulado Oficial 01 • Questão 20",
    "question": "[Simulado 01 - Q20] Dada a proposição \"Se o Projeto de Lei for aprovado pela Câmara, então o Prefeito o sancionará\", sua negação lógica equivalente é:",
    "options": [
      "O Projeto de Lei é aprovado pela Câmara e o Prefeito não o sanciona.",
      "Se o Projeto de Lei não for aprovado, o Prefeito não o sancionará.",
      "O Projeto de Lei não é aprovado ou o Prefeito o sanciona.",
      "O Prefeito sanciona o Projeto de Lei se e somente se for aprovado."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Negação do condicional (P -> Q): P ^ ~Q (Mané)."
  },
  {
    "id": 161,
    "simuladoQNum": 21,
    "category": "portugues",
    "day": "dia6",
    "discipline": "CF/88: Inviolabilidade de Domicílio",
    "topic": "Simulado Oficial 01 • Questão 21",
    "question": "[Simulado 01 - Q21] Conforme o Art. 5º, XI, da CF/88, a casa é asilo inviolável do indivíduo. A entrada no domicílio sem o consentimento do morador por determinação judicial só pode ocorrer:",
    "options": [
      "A qualquer hora do dia ou da noite.",
      "Apenas durante a noite, com a presença de testemunhas.",
      "Durante o dia.",
      "Em dias úteis, no período das 6h às 22h."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 5º, XI CF/88 - Casa como asilo inviolável durante o dia."
  },
  {
    "id": 162,
    "simuladoQNum": 22,
    "category": "portugues",
    "day": "dia6",
    "discipline": "CF/88: Crimes Inafiançáveis e Imprescritíveis",
    "topic": "Simulado Oficial 01 • Questão 22",
    "question": "[Simulado 01 - Q22] Segundo a Constituição Federal de 1988, constituem crimes inafiançáveis e imprescritíveis:",
    "options": [
      "A prática da tortura e o tráfico ilícito de entorpecentes.",
      "Os crimes hediondos e o terrorismo.",
      "A prática do racismo e a ação de grupos armados contra a ordem constitucional.",
      "O roubo qualificado e a corrupção passiva."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Crimes inafiançáveis e imprescritíveis: Racismo e Ação de grupos armados."
  },
  {
    "id": 163,
    "simuladoQNum": 23,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Remédios Constitucionais: Mandado de Segurança",
    "topic": "Simulado Oficial 01 • Questão 23",
    "question": "[Simulado 01 - Q23] Para proteger direito líquido e certo, não amparado por Habeas Corpus ou Habeas Data, quando o responsável pela ilegalidade for autoridade pública, concede-se:",
    "options": [
      "Mandado de Segurança.",
      "Ação Popular.",
      "Mandado de Injunção.",
      "Arguição de Descumprimento de Preceito Fundamental."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Tráfico de drogas é inafiançável e insuscetível de graça ou anistia."
  },
  {
    "id": 164,
    "simuladoQNum": 24,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Mandado de Segurança: Prazo Decadencial",
    "topic": "Simulado Oficial 01 • Questão 24",
    "question": "[Simulado 01 - Q24] O prazo decadencial para a impetração de Mandado de Segurança é de:",
    "options": [
      "120 dias contados da ciência, pelo interessado, do ato impugnado.",
      "30 dias contados da publicação da portaria.",
      "60 dias contados da ocorrência do fato danoso.",
      "90 dias contados da notificação do ato coator."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Lei 12.016/09, Art. 23 - Prazo decadencial de 120 dias para Mandado de Segurança."
  },
  {
    "id": 165,
    "simuladoQNum": 25,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Remédios: Tribunal do Júri",
    "topic": "Simulado Oficial 01 • Questão 25",
    "question": "[Simulado 01 - Q25] É reconhecida a instituição do júri pela CF/88, com a organização que lhe der a lei, assegurada expressamente a competência para o julgamento dos:",
    "options": [
      "Crimes praticados por servidores públicos contra a administração em geral.",
      "Crimes de responsabilidade praticados por prefeitos e vereadores.",
      "Crimes culposos de trânsito que resultem em morte.",
      "Crimes dolosos contra a vida."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 5º, XXXVIII, \"d\" - Competência do Tribunal do Júri para crimes dolosos contra a vida."
  },
  {
    "id": 166,
    "simuladoQNum": 26,
    "category": "administrativo",
    "day": "dia6",
    "discipline": "D. Administrativo: Princípios LIMPE",
    "topic": "Simulado Oficial 01 • Questão 26",
    "question": "[Simulado 01 - Q26] Conforme o Art. 37, caput, da Constituição Federal de 1988, a administração pública direta e indireta de qualquer dos Poderes obedecerá aos seguintes princípios expressos:",
    "options": [
      "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.",
      "Legalidade, Supremacia do interesse público, Moralidade, Finalidade e Eficiência.",
      "Proporcionalidade, Impessoalidade, Razoabilidade, Publicidade e Celeridade.",
      "Legalidade, Isonomia, Moralidade, Transparência e Motivação."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Mnemônico LIMPE - Art. 37, caput da CF/88."
  },
  {
    "id": 167,
    "simuladoQNum": 27,
    "category": "administrativo",
    "day": "dia6",
    "discipline": "D. Administrativo: Impessoalidade",
    "topic": "Simulado Oficial 01 • Questão 27",
    "question": "[Simulado 01 - Q27] De acordo com o Art. 37, § 1º, da CF/88, a publicidade dos atos dos órgãos públicos não pode conter nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades. Tal regra decorre do princípio da:",
    "options": [
      "Continuidade do serviço público.",
      "Autotutela.",
      "Especialidade.",
      "Impessoalidade."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 37, § 1º CF/88 - Princípio da impessoalidade na publicidade institucional."
  },
  {
    "id": 168,
    "simuladoQNum": 28,
    "category": "administrativo",
    "day": "dia6",
    "discipline": "D. Administrativo: Autotutela",
    "topic": "Simulado Oficial 01 • Questão 28",
    "question": "[Simulado 01 - Q28] A prerrogativa conferida à Administração Pública de rever seus próprios atos, anulando os ilegais e revogando os inoportunos, decorre do princípio da:",
    "options": [
      "Legalidade estrita.",
      "Autotutela.",
      "Continuidade.",
      "Razoabilidade."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Autotutela - Súmulas 346 e 473 do STF."
  },
  {
    "id": 169,
    "simuladoQNum": 29,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Organização: Desconcentração vs. Descentralização",
    "topic": "Simulado Oficial 01 • Questão 29",
    "question": "[Simulado 01 - Q29] A distribuição interna de competências e atribuições dentro de uma mesma pessoa jurídica, dando origem a órgãos públicos despersonalizados com subordinação hierárquica, denomina-se:",
    "options": [
      "Descentralização por serviços.",
      "Delegação por colaboração.",
      "Desconcentração.",
      "Terceirização administrativa."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Desconcentração - distribuição interna de competências criando órgãos."
  },
  {
    "id": 170,
    "simuladoQNum": 30,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Administração Indireta: Autarquias",
    "topic": "Simulado Oficial 01 • Questão 30",
    "question": "[Simulado 01 - Q30] Sobre as entidades que integram a Administração Pública Indireta, assinale a entidade que é criada DIRETAMENTE por lei específica e possui personalidade jurídica de direito público:",
    "options": [
      "Empresa Pública.",
      "Sociedade de Economia Mista.",
      "Fundação Pública de direito privado.",
      "Autarquia."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 37, XIX - Autarquia criada diretamente por lei específica."
  },
  {
    "id": 171,
    "simuladoQNum": 31,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Sociedades de Economia Mista: Formato",
    "topic": "Simulado Oficial 01 • Questão 31",
    "question": "[Simulado 01 - Q31] A respeito das Sociedades de Economia Mista, assinale a afirmativa correta:",
    "options": [
      "Seu capital social é integralmente pertencente ao Poder Público.",
      "Possuem personalidade jurídica de direito público e bens inpenhoráveis.",
      "Devem ser constituídas obrigatoriamente sob a forma de Sociedade Anônima (S/A).",
      "Podem adotar qualquer formato societário, como Sociedade Limitada (Ltda)."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Sociedade de Economia Mista sob forma obrigatória de S/A."
  },
  {
    "id": 172,
    "simuladoQNum": 32,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Nova Lei de Licitações: Modalidades",
    "topic": "Simulado Oficial 01 • Questão 32",
    "question": "[Simulado 01 - Q32] Segundo a Lei nº 14.133/2021 (Nova Lei de Licitações), são modalidades de licitação expressamente previstas, EXCETO:",
    "options": [
      "Pregão e Concorrência.",
      "Concurso e Leilão.",
      "Tomada de Preços e Convite.",
      "Diálogo Competitivo."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Lei 14.133/2021 extinguiu as modalidades Convite e Tomada de Preços."
  },
  {
    "id": 173,
    "simuladoQNum": 33,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Licitações: Inexigibilidade vs. Dispensa",
    "topic": "Simulado Oficial 01 • Questão 33",
    "question": "[Simulado 01 - Q33] A contratação direta com fundamento na inviabilidade de competição (como na contratação de profissional do setor artístico consagrado pela crítica especializada) caracteriza hipótese de:",
    "options": [
      "Dispensa de licitação em razão do valor.",
      "Inexigibilidade de licitação.",
      "Concorrência internacional.",
      "Alienação fiduciária."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Inexigibilidade de licitação por inviabilidade de competição (Art. 74)."
  },
  {
    "id": 174,
    "simuladoQNum": 34,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Lei Orgânica de Meruoca: Prazos de Veto",
    "topic": "Simulado Oficial 01 • Questão 34",
    "question": "[Simulado 01 - Q34] Conforme a Lei Orgânica do Município de Meruoca, o Prefeito Municipal, considerando o Projeto de Lei aprovado pela Câmara inconstitucional ou contrário ao interesse público, terá qual prazo para vetá-lo?",
    "options": [
      "10 dias corridos.",
      "20 dias úteis.",
      "30 dias corridos.",
      "15 dias úteis."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Lei Orgânica de Meruoca - Prazo de veto do prefeito: 15 dias úteis."
  },
  {
    "id": 175,
    "simuladoQNum": 35,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Lei Orgânica de Meruoca: Contas do Prefeito",
    "topic": "Simulado Oficial 01 • Questão 35",
    "question": "[Simulado 01 - Q35] O parecer prévio emitido pelo Tribunal de Contas (TCE) sobre as contas anuais prestadas pelo Prefeito de Meruoca só deixará de prevalecer por decisão de:",
    "options": [
      "Maioria simples dos vereadores presentes.",
      "Maioria absoluta dos membros da Câmara.",
      "Unanimidade dos membros da Mesa Diretora.",
      "2/3 (dois terços) dos membros da Câmara Municipal."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Quórum qualificado de 2/3 da Câmara de Meruoca para rejeitar parecer do TCE."
  },
  {
    "id": 176,
    "simuladoQNum": 36,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Regimento Interno da Câmara: Funções",
    "topic": "Simulado Oficial 01 • Questão 36",
    "question": "[Simulado 01 - Q36] No âmbito do Poder Legislativo Municipal de Meruoca, constituem funções TÍPICAS da Câmara de Vereadores:",
    "options": [
      "Legislar sobre assuntos de interesse local e fiscalizar a administração pública municipal.",
      "Executar obras públicas e administrar receitas tributárias municipais.",
      "Julgar ações penais condenatórias e expedir mandados de prisão.",
      "Promover o controle concentrado de constitucionalidade perante o STF."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Funções típicas do Poder Legislativo: legislar e fiscalizar."
  },
  {
    "id": 177,
    "simuladoQNum": 37,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Técnica Legislativa: LC nº 95/1998",
    "topic": "Simulado Oficial 01 • Questão 37",
    "question": "[Simulado 01 - Q37] Segundo a Lei Complementar nº 95/1998, a articulação e numeração dos artigos de uma lei devem ser expressas por numerais ordinais até o artigo:",
    "options": [
      "Art. 5º.",
      "Art. 10.",
      "Art. 12.",
      "Art. 9º."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. LC 95/98 - Artigos são numerados com ordinais até o 9º e cardinais a partir do 10."
  },
  {
    "id": 178,
    "simuladoQNum": 38,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Orçamento / LRF: Limite de Pessoal",
    "topic": "Simulado Oficial 01 • Questão 38",
    "question": "[Simulado 01 - Q38] Nos termos da Lei de Responsabilidade Fiscal (LC nº 101/2000), a despesa total com pessoal do Poder Legislativo Municipal (Câmara de Vereadores) não poderá exceder qual percentual da Receita Corrente Líquida (RCL)?",
    "options": [
      "2% da RCL.",
      "54% da RCL.",
      "60% da RCL.",
      "6% da RCL."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. LRF - LC 101/00 - Limite total de despesa com pessoal da Câmara: 6% da RCL."
  },
  {
    "id": 179,
    "simuladoQNum": 39,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Improbidade Administrativa: Lei 8.429/92",
    "topic": "Simulado Oficial 01 • Questão 39",
    "question": "[Simulado 01 - Q39] Com as alterações promovidas pela Lei nº 14.230/2021 na Lei de Improbidade Administrativa, a configuração de ato de improbidade exige:",
    "options": [
      "Apenas a modalidade culposa em caso de negligência comprovada.",
      "O dano material ao erário, sendo dispensada a comprovação de dolo ou culpa.",
      "A presença de Dolo Específico (intenção consciente de alcançar o resultado ilícito).",
      "A condenação prévia na esfera penal com trânsito em julgado."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Lei 14.230/2021 - Exigência de dolo específico para configuração de improbidade."
  },
  {
    "id": 180,
    "simuladoQNum": 40,
    "category": "portugues",
    "day": "dia6",
    "discipline": "Transparência: LAI - Lei 12.527/2011",
    "topic": "Simulado Oficial 01 • Questão 40",
    "question": "[Simulado 01 - Q40] Conforme a Lei de Acesso à Informação (LAI), caso o órgão público não possa fornecer o acesso imediato à informação solicitada, deverá responder ao pedido no prazo de até:",
    "options": [
      "5 dias úteis, improrrogáveis.",
      "10 dias corridos, prorrogáveis por 5 dias.",
      "30 dias úteis, sem necessidade de justificativa.",
      "20 dias corridos, prorrogáveis por mais 10 dias mediante justificativa expressa."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. LAI - Lei 12.527/11 - Prazo padrão de resposta: até 20 dias, prorrogável por 10 dias."
  },
  {
    "id": 181,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Forma de Estado & Autonomia Federativa (Art. 18)",
    "question": "Conforme o Art. 18 da Constituição Federal de 1988, a organização político-administrativa da República Federativa do Brasil compreende a União, os Estados, o Distrito Federal e os Municípios. A respeito dessa estrutura, é correto afirmar que:",
    "options": [
      "A União é soberana e os demais entes federativos não possuem autonomia administrativa ou orçamentária.",
      "Todos são entes autônomos, nos termos da Constituição, sendo vedada qualquer tentativa de secessão ou dissolução do pacto federativo.",
      "Os Municípios subordinam-se administrativamente aos Estados-membros, dependendo de autorização da Assembleia Legislativa para criar seus órgãos.",
      "O Distrito Federal pode ser dividido em Municípios autônomos por lei distrital aprovada por maioria simples."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 18, caput da CF/88: 'A organização político-administrativa da República Federativa do Brasil compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos, nos termos desta Constituição'. A República Federativa do Brasil possui SOBERANIA (no plano internacional); os entes federados (União, Estados, DF e Municípios) possuem AUTONOMIA (política, administrativa e financeira). É vedada a secessão (pacto federativo indissolúvel)."
  },
  {
    "id": 182,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Criação, Incorporação e Fusão de Municípios (Art. 18, § 4º)",
    "question": "A criação, a incorporação, a fusão e o desmembramento de Municípios, consoante o Art. 18, § 4º da CF/88 (redação da EC nº 15/96), far-se-ão por:",
    "options": [
      "Lei estadual, dentro do período determinado por lei complementar federal, e dependerão de consulta prévia, mediante plebiscito, às populações dos Municípios envolvidos, após divulgação dos Estudos de Viabilidade Municipal.",
      "Decreto legislativo da Câmara Municipal, homologado pelo Prefeito e pelo Governador do Estado.",
      "Lei complementar municipal, independentemente de plebiscito, desde que aprovada por dois terços dos vereadores.",
      "Portaria do Ministério da Justiça, mediante referendo das populações dos distritos afetados."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 18, § 4º da CF/88: Quatro requisitos cumulativos: 1. Lei Complementar Federal (fixando o período); 2. Estudos de Viabilidade Municipal (apresentados e publicados); 3. Plebiscito prévio às populações de TODOS os municípios envolvidos; 4. Lei Estadual ordinária criando/desmembrando o município."
  },
  {
    "id": 183,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Vedações Federativas (Art. 19)",
    "question": "O Art. 19 da Constituição Federal estabelece proibições expressas impostas à União, aos Estados, ao Distrito Federal e aos Municípios. Assinale a conduta expressamente VEDADA a todos esses entes:",
    "options": [
      "Manter relações de colaboração de interesse público com cultos religiosos ou igrejas na forma da lei.",
      "Criar distinções entre brasileiros ou preferências entre si.",
      "Instituir tributos municipais para a manutenção dos serviços de interesse local.",
      "Celebrar convênios de assistência mútua com órgãos de segurança pública."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 19 da CF/88 estabelece 3 vedações absolutas a todos os entes: I - Estabelecer cultos religiosos ou igrejas, subvencioná-los ou embaraçar-lhes o funcionamento (ressalvada colaboração de interesse público); II - Recusar fé aos documentos públicos; III - Criar distinções entre brasileiros ou preferências entre si."
  },
  {
    "id": 184,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Competência Privativa da União (Art. 22)",
    "question": "No padrão recorrente da banca INBRASP, assinale a matéria cuja competência legislativa é PRIVATIVA DA UNIÃO, conforme o Art. 22 da CF/88:",
    "options": [
      "Direito civil, comercial, penal, processual, eleitoral, marítimo, aeronáutico, espacial e do trabalho.",
      "Direito tributário, financeiro, penitenciário, econômico e urbanístico.",
      "Proteção ao meio ambiente e controle da poluição em âmbito local.",
      "Fomento da produção agropecuária e organização do abastecimento alimentar municipal."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 22, I da CF/88 (Mnemônico 'CAPACETE DE PIMENTA': Civil, Agrário, Penal, Aeronáutico, Comercial, Eleitoral, Trabalho, Espacial, Desapropriação, Processual, Marítimo). A opção (B) é competência concorrente da União/Estados/DF (Art. 24). A opção (C) e (D) são competências comuns (Art. 23)."
  },
  {
    "id": 185,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Delegação de Matéria Privativa da União (Art. 22, Parágrafo Único)",
    "question": "Embora as matérias do Art. 22 sejam privativas da União, a própria Constituição Federal prevê que os Estados e o DF poderão ser autorizados a legislar sobre questões específicas dessas matérias mediante:",
    "options": [
      "Medida provisória do Presidente da República.",
      "Resolução conjunta do Senado Federal e da Câmara dos Deputados.",
      "Lei complementar federal.",
      "Decreto regulamentar do Ministério da Justiça."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 22, Parágrafo único da CF/88: 'Lei complementar poderá autorizar os Estados a legislar sobre questões específicas das matérias relacionadas neste artigo'. Atenção: somente por Lei Complementar Federal (não por lei ordinária), apenas para questões específicas (não genéricas) e para todos os Estados indistintamente."
  },
  {
    "id": 186,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Competência Comum (Art. 23 da CF/88)",
    "question": "O Art. 23 da CF/88 disciplina a competência comum (material/administrativa) da União, dos Estados, do Distrito Federal e dos Municípios. Constitui exemplo de competência comum de TODOS os entes federados:",
    "options": [
      "Legislar privativamente sobre trânsito e transporte rodoviário interestadual.",
      "Cuidar da saúde e assistência pública, da proteção e garantia das pessoas com deficiência.",
      "Emitir moeda de circulação nacional e fixar taxas de câmbio cambial.",
      "Decretar o estado de sítio e o estado de defesa em todo o território nacional."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 23, II da CF/88: 'cuidar da saúde e assistência pública, da proteção e garantia das pessoas com deficiência'. É competência material compartilhada por todos os entes (União, Estados, DF e Municípios)."
  },
  {
    "id": 187,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Competência Concorrente e Exclusão do Município (Art. 24)",
    "question": "A competência legislativa CONCORRENTE prevista no Art. 24 da CF/88 (para legislar sobre direito tributário, financeiro, penitenciário, econômico e urbanístico) foi atribuída pela Constituição expressamente a:",
    "options": [
      "União, aos Estados, ao Distrito Federal e a todos os Municípios com mais de cem mil habitantes.",
      "União, aos Estados e ao Distrito Federal, não figurando os Municípios no rol desse artigo.",
      "Exclusivamente aos Municípios e ao Distrito Federal.",
      "Apenas à União e aos Municípios que possuam câmara municipal instalada."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 24, caput da CF/88: 'Compete à União, aos Estados e ao Distrito Federal legislar concorrentemente sobre...'. Os MUNICÍPIOS NÃO figuram no Art. 24! A competência dos Municípios em matéria concorrente é apenas SUPLEMENTAR à legislação federal e estadual no que couber, por força do Art. 30, II."
  },
  {
    "id": 188,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Normas Gerais vs Suplementares no Art. 24",
    "question": "No âmbito da legislação concorrente (Art. 24), a competência da União limitar-se-á a estabelecer normas gerais (§ 1º). Sobre essa dinâmica, assinale a opção correta:",
    "options": [
      "A superveniência de lei federal sobre normas gerais suspende a eficácia da lei estadual, no que lhe for contrário.",
      "A superveniência de lei federal revoga expressamente e extingue a lei estadual anterior por completo.",
      "Inexistindo lei federal sobre normas gerais, os Estados ficam impedidos de legislar sobre a matéria.",
      "A competência da União para normas gerais exclui a competência suplementar dos Estados-membros."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 24, § 4º da CF/88: 'A superveniência de lei federal sobre normas gerais suspende a eficácia da lei estadual, no que lhe for contrário'. Pegadinha favorita de concurso: a lei federal NÃO revoga a lei estadual, apenas SUSPENDE SUA EFICÁCIA naquilo que for incompatível."
  },
  {
    "id": 189,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Competência Legislativa do Município (Art. 30, I e II)",
    "question": "De acordo com o Art. 30, I e II da CF/88, compete aos Municípios:",
    "options": [
      "Legislar privativamente sobre direito processual civil e normas penais de menor potencial ofensivo.",
      "Fixar normas gerais de direito financeiro nacional com eficácia perante os Estados vizinhos.",
      "Instituir imposto sobre operações relativas à circulação de mercadorias e serviços (ICMS).",
      "Legislar sobre assuntos de interesse local e suplementar a legislação federal e a estadual no que couber."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 30 da CF/88: 'Compete aos Municípios: I - legislar sobre assuntos de interesse local; II - suplementar a legislação federal e a estadual no que couber'. É o núcleo da autonomia legislativa do Município de Meruoca."
  },
  {
    "id": 190,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Competência Municipal: Serviços Públicos e Transporte (Art. 30, V)",
    "question": "Nos termos do Art. 30, V da CF/88, compete ao Município organizar e prestar, diretamente ou sob regime de concessão ou permissão, os serviços públicos de interesse local, incluído o de:",
    "options": [
      "Energia nuclear e exploração de jazidas de petróleo na plataforma continental.",
      "Correios e telégrafos em âmbito interestadual.",
      "Transporte coletivo, que tem caráter essencial.",
      "Radiodifusão sonora e televisiva educativa regional."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 30, V da CF/88: 'organizar e prestar, diretamente ou sob regime de concessão ou permissão, os serviços públicos de interesse local, incluído o de transporte coletivo, que tem caráter essencial'."
  },
  {
    "id": 191,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Competência Municipal: Solo Urbano e Plano Diretor (Art. 30, VIII)",
    "question": "Compete aos Municípios promover, no que couber, adequado ordenamento territorial, mediante planejamento e controle do uso, do parcelamento e da ocupação do:",
    "options": [
      "Espaço aéreo nacional e rotas de aviação civil.",
      "Leito dos rios que banham mais de um Estado da Federação.",
      "Subsolo mineral e reservas de minérios estratégicos da União.",
      "Solo urbano."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 30, VIII da CF/88: 'promover, no que couber, adequado ordenamento territorial, mediante planejamento e controle do uso, do parcelamento e da ocupação do solo urbano'. É a base para a criação do Plano Diretor e do Código de Obras Municipal."
  },
  {
    "id": 192,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Lei Orgânica Municipal e Quórum de Aprovação (Art. 29)",
    "question": "O Município reger-se-á por lei orgânica, votada em dois turnos, com o interstício mínimo de dez dias, e aprovada por:",
    "options": [
      "Maioria simples dos vereadores presentes, sendo sancionada pelo Prefeito.",
      "Maioria absoluta da Câmara, com homologação obrigatória pelo Governador.",
      "Dois terços dos membros da Câmara Municipal, que a promulgará.",
      "Três quintos dos votos dos parlamentares em sessão conjunta com o Judiciário."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 29, caput da CF/88: 'O Município reger-se-á por lei orgânica, votada em dois turnos, com o interstício mínimo de dez dias, e aprovada por dois terços dos membros da Câmara Municipal, que a promulgará'. O Prefeito NÃO sanciona nem veta a Lei Orgânica; ela é PROMULGADA diretamente pela Mesa da Câmara!"
  },
  {
    "id": 193,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Limites de Subsídio dos Vereadores (Art. 29, VI)",
    "question": "O subsídio dos Vereadores será fixado pelas respectivas Câmaras Municipais em cada legislatura para a subsequente, observados os limites da CF. Em municípios de até dez mil habitantes (faixa base), o subsídio máximo do Vereador corresponderá a qual percentual do subsídio dos Deputados Estaduais?",
    "options": [
      "50% (cinquenta por cento).",
      "75% (setenta e cinco por cento).",
      "10% (dez por cento).",
      "20% (vinte por cento)."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 29, VI, 'a' da CF/88: em municípios de até 10.000 habitantes, o subsídio máximo do vereador é 20% do subsídio do Deputado Estadual. A escala sobe: 20%, 30%, 40%, 50%, 60% até 75% em municípios com mais de 500.000 habitantes."
  },
  {
    "id": 194,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Limite de Gasto com Folha de Pagamento da Câmara (Art. 29-A, § 1º)",
    "question": "A Câmara Municipal não gastará mais de qual percentual de sua receita total com folha de pagamento, incluído o gasto com o subsídio de seus Vereadores (Art. 29-A, § 1º da CF)?",
    "options": [
      "50% (cinquenta por cento).",
      "60% (sessenta por cento).",
      "80% (oitenta por cento).",
      "70% (setenta por cento)."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 29-A, § 1º da CF/88: 'A Câmara Municipal não gastará mais de setenta por cento de sua receita com folha de pagamento, incluído o gasto com o subsídio de seus Vereadores'. O descumprimento desse limite constitui crime de responsabilidade do Presidente da Câmara (Art. 29-A, § 3º)."
  },
  {
    "id": 195,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Fiscalização Contábil e Tribunal de Contas (Art. 31)",
    "question": "A fiscalização do Município será exercida pelo Poder Legislativo Municipal, mediante controle externo, e pelos sistemas de controle interno do Executivo. O controle externo da Câmara Municipal é exercido com o auxílio do:",
    "options": [
      "Tribunal de Justiça do Estado, mediante sentença transitada em julgado proferida anualmente.",
      "Tribunal de Contas do Estado (ou do Município onde houver), cujo parecer prévio só deixa de prevalecer por decisão de dois terços dos vereadores.",
      "Ministério Público Estadual, através de inquérito civil conclusivo homologado pela Mesa.",
      "Conselho Fiscal de Contabilidade Comunitária eleito pelos contribuintes locais."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 31, §§ 1º e 2º da CF/88: O controle externo é auxiliado pelo TCE. O parecer prévio do TCE sobre as contas anuais do Prefeito só pode ser rejeitado por decisão qualificada de DOIS TERÇOS (2/3) dos membros da Câmara Municipal."
  },
  {
    "id": 196,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Vedação de Novos Tribunais de Contas Municipais (Art. 31, § 4º)",
    "question": "Sobre a estrutura de controle externo das contas municipais, o Art. 31, § 4º da Constituição Federal expressamente estabelece que:",
    "options": [
      "É vedada a criação de Tribunais, Conselhos ou órgãos de Contas Municipais.",
      "Todos os municípios com mais de cinquenta mil eleitores devem instituir seu próprio Tribunal de Contas.",
      "Os Municípios podem criar órgãos de contas municipais mediante autorização prévia do Senado Federal.",
      "A fiscalização externa dos municípios dispensa a atuação de Tribunais de Contas estaduais."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Art. 31, § 4º da CF/88: 'É vedada a criação de Tribunais, Conselhos ou órgãos de Contas Municipais'. Apenas os tribunais municipais já existentes antes de 1988 (como os dos municípios de São Paulo e Rio de Janeiro) foram mantidos; é proibido criar novos."
  },
  {
    "id": 197,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Contas Municipais à Disposição dos Contribuintes (Art. 31, § 3º)",
    "question": "Conforme o Art. 31, § 3º da CF/88, as contas dos Municípios ficarão, anualmente, durante quantos dias, à disposição de qualquer contribuinte, para exame e apreciação, o qual poderá questionar-lhes a legitimidade, nos termos da lei?",
    "options": [
      "30 (trinta) dias.",
      "60 (sessenta) dias.",
      "90 (noventa) dias.",
      "15 (quinze) dias."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Art. 31, § 3º da CF/88: 'As contas dos Municípios ficarão, no decorrer de sessenta dias, anualmente, à disposição de qualquer contribuinte, para exame e apreciação, o qual poderá questionar-lhes a legitimidade, nos termos da lei'."
  },
  {
    "id": 198,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Bens da União vs Bens dos Estados (Arts. 20 e 26)",
    "question": "A Constituição Federal define expressamente os bens pertencentes à União e aos Estados. Incluem-se entre os BENS DOS ESTADOS-MEMBROS (Art. 26 da CF/88):",
    "options": [
      "Os rios que banhem mais de um Estado da Federação ou sirvam de limite com países vizinhos.",
      "Os potenciais de energia hidráulica e os recursos minerais, inclusive os do subsolo.",
      "As águas superficiais ou subterrâneas, fluentes, emergentes e em depósito, ressalvadas, neste caso, na forma da lei, as decorrentes de obras da União.",
      "As terras devolutas indispensáveis à defesa das fronteiras e fortificações militares."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Art. 26, I da CF/88. As águas que nascem e correm exclusivamente dentro do território de um único estado são bens do Estado. Rios que atravessam mais de um estado ou fazem fronteira com outro país (Art. 20, III), potenciais de energia hidráulica (Art. 20, VIII) e terras de fronteira (Art. 20, II) pertencem à UNIÃO."
  },
  {
    "id": 199,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Intervenção do Estado no Município (Art. 35 da CF/88)",
    "question": "O Estado-membro NÃO intervirá em seus Municípios, SALVO quando (Art. 35 da CF):",
    "options": [
      "O prefeito pertencer a partido político de oposição ao governador do Estado.",
      "A câmara municipal aprovar moção de desconfiança contra a diretoria do hospital municipal.",
      "O município apresentar índice de desemprego superior à média estadual no semestre.",
      "Deixar de ser paga, sem motivo de força maior, por dois anos consecutivos, a dívida fundada."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Art. 35 da CF/88: O Estado só pode intervir no Município se: I - deixar de pagar dívida fundada por 2 anos consecutivos; II - não prestar contas devidas na lei; III - não aplicar o mínimo constitucional em saúde e educação; IV - o TJ prover representação para assegurar princípios ou prover execução de lei/ordem judicial."
  },
  {
    "id": 200,
    "category": "constitucional",
    "day": "w2_d1",
    "discipline": "D. Constitucional",
    "topic": "Intervenção Federal em Municípios localizados em Estado",
    "question": "A respeito da intervenção federal em Municípios localizados dentro de um Estado-membro (como o Município de Meruoca no Estado do Ceará), é correto afirmar que:",
    "options": [
      "A União não intervém diretamente em Municípios localizados em Estados, cabendo ao próprio Estado a intervenção municipal (a intervenção federal direta em município só cabe em Território Federal).",
      "O Presidente da República pode decretar intervenção federal direta em qualquer município sem consultar o Governador do Estado.",
      "A intervenção no município é sempre realizada pelo Ministério Público Federal mediante portaria ministerial.",
      "O Governador do Estado pode intervir na União caso haja atraso no repasse do Fundo de Participação dos Estados."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Regra do Art. 35 e Art. 36 da CF: O Estado é quem intervém em seus Municípios. A União só intervém diretamente em Municípios localizados em TERRITÓRIOS FEDERAIS (Art. 35, caput)."
  },
  {
    "id": 201,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Derivação Parassintética vs Prefixal e Sufixal",
    "question": "A DERIVAÇÃO PARASSINTÉTICA ocorre quando prefixo e sufixo são agregados simultaneamente ao radical, de modo que a palavra não existe sem um deles. Assinale a alternativa que apresenta um vocábulo formado por derivação parassintética:",
    "options": [
      "Anoitecer (a + noit + ecer)",
      "Infelizmente (in + feliz + mente)",
      "Deslealdade (des + leal + dade)",
      "Reorganização (re + organiza + ção)"
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Em 'a-noit-ecer', o prefixo 'a-' e o sufixo '-ecer' foram anexados simultaneamente ao radical 'noit-'. Se retirarmos o prefixo, não existe a palavra 'noitecer'; se retirarmos o sufixo, não existe 'anoite'. Já em 'infelizmente' (B) e 'deslealdade' (C), os afixos são independentes ('infeliz' e 'felizmente' existem no idioma, configurando derivação prefixal e sufixal)."
  },
  {
    "id": 202,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Derivação Regressiva (Deverbal)",
    "question": "A derivação regressiva (ou deverbal) consiste na formação de substantivos abstratos a partir de verbos, geralmente com a redução da terminação verbal para as vogais temáticas -a, -o, -e. Assinale o vocábulo formado por DERIVAÇÃO REGRESSIVA:",
    "options": [
      "O pescador (derivado do verbo pescar)",
      "A lealdade (derivado do adjetivo leal)",
      "O antebraço (derivado do substantivo braço)",
      "O debate (derivado do verbo debater)"
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. 'O debate' é substantivo abstrato que indica ação, formado pela regressão do verbo 'debater' (perda da desinência infinitiva -r e fixação da vogal -e). Em (B), 'pescador' é derivação sufixal (-dor); em (C), 'lealdade' é derivação sufixal (-dade); em (D), 'antebraço' é derivação prefixal (ante-)."
  },
  {
    "id": 203,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Derivação Imprópria (Conversão)",
    "question": "A DERIVAÇÃO IMPRÓPRIA ocorre quando uma palavra muda de classe gramatical no contexto da oração sem que haja qualquer alteração em sua estrutura morfológica. Assinale a frase em que se constata a ocorrência de derivação imprópria:",
    "options": [
      "O servidor realizou um trabalho rápido e eficiente durante a sessão.",
      "Eles discordaram profundamente das propostas apresentadas em plenário.",
      "A comissão permanente elaborou um parecer extremamente detalhado.",
      "O 'sim' dos parlamentares foi decisivo para a promulgação da lei."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. O vocábulo 'sim' é originalmente um advérbio de afirmação. Precedido pelo artigo definido 'o' ('O sim dos parlamentares'), foi substantivado (passou a funcionar como substantivo comum), configurando típico caso de derivação imprópria ou conversão."
  },
  {
    "id": 204,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Composição por Justaposição vs Aglutinação",
    "question": "Na formação de palavras por COMPOSIÇÃO, unem-se dois ou mais radicais. Quando os elementos componentes se unem mantendo a integridade fonética e gráfica de cada um, ocorre:",
    "options": [
      "Aglutinação (ex: planalto, vinagre, pernilongo).",
      "Hibridismo morfológico greco-latino.",
      "Justaposição (ex: passatempo, pé-de-galinha, girassol).",
      "Reduplicação silábica imitativa onomatopeica."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Justaposição une palavras sem perda fonética de seus elementos (passa + tempo = passatempo; gira + sol = girassol; embora dobre o 's' para manter o som, não há supressão fonética). Na aglutinação, há perda/fusão fonética (plano + alto = planalto; vinho + acre = vinagre)."
  },
  {
    "id": 205,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Composição por Aglutinação",
    "question": "Assinale a alternativa em que AMBAS as palavras foram formadas pelo processo de COMPOSIÇÃO POR AGLUTINAÇÃO:",
    "options": [
      "Guarda-roupa e couve-flor.",
      "Beija-flor e pontapé.",
      "Planalto (plano + alto) e vinagre (vinho + acre).",
      "Segunda-feira e micro-ondas."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Em 'planalto' (plano + alto) e 'vinagre' (vinho + acre), houve alteração fonética e perda de elementos mórficos originais, caracterizando aglutinação. Todas as outras opções trazem termos compostos por justaposição."
  },
  {
    "id": 206,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Identificação do Radical",
    "question": "O RADICAL é o elemento mórfico fundamental e indivisível que contém o significado básico da palavra e é comum às palavras de uma mesma família (cognatas). Identifique a palavra que NÃO pertence à mesma família cognata das demais:",
    "options": [
      "Cabelo, cabeceira, cabeçalho e cabeçudo.",
      "Pedreiro, pedregulho, apedrejar e pedra.",
      "Livraria, livreiro, livrinho e livro.",
      "Terráqueo, terrestre, aterrar e terra."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. 'Cabelo' tem raiz etimológica ligada a pelos capilares (latim 'capillus'). Já 'cabeceira', 'cabeçalho' e 'cabeçudo' derivam do radical de 'cabeça' (latim 'capitia'). As opções A, B e C reúnem palavras legitimamente cognatas com o mesmo radical compartilhado."
  },
  {
    "id": 207,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Desinências Nominais de Gênero e Número",
    "question": "Na morfologia da Língua Portuguesa, as desinências nominais indicam gênero (masculino/feminino) e número (singular/plural). Na palavra 'MENINAS', os morfemas '-A-' e '-S' classificam-se, respectivamente, como:",
    "options": [
      "Vogal temática e sufixo aumentativo.",
      "Desinência nominal de gênero feminino e desinência nominal de número plural.",
      "Radical flexionado e consoante eufônica de ligação.",
      "Afixo derivacional e desinência verbal de pessoa."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Na estrutura 'MENIN-A-S': 'menin-' é o radical; '-a-' é a desinência nominal de gênero feminino; '-s' é a desinência nominal de número plural."
  },
  {
    "id": 208,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Vogal Temática Verbal e Tema",
    "question": "A VOGAL TEMÁTICA liga o radical às desinências e indica a conjugação verbal (1ª -a, 2ª -e, 3ª -i). O radical somado à vogal temática constitui o:",
    "options": [
      "Afixo composto.",
      "Cognato absoluto.",
      "Morfema zero.",
      "Tema."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Na morfologia verbal: Radical + Vogal Temática = TEMA. Exemplo: no verbo 'cantar', 'cant-' é o radical e '-a-' é a vogal temática da 1ª conjugação. O tema é 'canta-'."
  },
  {
    "id": 209,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Vogais e Consoantes de Ligação",
    "question": "Vogais e consoantes de ligação são elementos fonéticos eufônicos inseridos entre morfemas unicamente para facilitar a pronúncia, desprovidos de significado gramatical próprio. Há uma CONSOANTE DE LIGAÇÃO na palavra:",
    "options": [
      "Infelizmente (in + feliz + mente)",
      "Desleal (des + leal)",
      "Cafeteira (café + -t- + eira)",
      "Pedrada (pedra + ada)"
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Em 'café' + '-eira', a junção direta geraria o cacófato 'cafeeira'. Inseriu-se a consoante eufônica '-t-' (cafeteira) exclusivamente para fluidez fonética. Outros exemplos: pau-l-ada, cha-l-eira."
  },
  {
    "id": 210,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Hibridismo",
    "question": "O processo de formação de palavras em que ocorre a junção de elementos mórficos originários de IDIOMAS DIFERENTES é denominado:",
    "options": [
      "Neologismo fonético espontâneo.",
      "Hibridismo (ex: televisão: tele grego + visão latim; burocracia: bureau francês + cracia grego).",
      "Siglonimização e acrônimo.",
      "Onomatopeia imitativa de ruídos."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Hibridismo é a formação de uma palavra com radicais ou afixos de línguas distintas. Exemplos clássicos: Televisão (tele = grego, visão = latim), Burocracia (bureau = francês, cracia = grego), Automóvel (auto = grego, móvel = latim)."
  },
  {
    "id": 211,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Onomatopeia",
    "question": "Assinale a alternativa que apresenta vocábulos formados por ONOMATOPEIA (reprodução aproximada de sons ou ruídos da natureza e de objetos):",
    "options": [
      "Amanhecer, entardecer e anoitecer.",
      "Fidalgo, aguardente e pernalta.",
      "Couve-flor, guarda-chuva e girassol.",
      "Tic-tac, zunzum, miau e coaxar."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. A onomatopeia consiste na criação de vocábulos que buscam imitar sons ou ruídos reais: tic-tac (relógio), zunzum (zumbido), miau (gato), coaxar (sapo), pingue-pongue."
  },
  {
    "id": 212,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Derivação Prefixal com Prefixo Negativo",
    "question": "Os prefixos 'in-' (latim) e 'a-' (grego) denotam privação ou negação. Assinale a opção em que AMBAS as palavras apresentam prefixos com valor semântico de NEGAÇÃO:",
    "options": [
      "Importar e adjunto.",
      "Inativo e atípico.",
      "Progresso e antebraço.",
      "Submarino e supersensível."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. 'Inativo' = não ativo (in- negativo latino); 'Atípico' = não típico (a- de privação grego). Em (B), 'importar' traz o 'in-' com sentido de movimento para dentro; em (C), 'pro-' denota para a frente; em (D), 'sub-' significa debaixo."
  },
  {
    "id": 213,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Sufixos Formadores de Substantivos Abstratos",
    "question": "Os sufixos nominalizadores transformam verbos ou adjetivos em substantivos. O sufixo presente em 'ORGANIZAÇÃO' (-ção) indica precipuamente a noção de:",
    "options": [
      "Ação ou resultado de uma ação.",
      "Lugar ou estabelecimento comercial.",
      "Profissão ou agente executor.",
      "Grau diminutivo pejorativo."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. O sufixo '-ção' (organiza + ção, promulga + ção, delibera + ção) é um sufixo nominalizador deverbal que exprime o ato, ação ou o resultado da ação do verbo."
  },
  {
    "id": 214,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Siglas e Acrônimos",
    "question": "No vocabulário administrativo e legislativo, as palavras formadas pela combinação das letras ou sílabas iniciais de uma denominação composta (ex: MERCOSUL, UNESCO, EMBRAPA) que podem ser pronunciadas como uma palavra comum denominam-se:",
    "options": [
      "Estrangeirismos arcaicos.",
      "Derivações parassintéticas truncadas.",
      "Acrônimos.",
      "Arcaísmos de composição por justaposição."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Acrônimo é a sigla que se pronuncia como uma palavra contínua e natural da língua (ex: Embrapa, Mercosul, Petrobras, Unesco). Diferencia-se das siglas puras que exigem soletração letra a letra (ex: CPF, OAB, IPTU)."
  },
  {
    "id": 215,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Neologismo",
    "question": "O processo linguístico pelo qual novos termos são criados ou importados para suprir a necessidade de nomear novos conceitos científicos, tecnológicos ou socioculturais (ex: 'deletar', 'tuitar', 'printar') é chamado de:",
    "options": [
      "Solecismo de regência.",
      "Pleonasmo de reforço.",
      "Neologismo.",
      "Ambiguidade estilística."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. Neologismo é a criação de palavras novas ou a atribuição de novos significados a termos preexistentes na língua, refletindo inovações da sociedade e tecnologia."
  },
  {
    "id": 216,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Palavra Primitiva vs Derivada",
    "question": "Em relação à relação morfológica entre primitivo e derivado, assinale o par em que a segunda palavra é DERIVADA da primeira:",
    "options": [
      "Lei -> Legalizar.",
      "História -> Histórico (ambas são primitivas).",
      "Vento -> Ventania (ambas são formadas por composição).",
      "Flor -> Floricultura (formada unicamente por hibridismo)."
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. 'Lei' é vocábulo primitivo (não se origina de outra palavra na língua portuguesa). 'Legalizar' é derivada de 'legal' (sua vez derivada de lei) por sufixação (-izar)."
  },
  {
    "id": 217,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Abreviatura vs Sigla vs Redução (Abreviação Vocabular)",
    "question": "O processo de ABREVIAÇÃO VOCABULAR (ou redução) consiste na eliminação de uma parte da palavra a fim de economizar tempo e esforço na comunicação falada ou escrita. Assinale o exemplo de abreviação vocabular:",
    "options": [
      "OAB (Ordem dos Advogados do Brasil).",
      "Passatempo (de passa + tempo).",
      "Amanhecer (de a + manhã + ecer).",
      "Foto (de fotografia), moto (de motocicleta) e fone (de telefone)."
    ],
    "correctAnswer": 3,
    "commentary": "Gabarito: D. Abreviação vocabular (ou redução) é a redução de uma palavra longa mantendo o significado original: foto (fotografia), moto (motocicleta), fone (telefone), quilo (quilograma), cine (cinema)."
  },
  {
    "id": 218,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Desinência Modo-Temporal Verbal",
    "question": "Na forma verbal 'ESTUDÁVAMOS', o segmento mórfico '-VA-' classifica-se como:",
    "options": [
      "Desinência número-pessoal (indica primeira pessoa do plural).",
      "Desinência modo-temporal (indica pretérito imperfeito do modo indicativo).",
      "Vogal de ligação eufônica.",
      "Sufixo adverbializatório de intensidade."
    ],
    "correctAnswer": 1,
    "commentary": "Gabarito: B. Em 'estud-á-va-mos': 'estud-' é o radical; '-a-' é a vogal temática; 'estuda-' é o tema; '-va-' é a desinência modo-temporal (DMT) do pretérito imperfeito do indicativo; '-mos' é a desinência número-pessoal (DNP) de 1ª pessoa do plural."
  },
  {
    "id": 219,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Análise Estrutural Completa de Vocábulo",
    "question": "Assinale a alternativa em que a divisão mórfica do vocábulo 'DESALINHAMENTO' e a identificação de seus elementos estão inteiramente corretas:",
    "options": [
      "Desalinha- (radical único) + -mento (desinência de número).",
      "Des- (afixo flexional) + alinhamento (palavra composta por aglutinação).",
      "Des- (prefixo) + alinh- (radical) + -a- (vogal temática) + -mento (sufixo derivacional formador de substantivo).",
      "De- (prefixo) + salinha (radical) + -mento (sufixo aumentativo)."
    ],
    "correctAnswer": 2,
    "commentary": "Gabarito: C. 'Desalinhamento' estrutura-se por: Prefixo 'des-' (sentido de negação/inversão) + Radical 'alinh-' (de linha) + Vogal temática '-a-' + Sufixo nominalizador '-mento' (formador de substantivo abstrato que indica ação ou resultado)."
  },
  {
    "id": 220,
    "category": "portugues",
    "day": "w2_d1",
    "discipline": "Língua Portuguesa",
    "topic": "Identificação Geral dos Processos em Concurso",
    "question": "Relacione as colunas quanto ao processo de formação de palavras:\n(1) Justaposição\n(2) Aglutinação\n(3) Parassíntese\n(4) Derivação Imprópria\n\n( ) Envergonhar\n( ) Guarda-noturno\n( ) O olhar triste da testemunha\n( ) Pernalta\n\nA sequência correta de preenchimento, de cima para baixo, é:",
    "options": [
      "3 — 1 — 4 — 2",
      "1 — 3 — 2 — 4",
      "3 — 2 — 1 — 4",
      "4 — 1 — 3 — 2"
    ],
    "correctAnswer": 0,
    "commentary": "Gabarito: A. Envergonhar: en- + vergonh- + -ar (parassíntese: 3); Guarda-noturno: guarda + noturno sem perda (justaposição: 1); O olhar triste: 'olhar' substantivado pelo artigo 'o' (derivação imprópria: 4); Pernalta: perna + alta com perda da vogal 'a' (aglutinação: 2). Sequência: 3, 1, 4, 2."
  }
];

// =========================================================================
// CRONOGRAMA COMPLETO DAS 7 SEMANAS (31/08 a 18/10/2026)
// =========================================================================
const WEEKS_DATA = [
  {
    weekNumber: 1,
    title: "Semana 1 (31/08 a 06/09)",
    focus: "Constituição + Português + Fundamentos Administrativos",
    days: [
      {
        id: "w1_d1",
        dayLabel: "Segunda-feira",
        date: "31/08/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Português — Interpretação de Textos",
            details: "Situação comunicativa, pressuposto, inferência, ambiguidade, ironia, polissemia, intertextualidade e linguagem não verbal.",
            tasks: ["40m Teoria & Exemplos", "20m Esquemas & Anotações", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "D. Constitucional — Arts. 1º a 4º da CF/88",
            details: "Fundamentos da República, separação de poderes, objetivos fundamentais e princípios das relações internacionais.",
            tasks: ["40m Teoria & CF Seca", "20m Leitura dos Arts. 1º a 4º", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 questões de Português + 15 questões de Constitucional. Registro dos erros e pegadinhas.",
            tasks: ["15 Questões Português", "15 Questões Constitucional", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w1_d2",
        dayLabel: "Terça-feira",
        date: "01/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "D. Constitucional — Art. 5º da CF/88",
            details: "Direitos individuais, direitos coletivos, garantias e introdução aos remédios constitucionais (HC, HD, MS, MI, AP).",
            tasks: ["40m Teoria Art. 5º", "20m Leitura dos Incisos", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Português — Tipos e Gêneros Textuais",
            details: "Narrativo, descritivo, expositivo, argumentativo, instrucional, propaganda, editorial, cartaz, ofício, carta comercial.",
            tasks: ["40m Teoria dos Gêneros", "20m Diferenciação Prática", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 questões de Constitucional (Art. 5º) + 15 de Português. Registrar no caderno de erros.",
            tasks: ["15 Questões Art. 5º", "15 Questões Tipos Textuais", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w1_d3",
        dayLabel: "Quarta-feira",
        date: "02/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "D. Administrativo — Princípios e Organização",
            details: "Conceito, princípios expressos (LIMPE) e implícitos, administração direta vs. indireta, autarquias, fundações e empresas públicas.",
            tasks: ["40m Teoria Organização", "20m Esquema Direta/Indireta", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Informática — Ambientes & Hardware",
            details: "Windows 11, Ubuntu Linux, gerenciamento de arquivos/pastas, arquitetura básica de computadores, backup e restauração.",
            tasks: ["40m Teoria SO & Hardware", "20m Atalhos e Procedimentos", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 questões de Administrativo + 15 de Informática.",
            tasks: ["15 Questões D. Admin", "15 Questões Informática", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w1_d4",
        dayLabel: "Quinta-feira",
        date: "03/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Português — Fonologia, Ortografia & Acentuação",
            details: "Regras de acentuação (proparoxítonas e hiatos na INBRASP), novo acordo ortográfico, divisão silábica e emprego da crase.",
            tasks: ["40m Teoria & Regras de Acentuação", "20m Memorização e Casos de Crase", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "D. Constitucional — Arts. 6º a 11 (Direitos Sociais)",
            details: "Direitos sociais fundamentais, direitos dos trabalhadores, licença-maternidade/paternidade, FGTS, greve e liberdade sindical.",
            tasks: ["40m Leitura dos Arts. 6º–11 da CF", "20m Mnemônicos dos Direitos Sociais", "10m Recuperação Ativa"]
          },
          {
            badge: "Pílula Lei Seca • 25m",
            subject: "Lei Orgânica de Meruoca — Arts. 1º ao 15",
            details: "Leitura da lei seca: Princípios fundamentais do município, competências privativas e competências comuns com Estado/União.",
            tasks: ["15m Leitura dos Arts. 1º a 15", "10m Anotação de Competências Privativas"]
          },
          {
            badge: "Treino de Alto Nível • 1h40",
            subject: "40 Questões INBRASP + Caderno de Erros",
            details: "20 questões de Português (ortografia/crase) + 20 questões de D. Constitucional.",
            tasks: ["20 Questões Português", "20 Questões Constitucional", "30m Registro no Caderno de Erros"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w1_d5",
        dayLabel: "Sexta-feira",
        date: "04/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "D. Administrativo — Poderes Administrativos & Atributos",
            details: "Poder vinculado, discricionário, hierárquico, disciplinar, regulamentar e poder de polícia. Atributos do ato (PATI).",
            tasks: ["40m Teoria Poderes & Atributos", "20m Quadro Comparativo e Mnemônico PATI", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Informática — Algoritmos, Fluxogramas & Noções de Python",
            details: "Fundamentos de lógica de programação, pseudocódigos, estruturas condicionais (if/else), laços (for/while) e noções de Python (Edital pág. 21).",
            tasks: ["40m Teoria de Algoritmos & Fluxogramas", "20m Estruturas de Repetição & Python Básico", "10m Recuperação Ativa"]
          },
          {
            badge: "Pílula Lei Seca • 25m",
            subject: "Lei Orgânica de Meruoca — Arts. 16 ao 30",
            details: "Organização do Poder Legislativo Municipal, composição da Câmara, posse, suplência e prerrogativas dos Vereadores.",
            tasks: ["15m Leitura dos Arts. 16 a 30", "10m Destaque de Quóruns e Inviolabilidade"]
          },
          {
            badge: "Treino de Alto Nível • 1h40",
            subject: "40 Questões INBRASP + Caderno de Erros",
            details: "20 questões de Poderes Administrativos + 20 de Informática/Lógica.",
            tasks: ["20 Questões Poderes", "20 Questões Informática/Algoritmos", "30m Registro no Caderno de Erros"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w1_d6",
        dayLabel: "Sábado",
        date: "05/09/2026",
        blocks: [
          {
            badge: "Simulado 1 • 3h00",
            subject: "SIMULADO 1 — 40 Questões",
            details: "Simulação real: 20 Gerais + 20 Específicas, sem consulta, 4 alternativas por questão. Foco em cronometragem.",
            tasks: ["Realizar Simulado (3 horas)", "Preencher Cartão-Resposta", "Classificar Erros por Cores"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w1_d7",
        dayLabel: "Domingo",
        date: "06/09/2026",
        blocks: [
          {
            badge: "Revisão • 2h30",
            subject: "Correção Profunda do Simulado + Revisão CF",
            details: "Análise profunda de cada erro do Simulado 1. Revisão da CF/88 arts. 1º a 11 + 20 questões dos assuntos errados.",
            tasks: ["Correção Analítica Simulado", "Revisão CF Arts. 1º–11", "20 Questões de Reforço"]
          }
        ],
        targetQuestions: 20
      }
    ]
  },
  {
    weekNumber: 2,
    title: "Semana 2 (07/09 a 13/09)",
    focus: "Poder Legislativo + Processo Legislativo + Português + LC 95",
    days: [
      {
        id: "w2_d1",
        dayLabel: "Segunda-feira",
        date: "07/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "D. Constitucional — Organização do Estado",
            details: "União, Estados, Municípios e DF. Competências privativas, comuns e suplementares municipais (CF arts. 18–31).",
            tasks: ["40m Teoria Arts. 18–31", "20m Foco em Municípios", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Português — Estrutura e Formação de Palavras",
            details: "Derivação (prefixal, sufixal, parassintética, regressiva, imprópria), composição e classes gramaticais.",
            tasks: ["40m Teoria Formação", "20m Exemplos e Prefixos", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 questões de Organização do Estado + 15 de Formação de Palavras.",
            tasks: ["15 Questões Const.", "15 Questões Port.", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w2_d2",
        dayLabel: "Terça-feira",
        date: "08/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Técnico Legislativo — O Poder Legislativo",
            details: "Funções típicas (legislar e fiscalizar) e atípicas (administrar e julgar), Legislativo municipal e representação parlamentar.",
            tasks: ["40m Teoria Poder Legislativo", "20m Atribuições e Funções", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Português — Morfologia & Verbos",
            details: "Verbos, tempos e modos verbais, flexão verbal e nominal, formas nominais e correlação verbal.",
            tasks: ["40m Teoria Verbos", "20m Conjugação e Tempos", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 questões de Legislativo + 15 de Verbos.",
            tasks: ["15 Questões Legislativo", "15 Questões Verbos", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w2_d3",
        dayLabel: "Quarta-feira",
        date: "09/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Processo Legislativo — Espécies & Proposições",
            details: "Espécies normativas (CF art. 59), iniciativa das leis, tramitação, projetos, emendas, substitutivos e pareceres.",
            tasks: ["40m Teoria Espécies Normativas", "20m Fluxo de Tramitação", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Informática — Pacote Office & Google Workspace",
            details: "Word/Docs (formatação, estilos), Excel/Sheets (fórmulas básicas, soma, média, SE), PowerPoint/Slides.",
            tasks: ["40m Teoria e Prática Office", "20m Fórmulas Excel", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 questões de Processo Legislativo + 15 de Office/Docs.",
            tasks: ["15 Questões Proc. Leg.", "15 Questões Office", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w2_d4",
        dayLabel: "Quinta-feira",
        date: "10/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Processo Legislativo — Comissões e Fases Finais",
            details: "Comissões permanentes e temporárias, sessões, discussão, votação, quóruns, sanção, veto e promulgação.",
            tasks: ["40m Teoria Comissões & Veto", "20m Prazos de Sanção e Veto", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Matemática — Razão, Proporção & Porcentagem",
            details: "Razão, proporção, regra de três simples e composta, cálculo de porcentagem e aumentos/descontos.",
            tasks: ["40m Métodos de Resolução", "20m Prática de Problemas", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 questões de Processo Legislativo + 15 de Matemática Comercial.",
            tasks: ["15 Questões Proc. Leg.", "15 Questões Matemática", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w2_d5",
        dayLabel: "Sexta-feira",
        date: "11/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Técnica Legislativa — LC 95/1998",
            details: "Estrutura dos atos normativos, articulação (artigo, parágrafo, inciso, alínea, item), redação, alteração e vigência.",
            tasks: ["40m Leitura da LC 95/98", "20m Regras de Articulação", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Português — Sintaxe da Oração",
            details: "Termos da oração: sujeito, predicado, transitividade verbal, objetos, complementos, adjuntos e aposto.",
            tasks: ["40m Teoria Sintaxe", "20m Análise de Frases", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 questões de LC 95/98 + 15 de Termos da Oração.",
            tasks: ["15 Questões LC 95", "15 Questões Sintaxe", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w2_d6",
        dayLabel: "Sábado",
        date: "12/09/2026",
        blocks: [
          {
            badge: "Simulado 2 • 3h00",
            subject: "SIMULADO 2 — 40 Questões",
            details: "Simulação completa no padrão oficial de prova. Foco em ritmo e segurança nas respostas.",
            tasks: ["Executar Simulado 2", "Marcar Tempo por Questão", "Classificar Desempenho"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w2_d7",
        dayLabel: "Domingo",
        date: "13/09/2026",
        blocks: [
          {
            badge: "Revisão • 2h30",
            subject: "Correção + Lei Seca CF Arts. 1º a 31",
            details: "Correção do Simulado 2 + Revisão completa dos arts. 1º–5º, 6º–11, 18–19 e 29–31 da CF.",
            tasks: ["Correção Simulado 2", "Leitura Lei Seca CF", "20 Questões dos Erros"]
          }
        ],
        targetQuestions: 20
      }
    ]
  },
  {
    weekNumber: 3,
    title: "Semana 3 (14/09 a 20/09)",
    focus: "Atos Administrativos + Lei 14.133 + Lei Orgânica de Meruoca",
    days: [
      {
        id: "w3_d1",
        dayLabel: "Segunda-feira",
        date: "14/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "D. Administrativo — Atos Administrativos (Parte 1)",
            details: "Conceito, requisitos/elementos (COMFIFOR), atributos (PATI), classificação e espécies.",
            tasks: ["40m Requisitos e Atributos", "20m Espécies de Atos", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Português — Período Composto",
            details: "Coordenação (aditivas, adversativas, etc.) e subordinação (substantivas, adjetivas, adverbiais).",
            tasks: ["40m Teoria Conjunções", "20m Quadro de Conectivos", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 de Atos Administrativos + 15 de Conjunções/Período Composto.",
            tasks: ["15 Questões Atos", "15 Questões Conjunções", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w3_d2",
        dayLabel: "Terça-feira",
        date: "15/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "D. Administrativo — Extinção de Atos",
            details: "Anulação, revogação, cassação, caducidade, convalidação (FO-CO), vinculação e discricionariedade.",
            tasks: ["40m Anulação vs Revogação", "20m Convalidação", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Matemática — Sistema Monetário & Medidas",
            details: "Unidades de medida (comprimento, área, massa, capacidade), conversão de unidades e cálculos financeiros.",
            tasks: ["40m Conversão de Unidades", "20m Resolução de Problemas", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 de Atos/Extinção + 15 de Medidas e Matemática.",
            tasks: ["15 Questões Extinção Atos", "15 Questões Medidas", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w3_d3",
        dayLabel: "Quarta-feira",
        date: "16/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Lei 14.133/2021 — Licitações (Parte 1)",
            details: "Princípios, agentes públicos, planejamento, modalidades (pregão, concorrência, concurso, leilão, diálogo competitivo) e critérios.",
            tasks: ["40m Modalidades e Critérios", "20m Agente de Contratação", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Informática — Redes & Internet",
            details: "Internet, Intranet, conceitos de navegação, navegadores (Chrome, Edge, Firefox), pesquisa avançada e protocolos básicos.",
            tasks: ["40m Teoria Redes", "20m Navegadores & Recursos", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "20 da Lei 14.133/2021 + 10 de Informática.",
            tasks: ["20 Questões Lei 14.133", "10 Questões Redes", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w3_d4",
        dayLabel: "Quinta-feira",
        date: "17/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Lei 14.133/2021 — Contratos & Sanções",
            details: "Contratação direta (inexigibilidade vs dispensa), contratos administrativos, alteração, fiscalização e sanções.",
            tasks: ["40m Inexigibilidade vs Dispensa", "20m Gestão Contratual", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Português — Concordância Verbal & Nominal",
            details: "Regras gerais e casos especiais: verbos impessoais (haver, fazer), sujeito partitivo, porcentagem e concordância atrativa.",
            tasks: ["40m Regras de Concordância", "20m Casos Especiais", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "20 da Lei 14.133 + 10 de Concordância.",
            tasks: ["20 Questões Lei 14.133", "10 Questões Concordância", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w3_d5",
        dayLabel: "Sexta-feira",
        date: "18/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Lei Orgânica de Meruoca — Estrutura e Poderes",
            details: "Competências do Município, Poder Legislativo municipal, competências da Câmara, vereadores, inviolabilidade e processo legislativo municipal.",
            tasks: ["40m Leitura Lei Orgânica", "20m Ficha de Competências", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Matemática — Geometria Básica",
            details: "Perímetro, área de figuras planas (quadrado, retângulo, triângulo, círculo), volume de paralelepípedos.",
            tasks: ["40m Fórmulas Geométricas", "20m Exercícios de Área/Volume", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "20 de Lei Orgânica + 10 de Geometria.",
            tasks: ["20 Questões Lei Orgânica", "10 Questões Geometria", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w3_d6",
        dayLabel: "Sábado",
        date: "19/09/2026",
        blocks: [
          {
            badge: "Simulado 3 • 3h00",
            subject: "SIMULADO 3 — 40 Questões",
            details: "Simulação completa. Atenção especial às questões de Licitações e Lei Orgânica.",
            tasks: ["Executar Simulado 3", "Verificar Tempo", "Classificar Erros"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w3_d7",
        dayLabel: "Domingo",
        date: "20/09/2026",
        blocks: [
          {
            badge: "Revisão • 2h30",
            subject: "Correção + Bateria Lei Orgânica & 14.133",
            details: "Correção do Simulado 3 + 30 questões direcionadas de Lei Orgânica e Lei 14.133. Último dia de inscrições no concurso!",
            tasks: ["Correção Simulado 3", "30 Questões LO & 14.133", "Checagem de Inscrição"]
          }
        ],
        targetQuestions: 30
      }
    ]
  },
  {
    weekNumber: 4,
    title: "Semana 4 (21/09 a 27/09)",
    focus: "Regimento Interno + Orçamento + LRF + LGPD",
    days: [
      {
        id: "w4_d1",
        dayLabel: "Segunda-feira",
        date: "21/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Regimento Interno da Câmara de Meruoca (Parte 1)",
            details: "Organização da Câmara, composição da Mesa Diretora, competências do Presidente, sessões legislativas (ordinárias, extraordinárias).",
            tasks: ["40m Leitura Regimento", "20m Esquema da Mesa Diretora", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Português — Regência Verbal & Nominal + Crase",
            details: "Regência dos verbos comuns em concursos (visar, aspirar, assistir, obedecer), preposições obrigatórias e regras de crase.",
            tasks: ["40m Regência & Crase", "20m Casos Proibidos/Facultativos", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "20 do Regimento Interno + 10 de Regência/Crase.",
            tasks: ["20 Questões Regimento", "10 Questões Crase/Regência", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w4_d2",
        dayLabel: "Terça-feira",
        date: "22/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Regimento Interno da Câmara (Parte 2)",
            details: "Comissões, atribuições, proposições (requerimentos, indicações, moções, projetos), tramitação, quóruns de votação e plenário.",
            tasks: ["40m Proposições e Quóruns", "20m Prazos Regimentais", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "RLM — Lógica de Argumentação & Problemas",
            details: "Estrutura lógica, premissas e conclusões, problemas de contagem simples, diagramas de Venn e porcentagem aplicada.",
            tasks: ["40m Teoria e Diagramas", "20m Resolução Prática", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "20 do Regimento + 10 de RLM.",
            tasks: ["20 Questões Regimento", "10 Questões RLM", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w4_d3",
        dayLabel: "Quarta-feira",
        date: "23/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Orçamento Público — PPA, LDO e LOA",
            details: "Princípios orçamentários (anualidade, universalidade, unidade, exclusividade), PPA (4 anos), LDO (metas/diretrizes), LOA.",
            tasks: ["40m Teoria PPA/LDO/LOA", "20m Relação entre os Três", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Informática — Comunicação Digital & E-mail",
            details: "Correio eletrônico (Thunderbird, webmail, campos Cco/Cc), ferramentas de colaboração digital (WhatsApp, Telegram, Discord).",
            tasks: ["40m Ferramentas de Correio", "20m Protocolos SMTP/IMAP/POP", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 de Orçamento + 15 de Informática.",
            tasks: ["15 Questões Orçamento", "15 Questões Informática", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w4_d4",
        dayLabel: "Quinta-feira",
        date: "24/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "LRF — Lei Complementar 101/2000",
            details: "Responsabilidade fiscal, receitas públicas, despesas, limites de despesa com pessoal (Poder Legislativo), transparência e RREO/RGF.",
            tasks: ["40m Limites da LRF", "20m Gastos do Legislativo", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Português — Colocação Pronominal",
            details: "Próclise (fatores atrativos), ênclise e mesóclise. Posição dos pronomes átonos nas locuções verbais.",
            tasks: ["40m Fatores de Próclise", "20m Regras Especiais", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 de LRF + 15 de Colocação Pronominal.",
            tasks: ["15 Questões LRF", "15 Questões Colocação", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w4_d5",
        dayLabel: "Sexta-feira",
        date: "25/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "LGPD — Lei 13.709/2018",
            details: "Dado pessoal, dado sensível, tratamento, princípios, bases legais, controlador, operador, encarregado (DPO) e direitos do titular.",
            tasks: ["40m Conceitos e Bases Legais", "20m Agentes de Tratamento", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Políticas Públicas — Conceitos e Ciclo",
            details: "Ciclo de políticas públicas (agenda, formulação, tomada de decisão, implementação, avaliação), controle e participação.",
            tasks: ["40m Ciclo de Políticas", "20m Fases de Avaliação", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 de LGPD + 15 de Políticas Públicas.",
            tasks: ["15 Questões LGPD", "15 Questões Políticas", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w4_d6",
        dayLabel: "Sábado",
        date: "26/09/2026",
        blocks: [
          {
            badge: "Simulado 4 • 3h00",
            subject: "SIMULADO 4 — 40 Questões",
            details: "Simulação de prova. Testar equilíbrio de tempo entre matérias gerais e específicas.",
            tasks: ["Executar Simulado 4", "Marcar Tempo", "Estatísticas de Acertos"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w4_d7",
        dayLabel: "Domingo",
        date: "27/09/2026",
        blocks: [
          {
            badge: "Revisão • 2h30",
            subject: "Correção + Revisão Regimento/LRF/LGPD",
            details: "Correção aprofundada do Simulado 4 e consolidação de Regimento + Orçamento/LRF + LGPD.",
            tasks: ["Correção Simulado 4", "Revisão de Artigos-Chave", "Caderno de Erros"]
          }
        ],
        targetQuestions: 20
      }
    ]
  },
  {
    weekNumber: 5,
    title: "Semana 5 (28/09 a 04/10)",
    focus: "Controle + Gestão Pública + Transparência + Políticas Públicas",
    days: [
      {
        id: "w5_d1",
        dayLabel: "Segunda-feira",
        date: "28/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Controle da Administração Pública",
            details: "Controle interno e externo (Legislativo auxiliado pelo TCE), tomada e prestação de contas, julgamento das contas do Prefeito.",
            tasks: ["40m Teoria do Controle", "20m Parecer Prévio do TCE", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Português — Semântica & Sentido dos Vocábulos",
            details: "Sinonímia, antonímia, homonímia, paronímia, hiperonímia, hiponímia, sentido denotativo vs. conotativo.",
            tasks: ["40m Relações Semânticas", "20m Parônimos Frequentes", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 de Controle da Administração + 15 de Semântica.",
            tasks: ["15 Questões Controle", "15 Questões Semântica", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w5_d2",
        dayLabel: "Terça-feira",
        date: "29/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Responsabilidade Civil do Estado",
            details: "Art. 37, § 6º da CF/88, responsabilidade objetiva do Estado (teoria do risco administrativo), direito de regresso, excludentes.",
            tasks: ["40m Teoria da Resp. Civil", "20m Ação Regressiva e Dolo/Culpa", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Matemática — Estatística Básica",
            details: "Média aritmética simples e ponderada, moda, mediana, leitura e interpretação de gráficos e tabelas.",
            tasks: ["40m Média, Moda e Mediana", "20m Exercícios Práticos", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 de Responsabilidade Civil + 15 de Estatística.",
            tasks: ["15 Questões Resp. Civil", "15 Questões Estatística", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w5_d3",
        dayLabel: "Quarta-feira",
        date: "30/09/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Improbidade Administrativa — Lei 8.429/92",
            details: "Atos que causam enriquecimento ilícito (art. 9º), prejuízo ao erário (art. 10), atentam contra princípios (art. 11), dolo e sanções.",
            tasks: ["40m Hipóteses de Improbidade", "20m Sanções e Prazos", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Informática — Cloud Computing",
            details: "Conceitos de nuvem, modelos de serviço (IaaS, PaaS, SaaS), modelos de implantação (pública, privada, híbrida), provedores.",
            tasks: ["40m IaaS vs PaaS vs SaaS", "20m Modelos de Nuvem", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 de Improbidade + 15 de Cloud Computing.",
            tasks: ["15 Questões Improbidade", "15 Questões Cloud", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w5_d4",
        dayLabel: "Quinta-feira",
        date: "01/10/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Gestão Pública & Arquivística",
            details: "Planejamento estratégico na Câmara, gestão de processos, gestão de pessoas, gestão documental (protocolo, arquivo, guarda, eliminação).",
            tasks: ["40m Teoria de Gestão e Arquivos", "20m Fases da Gestão Documental", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Português — Figuras de Linguagem & Reescrita",
            details: "Metáfora, metonímia, antítese, paradoxo, eufemismo, hipérbole, ironia, paráfrase e reescritura de orações.",
            tasks: ["40m Figuras e Reescrita", "20m Questões de Substituição", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 de Gestão Pública/Arquivos + 15 de Figuras/Reescrita.",
            tasks: ["15 Questões Gestão", "15 Questões Português", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w5_d5",
        dayLabel: "Sexta-feira",
        date: "02/10/2026",
        blocks: [
          {
            badge: "Bloco 1 • 1h10",
            subject: "Governança, Compliance & Controle Social",
            details: "Agenda legislativa, indicadores de desempenho, transparência pública, LAI (Lei 12.527/11), ouvidoria e participação popular.",
            tasks: ["40m Teoria Governança e LAI", "20m Regras de Sigilo da LAI", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 2 • 1h10",
            subject: "Informática — Segurança da Informação",
            details: "Malware (vírus, worm, trojan, spyware, ransomware, phishing), ferramentas de proteção (antivírus, firewall) e boas práticas.",
            tasks: ["40m Ameaças e Golpes", "20m Ferramentas de Proteção", "10m Recuperação Ativa"]
          },
          {
            badge: "Bloco 3 & 4 • 1h40",
            subject: "30 Questões + Caderno de Erros",
            details: "15 de Governança/LAI + 15 de Segurança da Informação.",
            tasks: ["15 Questões LAI/Gov", "15 Questões Segurança", "30m Caderno de Erros"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w5_d6",
        dayLabel: "Sábado",
        date: "03/10/2026",
        blocks: [
          {
            badge: "Simulado 5 • Velocidade",
            subject: "SIMULADO 5 — 40 Questões (Treino de Agilidade)",
            details: "Tentar terminar entre 2h20 e 2h40 para criar margem de segurança no preenchimento do gabarito.",
            tasks: ["Executar Simulado 5", "Concluir em < 2h40", "Classificar Erros"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w5_d7",
        dayLabel: "Domingo",
        date: "04/10/2026",
        blocks: [
          {
            badge: "Revisão • 2h30",
            subject: "Correção + Esvaziamento do Caderno de Erros",
            details: "Correção integral do Simulado 5 e revisão concentrada de todos os erros acumulados nas últimas 5 semanas.",
            tasks: ["Correção Simulado 5", "Revisão Geral do Caderno", "Reforço nos Pontos Fracos"]
          }
        ],
        targetQuestions: 20
      }
    ]
  },
  {
    weekNumber: 6,
    title: "Semana 6 (05/10 a 11/10)",
    focus: "Consolidação Máxima & Simulado Geral",
    days: [
      {
        id: "w6_d1",
        dayLabel: "Segunda-feira",
        date: "05/10/2026",
        blocks: [
          {
            badge: "Consolidação • 40 Questões",
            subject: "SUPER REVISÃO — Língua Portuguesa",
            details: "Interpretação, morfologia, sintaxe, concordância, regência, crase, pontuação e reescrita de frases.",
            tasks: ["Revisão Geral de Português", "40 Questões Português", "Caderno de Erros"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w6_d2",
        dayLabel: "Terça-feira",
        date: "06/10/2026",
        blocks: [
          {
            badge: "Consolidação • 40 Questões",
            subject: "SUPER REVISÃO — Constitucional & Proc. Legislativo",
            details: "CF arts. 1º–5º, 6º–11, 18–31, 37–41 + Tramitação de leis, comissões, sanção, veto e promulgação.",
            tasks: ["Revisão CF e Proc. Leg.", "40 Questões Constitucional/Proc.", "Caderno de Erros"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w6_d3",
        dayLabel: "Quarta-feira",
        date: "07/10/2026",
        blocks: [
          {
            badge: "Consolidação • 40 Questões",
            subject: "SUPER REVISÃO — Direito Administrativo & Lei 14.133",
            details: "Princípios, organização, atos, poderes, improbidade, controle e Lei 14.133/2021 de ponta a ponta.",
            tasks: ["Revisão Administrativo", "40 Questões Admin & 14.133", "Caderno de Erros"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w6_d4",
        dayLabel: "Quinta-feira",
        date: "08/10/2026",
        blocks: [
          {
            badge: "Consolidação • 40 Questões",
            subject: "SUPER REVISÃO — Lei Orgânica & Regimento Interno",
            details: "Competências de Meruoca, Mesa Diretora, tramitação regimental, quóruns e fiscalização parlamentar.",
            tasks: ["Fichas Lei Orgânica & Regimento", "40 Questões Leg. Municipal", "Caderno de Erros"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w6_d5",
        dayLabel: "Sexta-feira",
        date: "09/10/2026",
        blocks: [
          {
            badge: "Consolidação • 40 Questões",
            subject: "SUPER REVISÃO — Bloco Específico Completo",
            details: "LC 95/98, PPA/LDO/LOA, LRF, LGPD, LAI, gestão documental, governança e ética pública.",
            tasks: ["Revisão Tópicos Específicos", "40 Questões Variadas", "Caderno de Erros"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w6_d6",
        dayLabel: "Sábado",
        date: "10/10/2026",
        blocks: [
          {
            badge: "Simulado 6 • Oficial",
            subject: "SIMULADO 6 — PROVA COMPLETA (Condições Reais)",
            details: "Início pontual às 09h00, término às 12h00. 40 questões, caneta transparente, sem consultas e sem celular.",
            tasks: ["Executar Simulado 09h–12h", "Preencher Gabarito", "Auditoria de Acertos"]
          }
        ],
        targetQuestions: 40
      },
      {
        id: "w6_d7",
        dayLabel: "Domingo",
        date: "11/10/2026",
        blocks: [
          {
            badge: "Diagnóstico",
            subject: "DIAGNÓSTICO FINAL & TABELA DE DESEMPENHO",
            details: "Preencher tabela de aproveitamento por disciplina para orientar as revisões cirúrgicas da última semana.",
            tasks: ["Preencher Diagnóstico Final", "Mapear Pontos Críticos (<80%)", "Plano da Semana 7"]
          }
        ],
        targetQuestions: 20
      }
    ]
  },
  {
    weekNumber: 7,
    title: "Semana 7 (12/10 a 18/10)",
    focus: "Reta Final, Super Revisão & Prova Oficial (18/10)",
    days: [
      {
        id: "w7_d1",
        dayLabel: "Segunda-feira",
        date: "12/10/2026",
        blocks: [
          {
            badge: "Reta Final",
            subject: "Constitucional + Administrativo + 30 Questões",
            details: "Manhã: Arts. 1º a 31 da CF. Tarde: Atos e Poderes. Noite: 30 questões de fixação.",
            tasks: ["Manhã: Constitucional", "Tarde: Administrativo", "Noite: 30 Questões"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w7_d2",
        dayLabel: "Terça-feira",
        date: "13/10/2026",
        blocks: [
          {
            badge: "Reta Final",
            subject: "Lei Orgânica + Regimento Interno + 30 Questões",
            details: "Manhã: Competências e Prazos LO. Tarde: Comissões e Quóruns RI. Noite: 30 questões municipais.",
            tasks: ["Manhã: Lei Orgânica", "Tarde: Regimento Interno", "Noite: 30 Questões"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w7_d3",
        dayLabel: "Quarta-feira",
        date: "14/10/2026",
        blocks: [
          {
            badge: "Reta Final",
            subject: "Lei 14.133/2021 + Processo Legislativo + LC 95",
            details: "Manhã: Contratação direta e licitações. Tarde: Espécies e LC 95. Noite: 30 questões.",
            tasks: ["Manhã: Lei 14.133", "Tarde: Proc. Leg. + LC 95", "Noite: 30 Questões"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w7_d4",
        dayLabel: "Quinta-feira",
        date: "15/10/2026",
        blocks: [
          {
            badge: "Reta Final",
            subject: "Português + Informática + Matemática (Divulgação dos Locais)",
            details: "Manhã: Português. Tarde: Informática & Fórmulas de RLM. Noite: 30 questões. Conferir local e sala da prova!",
            tasks: ["Manhã: Português", "Tarde: Info + Matemática", "Conferir Local da Prova"]
          }
        ],
        targetQuestions: 30
      },
      {
        id: "w7_d5",
        dayLabel: "Sexta-feira",
        date: "16/10/2026",
        blocks: [
          {
            badge: "Super Revisão",
            subject: "CADERNO DE ERROS & FLASHCARDS (Zero Assunto Novo)",
            details: "Revisar unicamente o caderno de erros, artigos sublinhados e pegadinhas clássicas da banca.",
            tasks: ["Revisão Geral do Caderno de Erros", "Leitura de Flashcards", "Descanso Mental"]
          }
        ],
        targetQuestions: 0
      },
      {
        id: "w7_d6",
        dayLabel: "Sábado",
        date: "17/10/2026",
        blocks: [
          {
            badge: "Véspera",
            subject: "VÉSPERA DE PROVA — Leveza & Logística",
            details: "Máximo 2 horas de leitura relaxada (LO e Regimento). Separar: RG, canetas transparentes preta/azul, água e lanche leve. Dormir cedo.",
            tasks: ["Revisão Leve (máx 2h)", "Separar Documento & Canetas", "Dormir Cedo"]
          }
        ],
        targetQuestions: 0
      },
      {
        id: "w7_d7",
        dayLabel: "Domingo",
        date: "18/10/2026",
        blocks: [
          {
            badge: "DIA DA PROVA",
            subject: "PROVA OBJETIVA — CÂMARA DE MERUOCA (09h às 12h)",
            details: "Portões abrem às 08h00 e fecham às 08h40. Estratégia de 3 passagens (Fáceis -> Médias -> Difíceis). Sucesso e foco total!",
            tasks: ["08h00: Chegada ao Local", "09h00: Início da Prova", "11h40: Preencher Gabarito", "12h00: Conclusão"]
          }
        ],
        targetQuestions: 40
      }
    ]
  }
];

const DEFAULT_ERRORS = [
  {
    id: "err_q6_ms",
    date: new Date().toLocaleDateString('pt-BR'),
    disciplina: "D. Constitucional",
    assunto: "Questão 6 — Mandado de Segurança (Conceito e Cabimento)",
    tipo: "interpretacao",
    conceito: "O que errou: Identificação do remédio cabível.\n\nSe violou direito documentado (líquido e certo) e não envolve cadeia/locomoção (HC) nem dados pessoais em cadastros públicos (HD), a resposta sempre será Mandado de Segurança (Art. 5º, LXIX da CF/88).",
    pegadinha: "Regra de ouro: Direito líquido e certo contra autoridade pública não amparado por HC/HD = MANDADO DE SEGURANÇA.",
    revisado: false
  },
  {
    id: "err_q7_ms_prazo",
    date: new Date().toLocaleDateString('pt-BR'),
    disciplina: "D. Constitucional",
    assunto: "Questão 7 — Mandado de Segurança (Prazo Decadencial)",
    tipo: "esqueci",
    conceito: "O que errou: Prazo decadencial para impetração.\n\nO prazo para impetrar Mandado de Segurança é de exatamente 120 dias corridos contados da ciência oficial do ato impugnado (Lei 12.016/09, Art. 23).",
    pegadinha: "Regra de ouro: Passou de 120 dias, extingue-se o direito de impetrar MS (prazo decadencial improrrogável).",
    revisado: false
  },
  {
    id: "err_q15_juri",
    date: new Date().toLocaleDateString('pt-BR'),
    disciplina: "D. Constitucional",
    assunto: "Questão 15 — Tribunal do Júri (Art. 5º, XXXVIII, 'd')",
    tipo: "duvida",
    conceito: "O que errou: Competência do júri popular.\n\nO Tribunal do Júri julga única e exclusivamente crimes DOLOSOS CONTRA A VIDA (homicídio doloso, aborto, infanticídio e induzimento/auxílio ao suicídio).",
    pegadinha: "Regra de ouro: O Júri NÃO julga roubo, acidente de trânsito culposo nem corrupção de servidor público.",
    revisado: false
  },
  {
    id: "err_q20_editorial",
    date: new Date().toLocaleDateString('pt-BR'),
    disciplina: "Língua Portuguesa",
    assunto: "Questão 20 — Gênero Textual: Editorial",
    tipo: "interpretacao",
    conceito: "O que errou: Diferença entre Editorial e Artigo de Opinião.\n\nO Editorial expressa a opinião e o posicionamento institucional da empresa jornalística/órgão e NÃO leva assinatura individual.",
    pegadinha: "Regra de ouro: Se tem a visão institucional e não tem assinatura = EDITORIAL. Se é assinado por articulista/colunista = ARTIGO DE OPINIÃO.",
    revisado: false
  },
  {
    id: "err_q22_funcao_conotativa",
    date: new Date().toLocaleDateString('pt-BR'),
    disciplina: "Língua Portuguesa",
    assunto: "Questão 22 — Funções da Linguagem: Conotativa / Apelativa",
    tipo: "duvida",
    conceito: "O que errou: Identificação da função da linguagem em textos instrucionais e cartazes.\n\nA função Conotativa (ou Apelativa) é centrada no receptor, utilizando verbos no imperativo e vocativos para orientar, convencer ou ordenar uma ação ('Economize', 'Apague').",
    pegadinha: "Regra de ouro: Verbos no imperativo dando ordens, instruções ou conselhos = FUNÇÃO CONOTATIVA (APELATIVA).",
    revisado: false
  },
  {
    id: "err_q24_divulgacao_cientifica",
    date: new Date().toLocaleDateString('pt-BR'),
    disciplina: "Língua Portuguesa",
    assunto: "Questão 24 — Gênero Textual: Artigo de Divulgação Científica",
    tipo: "nao-sabia",
    conceito: "O que errou: Finalidade do artigo de divulgação científica.\n\nSua finalidade essencial é transmitir o conhecimento e descobertas científicas para a população leiga em geral, utilizando linguagem clara, acessível e informativa.",
    pegadinha: "Regra de ouro: Divulgação científica não é ficção nem texto jurídico; é traduzir a ciência complexa para o público geral.",
    revisado: false
  }
];

// Estado Geral da Aplicação
let appState = {
  theme: 'light',
  checkedTasks: {},
  dayQuestions: {},
  quizAnswers: {},
  bankVersion: 2,
  quizCategoryFilter: 'w2_d1',
  quizOrderMode: 'random', // 'random', 'interleaved', 'sequential'
  quizFilterStatus: 'all', // 'all', 'pending', 'wrong'
  quizShuffledOrder: {}, // armazena ordem embaralhada por chave de filtro para manter estabilidade
  currentFlashcardIndex: 0,
  flashcardFilter: 'dia4',
  masteredFlashcards: {},
  cadernoErros: [...DEFAULT_ERRORS],
  simulados: [
    { num: 1, date: "05/09/2026", acertos: 0, total: 40, tempo: "3h00" },
    { num: 2, date: "12/09/2026", acertos: 0, total: 40, tempo: "3h00" },
    { num: 3, date: "19/09/2026", acertos: 0, total: 40, tempo: "3h00" },
    { num: 4, date: "26/09/2026", acertos: 0, total: 40, tempo: "3h00" },
    { num: 5, date: "03/10/2026", acertos: 0, total: 40, tempo: "2h35" },
    { num: 6, date: "10/10/2026", acertos: 0, total: 40, tempo: "2h50" }
  ],
  diagnostico: {
    portugues: { acertos: 0, total: 40 },
    informatica: { acertos: 0, total: 20 },
    matematica: { acertos: 0, total: 20 },
    constitucional: { acertos: 0, total: 30 },
    administrativo: { acertos: 0, total: 30 },
    especificos: { acertos: 0, total: 40 },
    legislacao: { acertos: 0, total: 40 }
  },
  currentWeek: 1
};

// Inicialização Geral
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initTheme();
  setupNavigation();
  setupCountdown();
  renderWeekPills();
  renderDaysForWeek(appState.currentWeek);
  renderQuiz();
  renderFlashcard();
  renderCadernoErros();
  renderSimulados();
  renderDiagnostico();
  updateGlobalMetrics();
  setupTimer();
  setupErrorForm();
  initEditalVerticalizado();
});

// Persistência
function saveState() {
  localStorage.setItem('meruoca_study_state', JSON.stringify(appState));
  updateGlobalMetrics();
}

function loadState() {
  const saved = localStorage.getItem('meruoca_study_state');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appState = { ...appState, ...parsed };
      if (appState.bankVersion !== 2) {
        appState.bankVersion = 2;
        appState.quizAnswers = {};
        appState.quizShuffledOrder = {};
        saveState();
      }
      if (!appState.quizAnswers) appState.quizAnswers = {};
      if (!appState.quizOrderMode) appState.quizOrderMode = 'random';
      if (!appState.quizFilterStatus) appState.quizFilterStatus = 'all';
      if (!appState.quizShuffledOrder) appState.quizShuffledOrder = {};
      if (!appState.masteredFlashcards) appState.masteredFlashcards = {};
      if (!appState.cadernoErros || appState.cadernoErros.length === 0) {
        appState.cadernoErros = [...DEFAULT_ERRORS];
      } else {
        // Garantir que os 3 erros chave existam no array
        DEFAULT_ERRORS.forEach(defErr => {
          if (!appState.cadernoErros.some(e => e.id === defErr.id)) {
            appState.cadernoErros.unshift(defErr);
          }
        });
      }
    } catch (e) {
      console.error("Erro ao carregar dados do LocalStorage", e);
    }
  }
}

// Alternância de Tema
function initTheme() {
  document.documentElement.setAttribute('data-theme', appState.theme);
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.innerHTML = appState.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    themeToggle.addEventListener('click', () => {
      appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', appState.theme);
      themeToggle.innerHTML = appState.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      saveState();
    });
  }
}

// Navegação
function setupNavigation() {
  const allNavBtns = document.querySelectorAll('.nav-btn, .mobile-nav-btn:not(#mobileMenuBtn)');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const sidebar = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('active');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
  }

  allNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      if (!tabId) return;

      // Sincronizar todos os botões com o mesmo data-tab
      allNavBtns.forEach(b => {
        if (b.dataset.tab === tabId) b.classList.add('active');
        else b.classList.remove('active');
      });

      // Alternar visualização da aba
      tabPanes.forEach(pane => pane.classList.remove('active'));
      const targetPane = document.getElementById(tabId);
      if (targetPane) {
        targetPane.classList.add('active');
      }

      // Fechar a sidebar móvel caso esteja aberta
      closeSidebar();

      // Scroll suave para o topo ao trocar de aba
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Toggle do menu via botão superior
  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (sidebar && sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  // Toggle do menu via botão "Mais" da bottom nav no mobile
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (sidebar && sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  // Fechar ao tocar no backdrop escuro
  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', () => {
      closeSidebar();
    });
  }
}

// Countdown
function setupCountdown() {
  const examDate = new Date('2026-10-18T09:00:00-03:00').getTime();

  function update() {
    const now = new Date().getTime();
    const diff = examDate - now;

    if (diff <= 0) {
      document.getElementById('cdDays').innerText = "00";
      document.getElementById('cdHours').innerText = "00";
      document.getElementById('cdMins').innerText = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('cdDays').innerText = String(days).padStart(2, '0');
    document.getElementById('cdHours').innerText = String(hours).padStart(2, '0');
    document.getElementById('cdMins').innerText = String(mins).padStart(2, '0');
  }

  update();
  setInterval(update, 60000);
}

// =========================================================================
// MÓDULO FLASHCARDS 3D
// =========================================================================
function getFilteredFlashcards() {
  if (appState.flashcardFilter === 'all') return FLASHCARDS_DATA;
  if (appState.flashcardFilter === 'dia4') {
    return FLASHCARDS_DATA.filter(fc => fc.day === 'dia4' || (fc.id >= 31 && fc.id <= 40));
  }
  if (appState.flashcardFilter === 'dia3') {
    return FLASHCARDS_DATA.filter(fc => fc.day === 'dia3' || (fc.id >= 23 && fc.id <= 30));
  }
  return FLASHCARDS_DATA.filter(fc => fc.category === appState.flashcardFilter);
}

function renderFlashcard() {
  const cards = getFilteredFlashcards();
  const cardEl = document.getElementById('activeFlashcard');
  if (!cardEl || cards.length === 0) return;

  if (appState.currentFlashcardIndex >= cards.length) {
    appState.currentFlashcardIndex = 0;
  }

  const current = cards[appState.currentFlashcardIndex];
  cardEl.classList.remove('is-flipped');

  document.getElementById('fcTag').innerText = current.tag;
  document.getElementById('fcQuestion').innerText = current.question;
  document.getElementById('fcAnswer').innerText = current.answer;
  document.getElementById('fcExplanation').innerText = current.explanation;

  const curIdxEl = document.getElementById('fcCurrentIndex');
  const totCardsEl = document.getElementById('fcTotalCards');
  const masteredEl = document.getElementById('fcMasteredCount');

  if (curIdxEl) curIdxEl.innerText = `${appState.currentFlashcardIndex + 1}`;
  if (totCardsEl) totCardsEl.innerText = `${cards.length}`;
  if (masteredEl) masteredEl.innerText = `${Object.keys(appState.masteredFlashcards).length}`;
}

function flipFlashcard() {
  const card = document.getElementById('activeFlashcard');
  if (card) card.classList.toggle('is-flipped');
}

function nextFlashcard() {
  const cards = getFilteredFlashcards();
  if (appState.currentFlashcardIndex < cards.length - 1) {
    appState.currentFlashcardIndex++;
  } else {
    appState.currentFlashcardIndex = 0;
  }
  renderFlashcard();
}

function prevFlashcard() {
  const cards = getFilteredFlashcards();
  if (appState.currentFlashcardIndex > 0) {
    appState.currentFlashcardIndex--;
  } else {
    appState.currentFlashcardIndex = cards.length - 1;
  }
  renderFlashcard();
}

function shuffleFlashcards() {
  const cards = getFilteredFlashcards();
  appState.currentFlashcardIndex = Math.floor(Math.random() * cards.length);
  renderFlashcard();
  showToast("🔀 Cartões embaralhados!");
}

function markCardMastery(isMastered) {
  const cards = getFilteredFlashcards();
  const current = cards[appState.currentFlashcardIndex];
  if (isMastered) {
    appState.masteredFlashcards[current.id] = true;
    showToast("🎉 Excelente! Marcado como Dominado.");
  } else {
    delete appState.masteredFlashcards[current.id];
    showToast("📌 Marcado para revisão.");
  }
  saveState();
  nextFlashcard();
}

function filterFlashcards(cat) {
  appState.flashcardFilter = cat;
  appState.currentFlashcardIndex = 0;
  renderFlashcard();
}

// =========================================================================
// MÓDULO QUIZ INTERATIVO (ALEATORIEDADE & ORDEM INTELIGENTE)
// =========================================================================

// Algoritmo Fisher-Yates para embaralhamento de alta qualidade
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Algoritmo para intercalar matérias balanceadamente (round-robin entre disciplinas)
function interleaveQuestionsByDiscipline(questions) {
  const groups = {};
  questions.forEach(q => {
    const disc = q.discipline || 'Geral';
    if (!groups[disc]) groups[disc] = [];
    groups[disc].push(q);
  });

  // Embaralhar internamente as questões de cada disciplina
  const disciplines = Object.keys(groups);
  disciplines.forEach(disc => {
    groups[disc] = shuffleArray(groups[disc]);
  });

  // Embaralhar a ordem inicial das disciplinas para não começar sempre com a mesma
  const shuffledDisciplines = shuffleArray(disciplines);

  const result = [];
  let remaining = questions.length;

  while (remaining > 0) {
    for (let i = 0; i < shuffledDisciplines.length; i++) {
      const disc = shuffledDisciplines[i];
      if (groups[disc] && groups[disc].length > 0) {
        result.push(groups[disc].shift());
        remaining--;
      }
    }
  }

  return result;
}

// Retorna as questões base do filtro ativo
function getFilteredBaseQuestions(filterKey) {
  let questions = QUIZ_QUESTIONS_DATA;
  if (filterKey === 'w2_d1') {
    questions = questions.filter(q => q.id >= 181 && q.id <= 220);
  } else if (filterKey === 'dia6') {
    questions = questions.filter(q => q.id >= 141 && q.id <= 180);
  } else if (filterKey === 'dia5') {
    questions = questions.filter(q => q.id >= 101 && q.id <= 140);
  } else if (filterKey === 'dia4') {
    questions = questions.filter(q => q.id >= 61 && q.id <= 100);
  } else if (filterKey === 'dia2') {
    questions = questions.filter(q => q.id >= 1 && q.id <= 30);
  } else if (filterKey === 'dia3') {
    questions = questions.filter(q => q.id >= 31 && q.id <= 60);
  } else if (filterKey !== 'all') {
    questions = questions.filter(q => q.category === filterKey);
  }
  return questions;
}

// Retorna as questões organizadas conforme o modo de ordenação e com persistência de ordem
function getOrderedQuestions(filterKey) {
  const baseQuestions = getFilteredBaseQuestions(filterKey);
  const mode = appState.quizOrderMode || 'random';

  if (mode === 'sequential') {
    return [...baseQuestions].sort((a, b) => a.id - b.id);
  }

  const orderKey = `${filterKey}_${mode}`;
  const baseIds = baseQuestions.map(q => q.id);

  // Verificar se já temos uma ordem válida armazenada para este filtro e modo
  const storedIds = appState.quizShuffledOrder ? appState.quizShuffledOrder[orderKey] : null;
  const isOrderValid = Array.isArray(storedIds) && 
    storedIds.length === baseIds.length && 
    baseIds.every(id => storedIds.includes(id));

  if (isOrderValid) {
    const qMap = new Map(baseQuestions.map(q => [q.id, q]));
    return storedIds.map(id => qMap.get(id)).filter(Boolean);
  }

  // Se não existir ou for inválida, gerar nova ordem
  let orderedList = [];
  if (mode === 'interleaved') {
    orderedList = interleaveQuestionsByDiscipline(baseQuestions);
  } else {
    // modo 'random' padrão
    orderedList = shuffleArray(baseQuestions);
  }

  // Armazenar os IDs ordenados para manter estabilidade enquanto o usuário responde
  if (!appState.quizShuffledOrder) appState.quizShuffledOrder = {};
  appState.quizShuffledOrder[orderKey] = orderedList.map(q => q.id);
  saveState();

  return orderedList;
}

// Forçar um novo embaralhamento das questões ativas
function shuffleActiveQuiz() {
  const filterKey = appState.quizCategoryFilter || 'dia6';
  const mode = appState.quizOrderMode || 'random';

  if (!appState.quizShuffledOrder) appState.quizShuffledOrder = {};
  delete appState.quizShuffledOrder[`${filterKey}_random`];
  delete appState.quizShuffledOrder[`${filterKey}_interleaved`];

  saveState();
  renderQuiz();

  const modeLabel = mode === 'interleaved' ? 'intercaladas por disciplina' : 'embaralhadas aleatoriamente';
  showToast(`🔀 Questões ${modeLabel}!`);
}

// Alterar o modo de ordenação (random, interleaved, sequential)
function setQuizOrderMode(mode) {
  appState.quizOrderMode = mode;
  saveState();
  renderQuiz();

  if (mode === 'random') {
    showToast("🔀 Modo Aleatório ativado: questões embaralhadas!");
  } else if (mode === 'interleaved') {
    showToast("⚖️ Modo Intercalado ativado: matérias alternadas como na prova!");
  } else {
    showToast("🔢 Modo Sequencial ativado: ordem numérica padrão.");
  }
}

// Filtrar por status (todas, pendentes, erros)
function setQuizStatusFilter(status) {
  appState.quizFilterStatus = status;
  saveState();
  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById('quizQuestionsContainer');
  if (!container) return;

  const filterKey = appState.quizCategoryFilter || 'dia6';
  const allOrderedQuestions = getOrderedQuestions(filterKey);

  // Contagens para o bloco
  const totalInBlock = allOrderedQuestions.length;
  let totalAnswered = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let pendingCount = 0;

  allOrderedQuestions.forEach(q => {
    const ans = appState.quizAnswers[q.id];
    if (ans && ans.confirmed) {
      totalAnswered++;
      if (ans.isCorrect) correctCount++;
      else wrongCount++;
    } else {
      pendingCount++;
    }
  });

  const accuracyPct = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  // Atualizar placar de pontuação
  const totalEl = document.getElementById('quizTotalCount');
  const corEl = document.getElementById('quizCorrectCount');
  const wrgEl = document.getElementById('quizWrongCount');
  const accEl = document.getElementById('quizAccuracyPct');

  if (totalEl) totalEl.innerText = `${totalInBlock}`;
  if (corEl) corEl.innerText = `${correctCount}`;
  if (wrgEl) wrgEl.innerText = `${wrongCount}`;
  if (accEl) accEl.innerText = `${accuracyPct}%`;

  // Atualizar botões de modo de ordenação
  const orderMode = appState.quizOrderMode || 'random';
  const btnRandom = document.getElementById('btnOrderRandom');
  const btnInterleaved = document.getElementById('btnOrderInterleaved');
  const btnSequential = document.getElementById('btnOrderSequential');

  if (btnRandom) btnRandom.classList.toggle('active', orderMode === 'random');
  if (btnInterleaved) btnInterleaved.classList.toggle('active', orderMode === 'interleaved');
  if (btnSequential) btnSequential.classList.toggle('active', orderMode === 'sequential');

  // Atualizar filtros de status
  const statusFilter = appState.quizFilterStatus || 'all';
  const btnStatusAll = document.getElementById('btnStatusAll');
  const btnStatusPending = document.getElementById('btnStatusPending');
  const btnStatusWrong = document.getElementById('btnStatusWrong');

  if (btnStatusAll) btnStatusAll.classList.toggle('active', statusFilter === 'all');
  if (btnStatusPending) btnStatusPending.classList.toggle('active', statusFilter === 'pending');
  if (btnStatusWrong) btnStatusWrong.classList.toggle('active', statusFilter === 'wrong');

  const cntAll = document.getElementById('quizStatusAllCount');
  const cntPending = document.getElementById('quizStatusPendingCount');
  const cntWrong = document.getElementById('quizStatusWrongCount');

  if (cntAll) cntAll.innerText = `${totalInBlock}`;
  if (cntPending) cntPending.innerText = `${pendingCount}`;
  if (cntWrong) cntWrong.innerText = `${wrongCount}`;

  // Filtrar as questões exibidas de acordo com o status selecionado
  let displayQuestions = allOrderedQuestions;
  if (statusFilter === 'pending') {
    displayQuestions = allOrderedQuestions.filter(q => !appState.quizAnswers[q.id]?.confirmed);
  } else if (statusFilter === 'wrong') {
    displayQuestions = allOrderedQuestions.filter(q => appState.quizAnswers[q.id]?.confirmed && !appState.quizAnswers[q.id]?.isCorrect);
  }

  // Estado vazio quando não houver questões no filtro
  if (displayQuestions.length === 0) {
    let emptyMsg = "Nenhuma questão encontrada para os filtros selecionados.";
    let emptyIcon = "fas fa-info-circle";
    let emptyAction = "";

    if (statusFilter === 'pending') {
      emptyMsg = "🎉 Parabéns! Você já respondeu todas as questões deste bloco!";
      emptyIcon = "fas fa-check-circle";
      emptyAction = `<button class="btn btn-secondary" onclick="setQuizStatusFilter('all')" style="margin-top: 12px;"><i class="fas fa-eye"></i> Ver Todas as Questões</button>`;
    } else if (statusFilter === 'wrong') {
      emptyMsg = "Excelente! Você não possui nenhum erro registrado neste bloco.";
      emptyIcon = "fas fa-medal";
      emptyAction = `<button class="btn btn-secondary" onclick="setQuizStatusFilter('all')" style="margin-top: 12px;"><i class="fas fa-eye"></i> Ver Todas as Questões</button>`;
    }

    container.innerHTML = `
      <div class="quiz-card" style="text-align: center; padding: 40px 20px;">
        <i class="${emptyIcon}" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 14px;"></i>
        <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 8px;">${emptyMsg}</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); max-width: 500px; margin: 0 auto;">Alterne o filtro ou reembaralhe as questões para continuar praticando.</p>
        ${emptyAction}
      </div>
    `;
    return;
  }

  const letters = ['A', 'B', 'C', 'D'];

  container.innerHTML = displayQuestions.map((q, displayIdx) => {
    const ans = appState.quizAnswers[q.id] || { selected: null, confirmed: false, isCorrect: false };
    const isConfirmed = ans.confirmed;

    return `
      <div class="quiz-card" id="quiz_card_${q.id}">
        <div class="quiz-card-header">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="quiz-pos-badge">Questão ${displayIdx + 1} de ${displayQuestions.length}</span>
            <span class="quiz-id-badge">ID ${q.id}</span>
          </div>
          <span class="quiz-discipline-tag">${q.discipline} • ${q.topic}</span>
        </div>

        <div class="quiz-question-text">
          ${q.question}
        </div>

        <div class="quiz-options-list">
          ${q.options.map((opt, optIdx) => {
            let optClass = "";
            if (isConfirmed) {
              if (optIdx === q.correctAnswer) {
                optClass = "correct";
              } else if (ans.selected === optIdx && !ans.isCorrect) {
                optClass = "wrong";
              }
            } else if (ans.selected === optIdx) {
              optClass = "selected";
            }

            return `
              <div class="quiz-option ${optClass} ${isConfirmed ? 'disabled' : ''}" onclick="selectQuizOption(${q.id}, ${optIdx})">
                <span class="option-letter">${letters[optIdx]}</span>
                <span>${opt}</span>
              </div>
            `;
          }).join('')}
        </div>

        <div class="quiz-card-footer">
          <div>
            ${!isConfirmed ? `
              <button class="btn btn-primary" onclick="confirmQuizAnswer(${q.id})" ${ans.selected === null ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                <i class="fas fa-check"></i> Confirmar Resposta
              </button>
            ` : `
              <span style="font-size: 0.9rem; font-weight: 700; color: ${ans.isCorrect ? 'var(--success)' : 'var(--danger)'};">
                ${ans.isCorrect ? '✓ Resposta Correta! (+2,5 pts)' : '✗ Resposta Incorreta'}
              </span>
            `}
          </div>

          ${isConfirmed && !ans.isCorrect ? `
            <button class="btn btn-danger" style="font-size: 0.8rem; padding: 6px 12px;" onclick="addQuizErrorToBook(${q.id})">
              <i class="fas fa-plus-circle"></i> Adicionar ao Caderno de Erros
            </button>
          ` : ''}
        </div>

        <div class="quiz-explanation-box ${isConfirmed ? 'show' : ''} ${ans.isCorrect ? 'correct-border' : 'wrong-border'}">
          <strong><i class="fas fa-comment-dots" style="color: var(--primary);"></i> Gabarito Oficial Comentado (${letters[q.correctAnswer]}):</strong>
          <p style="margin-top: 6px;">${q.commentary}</p>
        </div>
      </div>
    `;
  }).join('');
}

function selectQuizOption(qId, optIdx) {
  if (appState.quizAnswers[qId] && appState.quizAnswers[qId].confirmed) return;
  appState.quizAnswers[qId] = {
    selected: optIdx,
    confirmed: false,
    isCorrect: false
  };
  saveState();
  renderQuiz();
}

function confirmQuizAnswer(qId) {
  const q = QUIZ_QUESTIONS_DATA.find(item => item.id === qId);
  if (!q) return;

  const current = appState.quizAnswers[qId];
  if (!current || current.selected === null) return;

  const isCorrect = current.selected === q.correctAnswer;
  appState.quizAnswers[qId] = {
    selected: current.selected,
    confirmed: true,
    isCorrect: isCorrect
  };

  let dayId = 'w1_d2';
  if (qId >= 31 && qId <= 60) {
    dayId = 'w1_d3';
  } else if (q.category === 'constitucional') {
    dayId = 'w1_d1';
  }

  if (!appState.dayQuestions[dayId]) {
    appState.dayQuestions[dayId] = { done: 0, correct: 0 };
  }
  appState.dayQuestions[dayId].done++;
  if (isCorrect) appState.dayQuestions[dayId].correct++;

  saveState();
  renderQuiz();
  renderDaysForWeek(appState.currentWeek);

  if (isCorrect) {
    showToast(`✓ Parabéns! Questão ${qId} correta.`);
  } else {
    showToast(`✗ Questão ${qId} incorreta. Gabarito: ${['A','B','C','D'][q.correctAnswer]}`);
  }
}

function filterQuizCategory(cat) {
  appState.quizCategoryFilter = cat;
  renderQuiz();
}

function selectQuizDay(dayKey) {
  appState.quizCategoryFilter = dayKey;
  
  const btnS2D1 = document.getElementById('btnDayTabS2D1');
  const btn6 = document.getElementById('btnDayTab6');
  const btn5 = document.getElementById('btnDayTab5');
  const btn4 = document.getElementById('btnDayTab4');
  const btn3 = document.getElementById('btnDayTab3');
  const btn2 = document.getElementById('btnDayTab2');
  const btnAll = document.getElementById('btnDayTabAll');
  if (btnS2D1) btnS2D1.classList.toggle('active', dayKey === 'w2_d1');
  if (btn6) btn6.classList.toggle('active', dayKey === 'dia6');
  if (btn5) btn5.classList.toggle('active', dayKey === 'dia5');
  if (btn4) btn4.classList.toggle('active', dayKey === 'dia4');
  if (btn3) btn3.classList.toggle('active', dayKey === 'dia3');
  if (btn2) btn2.classList.toggle('active', dayKey === 'dia2');
  if (btnAll) btnAll.classList.toggle('active', dayKey === 'all');

  const titleEl = document.getElementById('quizDayTitle');
  const descEl = document.getElementById('quizDayDesc');
  if (dayKey === 'w2_d1') {
    if (titleEl) titleEl.innerText = "⭐ Semana 2 • Dia 1 — Segunda-feira (07/09/2026 - HOJE): Organização do Estado & Formação de Palavras (40 Questões)";
    if (descEl) descEl.innerText = "20 questões de D. Constitucional (CF/88 Arts. 18 a 31: Competências, Municípios e Controle) + 20 de Português (Estrutura e Processos de Formação de Palavras). Padrão Oficial INBRASP.";
  } else if (dayKey === 'dia6') {
    if (titleEl) titleEl.innerText = "📅 Dia 6 — Sábado (05/09/2026): SIMULADO 01 OFICIAL (40 Questões)";
    if (descEl) descEl.innerText = "Prova Completa 40Q no Padrão Oficial da Banca INBRASP (10 Português + 5 Informática + 5 RLM + 20 Específicas). Treino de cronometragem de 3 horas.";
  } else if (dayKey === 'dia5') {
    if (titleEl) titleEl.innerText = "📅 Dia 5 — Sexta-feira (04/09/2026): D. Administrativo, Python & Lei Orgânica (40 Questões)";
    if (descEl) descEl.innerText = "15 questões de D. Administrativo (Poderes & Atributos PATI) + 15 de Informática (Algoritmos, Fluxogramas & Python) + 10 de Lei Orgânica de Meruoca (Arts. 16 ao 30).";
  } else if (dayKey === 'dia4') {
    if (titleEl) titleEl.innerText = "📅 Dia 4 — Quinta-feira (03/09/2026): Português, Constitucional & Lei Orgânica (40 Questões)";
    if (descEl) descEl.innerText = "15 questões de Português (Fonologia, Acentuação e Crase) + 15 de Constitucional (Direitos Sociais Arts. 6º ao 11) + 10 de Lei Orgânica de Meruoca (Arts. 1º ao 15).";
  } else if (dayKey === 'dia3') {
    if (titleEl) titleEl.innerText = "📅 Dia 3 — Quarta-feira (02/09/2026): D. Administrativo & Informática";
    if (descEl) descEl.innerText = "15 questões de Direito Administrativo (Princípios LIMPE e Organização) + 15 questões de Informática (Windows 11, Linux, Hardware e Backup).";
  } else if (dayKey === 'dia2') {
    if (titleEl) titleEl.innerText = "📅 Dia 2 — Terça-feira (01/09/2026): D. Constitucional & Português";
    if (descEl) descEl.innerText = "15 questões de Direito Constitucional (Art. 5º e Remédios) + 15 questões de Português (Tipos e Gêneros Textuais).";
  } else {
    if (titleEl) titleEl.innerText = "📚 Todas as Questões do Banco de Provas (220 Questões)";
    if (descEl) descEl.innerText = "Simulado geral contendo todas as 220 questões ativas (Semana 1 completa + Semana 2 Dia 1) para treino de alta performance.";
  }

  saveState();
  renderQuiz();
}

function resetQuizAnswers() {
  if (confirm("Deseja realmente limpar todas as respostas do simulado e recomeçar do zero?")) {
    const filterKey = appState.quizCategoryFilter || 'dia6';
    if (appState.quizShuffledOrder) {
      delete appState.quizShuffledOrder[`${filterKey}_random`];
      delete appState.quizShuffledOrder[`${filterKey}_interleaved`];
    }
    
    const baseQuestions = getFilteredBaseQuestions(filterKey);
    baseQuestions.forEach(q => {
      delete appState.quizAnswers[q.id];
    });

    saveState();
    renderQuiz();
    showToast("Simulado reiniciado com nova ordem!");
  }
}

function addQuizErrorToBook(qId) {
  const q = QUIZ_QUESTIONS_DATA.find(item => item.id === qId);
  if (!q) return;

  const userAns = appState.quizAnswers[qId];
  const userLetter = userAns && userAns.selected !== null ? ['A', 'B', 'C', 'D'][userAns.selected] : '?';
  const correctLetter = ['A', 'B', 'C', 'D'][q.correctAnswer];

  const newError = {
    id: 'err_quiz_' + qId + '_' + Date.now(),
    date: new Date().toLocaleDateString('pt-BR'),
    disciplina: q.discipline,
    assunto: q.topic,
    tipo: 'duvida',
    conceito: `Gabarito correto: ${correctLetter}. ${q.commentary}`,
    pegadinha: `Marquei alternativa ${userLetter}. A correta é ${correctLetter}: ${q.options[q.correctAnswer]}`,
    revisado: false
  };

  const exists = appState.cadernoErros.some(e => e.assunto === q.topic);
  if (!exists) {
    appState.cadernoErros.unshift(newError);
    saveState();
    renderCadernoErros();
    showToast(`Questão ${qId} enviada para o Caderno de Erros!`);
  } else {
    showToast(`Este assunto já consta no seu Caderno de Erros.`);
  }
}

// =========================================================================
// MÓDULO SEMANAS & DIAS
// =========================================================================
function renderWeekPills() {
  const container = document.getElementById('weekPillsContainer');
  if (!container) return;

  container.innerHTML = WEEKS_DATA.map(w => `
    <button class="week-pill-btn ${w.weekNumber === appState.currentWeek ? 'active' : ''}" onclick="selectWeek(${w.weekNumber})">
      <span>Semana ${w.weekNumber}</span>
      <span class="pill-badge" id="weekBadge_${w.weekNumber}">0%</span>
    </button>
  `).join('');
  
  updateWeekBadges();
}

function selectWeek(weekNum) {
  appState.currentWeek = weekNum;
  renderWeekPills();
  renderDaysForWeek(weekNum);
  saveState();
}

function updateWeekBadges() {
  WEEKS_DATA.forEach(w => {
    let totalTasks = 0;
    let doneTasks = 0;
    w.days.forEach(d => {
      d.blocks.forEach((b, bIdx) => {
        b.tasks.forEach((t, tIdx) => {
          totalTasks++;
          const taskId = `${d.id}_b${bIdx}_t${tIdx}`;
          if (appState.checkedTasks[taskId]) doneTasks++;
        });
      });
    });
    const pct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
    const badge = document.getElementById(`weekBadge_${w.weekNumber}`);
    if (badge) badge.innerText = `${pct}%`;
  });
}

function renderDaysForWeek(weekNum) {
  const week = WEEKS_DATA.find(w => w.weekNumber === weekNum);
  const container = document.getElementById('daysContainer');
  const titleElem = document.getElementById('currentWeekTitle');
  const focusElem = document.getElementById('currentWeekFocus');

  if (!week || !container) return;

  if (titleElem) titleElem.innerText = week.title;
  if (focusElem) focusElem.innerText = week.focus;

  container.innerHTML = week.days.map((day, dIdx) => {
    let dayTotalTasks = 0;
    let dayDoneTasks = 0;

    day.blocks.forEach((b, bIdx) => {
      b.tasks.forEach((t, tIdx) => {
        dayTotalTasks++;
        const taskId = `${day.id}_b${bIdx}_t${tIdx}`;
        if (appState.checkedTasks[taskId]) dayDoneTasks++;
      });
    });

    const isDone = dayTotalTasks > 0 && dayDoneTasks === dayTotalTasks;
    const isToday = (day.date === "31/08/2026" && weekNum === 1);

    const questionsDone = (appState.dayQuestions[day.id] && appState.dayQuestions[day.id].done) || 0;
    const questionsCorrect = (appState.dayQuestions[day.id] && appState.dayQuestions[day.id].correct) || 0;

    return `
      <div class="day-card ${isDone ? 'completed' : ''} ${isToday ? 'today' : ''} ${dIdx === 0 ? 'open' : ''}" id="card_${day.id}">
        <div class="day-header" onclick="toggleDayAccordion('${day.id}')">
          <div class="day-header-left">
            <span class="day-tag">${day.dayLabel}</span>
            <div class="day-title-box">
              <h3>${day.date}</h3>
              <span>${day.blocks.map(b => b.subject.split('—')[0]).join(' • ')}</span>
            </div>
          </div>
          <div class="day-header-right">
            <span class="day-progress-text" id="prog_${day.id}">${dayDoneTasks}/${dayTotalTasks} tarefas</span>
            <i class="fas fa-chevron-down day-chevron"></i>
          </div>
        </div>
        <div class="day-body">
          <div class="study-blocks-grid">
            ${day.blocks.map((block, bIdx) => `
              <div class="study-block">
                <div>
                  <div class="block-header">
                    <span class="block-badge">${block.badge}</span>
                  </div>
                  <h4 class="block-subject">${block.subject}</h4>
                  <p class="block-details">${block.details}</p>
                </div>
                <div class="block-checklist">
                  ${block.tasks.map((task, tIdx) => {
                    const taskId = `${day.id}_b${bIdx}_t${tIdx}`;
                    const isChecked = !!appState.checkedTasks[taskId];
                    return `
                      <label class="custom-checkbox">
                        <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleTask('${day.id}', '${taskId}')">
                        <span class="checkmark"></span>
                        <span class="label-text">${task}</span>
                      </label>
                    `;
                  }).join('')}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="day-questions-box">
            <div>
              <strong><i class="fas fa-bullseye" style="color: var(--primary); margin-right: 6px;"></i> Registro de Questões do Dia</strong>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">Meta sugerida: ${day.targetQuestions} questões</div>
            </div>
            <div class="q-inputs">
              <div class="q-field">
                <label>Resolvidas:</label>
                <input type="number" min="0" value="${questionsDone}" onchange="updateDayQuestions('${day.id}', this.value, null)">
              </div>
              <div class="q-field">
                <label>Acertos:</label>
                <input type="number" min="0" value="${questionsCorrect}" onchange="updateDayQuestions('${day.id}', null, this.value)">
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleDayAccordion(dayId) {
  const card = document.getElementById(`card_${dayId}`);
  if (card) {
    card.classList.toggle('open');
  }
}

function toggleTask(dayId, taskId) {
  if (appState.checkedTasks[taskId]) {
    delete appState.checkedTasks[taskId];
  } else {
    appState.checkedTasks[taskId] = true;
  }
  saveState();
  updateWeekBadges();
  renderDaysForWeek(appState.currentWeek);
}

function updateDayQuestions(dayId, done, correct) {
  if (!appState.dayQuestions[dayId]) {
    appState.dayQuestions[dayId] = { done: 0, correct: 0 };
  }
  if (done !== null) appState.dayQuestions[dayId].done = parseInt(done) || 0;
  if (correct !== null) appState.dayQuestions[dayId].correct = parseInt(correct) || 0;
  saveState();
}

// =========================================================================
// MÉTRICAS GLOBAIS
// =========================================================================
function updateGlobalMetrics() {
  let totalTasks = 0;
  let doneTasks = 0;

  WEEKS_DATA.forEach(w => {
    w.days.forEach(d => {
      d.blocks.forEach((b, bIdx) => {
        b.tasks.forEach((t, tIdx) => {
          totalTasks++;
          const taskId = `${d.id}_b${bIdx}_t${tIdx}`;
          if (appState.checkedTasks[taskId]) doneTasks++;
        });
      });
    });
  });

  const progressPct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
  
  let totalQuestionsResolved = 0;
  let totalQuestionsCorrect = 0;
  Object.values(appState.dayQuestions).forEach(q => {
    totalQuestionsResolved += (q.done || 0);
    totalQuestionsCorrect += (q.correct || 0);
  });

  let simCount = 0;
  let simSum = 0;
  appState.simulados.forEach(s => {
    if (s.acertos > 0) {
      simCount++;
      simSum += (s.acertos / s.total) * 100;
    }
  });
  const avgSim = simCount > 0 ? Math.round(simSum / simCount) : 0;

  const globalProgElem = document.getElementById('metricGlobalProgress');
  const globalProgBar = document.getElementById('metricGlobalProgressBar');
  const questDoneElem = document.getElementById('metricQuestionsDone');
  const questAccElem = document.getElementById('metricQuestionsAccuracy');
  const simAvgElem = document.getElementById('metricSimuladoAvg');
  const errorsCountElem = document.getElementById('metricErrorsCount');
  const sidebarErrorBadge = document.getElementById('sidebarErrorBadge');
  const fcMasteredElem = document.getElementById('metricFlashcardsMastered');

  if (globalProgElem) globalProgElem.innerText = `${progressPct}%`;
  if (globalProgBar) globalProgBar.style.width = `${progressPct}%`;
  if (questDoneElem) questDoneElem.innerText = `${totalQuestionsResolved}`;
  if (questAccElem) {
    const accPct = totalQuestionsResolved > 0 ? Math.round((totalQuestionsCorrect / totalQuestionsResolved) * 100) : 0;
    questAccElem.innerText = `${accPct}% de acertos`;
  }
  if (simAvgElem) simAvgElem.innerText = `${avgSim}%`;
  if (errorsCountElem) errorsCountElem.innerText = `${appState.cadernoErros.length}`;
  if (sidebarErrorBadge) sidebarErrorBadge.innerText = `${appState.cadernoErros.length}`;
  if (fcMasteredElem) fcMasteredElem.innerText = `${Object.keys(appState.masteredFlashcards).length} / ${FLASHCARDS_DATA.length}`;
}

// =========================================================================
// CADERNO DE ERROS
// =========================================================================
function setupErrorForm() {
  const form = document.getElementById('errorForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const disciplina = document.getElementById('errDisciplina').value;
    const assunto = document.getElementById('errAssunto').value;
    const tipo = document.getElementById('errTipo').value;
    const conceito = document.getElementById('errConceito').value;
    const pegadinha = document.getElementById('errPegadinha').value;

    const newError = {
      id: 'err_' + Date.now(),
      date: new Date().toLocaleDateString('pt-BR'),
      disciplina,
      assunto,
      tipo,
      conceito,
      pegadinha,
      revisado: false
    };

    appState.cadernoErros.unshift(newError);
    saveState();
    renderCadernoErros();
    form.reset();
    showToast("Erro adicionado com sucesso ao Caderno!");
  });
}

function renderCadernoErros(filterTipo = 'all') {
  const container = document.getElementById('errorListContainer');
  if (!container) return;

  let list = appState.cadernoErros;
  if (filterTipo !== 'all') {
    list = list.filter(e => e.tipo === filterTipo);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i class="fas fa-book-open" style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.5;"></i>
        <p>Nenhum erro registrado ainda. Quando errar uma questão no Banco de Questões ou Simulado, envie para cá!</p>
      </div>
    `;
    return;
  }

  const typeLabels = {
    'nao-sabia': { label: '🔴 Não sabia', class: 'tag-nao-sabia' },
    'esqueci': { label: '🟠 Esqueci', class: 'tag-esqueci' },
    'duvida': { label: '🟡 Dúvida', class: 'tag-duvida' },
    'interpretacao': { label: '🔵 Interpretação', class: 'tag-interpretacao' },
    'distracao': { label: '⚫ Distração', class: 'tag-distracao' }
  };

  container.innerHTML = list.map(err => {
    const typeInfo = typeLabels[err.tipo] || { label: err.tipo, class: '' };
    return `
      <div class="error-item" id="${err.id}">
        <div class="error-item-header">
          <span class="error-meta">${err.disciplina} • ${err.assunto}</span>
          <span class="error-tag ${typeInfo.class}">${typeInfo.label}</span>
        </div>
        <div class="error-concept">
          <strong>Conceito Correto:</strong> ${err.conceito}
          ${err.pegadinha ? `<div style="margin-top: 6px; font-size: 0.8rem; color: var(--warning);">⚠️ <strong>Pegadinha / Alerta:</strong> ${err.pegadinha}</div>` : ''}
        </div>
        <div class="error-item-footer">
          <span style="font-size: 0.75rem; color: var(--text-muted);"><i class="far fa-calendar-alt"></i> ${err.date}</span>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 0.75rem;" onclick="toggleRevisado('${err.id}')">
              ${err.revisado ? '<i class="fas fa-check-double" style="color: var(--success);"></i> Revisado' : '<i class="far fa-clock"></i> Pendente'}
            </button>
            <button class="btn btn-danger" style="padding: 4px 10px; font-size: 0.75rem;" onclick="deleteError('${err.id}')">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterErrors(tipo) {
  renderCadernoErros(tipo);
}

function toggleRevisado(errId) {
  const item = appState.cadernoErros.find(e => e.id === errId);
  if (item) {
    item.revisado = !item.revisado;
    saveState();
    renderCadernoErros();
  }
}

function deleteError(errId) {
  if (confirm("Deseja realmente remover este registro de erro?")) {
    appState.cadernoErros = appState.cadernoErros.filter(e => e.id !== errId);
    saveState();
    renderCadernoErros();
    showToast("Registro excluído.");
  }
}

// =========================================================================
// MÓDULO SIMULADOS
// =========================================================================
function renderSimulados() {
  const tbody = document.getElementById('simuladosTableBody');
  if (!tbody) return;

  tbody.innerHTML = appState.simulados.map((s, idx) => {
    const pct = s.acertos > 0 ? Math.round((s.acertos / s.total) * 100) : 0;
    let badgeColor = 'var(--text-muted)';
    if (pct >= 90) badgeColor = 'var(--success)';
    else if (pct >= 80) badgeColor = 'var(--primary)';
    else if (pct >= 70) badgeColor = 'var(--warning)';
    else if (pct > 0) badgeColor = 'var(--danger)';

    return `
      <tr>
        <td><strong>Simulado ${s.num}</strong></td>
        <td>${s.date}</td>
        <td>
          <input type="number" min="0" max="40" value="${s.acertos}" style="width: 60px; padding: 4px 8px; border: 1px solid var(--border); border-radius: 4px; font-weight: 700; background: var(--bg-card); color: var(--text-main);" onchange="updateSimuladoScore(${idx}, this.value)">
          / 40
        </td>
        <td>
          <span style="font-weight: 800; color: ${badgeColor};">${pct}%</span>
        </td>
        <td>
          <input type="text" value="${s.tempo}" style="width: 70px; padding: 4px 8px; border: 1px solid var(--border); border-radius: 4px; background: var(--bg-card); color: var(--text-main);" onchange="updateSimuladoTempo(${idx}, this.value)">
        </td>
      </tr>
    `;
  }).join('');
}

function updateSimuladoScore(index, acertos) {
  appState.simulados[index].acertos = parseInt(acertos) || 0;
  saveState();
  renderSimulados();
}

function updateSimuladoTempo(index, tempo) {
  appState.simulados[index].tempo = tempo;
  saveState();
}

// =========================================================================
// TABELA DE DIAGNÓSTICO FINAL
// =========================================================================
function renderDiagnostico() {
  const tbody = document.getElementById('diagnosticoTableBody');
  if (!tbody) return;

  const labels = {
    portugues: "Língua Portuguesa",
    informatica: "Informática",
    matematica: "Matemática / RLM",
    constitucional: "Direito Constitucional",
    administrativo: "Direito Administrativo",
    especificos: "Conhecimentos Específicos",
    legislacao: "Legislação Municipal (LO + RI)"
  };

  tbody.innerHTML = Object.keys(appState.diagnostico).map(key => {
    const item = appState.diagnostico[key];
    const pct = item.total > 0 ? Math.round((item.acertos / item.total) * 100) : 0;
    
    let statusText = "Pendente";
    let statusClass = "tag-distracao";
    if (pct >= 90) { statusText = "🟢 Domínio (≥90%)"; statusClass = "tag-nao-sabia"; }
    else if (pct >= 80) { statusText = "🔵 Forte (80-89%)"; statusClass = "tag-interpretacao"; }
    else if (pct >= 70) { statusText = "🟡 Atenção (70-79%)"; statusClass = "tag-duvida"; }
    else if (item.acertos > 0) { statusText = "🔴 Prioridade (<70%)"; statusClass = "tag-nao-sabia"; }

    return `
      <tr>
        <td><strong>${labels[key]}</strong></td>
        <td>
          <input type="number" min="0" value="${item.acertos}" style="width: 60px; padding: 4px; border: 1px solid var(--border); border-radius: 4px; background: var(--bg-card); color: var(--text-main);" onchange="updateDiag('${key}', 'acertos', this.value)">
        </td>
        <td>
          <input type="number" min="1" value="${item.total}" style="width: 60px; padding: 4px; border: 1px solid var(--border); border-radius: 4px; background: var(--bg-card); color: var(--text-main);" onchange="updateDiag('${key}', 'total', this.value)">
        </td>
        <td><strong>${pct}%</strong></td>
        <td><span class="error-tag ${statusClass}">${statusText}</span></td>
      </tr>
    `;
  }).join('');
}

function updateDiag(key, field, val) {
  appState.diagnostico[key][field] = parseInt(val) || 0;
  saveState();
  renderDiagnostico();
}

// =========================================================================
// TIMER / POMODORO
// =========================================================================
let timerInterval = null;
let timerSeconds = 70 * 60;
let isTimerRunning = false;

function setupTimer() {
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const display = document.getElementById('timerDisplay');
  if (!display) return;
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  display.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
  if (isTimerRunning) return;
  isTimerRunning = true;
  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      isTimerRunning = false;
      showToast("⏰ Tempo esgotado! Excelente bloco de estudo concluído.");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTimer(minutes = 70) {
  pauseTimer();
  timerSeconds = minutes * 60;
  updateTimerDisplay();
}

// Toast
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

// Backup
function exportBackup() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `estudos_meruoca_backup_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Backup exportado com sucesso!");
}

function importBackup() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = readerEvent => {
      try {
        const content = JSON.parse(readerEvent.target.result);
        appState = content;
        saveState();
        location.reload();
      } catch (err) {
        alert("Arquivo de backup inválido!");
      }
    };
  };
  input.click();
}

// =========================================================================
// EDITAL VERTICALIZADO & CONTEÚDO PROGRAMÁTICO OFICIAL (EDITAL 001/2026)
// =========================================================================
let currentEditalRole = 'tecnico';

const EDITAL_PROGRAMATICO = {
  tecnico: [
    {
      id: "lp_tecnico",
      nome: "Língua Portuguesa (Nível Superior)",
      icone: "fa-book",
      peso: "10 Questões | Peso 2.5 (25 Pontos)",
      tipo: "geral",
      topicos: [
        { id: "lp-1", nome: "Compreensão e Interpretação de Textos", desc: "Situação comunicativa, pressuposição, inferência, ambiguidade, ironia, figurativização, polissemia, intertextualidade e linguagem não-verbal.", tags: ["Interpretação", "INBRASP"] },
        { id: "lp-2", nome: "Tipos e Gêneros Textuais", desc: "Narrativo, descritivo, expositivo, argumentativo, instrucional, propaganda, editorial, cartaz, anúncio, artigo de opinião, artigo de divulgação científica, ofício e carta.", tags: ["Gêneros Textuais"] },
        { id: "lp-3", nome: "Estrutura Textual & Coesão e Coerência", desc: "Progressão temática, parágrafo, frase, oração, período, enunciado, pontuação e conectivos coesivos.", tags: ["Coesão & Coerência"] },
        { id: "lp-4", nome: "Variedade Linguística & Adequação", desc: "Variedade linguística, formalidade vs informalidade, formas de tratamento, propriedade lexical e adequação comunicativa.", tags: ["Adequação"] },
        { id: "lp-5", nome: "Ortografia Oficial, Acentuação & Crase", desc: "Novo Acordo Ortográfico, regras de acentuação (oxítonas, paroxítonas, proparoxítonas e hiatos) e emprego do sinal indicativo de crase.", tags: ["Altíssima Incidência"] },
        { id: "lp-6", nome: "Morfologia & Formação de Palavras", desc: "Processos de derivação (prefixal, sufixal, parassintética) e composição; sentido e emprego das 10 classes de palavras; flexão nominal e verbal.", tags: ["Morfologia"] },
        { id: "lp-7", nome: "Sintaxe da Oração e do Período", desc: "Termos da oração (essenciais, integrantes e acessórios); processos de coordenação e subordinação de orações.", tags: ["Sintaxe"] },
        { id: "lp-8", nome: "Regência e Concordância (Nominal e Verbal)", desc: "Regência nominal e verbal de casos clássicos; concordância com sujeito composto, partitivo e verbo haver impessoal (transitivo direto).", tags: ["Altíssima Incidência"] },
        { id: "lp-9", nome: "Colocação Pronominal", desc: "Padrões gerais de próclise, mesóclise e ênclise no português padrão e casos proibitivos.", tags: ["Padrão Culto"] },
        { id: "lp-10", nome: "Semântica, Estilística & Reescrita", desc: "Sentido e emprego dos vocábulos, campos semânticos, sinônimos, figuras de linguagem; reescrita de frases (substituição, deslocamento, paralelismo sintático).", tags: ["Semântica"] }
      ]
    },
    {
      id: "inf_tecnico",
      nome: "Noções de Informática (Nível Superior)",
      icone: "fa-desktop",
      peso: "Conhecimentos Gerais (Peso 2.5)",
      tipo: "geral",
      topicos: [
        { id: "inf-1", nome: "Algoritmos e Programação de Computadores", desc: "Fundamentos, construção e análise de algoritmos, pseudocódigos, fluxogramas, conceitos de programação estruturada (Python, JavaScript, etc.).", tags: ["Diferencial do Edital"] },
        { id: "inf-2", nome: "Sistemas Operacionais Modernos", desc: "Fundamentos e operação, gerenciamento de arquivos/pastas, procedimentos de backup e recuperação (disaster recovery), Ubuntu Linux e Windows 11.", tags: ["Linux & Win 11"] },
        { id: "inf-3", nome: "Dispositivos de Entrada e Saída (Hardware)", desc: "Conceitos de arquitetura de computadores, funcionamento, tipos e instalação de periféricos.", tags: ["Hardware"] },
        { id: "inf-4", nome: "Aplicativos para Escritório (Office & Workspace)", desc: "Edição de textos, planilhas eletrônicas (fórmulas, funções e referências no Excel/Calc), apresentações e bancos de dados (Microsoft Office e Google Workspace).", tags: ["Office & Workspace"] },
        { id: "inf-5", nome: "Importação e Exportação de Dados", desc: "Formatos de documentos (PDF, CSV, XLSX, XML, JSON), técnicas de conversão e transferência entre plataformas.", tags: ["Dados"] },
        { id: "inf-6", nome: "Redes de Computadores & Internet/Intranet", desc: "Fundamentos, modelos de rede (LAN, WAN), endereçamento IP, protocolos essenciais (TCP/IP, HTTP, HTTPS, DNS, DHCP).", tags: ["Redes"] },
        { id: "inf-7", nome: "Navegadores & Serviços de Internet", desc: "Microsoft Edge, Mozilla Firefox e Google Chrome: recursos de navegação, histórico, modo anônimo, extensões e pesquisas avançadas.", tags: ["Navegadores"] },
        { id: "inf-8", nome: "Correio Eletrônico & Ferramentas de Comunicação", desc: "Email do Windows, Thunderbird, protocolos (SMTP, POP3, IMAP); soluções corporativas e mensageria (WhatsApp, Telegram, Skype, Discord, Teams).", tags: ["Comunicação"] },
        { id: "inf-9", nome: "Computação em Nuvem (Cloud Computing)", desc: "Fundamentos de nuvem, tipos de oferta de serviço (IaaS, PaaS, SaaS), modelos de implementação e provedoras (Google, Amazon AWS, Microsoft Azure).", tags: ["Cloud"] },
        { id: "inf-10", nome: "Segurança da Informação & Malwares", desc: "Princípios de segurança (confidencialidade, integridade, disponibilidade, autenticidade), malwares (vírus, worms, trojans, ransomware, phishing), antivírus e firewall.", tags: ["Altíssima Incidência"] },
        { id: "inf-11", nome: "Ambientes Corporativos & Domínio", desc: "Serviços de rede, autenticação e autorização, conceito de domínio de rede e compartilhamento seguro de pastas e recursos.", tags: ["Corporativo"] }
      ]
    },
    {
      id: "mat_tecnico",
      nome: "Matemática e Raciocínio Lógico (Nível Superior)",
      icone: "fa-calculator",
      peso: "Conhecimentos Gerais (Peso 2.5)",
      tipo: "geral",
      topicos: [
        { id: "mat-1", nome: "Raciocínio Lógico Proposicional", desc: "Proposições lógicas, conectivos (conjunção, disjunção, condicional, bicondicional), tabela-verdade, negações lógicas (Leis de De Morgan) e equivalências.", tags: ["RLM Clássico"] },
        { id: "mat-2", nome: "Teoria dos Conjuntos & Diagramas", desc: "Relações de pertinência, inclusão, união, intersecção, diferença de conjuntos e resolução de problemas práticos via diagramas de Venn.", tags: ["Conjuntos"] },
        { id: "mat-3", nome: "Razão, Proporção & Regra de Três", desc: "Grandezas direta e inversamente proporcionais, divisão proporcional, regra de três simples e composta aplicada a rotinas públicas.", tags: ["Proporcionalidade"] },
        { id: "mat-4", nome: "Porcentagem & Juros Simples", desc: "Cálculo de variações percentuais, aumentos e descontos sucessivos, juros simples e determinação de montante.", tags: ["Matemática Financeira"] },
        { id: "mat-5", nome: "Geometria Plana e Espacial", desc: "Cálculo de perímetros, áreas de figuras planas (triângulos, quadriláteros, círculos) e noções de volume.", tags: ["Geometria"] },
        { id: "mat-6", nome: "Sistemas Lineares & Álgebra Básica", desc: "Equações de primeiro e segundo graus, resolução de sistemas lineares de duas ou mais variáveis.", tags: ["Álgebra"] },
        { id: "mat-7", nome: "Progressões (PA e PG)", desc: "Identificação de progressão aritmética e geométrica, termo geral, razão e soma dos termos.", tags: ["Sequências"] },
        { id: "mat-8", nome: "Análise Combinatória & Probabilidade", desc: "Princípio fundamental da contagem, fatorial, permutações, arranjos, combinações e probabilidade em eventos simples e compostos.", tags: ["Contagem"] },
        { id: "mat-9", nome: "Estatística Descritiva", desc: "Interpretação de dados, gráficos e tabelas; medidas de tendência central: média aritmética simples e ponderada, moda e mediana.", tags: ["Estatística"] },
        { id: "mat-10", nome: "Trigonometria & Sequências Lógicas", desc: "Relações trigonométricas no triângulo retângulo (seno, cosseno, tangente) e identificação de padrões lógicos sequenciais.", tags: ["Lógica"] }
      ]
    },
    {
      id: "dir_geral_tecnico",
      nome: "Noções de D. Administrativo e Constitucional (Gerais)",
      icone: "fa-scale-balanced",
      peso: "Conhecimentos Gerais (Peso 2.5)",
      tipo: "geral",
      topicos: [
        { id: "dg-1", nome: "Princípios da Administração Pública (Art. 37 CF)", desc: "Princípios expressos (LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência) e princípios implícitos da administração.", tags: ["LIMPE - Art. 37"] },
        { id: "dg-2", nome: "Poderes Administrativos", desc: "Poder vinculado, discricionário, hierárquico, disciplinar, regulamentar e de polícia (características, autoexecutoriedade, discricionariedade e limites).", tags: ["Poderes"] },
        { id: "dg-3", nome: "Atos Administrativos", desc: "Conceito, requisitos/elementos de validade (COMFIFOR), atributos do ato (PATI: presunção, autoexecutoriedade, tipicidade, imperatividade), espécies e invalidação.", tags: ["Atos Adm"] },
        { id: "dg-4", nome: "Licitações e Contratos Administrativos", desc: "Noções fundamentais da Lei nº 14.133/2021: princípios, fases do procedimento, modalidades e hipóteses de contratação direta.", tags: ["Lei 14.133/2021"] },
        { id: "dg-5", nome: "Serviços Públicos & Órgãos Públicos", desc: "Conceito e princípios dos serviços públicos, descentralização vs desconcentração, administração direta e indireta.", tags: ["Organização"] },
        { id: "dg-6", nome: "Servidores Públicos & Improbidade", desc: "Regimes funcionais (estatutário e trabalhista), cargo, emprego e função pública; noções de processo administrativo e improbidade.", tags: ["Servidores"] },
        { id: "dg-7", nome: "CF/88: Princípios & Direitos Fundamentais (Arts. 1º ao 5º)", desc: "Princípios fundamentais (Arts. 1º ao 4º) e direitos e deveres individuais e coletivos (Art. 5º: vida, liberdade, igualdade, segurança, propriedade e remédios constitucionais).", tags: ["CF Arts. 1º a 5º"] },
        { id: "dg-8", nome: "CF/88: Direitos Sociais, Nacionalidade & Políticos (Arts. 6º ao 16)", desc: "Direitos sociais dos trabalhadores (Arts. 6º ao 11), nacionalidade originária e derivada (Arts. 12-13), e direitos políticos/partidos (Arts. 14-16).", tags: ["CF Arts. 6º a 16"] },
        { id: "dg-9", nome: "CF/88: Organização, Municípios & Servidores (Arts. 18-19, 29-31, 37-41)", desc: "Organização político-administrativa, preceitos específicos sobre os Municípios (autonomia, subsídios, fiscalização da Câmara) e regime dos servidores públicos.", tags: ["CF Arts. 29-31 e 37-41"] }
      ]
    },
    {
      id: "especificas_tecnico",
      nome: "Conhecimentos Específicos: Técnico Legislativo",
      icone: "fa-gavel",
      peso: "20 Questões | Peso 2.5 (50 PONTOS — 50% DE TODA A PROVA)",
      tipo: "especifica",
      topicos: [
        { id: "esp-1", nome: "CF/88 & O Poder Legislativo Constitucional", desc: "Princípios e objetivos da República; organização do Estado; funções típicas (legislar e fiscalizar) e atípicas (administrar e julgar); processo legislativo constitucional; espécies normativas (Art. 59 CF); competência legislativa municipal (Art. 30 CF); controle de constitucionalidade.", tags: ["CF/88", "Processo Legislativo", "50% da Prova"] },
        { id: "esp-2", nome: "Direito Administrativo Aplicado & Responsabilidade", desc: "Administração direta e indireta; atos administrativos (elementos, atributos, cassação, anulação, revogação e convalidação); poderes administrativos; serviços públicos; responsabilidade civil objetiva do Estado (Art. 37, §6º da CF); controle interno e externo.", tags: ["D. Administrativo", "Controle Externo"] },
        { id: "esp-3", nome: "Nova Lei de Licitações (Lei nº 14.133/2021)", desc: "Princípios da licitação; modalidades (pregão, concorrência, concurso, leilão, diálogo competitivo); rito procedimental e inversão de fases; contratação direta (dispensa e inexigibilidade); contratos administrativos e Sistema de Registro de Preços (SRP).", tags: ["Lei 14.133/2021", "Altíssima Incidência"] },
        { id: "esp-4", nome: "Lei de Improbidade Administrativa (Lei nº 8.429/1992)", desc: "Atualizações trazidas pela Lei 14.230/2021: exigência de dolo específico; atos de enriquecimento ilícito (Art. 9º), prejuízo ao erário (Art. 10) e atentado aos princípios (Art. 11); prazos de prescrição unificados em 8 anos.", tags: ["Lei 8.429/92", "Improbidade"] },
        { id: "esp-5", nome: "Lei Orgânica do Município de Meruoca", desc: "Organização dos poderes locais; competências privativas e comuns da Câmara e do Prefeito; prazos de sanção e veto (15 dias úteis) e derrubada de veto (30 dias); quóruns qualificados (2/3 e maioria absoluta); processo legislativo municipal.", tags: ["Legislação de Meruoca", "Obrigatório"] },
        { id: "esp-6", nome: "Regimento Interno da Câmara de Meruoca", desc: "Mesa Diretora (eleição, competências do Presidente); sessões legislativas (ordinárias, extraordinárias, solenes e secretas); comissões permanentes e temporárias (CPIs); proposições legislativas, substitutivos, emendas e rito de votação.", tags: ["Regimento Interno", "Rotina Parlamentar"] },
        { id: "esp-7", nome: "Técnica Legislativa & Lei Complementar nº 95/1998", desc: "Elaboração, redação, alteração e consolidação das leis; estrutura padrão das normas (epígrafe, ementa, preâmbulo, artigos, parágrafos, incisos, alíneas e fecho); regras de revogação e contagem de prazos de vigência.", tags: ["LC 95/1998", "Técnica Legislativa"] },
        { id: "esp-8", nome: "Redação Oficial & Atos Parlamentares", desc: "Linguagem normativa (clareza, concisão e impessoalidade); elaboração de projetos de lei, decretos legislativos, resoluções, pareceres técnicos e jurídicos; atos administrativos e correspondências oficiais (ofícios, cartas e memorandos).", tags: ["Redação Oficial"] },
        { id: "esp-9", nome: "Gestão Pública, Governança & Organização", desc: "Planejamento estratégico no setor público; organização administrativa da Câmara Municipal; gestão de processos de trabalho legislativos; gestão de pessoas no setor público; governança pública e compliance; avaliação de resultados.", tags: ["Gestão Pública", "Governança"] },
        { id: "esp-10", nome: "Gestão Documental & Arquivística", desc: "Ciclo vital dos documentos (teoria das três idades: arquivo corrente, intermediário e permanente); métodos de arquivamento (alfabético, numérico, ideográfico/por assunto); tabela de temporalidade; protocolo, rastreabilidade e GED.", tags: ["Arquivologia", "Protocolo"] },
        { id: "esp-11", nome: "Orçamento Público (PPA, LDO e LOA)", desc: "Conceitos e princípios orçamentários (anualidade, universalidade, unidade, exclusividade); Plano Plurianual (PPA); Lei de Diretrizes Orçamentárias (LDO); Lei Orçamentária Anual (LOA); créditos adicionais; fiscalização contábil, orçamentária e financeira.", tags: ["Orçamento Público", "PPA/LDO/LOA"] },
        { id: "esp-12", nome: "Lei de Responsabilidade Fiscal (LC nº 101/2000)", desc: "Limites de gastos com pessoal para o Poder Legislativo Municipal; vedações no final de mandato e Restos a Pagar (Art. 42); Relatório de Gestão Fiscal (RGF); mecanismos de transparência e controle da gestão fiscal.", tags: ["LRF / LC 101", "Fiscalização"] },
        { id: "esp-13", nome: "Ciência Política & Políticas Públicas", desc: "Estado, governo e sociedade; sistemas de governo e formas de Estado; democracia representativa e participativa; partidos e representação parlamentar; processo decisório e agenda legislativa; ciclo das políticas públicas e controle social.", tags: ["Políticas Públicas", "Ciência Política"] },
        { id: "esp-14", nome: "Transparência, Ética & Proteção de Dados (LAI & LGPD)", desc: "Lei de Acesso à Informação (Lei nº 12.527/2011: transparência ativa e passiva); Código de Ética do Servidor Público e conflito de interesses; Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD); segurança da informação no setor público.", tags: ["LAI & LGPD", "Ética no Serviço"] }
      ]
    }
  ],
  agente: [
    {
      id: "lp_agente",
      nome: "Língua Portuguesa (Nível Médio)",
      icone: "fa-book",
      peso: "10 Questões | Peso 2.5 (25 Pontos)",
      tipo: "geral",
      topicos: [
        { id: "ag-lp-1", nome: "Compreensão e Interpretação de Textos", desc: "Identificação da ideia principal, informações explícitas e implícitas, inferências e linguagem não-verbal.", tags: ["Interpretação"] },
        { id: "ag-lp-2", nome: "Ortografia, Acentuação & Crase", desc: "Regras do Acordo Ortográfico, divisão silábica, acentuação gráfica e emprego do sinal de crase.", tags: ["Ortografia"] },
        { id: "ag-lp-3", nome: "Classes de Palavras & Flexão", desc: "Identificação e sentido de substantivos, adjetivos, pronomes, verbos, conjunções e preposições.", tags: ["Morfologia"] },
        { id: "ag-lp-4", nome: "Sintaxe, Concordância & Regência", desc: "Termos fundamentais da oração, concordância nominal e verbal, regência verbal e nominal.", tags: ["Sintaxe"] }
      ]
    },
    {
      id: "gerais_agente",
      nome: "Noções Gerais: Informática, RLM, Constitucional e Administrativo",
      icone: "fa-layer-group",
      peso: "10 Questões | Peso 2.5 (25 Pontos)",
      tipo: "geral",
      topicos: [
        { id: "ag-ger-1", nome: "Noções de Informática (Word & Excel)", desc: "Edição de textos, formatação de parágrafos, tabelas, fórmulas básicas e planilhas eletrônicas no Word e Excel.", tags: ["Informática"] },
        { id: "ag-ger-2", nome: "Matemática e Raciocínio Lógico", desc: "Conjuntos numéricos, operações fundamentais, regra de três simples, porcentagem, medidas e problemas lógicos.", tags: ["Matemática"] },
        { id: "ag-ger-3", nome: "Constituição Federal (Arts. 1º a 16, 29 a 31, 37 a 41)", desc: "Princípios fundamentais, direitos e garantias fundamentais, regras dos municípios e princípios da administração pública.", tags: ["CF/88"] },
        { id: "ag-ger-4", nome: "Noções de Direito Administrativo", desc: "Princípios (LIMPE), poderes administrativos, atos administrativos (requisitos e atributos), licitações e contratos.", tags: ["D. Administrativo"] }
      ]
    },
    {
      id: "especificas_agente",
      nome: "Conhecimentos Específicos: Agente Administrativo",
      icone: "fa-folder-open",
      peso: "20 Questões | Peso 2.5 (50 PONTOS — 50% DA PROVA)",
      tipo: "especifica",
      topicos: [
        { id: "ag-esp-1", nome: "Redação Oficial & Correspondências", desc: "Estrutura e redação de ofícios, comunicações internas, cartas, requerimentos; protocolo, expedição e distribuição de correspondência.", tags: ["Redação Oficial"] },
        { id: "ag-esp-2", nome: "Rotinas Administrativas, Arquivo & Protocolo", desc: "Noções de controle de materiais, organização e métodos de arquivo, técnicas de protocolo e rastreabilidade documental, racionalização do trabalho.", tags: ["Arquivo & Protocolo"] },
        { id: "ag-esp-3", nome: "Atendimento ao Público & Qualidade", desc: "Noções básicas de atendimento ao público, acolhimento, escuta ativa, clareza, resolutividade e excelência na prestação de serviço.", tags: ["Atendimento"] },
        { id: "ag-esp-4", nome: "Relações Humanas, Ética & Motivação", desc: "Ética profissional, relações interpessoais, trabalho em equipe, motivação, comunicação no ambiente de trabalho e etiqueta profissional.", tags: ["Relações Humanas"] },
        { id: "ag-esp-5", nome: "Higiene e Segurança no Trabalho", desc: "Conceitos básicos, importância das condições seguras de trabalho, prevenção de acidentes e qualidade de vida no trabalho (QVT).", tags: ["Segurança do Trabalho"] },
        { id: "ag-esp-6", nome: "Técnicas Administrativas & Funções da Gestão", desc: "Fundamentos da administração (planejamento, organização, direção e controle - PODC), técnicas organizacionais e recebimento/transmissão de informações.", tags: ["Administração"] }
      ]
    }
  ]
};

function initEditalVerticalizado() {
  if (!appState.editalChecks) {
    appState.editalChecks = {};
  }
  renderEditalProgramatico();
}

function switchEditalRole(role) {
  currentEditalRole = role;
  const btnTecnico = document.getElementById('btnRoleTecnico');
  const btnAgente = document.getElementById('btnRoleAgente');
  
  if (btnTecnico && btnAgente) {
    btnTecnico.classList.toggle('active', role === 'tecnico');
    btnAgente.classList.toggle('active', role === 'agente');
  }
  
  renderEditalProgramatico();
}

function renderEditalProgramatico() {
  const container = document.getElementById('editalDisciplinesContainer');
  if (!container) return;

  const disciplines = EDITAL_PROGRAMATICO[currentEditalRole] || EDITAL_PROGRAMATICO.tecnico;
  
  container.innerHTML = disciplines.map(disc => {
    const isEspec = disc.tipo === 'especifica';
    const badgeClass = isEspec ? 'badge-peso-especifica' : 'badge-peso-geral';

    return `
      <div class="discipline-card" id="disc_card_${disc.id}">
        <div class="discipline-card-header" onclick="toggleDiscipline('${disc.id}')">
          <div class="discipline-card-title">
            <i class="fas ${disc.icone}" style="color: ${isEspec ? '#dc2626' : 'var(--primary)'}; font-size: 1.2rem;"></i>
            <span>${disc.nome}</span>
          </div>
          <div class="discipline-card-badges">
            <span class="badge-discipline-peso ${badgeClass}">${disc.peso}</span>
            <i class="fas fa-chevron-down" id="chevron_${disc.id}" style="color: var(--text-muted); transition: transform 0.2s;"></i>
          </div>
        </div>

        <div class="topics-container" id="topics_${disc.id}">
          ${disc.topicos.map(topic => {
            const checks = appState.editalChecks[topic.id] || { teoria: false, questoes: false, revisao: false };
            return `
              <div class="topic-item" data-topic-id="${topic.id}" data-search="${topic.nome.toLowerCase()} ${topic.desc.toLowerCase()} ${(topic.tags||[]).join(' ').toLowerCase()}">
                <div class="topic-info">
                  <div class="topic-name">${topic.nome}</div>
                  <div class="topic-details">${topic.desc}</div>
                  ${topic.tags && topic.tags.length ? `
                    <div class="topic-tags">
                      ${topic.tags.map(t => `<span class="topic-tag ${t.includes('Altíssima') || t.includes('50%') || t.includes('Obrigatório') ? 'highlight' : ''}">${t}</span>`).join('')}
                    </div>
                  ` : ''}
                </div>

                <div class="topic-checks">
                  <button type="button" class="topic-check-btn ${checks.teoria ? 'checked-teoria' : ''}" onclick="toggleTopicCheck('${topic.id}', 'teoria')">
                    <i class="fas ${checks.teoria ? 'fa-check-circle' : 'fa-circle'}"></i> Teoria
                  </button>
                  <button type="button" class="topic-check-btn ${checks.questoes ? 'checked-questoes' : ''}" onclick="toggleTopicCheck('${topic.id}', 'questoes')">
                    <i class="fas ${checks.questoes ? 'fa-check-circle' : 'fa-circle'}"></i> Questões
                  </button>
                  <button type="button" class="topic-check-btn ${checks.revisao ? 'checked-revisao' : ''}" onclick="toggleTopicCheck('${topic.id}', 'revisao')">
                    <i class="fas ${checks.revisao ? 'fa-check-circle' : 'fa-circle'}"></i> Revisão
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  updateEditalProgress();
}

function toggleDiscipline(discId) {
  const topicsDiv = document.getElementById(`topics_${discId}`);
  const chevron = document.getElementById(`chevron_${discId}`);
  if (!topicsDiv) return;

  if (topicsDiv.style.display === 'none') {
    topicsDiv.style.display = 'block';
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  } else {
    topicsDiv.style.display = 'none';
    if (chevron) chevron.style.transform = 'rotate(-90deg)';
  }
}

function expandAllDisciplines() {
  const disciplines = EDITAL_PROGRAMATICO[currentEditalRole] || EDITAL_PROGRAMATICO.tecnico;
  disciplines.forEach(disc => {
    const topicsDiv = document.getElementById(`topics_${disc.id}`);
    const chevron = document.getElementById(`chevron_${disc.id}`);
    if (topicsDiv) topicsDiv.style.display = 'block';
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  });
}

function collapseAllDisciplines() {
  const disciplines = EDITAL_PROGRAMATICO[currentEditalRole] || EDITAL_PROGRAMATICO.tecnico;
  disciplines.forEach(disc => {
    const topicsDiv = document.getElementById(`topics_${disc.id}`);
    const chevron = document.getElementById(`chevron_${disc.id}`);
    if (topicsDiv) topicsDiv.style.display = 'none';
    if (chevron) chevron.style.transform = 'rotate(-90deg)';
  });
}

function toggleTopicCheck(topicId, type) {
  if (!appState.editalChecks) appState.editalChecks = {};
  if (!appState.editalChecks[topicId]) {
    appState.editalChecks[topicId] = { teoria: false, questoes: false, revisao: false };
  }

  appState.editalChecks[topicId][type] = !appState.editalChecks[topicId][type];
  saveState();
  renderEditalProgramatico();
}

function updateEditalProgress() {
  const disciplines = EDITAL_PROGRAMATICO[currentEditalRole] || EDITAL_PROGRAMATICO.tecnico;
  let totalTopics = 0;
  let completedTopics = 0;

  disciplines.forEach(disc => {
    disc.topicos.forEach(topic => {
      totalTopics++;
      const checks = appState.editalChecks[topic.id];
      // Tópico é considerado concluído/dominado se tiver Teoria OU Questões assinaladas
      if (checks && (checks.teoria || checks.questoes)) {
        completedTopics++;
      }
    });
  });

  const pct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  
  const countEl = document.getElementById('editalProgressCount');
  const pctEl = document.getElementById('editalProgressPercent');
  const barEl = document.getElementById('editalProgressBar');

  if (countEl) countEl.innerText = `${completedTopics} de ${totalTopics} tópicos dominados`;
  if (pctEl) pctEl.innerText = `${pct}%`;
  if (barEl) barEl.style.width = `${pct}%`;
}

function filterEditalTopics() {
  const input = document.getElementById('editalSearchInput');
  if (!input) return;
  const q = input.value.toLowerCase().trim();

  const items = document.querySelectorAll('.topic-item');
  items.forEach(item => {
    const searchData = item.getAttribute('data-search') || '';
    if (!q || searchData.includes(q)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });

  // Também oculta cartões de disciplinas que não têm tópicos visíveis
  const disciplines = EDITAL_PROGRAMATICO[currentEditalRole] || EDITAL_PROGRAMATICO.tecnico;
  disciplines.forEach(disc => {
    const card = document.getElementById(`disc_card_${disc.id}`);
    const topicsDiv = document.getElementById(`topics_${disc.id}`);
    if (!card || !topicsDiv) return;

    if (!q) {
      card.style.display = 'block';
    } else {
      const visibleItems = topicsDiv.querySelectorAll('.topic-item:not([style*="display: none"])');
      card.style.display = visibleItems.length > 0 ? 'block' : 'none';
      if (visibleItems.length > 0) {
        topicsDiv.style.display = 'block';
      }
    }
  });
}

