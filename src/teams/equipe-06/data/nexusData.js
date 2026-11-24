import lucasPhoto from "../assets/foto-lucas-core.jpg";
import leticiaPhoto from "../assets/foto-leticia-core.jpg";
import yasminPhoto from "../assets/foto-yasmin-core.jpg";
import isabelePhoto from "../assets/foto-isa-core.jpeg";
import carlosPhoto from "../assets/foto-carlos-core.jpeg";

export const projectInfo = {
  teamNumber: "EQUIPE 06",
  teamName: "Nexus CORE",
  hospitalUnit: "Central de Operações e Relações Externas (CORE)",
  tagline: "Módulo Digital de Agendamento e Distribuição Cirúrgica Hospitalar",
  repoUrl: "https://github.com/LucasLimadeSousa/Site-Hospitalar.git",
  portfolioRepoUrl: "https://github.com/InkoLHP/portfolio-NexusCORE.git",
  location: "Fortaleza - CE • 2026",
  video: {
    youtubeEmbedUrl: "https://www.youtube.com/embed/vigGiz1nyf8",
    youtubeWatchUrl: "https://youtu.be/vigGiz1nyf8",
    title: "Apresentação do Projeto Nexus CORE — Agendamento Cirúrgico Hospitalar",
    referenceSource:
      "Especificação Técnica Nexus CORE (RF01–RF06 / RNF01–RNF06), Slides de Apresentação & Protótipos de Telas",
    referenceDetails:
      "Explicação completa da solução desenvolvida pela Equipe 06 para a Central de Operações e Relações Externas (CORE): centralização de cirurgias autorizadas, checagem em tempo real de materiais especiais (OPME) e equipamentos do Centro Cirúrgico e distribuição inteligente de salas via histórico P90.",
    scriptStructure:
      "Apresentação em 4 etapas: (1) Gargalos operacionais do bloco cirúrgico; (2) Arquitetura integrada entre CORE, OPME e Centro Cirúrgico; (3) Regras de bloqueio por pendência e cálculo de ocupação (70% a 80%); (4) Impacto esperado de até 30% de redução nos atrasos."
  },
  aboutAndAI: {
    purpose:
      "Esta página apresenta a entrega oficial da Equipe 06 no Desafio Integrador, estruturada como um painel clínico digital para documentar a arquitetura, os requisitos e os protótipos do sistema Nexus CORE.",
    problemSolved:
      "Elimina falhas de comunicação entre a Central de Agendamento (CORE), fornecedores de OPME e Centro Cirúrgico, aplicando travas automáticas que impedem a marcação de cirurgias sem insumos ou equipamentos higienizados.",
    aiUsage:
      "Ferramentas de Inteligência Artificial apoiaram a arquitetura React + Vite, o design system hospitalar responsivo com Tailwind CSS, a estruturação do simulador interativo de ocupação P90 e a revisão técnica dos requisitos e modelagem relacional."
  },
  modules: [
    {
      code: "RF02 • RF03",
      sector: "Central CORE",
      title: "Dashboard & Triagem por Código",
      description:
        "Recepção das solicitações recém-autorizadas pela Auditoria com busca instantânea por código, classificação de porte (Baixo, Médio ou Alto) e identificação do fornecedor indicado."
    },
    {
      code: "RF05",
      sector: "Logística OPME",
      title: "Controle de Órteses e Próteses",
      description:
        "Módulo restrito para alinhamento direto com fornecedores de materiais especiais, atualizando o status de 'Pendência' para 'Disponível' em tempo real no painel do CORE."
    },
    {
      code: "RF06",
      sector: "Centro Cirúrgico",
      title: "Checklist de Higienização e Equipamentos",
      description:
        "Painel operacional da equipe de enfermagem para validar se cada equipamento solicitado pelo cirurgião está livre, esterilizado e pronto para a data prevista."
    },
    {
      code: "RF04",
      sector: "Inteligência P90",
      title: "Motor de Distribuição de Salas",
      description:
        "Algoritmo executado em menos de 3 segundos que soma o tempo médio histórico (P90) ao tempo técnico de limpeza da sala, respeitando a meta de ocupação de 70% a 80%."
    }
  ],
  stack: {
    frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Lucide React"],
    backend: ["Node.js", "Express", "TypeScript", "JWT Auth"],
    database: ["PostgreSQL", "Supabase", "Conformidade LGPD"]
  },
  teamProfile:
    "Equipe multidisciplinar organizada sob metodologia ágil inspirada no Scrum com ciclos semanais (Sprint Planning, Daily Check-ins e Sprint Review), integrando gestão de escopo, design centrado no usuário hospitalar, API RESTful e banco de dados relacional.",
  members: [
    {
      id: "CORE-01",
      name: "Lucas Lima",
      photo: lucasPhoto,
      photoPosition: "object-center",
      role: "Gerente de Projeto",
      department: "Gestão & Requisitos",
      skills: ["Scrum", "Requisitos (RF/RNF)", "Git & GitHub", "Coordenação"],
      bio: "Liderou o planejamento das sprints semanais, o levantamento de regras de negócio do setor CORE e a integração entre as frentes de desenvolvimento.",
      github: "https://github.com/LucasLimadeSousa"
    },
    {
      id: "CORE-02",
      name: "Leticia Fermanian",
      photo: leticiaPhoto,
      photoPosition: "object-center",
      role: "Dev Front-end",
      department: "Interface Clínica",
      skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
      bio: "Desenvolveu as interfaces reativas do Dashboard CORE, busca por código cirúrgico, indicadores visuais de pendência e consumo da API."
    },
    {
      id: "CORE-03",
      name: "Yasmin Miranda",
      photo: yasminPhoto,
      photoPosition: "object-[42%_center]", // desloca levemente para a esquerda para centralizar o rosto (evitando o celular na direita)
      role: "Dev Back-end",
      department: "API & Segurança",
      skills: ["Node.js", "Express", "TypeScript", "JWT", "Regras de Negócio"],
      bio: "Construiu a API REST, o fluxo de autenticação segura com JWT e as travas lógicas que garantem integridade após a confirmação cirúrgica."
    },
    {
      id: "CORE-04",
      name: "Isabele Aragão",
      photo: isabelePhoto,
      photoPosition: "object-[center_45%]",
      role: "Dev Banco de Dados",
      department: "Dados & LGPD",
      skills: ["PostgreSQL", "Supabase", "Modelagem MER/DER", "SQL"],
      bio: "Projetou o modelo entidade-relacionamento (Paciente, Médico, Sala, Tipo_Cirurgia e Agendamento) e a estrutura no Supabase para histórico P90."
    },
    {
      id: "CORE-05",
      name: "Carlos Eduardo",
      photo: carlosPhoto,
      photoPosition: "object-[center_40%]",
      role: "Design UX/UI",
      department: "Experiência Hospitalar",
      skills: ["Wireframes", "Protótipos", "Design System", "Usabilidade"],
      bio: "Criou a identidade visual e os protótipos de alta clareza das telas de Login, Dashboard, Distribuição P90, OPME e Centro Cirúrgico."
    }
  ]
};