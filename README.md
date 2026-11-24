# 🏥 Portfólio Web — Equipe 06 | Nexus CORE

<div align="center">

**Módulo Digital de Agendamento e Distribuição Cirúrgica Hospitalar**

[![Deploy Vercel](https://img.shields.io/badge/Vercel-Online-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-nexus-core.vercel.app)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

### 🌐 Acesse o Portfólio Publicado:
**[https://portfolio-nexus-core.vercel.app](https://portfolio-nexus-core.vercel.app)**

</div>

---

## 📋 Sobre o Portfólio

Este repositório contém a aplicação web desenvolvida pela **Equipe 06** para o **Desafio Integrador — Portfólio Coletivo da Turma** (Fortaleza - CE, 2026). 

Construída em **React + Vite + Tailwind CSS** com deploy contínuo na **Vercel**, a página apresenta de forma interativa o projeto **Nexus CORE** — uma plataforma hospitalar concebida para centralizar o fluxo de pré-agendamento cirúrgico da Central de Operações e Relações Externas (CORE), garantindo rastreabilidade, travas de segurança para materiais especiais (OPME) e equipamentos, e conformidade com a LGPD.

### 🔗 Links Importantes
* **Portfólio Ao Vivo (Vercel):** [portfolio-nexus-core.vercel.app](https://portfolio-nexus-core.vercel.app)
* **Repositório do Sistema Completo (Front-end + Back-end):** [github.com/LucasLimadeSousa/Site-Hospitalar](https://github.com/LucasLimadeSousa/Site-Hospitalar.git)
* **Vídeo de Demonstração (YouTube):** [youtu.be/vigGiz1nyf8](https://youtu.be/vigGiz1nyf8)

---

## ✨ Destaques da Página

* **Telemetria & Identidade Hospitalar:** Interface clínica inspirada em centros de comando cirúrgico com monitor ECG animado e indicadores de desempenho do sistema (`< 3s` de resposta no cálculo P90 e redução estimada de até `30%` nos atrasos cirúrgicos)
* **Vídeo com Referência Técnica:** Apresentação embutida do fluxo operacional acompanhada do prontuário de referência (requisitos RF01–RF06, RNF01–RNF06 e roteiro da solução)
* **Simulador Interativo do Motor P90 (RF04):** Componente interativo onde é possível testar ao vivo a trava automática de pendência de **OPME** e **Equipamentos do Centro Cirúrgico** antes de liberar a alocação de salas com meta de ocupação entre **70% e 80%**.
* **Diagnóstico & Uso de Inteligência Artificial:** Detalhamento do problema resolvido e de como ferramentas de IA apoiaram a arquitetura React, estilização e revisão técnica.
* **Crachás Técnicos da Equipe:** Identificação individual dos integrantes, papéis no ciclo ágil (Scrum) e principais tecnologias utilizadas.

---

## 🛠️ Stack Tecnológica

### Portfólio Web (Este Repositório)
* **React** & **Vite** (Construção modular e build otimizado)
* **Tailwind CSS** (Estilização responsiva e design system hospitalar)
* **Lucide React** (Iconografia clínica e técnica)
* **Vercel** (Hospedagem e deploy contínuo via GitHub)

### Sistema Nexus CORE (Projeto Apresentado)
* **Front-end:** React, TypeScript, Vite, Tailwind CSS, React Router
* **Back-end:** Node.js, Express, TypeScript, Autenticação JWT
* **Banco de Dados:** PostgreSQL & Supabase

---

## 📁 Estrutura de Pastas (Padrão de Isolamento)

O projeto segue a convenção de isolamento de código por equipe (`src/teams/equipe-06/`), permitindo integração direta sem conflitos de merge:

```text
portfolio-NexusCORE/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── index.css
    ├── main.jsx
    ├── App.jsx
    └── teams/
        └── equipe-06/
            ├── Equipe06Page.jsx           # Página principal do portfólio
            ├── assets/                    # Fotos oficiais dos integrantes
            ├── components/
            │   └── SurgerySimulator.jsx   # Simulador interativo do Motor P90
            └── data/
                └── nexusData.js           # Dados técnicos, links e ficha da equipe
