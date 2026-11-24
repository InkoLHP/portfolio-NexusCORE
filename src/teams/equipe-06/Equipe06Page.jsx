import React, { useState } from "react";
import {
  Activity,
  ShieldCheck,
  Clock,
  Database,
  Server,
  Layout,
  GitBranch,
  Video,
  FileText,
  Users,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  ExternalLink,
  Sparkles,
  BookOpen,
  BadgeCheck,
  HeartPulse
} from "lucide-react";
import { projectInfo } from "./data/nexusData";
import SurgerySimulator from "./components/SurgerySimulator";

export default function Equipe06Page() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-slate-800 font-sans">
      {/* Navbar Clínica */}
      <header className="sticky top-0 z-30 bg-[#0F2942]/95 backdrop-blur-md text-white border-b border-sky-900/60 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#1D63B8] flex items-center justify-center shadow-inner">
              <HeartPulse className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-base">Nexus CORE</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-semibold">
                  {projectInfo.teamNumber}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 hidden sm:block">
                Centro de Comando Cirúrgico • {projectInfo.location}
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#video" className="hover:text-white transition">Vídeo & Referência</a>
            <a href="#projeto" className="hover:text-white transition">Projeto & IA</a>
            <a href="#simulador" className="hover:text-white transition">Simulador P90</a>
            <a href="#equipe" className="hover:text-white transition">Crachás da Equipe</a>
          </nav>

          <a
            href={projectInfo.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#1D63B8] hover:bg-[#175299] text-white px-3.5 py-2 rounded-lg transition shadow-sm"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>GitHub Projeto</span>
          </a>
        </div>
      </header>

      {/* Hero Section com Monitor ECG Animado */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F33] via-[#0F2942] to-[#1A569E] text-white py-14 sm:py-20 px-4 sm:px-6">
        {/* Grade hospitalar sutil no fundo */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "36px 36px"
          }}
        />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-sky-100">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Ambiente de Produção Hospitalar • Conformidade LGPD</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Nexus CORE: Precisão e Segurança no Bloco Cirúrgico
            </h1>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
              Portfólio oficial da <strong>Equipe 06</strong>. Uma plataforma web desenvolvida para centralizar o pré-agendamento hospitalar, eliminando cancelamentos de última hora por meio de travas de insumos (OPME) e cálculo inteligente P90.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#simulador"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg shadow transition text-sm"
              >
                <Activity className="w-4 h-4" />
                Testar Motor P90 Ao Vivo
              </a>
              <a
                href="#video"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-2.5 rounded-lg border border-white/25 transition text-sm"
              >
                <Video className="w-4 h-4" />
                Vídeo & Documentação
              </a>
            </div>
          </div>

          {/* Monitor de Sinais Vitais do Projeto */}
          <div className="lg:col-span-5 bg-[#091929]/85 backdrop-blur-md border border-sky-400/25 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-sky-200">
                  Telemetria do Sistema
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-300">ONLINE • 60 BPM</span>
            </div>

            {/* Linha ECG SVG */}
            <div className="bg-[#06111C] rounded-xl p-3 border border-sky-500/20">
              <svg viewBox="0 0 320 60" className="w-full h-12">
                <path
                  d="M0,30 L60,30 L72,30 L80,18 L88,42 L98,6 L108,54 L118,22 L126,30 L190,30 L202,30 L210,18 L218,42 L228,6 L238,54 L248,22 L256,30 L320,30"
                  fill="none"
                  stroke="#34D399"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-ecg"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 text-sky-300 text-xs font-medium mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Resposta P90</span>
                </div>
                <p className="text-2xl font-bold font-mono text-white">&lt; 3.0s</p>
                <p className="text-[11px] text-slate-400">Alocação de sala (RNF06)</p>
              </div>

              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-medium mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Eficiência</span>
                </div>
                <p className="text-2xl font-bold font-mono text-emerald-300">-30%</p>
                <p className="text-[11px] text-slate-400">Atrasos e cancelamentos</p>
              </div>

              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 text-amber-300 text-xs font-medium mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Bloqueio Ativo</span>
                </div>
                <p className="text-sm font-bold text-white">OPME + Centro Cir.</p>
                <p className="text-[11px] text-slate-400">Zero cirurgia sem insumo</p>
              </div>

              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 text-purple-300 text-xs font-medium mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Ocupação Alvo</span>
                </div>
                <p className="text-sm font-bold text-white">70% a 80%</p>
                <p className="text-[11px] text-slate-400">P90 + higienização</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* 1. VÍDEO COM REFERÊNCIA */}
        <section id="video" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-100 text-[#1D63B8]">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0F2942]">1. Vídeo de Apresentação & Referência</h2>
              <p className="text-sm text-slate-500">Demonstração do fluxo clínico e embasamento técnico</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="lg:col-span-7">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
                <iframe
                  className="w-full h-full"
                  src={projectInfo.video.youtubeEmbedUrl}
                  title={projectInfo.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-slate-500 mt-2.5 flex items-center justify-between">
                <span>{projectInfo.video.title}</span>
                <span className="text-[#1D63B8] font-semibold">Embed YouTube</span>
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D63B8]">
                  <BookOpen className="w-4 h-4" />
                  <span>Prontuário de Referência</span>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase text-slate-500">Fonte & Base Técnica</h3>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {projectInfo.video.referenceSource}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase text-slate-500">Inspiração Operacional</h3>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {projectInfo.video.referenceDetails}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase text-slate-500">Roteiro da Apresentação</h3>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {projectInfo.video.scriptStructure}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. DESCRIÇÃO DA PÁGINA, DO PROJETO E USO DE IA */}
        <section id="projeto" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-100 text-[#1D63B8]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0F2942]">2. Diagnóstico do Projeto & Uso de IA</h2>
              <p className="text-sm text-slate-500">Propósito da entrega e aplicação de Inteligência Artificial</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border-t-4 border-t-[#1D63B8] border border-slate-200 p-6 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-[#1D63B8] bg-blue-50 px-2.5 py-1 rounded">
                OBJETIVO
              </span>
              <h3 className="text-lg font-bold text-[#0F2942]">Propósito da Página</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{projectInfo.aboutAndAI.purpose}</p>
            </div>

            <div className="bg-white rounded-2xl border-t-4 border-t-emerald-500 border border-slate-200 p-6 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                SOLUÇÃO CLÍNICA
              </span>
              <h3 className="text-lg font-bold text-[#0F2942]">Gargalo Resolvido</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{projectInfo.aboutAndAI.problemSolved}</p>
            </div>

            <div className="bg-gradient-to-br from-[#0F2942] to-[#173E66] text-white rounded-2xl p-6 shadow-sm space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-200 bg-white/10 px-2.5 py-1 rounded">
                <Sparkles className="w-3.5 h-3.5" /> INTELIGÊNCIA ARTIFICIAL
              </div>
              <h3 className="text-lg font-bold">Apoio Técnico com IA</h3>
              <p className="text-sm text-slate-200 leading-relaxed">{projectInfo.aboutAndAI.aiUsage}</p>
            </div>
          </div>
        </section>

        {/* SIMULADOR INTERATIVO + ARQUITETURA */}
        <section id="simulador" className="scroll-mt-24 space-y-8">
          <SurgerySimulator />

          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#0F2942]">Módulos Integrados & Stack Tecnológica</h3>
                <p className="text-sm text-slate-500">Arquitetura cliente-servidor com rastreabilidade e LGPD</p>
              </div>

              <div className="inline-flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm self-start">
                {[
                  { id: "frontend", label: "Front-end", icon: Layout },
                  { id: "backend", label: "Back-end", icon: Server },
                  { id: "database", label: "Banco & Segurança", icon: Database }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-[#1D63B8] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 px-5 py-3.5 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
                Stack ({activeTab}):
              </span>
              {projectInfo.stack[activeTab].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-[#0F2942] border border-sky-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {projectInfo.modules.map((mod) => (
                <div
                  key={mod.title}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:border-[#1D63B8] transition space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-50 text-[#1D63B8]">
                      {mod.code}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{mod.sector}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#0F2942]">{mod.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 & 4. APRESENTAÇÃO DA EQUIPE & CRACHÁS HOSPITALARES (FICHA TÉCNICA) */}
        <section id="equipe" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-100 text-[#1D63B8]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0F2942]">
                3. Equipe Nexus CORE & Ficha Técnica Individual
              </h2>
              <p className="text-sm text-slate-500">
                Credenciais técnicas dos integrantes e dinâmica ágil de desenvolvimento
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#0F2942] text-white text-xs font-mono font-bold">
                  {projectInfo.teamNumber}
                </span>
                <h3 className="text-lg font-bold text-[#0F2942]">
                  Corpo Técnico — {projectInfo.teamName}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{projectInfo.teamProfile}</p>
            </div>

            <div className="shrink-0 bg-sky-50/70 border border-sky-200 rounded-xl px-4 py-3 text-xs space-y-1">
              <p className="font-bold text-[#0F2942] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1D63B8]" /> Metodologia Scrum
              </p>
              <p className="text-slate-600">• Sprints Semanais Iterativas</p>
              <p className="text-slate-600">• Validação Contínua de Requisitos</p>
              <p className="text-slate-600">• Versionamento Colaborativo Git</p>
            </div>
          </div>

          {/* Grid de Crachás Hospitalares */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectInfo.members.map((member) => {
              const initials = member.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("");

              return (
                <article
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition"
                >
                  <div>
                    {/* Topo estilo Crachá Hospitalar */}
                    <div className="bg-[#0F2942] px-5 py-3 flex items-center justify-between text-white">
                      <span className="text-[11px] font-mono tracking-wider text-sky-300">
                        ID: {member.id}
                      </span>
                      <span className="text-[11px] font-semibold bg-white/15 px-2 py-0.5 rounded">
                        {member.department}
                      </span>
                    </div>

                    <div className="p-5 space-y-4">
                      <div className="flex items-center gap-4">
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={`Foto de ${member.name}`}
                            className={`w-20 h-20 rounded-2xl object-cover ${
                              member.photoPosition || "object-center"
                            } border-2 border-[#1D63B8]/35 shrink-0 shadow-sm bg-slate-100`}
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1D63B8] to-[#0F2942] text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-sm">
                            {initials}
                          </div>
                        )}
                        <div>
                          <h3 className="font-bold text-[#0F2942] text-base flex items-center gap-1">
                            {member.name}
                            <BadgeCheck className="w-4 h-4 text-[#1D63B8]" />
                          </h3>
                          <p className="text-xs font-bold text-[#1D63B8]">{member.role}</p>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D63B8] hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        GitHub Oficial
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-[#0F2942] text-slate-300 py-8 px-4 sm:px-6 mt-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-4 h-4 text-emerald-400" />
            <span>
              <strong className="text-white">Nexus CORE</strong> — {projectInfo.teamNumber} • {projectInfo.location}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={projectInfo.repoUrl} target="_blank" rel="noreferrer" className="hover:text-white transition">
              Repositório do Sistema
            </a>
            <span>•</span>
            <a href={projectInfo.portfolioRepoUrl} target="_blank" rel="noreferrer" className="hover:text-white transition">
              Repositório do Portfólio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}