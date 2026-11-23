import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  sectionFadeUp,
  StaggerList,
  ItemFadeUp,
  LiftHover,
  quick,
} from '../animations';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  Filter,
  GraduationCap,
  Layers,
  Search,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GeezOrnament } from '../components/Layout';
import {
  PROGRAM_TIERS,
  COURSE_MODULES,
  DAILY_SHIFTS,
  CourseModule,
} from '../data/collegeData';

type TierCategory = 'all' | 'diploma' | 'certificate' | 'short' | 'vip';
type DisciplineFilter = 'all' | CourseModule['discipline'];

export const ProgramsPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const [tierFilter, setTierFilter] = useState<TierCategory>('all');
  const [discipline, setDiscipline] = useState<DisciplineFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive Track & Shift Recommender state
  const [goal, setGoal] = useState<string>('degree');
  const [selectedShift, setSelectedShift] = useState<string>('shift-1');

  const filteredTiers = useMemo(() => {
    if (tierFilter === 'all') return PROGRAM_TIERS;
    return PROGRAM_TIERS.filter((p) => p.category === tierFilter);
  }, [tierFilter]);

  const filteredModules = useMemo(() => {
    return COURSE_MODULES.filter((m) => {
      const matchDisc = discipline === 'all' || m.discipline === discipline;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchDisc;
      return (
        matchDisc &&
        (m.nameEn.toLowerCase().includes(q) ||
          m.nameAm.toLowerCase().includes(q) ||
          m.toolsOrFocus.toLowerCase().includes(q) ||
          m.descEn.toLowerCase().includes(q))
      );
    });
  }, [discipline, searchQuery]);

  const recommendedTier = useMemo(() => {
    const map: Record<string, string> = {
      degree: 'level-4-diploma',
      allround: 'one-year-certificate',
      technical: 'nine-month-audiovisual',
      upskill: 'three-month-dual',
      creator: 'two-month-digital-summer',
      vfx: 'one-month-vip',
    };
    return PROGRAM_TIERS.find((p) => p.id === map[goal]) || PROGRAM_TIERS[0];
  }, [goal]);

  const currentShiftObj =
    DAILY_SHIFTS.find((s) => s.id === selectedShift) || DAILY_SHIFTS[0];

  return (
    <div>
      {/* Page Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-brand-navyDark text-white py-14 sm:py-20 border-b border-brand-amber/30 cinema-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-mono font-semibold">
              <GeezOrnament /> {t('ACADEMIC PROGRAMS & SYLLABUS', 'የትምህርት ፕሮግራሞች እና ኮርሶች')}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t(
                'From 1-Month VIP Classes to Accredited Level IV Diplomas',
                'ከ1 ወር የግል ስልጠና እስከ ደረጃ 4 (ዲፕሎማ) የትምህርት ፕሮግራሞች'
              )}
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {t(
                'Every regular track at Endrias Film College now integrates Social & Digital Media Management, Graphics Design, AI for Filmmaking, and Professional Portfolio Branding.',
                'በሁሉም መደበኛ ፕሮግራሞቻችን ላይ የሶሻል ሚዲያ ማኔጅመንት፣ ግራፊክስ ዲዛይን፣ AI ለፊልም ስራ እና ፕሮፌሽናል ፖርትፎሊዮ ብራንዲንግ ተካትተዋል።'
              )}
            </p>
          </div>
        </div>
      </motion.section>

      {/* SECTION 1: PROGRAM TIERS WITH FILTER PILLS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="py-14 sm:py-20 ivory-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">
              {t('6 Official Program Tiers', '6ቱ የትምህርት ደረጃዎችና መርሃግብሮች')}
            </h2>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {[
                { id: 'all', en: 'All (6)', am: 'ሁሉም (6)' },
                { id: 'diploma', en: 'TVET Diploma', am: 'ደረጃ 4 ዲፕሎማ' },
                { id: 'certificate', en: '9–12 Mo Certificates', am: 'የ9–12 ወር ሰርተፍኬት' },
                { id: 'short', en: '2–3 Mo Short Tracks', am: 'የ2–3 ወር አጫጭር' },
                { id: 'vip', en: '1-Mo VIP & VFX', am: 'የ1 ወር VIP / VFX' },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  type="button"
                  onClick={() => setTierFilter(tab.id as TierCategory)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={quick}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    tierFilter === tab.id
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'bg-white text-brand-muted hover:text-brand-ink border border-brand-navy/15'
                  }`}
                >
                  {t(tab.en, tab.am)}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredTiers.map((prog) => (
              <LiftHover key={prog.id} id={prog.id}
                className={`rounded-3xl p-6 sm:p-8 border transition-all ${
                  prog.featured
                    ? 'bg-brand-navy text-white border-brand-amber shadow-cinema'
                    : 'bg-white text-brand-ink border-brand-navy/15 shadow-card'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Overview */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span
                        className={`px-3 py-1 rounded-lg font-mono text-xs font-bold ${
                          prog.featured
                            ? 'bg-brand-orange text-brand-midnight'
                            : 'bg-brand-navy text-white'
                        }`}
                      >
                        {prog.code}
                      </span>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-lg ${
                          prog.featured
                            ? 'bg-white/10 text-brand-amber'
                            : 'bg-brand-sand text-brand-navy'
                        }`}
                      >
                        {t(prog.durationEn, prog.durationAm)}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          prog.featured ? 'text-white/75' : 'text-brand-muted'
                        }`}
                      >
                        {t(prog.scheduleEn, prog.scheduleAm)}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold">
                      {t(prog.titleEn, prog.titleAm)}
                    </h3>

                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        prog.featured ? 'text-white/85' : 'text-brand-muted'
                      }`}
                    >
                      {t(prog.summaryEn, prog.summaryAm)}
                    </p>

                    <div className="space-y-2 pt-1">
                      {(lang === 'en' ? prog.highlightsEn : prog.highlightsAm).map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-1 ${
                              prog.featured ? 'text-brand-orange' : 'text-brand-navy'
                            }`}
                          />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div
                      className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 ${
                        prog.featured
                          ? 'bg-brand-midnight/60 text-brand-amber border border-white/10'
                          : 'bg-brand-ivory text-brand-navy border border-brand-navy/10'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>{t(prog.pathwayEn, prog.pathwayAm)}</span>
                    </div>
                  </div>

                  {/* Right Included Modules List */}
                  <div
                    className={`lg:col-span-5 rounded-2xl p-5 sm:p-6 flex flex-col justify-between ${
                      prog.featured
                        ? 'bg-brand-navyDark/90 border border-white/10'
                        : 'bg-brand-ivory border border-brand-navy/10'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="text-xs font-mono uppercase tracking-wider font-bold text-brand-orange flex items-center gap-1.5">
                        <Layers className="w-4 h-4" />
                        {t('Included Courses & Modules', 'በፕሮግራሙ የተካተቱ ኮርሶች')}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {(lang === 'en' ? prog.modulesEn : prog.modulesAm).map((mod, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                              prog.featured
                                ? 'bg-white/10 text-white/95'
                                : 'bg-white text-brand-ink border border-brand-navy/10'
                            }`}
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-current/10 flex items-center justify-between gap-3">
                      <span className="text-xs opacity-75">
                        {t('Tuition window: 27th–3rd E.C.', 'ወርሃዊ ክፍያ፦ ከ27–3 ባሉት ቀናት')}
                      </span>
                      <Link
                        to={`/admissions?program=${prog.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-extrabold text-xs sm:text-sm transition-colors"
                      >
                        {t('Apply for This Track', 'በዚህ ፕሮግራም ይመዝገቡ')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </LiftHover>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: INTERACTIVE TRACK & SHIFT RECOMMENDER */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="py-14 sm:py-20 bg-brand-midnight text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-brand-navyDark border border-brand-amber/30 p-6 sm:p-10 shadow-cinema">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-orange uppercase font-bold">
                    <Compass className="w-4 h-4" />
                    {t('Interactive Study Planner', 'የፕሮግራም እና የፈረቃ መምረጫ አጋዥ')}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">
                    {t(
                      'Not Sure Which Track Fits Your Goal?',
                      'የትኛው የትምህርት መርሃግብር እንደሚስማማዎት ይምረጡ'
                    )}
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-2">
                      1. {t('Select Your Primary Creative Goal', 'ዋና ዓላማዎን ይምረጡ')}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        {
                          id: 'degree',
                          en: 'Full Diploma + BA Degree Bridge (COC)',
                          am: 'ሙሉ ዲፕሎማ እና ወደ ዲግሪ መሸጋገሪያ (COC)',
                        },
                        {
                          id: 'allround',
                          en: '1-Yr All-Round Director / Actor / Filmmaker',
                          am: 'በ1 ዓመት ሁለገብ የፊልም ባለሙያ መሆን',
                        },
                        {
                          id: 'technical',
                          en: 'Camera, Lighting, Sound & Editing Tech Crew',
                          am: 'የካሜራ፣ መብራትና ኤዲቲንግ ቴክኒክ ባለሙያ',
                        },
                        {
                          id: 'upskill',
                          en: 'Learn Any 2 Specific Courses in 3 Months',
                          am: 'በ3 ወር የመረጥኳቸውን 2 ኮርሶች መማር',
                        },
                        {
                          id: 'creator',
                          en: 'Digital Content Creator or Youth Summer Camp',
                          am: 'ዲጂታል ኮንቴንት ፈጠራ ወይም የክረምት ታዳጊዎች',
                        },
                        {
                          id: 'vfx',
                          en: '1-on-1 VIP Class (VFX / Motion Graphics)',
                          am: 'የግል VIP ስልጠና (VFX / ሞሽን ግራፊክስ)',
                        },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setGoal(opt.id)}
                          className={`p-3 rounded-xl text-left text-xs sm:text-sm font-semibold border transition-all ${
                            goal === opt.id
                              ? 'bg-brand-orange text-brand-midnight border-brand-orange font-bold'
                              : 'bg-white/5 text-white/85 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          {t(opt.en, opt.am)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-2">
                      2. {t('Choose Your Preferred Daily Shift', 'የሚመችዎትን የመማሪያ ፈረቃ ይምረጡ')}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {DAILY_SHIFTS.map((sh) => (
                        <button
                          key={sh.id}
                          type="button"
                          onClick={() => setSelectedShift(sh.id)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                            selectedShift === sh.id
                              ? 'bg-white text-brand-midnight border-white font-bold'
                              : 'bg-white/5 text-white/80 border-white/15 hover:bg-white/10'
                          }`}
                        >
                          {t(sh.labelEn, sh.labelAm)} ({sh.intlTime.split(' ')[0]})
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendation Result Card */}
              <div className="lg:col-span-5 rounded-2xl bg-brand-midnight p-6 sm:p-7 border border-brand-orange/50 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-brand-orange font-bold">
                    {t('Recommended Study Plan', 'ለእርስዎ የተመረጠ መርሃግብር')}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-brand-orange/20 text-brand-orange font-mono text-xs font-bold">
                    {recommendedTier.code}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {t(recommendedTier.titleEn, recommendedTier.titleAm)}
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-white/80 border-y border-white/10 py-4">
                  <div className="flex justify-between gap-2">
                    <span className="text-white/55">{t('Duration:', 'ቆይታ፦')}</span>
                    <span className="font-semibold text-white">
                      {t(recommendedTier.durationEn, recommendedTier.durationAm)}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-white/55">{t('Ethiopian Time:', 'በኢትዮጵያ ሰዓት፦')}</span>
                    <span className="font-ethiopic font-semibold text-brand-amber">
                      {currentShiftObj.ethiopianTime}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-white/55">{t('Standard Time:', 'ዓለም አቀፍ ሰዓት፦')}</span>
                    <span className="font-mono text-white">{currentShiftObj.intlTime}</span>
                  </div>
                </div>

                <p className="text-xs text-white/75 leading-relaxed">
                  {t(recommendedTier.pathwayEn, recommendedTier.pathwayAm)}
                </p>

                <Link
                  to={`/admissions?program=${recommendedTier.id}&shift=${currentShiftObj.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-extrabold text-sm shadow-glow transition-all"
                >
                  {t('Continue to Pre-Registration Slip', 'በዚህ ምርጫ ቅድመ-ምዝገባ ይቀጥሉ')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: SEARCHABLE COURSE & MODULE CATALOG */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="py-14 sm:py-20 bg-brand-ivory"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
                <BookOpen className="w-4 h-4 text-brand-orange" />
                {t('Complete Conservatory Syllabus', 'ዝርዝር የኮርሶች ካታሎግ')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">
                {t('Explore All Core, Diploma & VIP Modules', 'ሁሉንም የፊልምና ዲጂታል ኮርሶች ይመርምሩ')}
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Search courses, tools (e.g. DaVinci, AI)...', 'ኮርስ ወይም ሶፍትዌር ይፈልጉ...')}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-brand-navy/20 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>
          </div>

          {/* Discipline Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <Filter className="w-4 h-4 text-brand-navy shrink-0 mr-1" />
            {[
              { id: 'all', en: 'All Disciplines', am: 'ሁሉም ዘርፎች' },
              { id: 'directing', en: 'Directing, Acting & Story', am: 'ዝግጅት፣ ትወና እና ጽሑፍ' },
              { id: 'camera', en: 'Camera, Lighting & Photo', am: 'ካሜራ፣ መብራትና ፎቶ' },
              { id: 'post', en: 'Editing, Color & VFX', am: 'ኤዲቲንግ እና VFX' },
              { id: 'craft', en: 'Sound, Set Design & Makeup', am: 'ድምፅ፣ ሴት ዲዛይንና ሜካፕ' },
              { id: 'digital', en: 'AI, Graphics & Branding', am: 'AI፣ ግራፊክስና ብራንዲንግ' },
            ].map((d) => (
              <motion.button
                key={d.id}
                type="button"
                onClick={() => setDiscipline(d.id as DisciplineFilter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={quick}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  discipline === d.id
                    ? 'bg-brand-orange text-brand-midnight'
                    : 'bg-white text-brand-muted hover:text-brand-ink border border-brand-navy/12'
                }`}
              >
                {t(d.en, d.am)}
              </motion.button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredModules.map((mod) => (
              <LiftHover key={mod.id} className="p-6 rounded-2xl bg-white border border-brand-navy/12 shadow-card flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold ${
                        mod.levelTag === '2018–2019 New'
                          ? 'bg-brand-orange/20 text-brand-orangeHover'
                          : mod.levelTag === 'VIP Exclusive'
                          ? 'bg-brand-midnight text-brand-amber'
                          : mod.levelTag === 'Advanced Diploma'
                          ? 'bg-brand-navy text-white'
                          : 'bg-brand-sand text-brand-navy'
                      }`}
                    >
                      {mod.levelTag}
                    </span>
                    <Sparkles className="w-4 h-4 text-brand-amber/70" />
                  </div>

                  <h3 className="font-extrabold text-lg text-brand-ink">
                    {t(mod.nameEn, mod.nameAm)}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {t(mod.descEn, mod.descAm)}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-navy/10 text-[11px] font-mono text-brand-navy font-medium">
                  {mod.toolsOrFocus}
                </div>
              </LiftHover>
            ))}
          </div>

          {/* COC Assessment & Bridging Callout */}
          <div className="rounded-3xl bg-brand-sand border border-brand-navy/15 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <div className="text-xs font-mono uppercase font-bold text-brand-navy">
                {t('National Competency (COC) & +10-Month Bridging', 'የCOC ምዘና ዝግጅት እና የ10 ወር ዲፕሎማ ማሳደጊያ')}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-ink">
                {t(
                  'Already Hold a 1-Year Filmmaking Certificate? Upgrade to a Level IV Diploma in 10 Months.',
                  'ከእኛ ወይም ከሌላ ተቋም የ1 ዓመት ፊልም ሰርተፍኬት አለዎት? በ10 ወር ብቻ ወደ ደረጃ 4 ዲፕሎማ ያሳድጉ!'
                )}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {t(
                  'Endrias Film College also provides free theoretical and practical COC exam preparation sessions for its alumni—students pay only the official 500 ETB government assessment fee with zero college markup.',
                  'ኮሌጁ ተማሪዎቹ ለመንግስት የብቃት ምዘና (COC) ሲቀርቡ ነፃ የተግባርና የንድፈ-ሀሳብ ዝግጅት ያደርግላቸዋል፤ ተመዛኞች የሚከፍሉት የመንግስት የምዘና ክፍያ (500 ብር) ብቻ ነው።'
                )}
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/admissions?program=level-4-diploma"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navyDark text-white font-bold text-sm transition-colors"
              >
                {t('Inquire About Diploma Bridge', 'ስለ ዲፕሎማ ማሳደጊያ ይጠይቁ')}
                <ArrowRight className="w-4 h-4 text-brand-orange" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
