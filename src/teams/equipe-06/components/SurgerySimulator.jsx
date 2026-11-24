import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Building2,
  Sliders,
  Sparkles,
  Lock,
  Unlock,
  Stethoscope
} from "lucide-react";

export default function SurgerySimulator() {
  const [opmeReady, setOpmeReady] = useState(false);
  const [equipReady, setEquipReady] = useState(true);
  const [hospital, setHospital] = useState("Hospital Santa Helena");
  const [occupancyLimit, setOccupancyLimit] = useState(75);
  const [result, setResult] = useState(null);

  const canValidate = opmeReady && equipReady;

  const handleSimulate = () => {
    if (!canValidate) return;

    // Simula cálculo P90 (120 min cirurgia + 30 min higienização = 150 min)
    const calculatedOccupancy = hospital === "Hospital Santa Helena" ? 74 : 68;

    if (calculatedOccupancy > occupancyLimit) {
      setResult({
        status: "conflict",
        message: `Conflito de Ocupação (${calculatedOccupancy}% calculado > meta de ${occupancyLimit}%). Ajuste a meta ou selecione outra unidade.`
      });
    } else {
      setResult({
        status: "success",
        room: hospital === "Hospital Santa Helena" ? "Sala 01 — Centro Cirúrgico Bloco A" : "Sala 03 — Unidade Centro",
        slot: "08:00 – 10:30 (120m P90 + 30m Higienização)",
        occupancy: calculatedOccupancy
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Cabeçalho estilo Monitor Hospitalar */}
      <div className="bg-[#0F2942] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#1D63B8]">
            <Stethoscope className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base">
              Simulador Interativo — Motor de Distribuição P90 (RF04)
            </h3>
            <p className="text-xs text-sky-200">
              Teste ao vivo a trava de segurança de OPME/Equipamentos e o cálculo de ocupação de sala
            </p>
          </div>
        </div>

        <span className="text-xs font-mono bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-2.5 py-1 rounded-full">
          Cirurgia #000482 • Porte Alto
        </span>
      </div>

      <div className="p-6 grid lg:grid-cols-12 gap-6">
        {/* Etapa 1: Checklist de Travas (OPME e Equipamentos) */}
        <div className="lg:col-span-5 space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              1. Travas de Segurança (RF03.5 / RF03.7)
            </span>
            {canValidate ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                <Unlock className="w-3.5 h-3.5" /> Liberado
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600">
                <Lock className="w-3.5 h-3.5" /> Bloqueado
              </span>
            )}
          </div>

          {/* Toggle OPME */}
          <div className="bg-white p-3.5 rounded-lg border border-slate-200 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-slate-800">Materiais OPME</p>
              <p className="text-xs text-slate-500">Fornecedor: BioMed Brasil</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpmeReady(!opmeReady);
                setResult(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                opmeReady
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                  : "bg-rose-100 text-rose-700 border border-rose-300 animate-pulse"
              }`}
            >
              {opmeReady ? "Disponível ✓" : "Pendência (Clique)"}
            </button>
          </div>

          {/* Toggle Equipamentos */}
          <div className="bg-white p-3.5 rounded-lg border border-slate-200 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-slate-800">Equipamentos CC</p>
              <p className="text-xs text-slate-500">Higienização & Esterilização</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setEquipReady(!equipReady);
                setResult(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                equipReady
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                  : "bg-rose-100 text-rose-700 border border-rose-300 animate-pulse"
              }`}
            >
              {equipReady ? "Disponível ✓" : "Pendência (Clique)"}
            </button>
          </div>

          {!canValidate && (
            <p className="text-xs text-rose-600 bg-rose-50 border border-rose-200 rounded-lg p-2.5">
              <strong>Regra RF04.5 ativa:</strong> O botão de distribuição permanece bloqueado enquanto houver pendência de OPME ou equipamentos.
            </p>
          )}
        </div>

        {/* Etapa 2: Parâmetros do Motor P90 */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#1D63B8]" />
                Unidade Hospitalar (RF04.1)
              </label>
              <select
                value={hospital}
                onChange={(e) => {
                  setHospital(e.target.value);
                  setResult(null);
                }}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#1D63B8]"
              >
                <option value="Hospital Santa Helena">Hospital Santa Helena</option>
                <option value="VidaNova - Unidade Centro">VidaNova - Unidade Centro</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#1D63B8]" />
                  Meta de Ocupação (RF04.2)
                </span>
                <span className="text-[#1D63B8] font-mono">{occupancyLimit}%</span>
              </label>
              <input
                type="range"
                min="65"
                max="85"
                value={occupancyLimit}
                onChange={(e) => {
                  setOccupancyLimit(Number(e.target.value));
                  setResult(null);
                }}
                className="w-full accent-[#1D63B8] cursor-pointer mt-2"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>65%</span>
                <span>Ideal: 70%–80%</span>
                <span>85%</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            disabled={!canValidate}
            onClick={handleSimulate}
            className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition ${
              canValidate
                ? "bg-[#1D63B8] hover:bg-[#164E93] text-white shadow cursor-pointer"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            {canValidate ? "Validar e Distribuir Sala (Cálculo P90)" : "Libere as pendências ao lado para validar"}
          </button>

          {/* Retorno do Cálculo */}
          {result?.status === "success" && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Sala Recomendada: {result.room}</span>
                </div>
                <p className="text-xs text-emerald-700">{result.slot}</p>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold shrink-0">
                Ocupação: {result.occupancy}%
              </span>
            </div>
          )}

          {result?.status === "conflict" && (
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 flex items-start gap-2.5 text-rose-700 text-xs">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{result.message}</span>
            </div>
          )}

          {!result && (
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-3.5 text-xs text-slate-500 flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#1D63B8] shrink-0" />
              <span>
                Clique em <strong>"Pendência (Clique)"</strong> no cartão de Materiais OPME para liberar o recurso e rodar o algoritmo.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}