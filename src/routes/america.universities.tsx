import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap, ArrowRight, Star, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal, CountUp } from "@/components/reveal";
import { ApplicationForm, formatTuition } from "@/routes/index";
import drakeImg from "@/assets/drake.png";
import iowa from "@/assets/iowa.png";
import pur from "@/assets/purdue.png";
import oklahoma from "@/assets/oklahoma.png";
import uiuc from "@/assets/uiuc.png";
import universityOfIowa from "@/assets/university-of-iowa.png";
import unl from "@/assets/unl.png";
import uwEauClaire from "@/assets/uw-eau-claire.png";
import uwMadison from "@/assets/uw-madison.png";
import iit from "@/assets/iit.png";
import kansasState from "@/assets/kansasState.png";
import michiganState from "@/assets/michiganState.png";
import missouriState from "@/assets/missouriState.png";
import montanaState from "@/assets/montanaState.png";
import ohioState from "@/assets/ohioState.png";
import oklahomaState from "@/assets/oklahomaState.png";
import rutgers from "@/assets/rutgers.png";
import ub from "@/assets/ub.png";
import minnesota from "@/assets/minnesota.png";
import missouriColumbia from "@/assets/missouriColumbia.png";
import oklahomaNorman from "@/assets/oklahomaNorman.png";
import uwStout from "@/assets/uwStout.png";
import arkansasState from "@/assets/arkansasState.png";
import binghamton from "@/assets/binghamton.png";
import indianaBloomington from "@/assets/indianaBloomington.png";
import iup from "@/assets/iup.png";
import snhu from "@/assets/snhu.png";
import uwLaCrosse from "@/assets/uwLaCrossa.png";
import wichitaState from "@/assets/wichitaState.png";
import winonaState from "@/assets/winonaState.png";
import albany from "@/assets/albany.png";
import kansasLawrence from "@/assets/kansasLawrence.png";
import mississippi from "@/assets/mississippi.png";
import umkc from "@/assets/umkc.png";
import fresnoState from "@/assets/fresnoState.png";
import michiganTech from "@/assets/michiganTech.png";
import missouriST from "@/assets/missouriST.png";
import kentucky from "@/assets/kentucky.png";
import michiganAnnArbor from "@/assets/michiganAnnArbor.png";
import wvTech from "@/assets/wvTech.png";
import lsu from "@/assets/lsu.png";
import hawaiiManoa from "@/assets/hawaiiManoa.png";
import washington from "@/assets/washington.png";
import stCloudState from "@/assets/stCloudState.png";

export const Route = createFileRoute("/america/universities")({
  head: () => ({
    meta: [
      { title: "Amerika Universitetlari — Transfer Dasturi | Eduvisa" },
      { name: "description", content: "1 yil Malayziya + 3 yil Amerika transfer dasturi orqali o'qish mumkin bo'lgan Amerika universitetlari ro'yxati." },
    ],
  }),
  component: AmericaUniversities,
});

// Fakultet kalitlari (manbadagi original inglizcha nomlar)
type Major =
  | "Actuarial Science"
  | "Biosciences"
  | "Business"
  | "Computer Science"
  | "Engineering"
  | "Health & Applied Sciences"
  | "Mass Communication"
  | "Psychology";

function useMajorLabels(): Record<Major, string> {
  const { t } = useTranslation();
  return {
    "Actuarial Science": t("america.majors.Actuarial Science"),
    Biosciences: t("america.majors.Biosciences"),
    Business: t("america.majors.Business"),
    "Computer Science": t("america.majors.Computer Science"),
    Engineering: t("america.majors.Engineering"),
    "Health & Applied Sciences": t("america.majors.Health & Applied Sciences"),
    "Mass Communication": t("america.majors.Mass Communication"),
    Psychology: t("america.majors.Psychology"),
  };
}

const ALL_MAJORS: Major[] = [
  "Actuarial Science",
  "Biosciences",
  "Business",
  "Computer Science",
  "Engineering",
  "Health & Applied Sciences",
  "Mass Communication",
  "Psychology",
];

// QS ranking darajalari
type QSRankTier = "top" | "high" | "medium" | "low" | "not-ranked";

function getQSTier(rankText: string): QSRankTier {
  if (rankText.includes("Not Ranked")) return "not-ranked";
  const match = rankText.match(/#(\d+)/);
  if (!match) return "not-ranked";
  const rank = parseInt(match[1]);
  if (rank <= 100) return "top";
  if (rank <= 300) return "high";
  if (rank <= 600) return "medium";
  return "low";
}

function getQSBadgeColor(tier: QSRankTier): string {
  switch (tier) {
    case "top":
      return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white border-yellow-500/30";
    case "high":
      return "bg-gradient-to-r from-blue-400 to-blue-600 text-white border-blue-500/30";
    case "medium":
      return "bg-gradient-to-r from-green-400 to-green-600 text-white border-green-500/30";
    case "low":
      return "bg-gradient-to-r from-gray-400 to-gray-600 text-white border-gray-500/30";
    case "not-ranked":
      return "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 border-gray-300/30";
  }
}

function getQSIcon(tier: QSRankTier) {
  switch (tier) {
    case "top":
      return "🏆";
    case "high":
      return "⭐";
    case "medium":
      return "📊";
    case "low":
      return "📈";
    case "not-ranked":
      return "📚";
  }
}

const americaUniversities: {
  n: string;
  state: string;
  t: string;
  logo: string;
  domain: string;
  img?: string;
  majors: Major[];
}[] = [
  { n: "Drake University", state: "Iowa", t: "QS: Not Ranked", logo: "DU", domain: "", img: drakeImg, majors: ["Actuarial Science"] },
  { n: "Iowa State University", state: "Iowa", t: "QS #500-550", logo: "ISU", domain: "", img: iowa, majors: ["Actuarial Science","Biosciences","Business","Computer Science","Engineering","Health & Applied Sciences","Psychology"] },
  { n: "Purdue University", state: "Indiana", t: "QS #85-90", logo: "PU", domain: "", img: pur, majors: ["Actuarial Science","Business","Engineering","Health & Applied Sciences"] },
  { n: "University of Central Oklahoma", state: "Oklahoma", t: "QS: Not Ranked", logo: "UCO", domain: "", img: oklahoma, majors: ["Actuarial Science","Biosciences","Business","Computer Science","Engineering","Health & Applied Sciences","Mass Communication","Psychology"] },
  { n: "University of Illinois at Urbana-Champaign", state: "Illinois", t: "QS #64-70", logo: "UIUC", domain: "", img: uiuc, majors: ["Actuarial Science"] },
  { n: "University of Iowa", state: "Iowa", t: "QS #400+", logo: "UI", domain: "", img: universityOfIowa, majors: ["Actuarial Science","Business","Computer Science","Health & Applied Sciences"] },
  { n: "University of Nebraska-Lincoln", state: "Nebraska", t: "QS #550-600", logo: "UNL", domain: "", img: unl, majors: ["Actuarial Science","Biosciences","Business","Computer Science","Engineering","Health & Applied Sciences","Mass Communication","Psychology"] },
  { n: "University of Wisconsin-Eau Claire", state: "Wisconsin", t: "QS: Not Ranked", logo: "UWEC", domain: "uwec.edu", img: uwEauClaire, majors: ["Actuarial Science","Biosciences","Health & Applied Sciences","Psychology"] },
  { n: "University of Wisconsin-Madison", state: "Wisconsin", t: "QS #100-115", logo: "UW", domain: "wisc.edu", img: uwMadison, majors: ["Actuarial Science","Biosciences","Business","Computer Science","Engineering","Health & Applied Sciences","Mass Communication"] },
  { n: "Illinois Institute of Technology", state: "Illinois", t: "QS #400-500", logo: "IIT", domain: "iit.edu", img: iit, majors: ["Biosciences","Engineering"] },
  { n: "Kansas State University", state: "Kansas", t: "QS #800+", logo: "KSU", domain: "k-state.edu", img: kansasState, majors: ["Biosciences","Computer Science","Health & Applied Sciences"] },
  { n: "Michigan State University", state: "Michigan", t: "QS #150", logo: "MSU", domain: "msu.edu", img: michiganState, majors: ["Biosciences","Business","Computer Science","Engineering","Health & Applied Sciences","Mass Communication","Psychology"] },
  { n: "Missouri State University", state: "Missouri", t: "QS: Not Ranked", logo: "MoSU", domain: "missouristate.edu", img: missouriState, majors: ["Biosciences","Business"] },
  { n: "Montana State University", state: "Montana", t: "QS #1000+", logo: "MtSU", domain: "montana.edu", img: montanaState, majors: ["Biosciences"] },
  { n: "Ohio State University", state: "Ohio", t: "QS #200", logo: "OSU", domain: "osu.edu", img: ohioState, majors: ["Biosciences","Business","Computer Science","Engineering","Health & Applied Sciences","Mass Communication"] },
  { n: "Oklahoma State University", state: "Oklahoma", t: "QS #1000+", logo: "OkSU", domain: "okstate.edu", img: oklahomaState, majors: ["Biosciences","Engineering","Mass Communication"] },
  { n: "Rutgers, The State University of New Jersey", state: "New Jersey", t: "QS #290", logo: "RU", domain: "rutgers.edu", img: rutgers, majors: ["Biosciences","Business","Health & Applied Sciences"] },
  { n: "University at Buffalo", state: "New York", t: "QS #400-500", logo: "UB", domain: "buffalo.edu", img: ub, majors: ["Biosciences","Computer Science","Engineering","Health & Applied Sciences","Psychology"] },
  { n: "University of Minnesota, Twin Cities", state: "Minnesota", t: "QS #200", logo: "UMN", domain: "umn.edu", img: minnesota, majors: ["Biosciences","Business","Computer Science","Engineering","Health & Applied Sciences","Psychology"] },
  { n: "University of Missouri, Columbia", state: "Missouri", t: "QS #500+", logo: "MU", domain: "missouri.edu", img: missouriColumbia, majors: ["Biosciences","Business","Health & Applied Sciences","Mass Communication","Psychology"] },
  { n: "University of Oklahoma, Norman", state: "Oklahoma", t: "QS #650-700", logo: "OU", domain: "ou.edu", img: oklahomaNorman, majors: ["Biosciences","Business","Computer Science","Health & Applied Sciences","Psychology"] },
  { n: "University of Wisconsin-Stout", state: "Wisconsin", t: "QS: Not Ranked", logo: "UWS", domain: "uwstout.edu", img: uwStout, majors: ["Biosciences","Computer Science","Engineering","Health & Applied Sciences"] },
  { n: "Arkansas State University", state: "Arkansas", t: "QS: Not Ranked", logo: "ASU", domain: "astate.edu", img: arkansasState, majors: ["Business","Psychology"] },
  { n: "Binghamton University", state: "New York", t: "QS #1000-1200", logo: "BU", domain: "binghamton.edu", img: binghamton, majors: ["Business"] },
  { n: "Indiana University Bloomington", state: "Indiana", t: "QS #300", logo: "IUB", domain: "indiana.edu", img: indianaBloomington, majors: ["Business"] },
  { n: "Indiana University of Pennsylvania", state: "Pennsylvania", t: "QS: Not Ranked", logo: "IUP", domain: "iup.edu", img: iup, majors: ["Business","Computer Science","Psychology"] },
  { n: "Southern New Hampshire University", state: "New Hampshire", t: "QS: Not Ranked", logo: "SNHU", domain: "snhu.edu", img: snhu, majors: ["Business","Mass Communication","Psychology"] },
  { n: "University of Wisconsin-La Crosse", state: "Wisconsin", t: "QS: Not Ranked", logo: "UWL", domain: "uwlax.edu", img: uwLaCrosse, majors: ["Business","Computer Science","Health & Applied Sciences","Mass Communication","Psychology"] },
  { n: "Wichita State University", state: "Kansas", t: "QS: Not Ranked", logo: "WSU", domain: "wichita.edu", img: wichitaState, majors: ["Business","Computer Science","Engineering","Mass Communication","Psychology"] },
  { n: "Winona State University", state: "Minnesota", t: "QS: Not Ranked", logo: "WiSU", domain: "winona.edu", img: winonaState, majors: ["Business","Computer Science","Mass Communication","Psychology"] },
  { n: "University at Albany", state: "New York", t: "QS #850-900", logo: "UA", domain: "albany.edu", img: albany, majors: ["Computer Science"] },
  { n: "University of Kansas, Lawrence", state: "Kansas", t: "QS #450-500", logo: "KU", domain: "ku.edu", img: kansasLawrence, majors: ["Computer Science","Mass Communication","Psychology"] },
  { n: "University of Mississippi", state: "Mississippi", t: "QS #1000+", logo: "UM", domain: "olemiss.edu", img: mississippi, majors: ["Computer Science"] },
  { n: "University of Missouri, Kansas City", state: "Missouri", t: "QS #1000+", logo: "UMKC", domain: "umkc.edu", img: umkc, majors: ["Computer Science","Mass Communication","Psychology"] },
  { n: "California State University, Fresno", state: "California", t: "QS: Not Ranked", logo: "CSUF", domain: "fresnostate.edu", img: fresnoState, majors: ["Engineering"] },
  { n: "Michigan Technological University", state: "Michigan", t: "QS #1000+", logo: "MTU", domain: "mtu.edu", img: michiganTech, majors: ["Engineering"] },
  { n: "Missouri University of Science and Technology", state: "Missouri", t: "QS #1000+", logo: "MST", domain: "mst.edu", img: missouriST, majors: ["Engineering"] },
  { n: "University of Kentucky", state: "Kentucky", t: "QS #600-700", logo: "UK", domain: "uky.edu", img: kentucky, majors: ["Engineering"] },
  { n: "University of Michigan, Ann Arbor", state: "Michigan", t: "QS #21", logo: "UMich", domain: "umich.edu", img: michiganAnnArbor, majors: ["Engineering"] },
  { n: "West Virginia University Institute of Technology", state: "West Virginia", t: "QS: Not Ranked", logo: "WVUIT", domain: "wvutech.edu", img: wvTech, majors: ["Engineering"] },
  { n: "Louisiana State University", state: "Louisiana", t: "QS #800+", logo: "LSU", domain: "lsu.edu", img: lsu, majors: ["Health & Applied Sciences"] },
  { n: "University of Hawai'i at Mānoa", state: "Hawaii", t: "QS #600-700", logo: "UH", domain: "hawaii.edu", img: hawaiiManoa, majors: ["Mass Communication"] },
  { n: "University of Washington", state: "Washington", t: "QS #70-80", logo: "UWa", domain: "washington.edu", img: washington, majors: ["Mass Communication"] },
  { n: "St. Cloud State University", state: "Minnesota", t: "QS: Not Ranked", logo: "SCSU", domain: "stcloudstate.edu", img: stCloudState, majors: ["Mass Communication"] },  
];

function UniversityLogo({ domain, logo, name, img }: { domain: string; logo: string; name: string; img?: string }) {
  const [failed, setFailed] = useState(false);

  if (img) {
    return (
      <div className="h-12 w-12 rounded-xl bg-white border border-[#0D1B2A]/10 shrink-0 overflow-hidden">
        <img src={img} alt={`${name} logo`} className="h-full w-full object-cover" />
      </div>
    );
  }

  if (failed || !domain) {
    return (
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0D1B2A] to-[#1F3A5F] grid place-items-center text-white font-display font-bold text-sm shrink-0">
        {logo}
      </div>
    );
  }

  return (
    <div className="h-12 w-12 rounded-xl bg-white border border-[#0D1B2A]/10 grid place-items-center shrink-0 overflow-hidden p-1.5">
      <img
        src={`https://logo.clearbit.com/${domain}?size=128`}
        alt={`${name} logo`}
        className="h-full w-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function UniversityCard({ u, onApply }: { u: (typeof americaUniversities)[number]; onApply: (name: string) => void }) {
  const { t } = useTranslation();
  const majorLabels = useMajorLabels();
  const tier = getQSTier(u.t);
  const badgeColor = getQSBadgeColor(tier);
  const icon = getQSIcon(tier);
  
  return (
    <Reveal>
      <div className="group rounded-[22px] overflow-hidden bg-white border border-[var(--border)] shadow-soft hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(15,27,42,0.25)] transition-all duration-300 h-full flex flex-col">
        {/* Har doim bir xil balandlikdagi header: rasm bo'lsa rasm, bo'lmasa logo bilan gradient fon */}
        <div className="w-full h-48 overflow-hidden rounded-t-[22px] shrink-0 relative">
          {u.img ? (
            <img src={u.img} alt={u.n} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0D1B2A] to-[#1F3A5F] grid place-items-center">
              <span className="font-display font-bold text-3xl text-white/90 tracking-wide">
                {u.logo}
              </span>
            </div>
          )}
          
          {/* QS Ranking Badge - overlay */}
          <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg backdrop-blur-sm border ${badgeColor}`}>
            <span className="flex items-center gap-1.5">
              <span>{icon}</span>
              <span>{u.t}</span>
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#A68B52] flex items-center gap-1.5">
            🇺🇸 {u.state}
          </div>
          <h3 className="font-display text-lg font-semibold text-[#0D1B2A] mt-1">{u.n}</h3>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {u.majors.map((m) => (
              <span key={m} className="text-[10px] font-medium px-2 py-1 rounded-full bg-[#0D1B2A]/5 text-[#0D1B2A]/70">
                {majorLabels[m]}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <div className="text-[var(--muted-foreground)] text-xs">{t("universities.tuitionLabel")}</div>
            <div className="font-semibold text-[#0D1B2A]">{formatTuition(u.t, t)}</div>
          </div>

          <button
            onClick={() => onApply(u.n)}
            className="mt-5 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-[12px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-gold mt-auto"
          >
            {t("universities.applyButton")} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Reveal>
  );
}

function AmericaUniversities() {
  const { t } = useTranslation();
  const majorLabels = useMajorLabels();
  const params = new URLSearchParams(window.location.search);
  const major = params.get("major") as Major | null;

  const [activeMajor, setActiveMajor] = useState<Major | "all">(major ?? "all");
  const [activeRankFilter, setActiveRankFilter] = useState<QSRankTier | "all">("all");
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);

  // Ranking filter options
  const rankFilters: { value: QSRankTier | "all"; label: string; icon: string }[] = [
    { value: "all", label: "All", icon: "🌐" },
    { value: "top", label: "Top 100", icon: "🏆" },
    { value: "high", label: "Top 300", icon: "⭐" },
    { value: "medium", label: "Top 600", icon: "📊" },
    { value: "low", label: "600+", icon: "📈" },
    { value: "not-ranked", label: "Not Ranked", icon: "📚" },
  ];

  const filtered = useMemo(() => {
    let result = americaUniversities;
    
    // Filter by major
    if (activeMajor !== "all") {
      result = result.filter((u) => u.majors.includes(activeMajor));
    }
    
    // Filter by QS ranking tier
    if (activeRankFilter !== "all") {
      result = result.filter((u) => getQSTier(u.t) === activeRankFilter);
    }
    
    return result;
  }, [activeMajor, activeRankFilter]);

  const handleApply = (universityName: string) => {
    setSelectedUniversity(universityName);
    setTimeout(() => {
      document.getElementById("application")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const handleClose = () => {
    setSelectedUniversity(null);
    setTimeout(() => {
      document.getElementById("america-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple top bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#0D1B2A]/8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/eduvisa.png" alt="Eduvisa logo" className="h-12 w-auto object-contain" />
            <div className="leading-tight">
              <div className="font-display text-lg font-bold tracking-tight text-[#0D1B2A]">Eduvisa</div>
              <div className="text-[10px] tracking-[0.2em] text-[#A68B52] font-semibold">{t("nav.tagline")}</div>
            </div>
          </a>
          <a href="/#transfer" className="inline-flex items-center gap-2 text-sm font-medium text-[#0D1B2A]/70 hover:text-[#0D1B2A] transition-colors">
            <ArrowLeft className="h-4 w-4" /> {t("america.backToTransfer")}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] h-96 w-96 rounded-full bg-[#C8A971]/10 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A971]/15 text-[#C8A971] text-xs font-semibold tracking-wider uppercase mb-5">
              <GraduationCap className="h-3.5 w-3.5" />
              {t("america.badge")}
            </div>
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight">
              {t("america.titlePrefix")}{" "}
              <span className="bg-gradient-to-r from-[#C8A971] to-[#E8C97A] bg-clip-text text-transparent">
                {t("america.titleHighlight")}
              </span>
            </h1>
            <p className="mt-5 text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              {t("america.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Faculty filter */}
      <section className="pt-14 bg-[var(--soft)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2.5">
              <button
                onClick={() => setActiveMajor("all")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeMajor === "all"
                    ? "bg-[#0D1B2A] text-white shadow-md"
                    : "bg-white text-[#0D1B2A]/70 border border-[#0D1B2A]/10 hover:border-[#0D1B2A]/25"
                }`}
              >
                {t("america.tabAll")} ({americaUniversities.length})
              </button>
              {ALL_MAJORS.map((m) => {
                const count = americaUniversities.filter((u) => u.majors.includes(m)).length;
                return (
                  <button
                    key={m}
                    onClick={() => setActiveMajor(m)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeMajor === m
                        ? "bg-[#0D1B2A] text-white shadow-md"
                        : "bg-white text-[#0D1B2A]/70 border border-[#0D1B2A]/10 hover:border-[#0D1B2A]/25"
                    }`}
                  >
                    {majorLabels[m]} ({count})
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* QS Ranking Filter */}
      <section className="pt-6 pb-4 bg-[var(--soft)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="text-xs font-semibold text-[#0D1B2A]/50 uppercase tracking-wider mr-1">
                <Trophy className="h-3.5 w-3.5 inline mr-1" />
                QS Ranking:
              </span>
              {rankFilters.map((filter) => {
                const count = americaUniversities.filter((u) => 
                  filter.value === "all" ? true : getQSTier(u.t) === filter.value
                ).length;
                return (
                  <button
                    key={filter.value}
                    onClick={() => setActiveRankFilter(filter.value)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeRankFilter === filter.value
                        ? "bg-[#0D1B2A] text-white shadow-md"
                        : "bg-white text-[#0D1B2A]/60 border border-[#0D1B2A]/8 hover:border-[#0D1B2A]/20"
                    }`}
                  >
                    {filter.icon} {filter.label} ({count})
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* University grid */}
      <section id="america-grid" className="py-10 bg-[var(--soft)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((u) => (
                <UniversityCard key={u.n} u={u} onApply={handleApply} />
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="text-center py-20">
                <div className="h-16 w-16 mx-auto rounded-full bg-gold/10 grid place-items-center mb-5">
                  <Star className="h-7 w-7 text-[#A68B52]" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-[#0D1B2A]">{t("america.emptyTitle")}</h2>
                <p className="mt-3 text-[var(--muted-foreground)] max-w-md mx-auto">
                  {t("america.emptyDesc")}
                </p>
                <button
                  onClick={() => handleApply("")}
                  className="mt-7 inline-flex items-center gap-2 px-7 py-4 rounded-[14px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] font-semibold hover:scale-[1.04] active:scale-[0.98] transition-all shadow-gold"
                >
                  {t("america.emptyCta")} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {selectedUniversity !== null && (
        <ApplicationForm
          key={selectedUniversity}
          university={selectedUniversity}
          onClose={handleClose}
          universityGroups={{ [t("america.universityGroupLabel")]: americaUniversities.map((u) => u.n) }}
        />
      )}
    </div>
  );
}