import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  StaggerList,
  ItemFadeUp,
  LiftHover,
  scaleHover,
  glowHover,
  quick,
  sectionFadeUp,
} from '../animations';
import {
  ArrowRight,
  Award,
  Camera,
  CheckCircle2,
  Clock,
  Film,
  GraduationCap,
  Briefcase,
  Sparkles,
  Tv,
  Users,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GeezOrnament } from '../components/Layout';
import {
  PROGRAM_TIERS,
  DAILY_SHIFTS,
  FACULTY_MEMBERS,
  MASTERCLASSES,
} from '../data/collegeData';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* HERO SECTION: Full-Bleed Addis Ababa Cinema Studio */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-brand-midnight text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-studio.jpg"
            alt="Endrias Film College students operating cinema camera and studio lighting on set"
            className="w-full h-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight via-brand-midnight/90 to-brand-midnight/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-brand-midnight/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Editorial Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Viewfinder / Regulatory Pill */}
              <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-xl sm:rounded-full bg-brand-navy/85 border border-brand-amber/40 backdrop-blur-sm">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-brand-orange">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange" />
                  </span>
                  REC · 24 FPS
                </span>
                <span className="text-white/30 hidden sm:inline">|</span>
                <span className="text-xs sm:text-sm font-medium text-white/95">
                  {t(
                    'Addis Ababa’s Sole Dedicated Accredited TVET Film College',
                    'በአዲስ አበባ ብቸኛው በፊልም ሙያ ሙሉ ዕውቅና ያለው ኮሌጅ'
                  )}
                </span>
              </div>

              {/* Bilingual Headline */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-ethiopic text-brand-amber font-bold text-lg sm:text-2xl tracking-wide"
                >
                  «ከምናብ እስከ ገቢር — በፊልም ጥበብ ዓለምን እንስራ !»
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white"
                >
                  {t('From Imagination ', 'ከምናብ ወደ ')}
                  <span className="font-serif italic font-normal text-brand-orange">
                    {t('to the Cinema Screen.', 'ታላቁ የሲኒማ ስክሪን።')}
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed"
              >
                {t(
                  'Located at 4 Kilo Roundabout in Addis Ababa, Endrias Film College PLC delivers government-accredited TVET Level I–IV Diplomas and 1-month to 1-year studio certificates—combining Blackmagic 6K Pro production sets, AAU/Gondar university-caliber faculty, and zero-commission career placement.',
                  'በአዲስ አበባ 4 ኪሎ አደባባይ የሚገኘው እንድርያስ የፊልም ኮሌጅ፤ ከ1 ወር እስከ 2 ዓመት ከሰርተፍኬት እስከ ደረጃ 4 (ዲፕሎማ) በዘመናዊ የሲኒማ ግብዓቶችና በከፍተኛ ዩኒቨርሲቲ መምህራን በተግባር ያሰለጥናል።'
                )}
              </motion.p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={quick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-extrabold text-base shadow-glow"
                >
                  <Link to="/programs">
                    {t('Explore 6 Program Tiers', '6ቱን የትምህርት ፕሮግራሞች ይመልከቱ')}
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={quick}
                      className="w-5 h-5"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={quick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/25 backdrop-blur-sm"
                >
                  <Link to="/admissions">{t('Apply for 2019 E.C. Intake', 'ለ2019 ዓ.ም ምዝገባ ያመልክቱ')}</Link>
                </motion.div>
              </div>

              {/* Camera Spec Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-white/65">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={quick}
                  className="inline-flex items-center gap-1.5 text-white/85"
                >
                  <Camera className="w-4 h-4 text-brand-orange" />
                  BLACKMAGIC 6K PRO &amp; 5D MK IV
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={quick}
                  className="inline-flex items-center gap-1.5 text-white/85"
                >
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  APUTURE / AMARAN LED STUDIO
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={quick}
                  className="inline-flex items-center gap-1.5 text-white/85"
                >
                  <ShieldCheck className="w-4 h-4 text-brand-orange" />
                  EDUCOC REGISTRY #68 / #32
                </motion.span>
              </div>
            </div>

            {/* Right Crest Medallion Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <LiftHover className="w-full max-w-sm rounded-3xl bg-brand-navyDark/80 border border-brand-amber/35 backdrop-blur-md p-6 sm:p-7 shadow-cinema viewfinder-frame">
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.img
                    src="/brand/logo-seal.png"
                    alt="Endrias Film College Crest"
                    variants={{
                      rest: { y: 0 },
                      animate: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } },
                    }}
                    initial="rest"
                    animate="animate"
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-full drop-shadow-xl"
                  />
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-brand-amber">
                      {t('Official Conservatory Seal', 'የኮሌጁ ኦፊሻል ዓርማ')}
                    </div>
                    <h2 className="text-xl font-extrabold text-white mt-1">
                      Endrias Film College
                    </h2>
                    <p className="font-ethiopic text-sm text-white/80 mt-0.5">
                      እንድርያስ የፊልም ኮሌጅ ኃ.የ.የግ.ማ
                    </p>
                  </div>

                  <div className="w-full pt-3 border-t border-white/10 space-y-2 text-left text-xs">
                    <div className="flex items-center justify-between text-white/85">
                      <span className="text-white/60">{t('Accreditation:', 'ዕውቅና፦')}</span>
                      <span className="font-semibold text-brand-amber">TVET Levels I–IV</span>
                    </div>
                    <div className="flex items-center justify-between text-white/85">
                      <span className="text-white/60">{t('Degree Pathway:', 'ወደ ዲግሪ መሸጋገሪያ፦')}</span>
                      <span className="font-semibold text-white">Direct via COC</span>
                    </div>
                    <div className="flex items-center justify-between text-white/85">
                      <span className="text-white/60">{t('Guma Award:', 'ጉማ አዋርድ ኮታ፦')}</span>
                      <span className="font-semibold text-white">3 Direct Film Slots</span>
                    </div>
                    <div className="flex items-center justify-between text-white/85">
                      <span className="text-white/60">{t('Campus:', 'ዋና ካምፓስ፦')}</span>
                      <span className="font-semibold text-white">4 Kilo, Next to Wekma</span>
                    </div>
                  </div>
                </div>
              </LiftHover>
            </div>
          </div>
        </div>
      </motion.div>

      {/* KEY INSTITUTIONAL METRICS STRIP */}
      <motion.div
        variants={sectionFadeUp}
        initial="hidden"
        animate="visible"
        className="bg-brand-navy text-white border-y border-brand-amber/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <StaggerList className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                stat: '8+ Yrs',
                labelEn: 'Training Ethiopian Filmmakers (Since 2010 E.C.)',
                labelAm: 'በፊልም ጥበብ የማስተማር ልምድ (ከ2010 ዓ.ም ጀምሮ)',
              },
              {
                stat: '250+',
                labelEn: 'Annual Diploma & Certificate Graduates',
                labelAm: 'በየዓመቱ የሚመረቁ የዲፕሎማና ሰርተፍኬት ሰልጣኞች',
              },
              {
                stat: '6 Tiers',
                labelEn: '1-Month VIP up to 2-Year Level IV Diploma',
                labelAm: 'ከ1 ወር VIP እስከ 2 ዓመት ደረጃ 4 ዲፕሎማ',
              },
              {
                stat: '0% Fee',
                labelEn: 'Zero-Commission Graduate Job Placement',
                labelAm: 'ከኮሚሽን ነፃ የምሩቃን የስራ ትስስር አገልግሎት',
              },
            ].map((item, idx) => (
              <ItemFadeUp key={idx} className="border-l-2 border-brand-orange pl-4 space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-orange">
                  {item.stat}
                </div>
                <div className="text-xs sm:text-sm text-white/85 leading-snug">
                  {t(item.labelEn, item.labelAm)}
                </div>
              </ItemFadeUp>
            ))}
          </StaggerList>
        </div>
      </motion.div>

      {/* SECTION 1: THE 6 OFFICIAL ACADEMIC PROGRAM TIERS */}
      <motion.div
        variants={sectionFadeUp}
        initial="hidden"
        animate="visible"
        className="py-16 sm:py-24 ivory-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
                <GeezOrnament /> {t('2019 E.C. Academic Prospectus', 'የ2019 ዓ.ም የትምህርት ፕሮግራሞች')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-ink tracking-tight">
                {t(
                  'Six Flexible Pathways from First Frame to Degree',
                  'ከሰርተፍኬት እስከ ደረጃ 4 ዲፕሎማ 6 አማራጭ መርሃግብሮች'
                )}
              </h2>
              <p className="text-brand-muted text-base">
                {t(
                  'Attend 2 hours a day across 4 convenient weekday shifts or weekend cohorts—with AI for Filmmaking, Digital Media Management, and Portfolio Branding integrated.',
                  'ከሰኞ እስከ አርብ በ4 አማራጭ ፈረቃዎች ወይም ቅዳሜና እሑድ በቀን ለ2 ሰዓት ይማሩ።'
                )}
              </p>
            </div>

            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-navy hover:bg-brand-navyDark text-white font-bold text-sm transition-colors self-start md:self-auto shrink-0"
            >
              {t('Compare All 21 Modules', 'ሁሉንም ኮርሶች በዝርዝር ይመልከቱ')}
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>

          <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAM_TIERS.map((prog) => (
              <LiftHover key={prog.id} className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border ${
                prog.featured
                  ? 'bg-brand-navy text-white border-brand-amber shadow-cinema ring-2 ring-brand-orange/50'
                  : 'bg-white text-brand-ink border-brand-navy/12'
              }`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold ${
                        prog.featured
                          ? 'bg-brand-orange text-brand-midnight'
                          : 'bg-brand-navy/10 text-brand-navy'
                      }`}
                    >
                      {prog.code}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        prog.featured ? 'text-brand-amber' : 'text-brand-muted'
                      }`}
                    >
                      {t(prog.durationEn, prog.durationAm)}
                    </span>
                  </div>

                  <div>
                    <div
                      className={`text-xs font-semibold mb-1 ${
                        prog.featured ? 'text-brand-amber' : 'text-brand-orangeHover'
                      }`}
                    >
                      {t(prog.levelBadgeEn, prog.levelBadgeAm)}
                    </div>
                    <h3 className="text-xl font-extrabold leading-snug">
                      {t(prog.titleEn, prog.titleAm)}
                    </h3>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      prog.featured ? 'text-white/80' : 'text-brand-muted'
                    }`}
                  >
                    {t(prog.summaryEn, prog.summaryAm)}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {(t('en', 'am') === 'en' ? prog.highlightsEn : prog.highlightsAm).map(
                      (hl, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              prog.featured ? 'text-brand-orange' : 'text-brand-navy'
                            }`}
                          />
                          <span className={prog.featured ? 'text-white/90' : 'text-brand-ink/85'}>
                            {hl}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between gap-3 ${
                    prog.featured ? 'border-white/15' : 'border-brand-navy/10'
                  }`}
                >
                  <Link
                    to={`/programs#${prog.id}`}
                    className={`text-sm font-bold inline-flex items-center gap-1.5 ${
                      prog.featured
                        ? 'text-brand-orange hover:text-white'
                        : 'text-brand-navy hover:text-brand-orangeHover'
                    }`}
                  >
                    {t('View Syllabus', 'ዝርዝር ኮርሶች')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to={`/admissions?program=${prog.id}`}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
                      prog.featured
                        ? 'bg-white/15 hover:bg-brand-orange hover:text-brand-midnight text-white'
                        : 'bg-brand-sand hover:bg-brand-navy hover:text-white text-brand-navy'
                    }`}
                  >
                    {t('Enroll', 'ይመዝገቡ')}
                  </Link>
                </div>
              </LiftHover>
            ))}
          </StaggerList>
        </div>
      </motion.div>

      {/* SECTION 2: STUDIO INFRASTRUCTURE, POST-PRODUCTION & AI CURRICULUM */}
      <motion.div
        variants={sectionFadeUp}
        initial="hidden"
        animate="visible"
        className="py-16 sm:py-24 bg-brand-sand/70 border-y border-brand-navy/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-cinema border border-brand-navy/15">
                <img
                  src="/images/editing-lab.jpg"
                  alt="Post-production and DaVinci Resolve color grading lab at Endrias Film College"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-midnight/90 backdrop-blur-md text-white border border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-[11px] text-brand-orange uppercase">
                      PRACTICAL STUDIO TRAINING
                    </div>
                    <div className="text-sm font-bold">
                      {t(
                        'Premiere Pro · DaVinci Resolve · After Effects · AI Workflows',
                        'በዘመናዊ የኤዲቲንግ፣ ከለር ግሬዲንግ እና AI ሶፍትዌሮች የተደገፈ'
                      )}
                    </div>
                  </div>
                  <img
                    src="/brand/logo-seal.png"
                    alt="Endrias Seal"
                    className="w-10 h-10 rounded-full shrink-0"
                  />
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
                <GeezOrnament /> {t('Hands-On Conservatory Method', 'በተግባር የተደገፈ የማስተማር ስነ-ዘዴ')}
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-ink tracking-tight">
                {t(
                  'Train on Real Cinema Cameras, Build Full Sets & Master Modern AI Tools',
                  'በዘመናዊ የሲኒማ ካሜራዎች፣ መብራቶችና የAI ቴክኖሎጂ ይሰልጥኑ'
                )}
              </h2>

              <p className="text-brand-muted leading-relaxed">
                {t(
                  'At Endrias Film College, classrooms transform into working film sets—from building complete nightclub interiors in Directing Practicum to color-grading graduation shorts for theatrical projection on Addis Ababa’s largest cinema screens.',
                  'በእንድርያስ ፊልም ኮሌጅ መማሪያ ክፍሎች ወደ ሙሉ የቀረፃ ስቱዲዮ ይቀየራሉ፤ ተማሪዎች ከፕሮዳክሽን ዲዛይን እስከ ሲኒማ ስክሪን ዕይታ ድረስ በተግባር ሰርተው ይመረቃሉ።'
                )}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Camera,
                    titleEn: 'Blackmagic 6K Pro & 5D Mk IV',
                    titleAm: 'Blackmagic 6K Pro እና 5D Mark IV',
                    descEn: 'RAW cinema acquisition alongside dedicated mobile filmmaking training.',
                    descAm: 'በዘመናዊ የሲኒማ ካሜራዎችና በስልክ ፊልም ስራ የተሟላ ልምምድ።',
                  },
                  {
                    icon: Sparkles,
                    titleEn: 'AI for Filmmaking & Branding',
                    titleAm: 'AI ለፊልም ስራ እና ፖርትፎሊዮ ብራንዲንግ',
                    descEn: '2018–2019 E.C. modules in AI pre-vis, content strategy & showreels.',
                    descAm: 'ለዘመኑ የሚመጥኑ የAI፣ ዲጂታል ሚዲያና የባለሙያ ብራንዲንግ ኮርሶች።',
                  },
                  {
                    icon: GraduationCap,
                    titleEn: 'AAU & Gondar MA/MFA Faculty',
                    titleAm: 'የአዲስ አበባና ጎንደር ዩኒቨስቲ መምህራን',
                    descEn: 'Taught by Master’s-qualified scholars and award-winning directors.',
                    descAm: 'ሁለተኛ ዲግሪና ከዚያ በላይ ባላቸው ምሁራንና አንጋፋ ባለሙያዎች።',
                  },
                  {
                    icon: Briefcase,
                    titleEn: 'Zero-Fee Job Placement',
                    titleAm: 'ከኮሚሽን ነፃ የስራ ትስስር',
                    descEn: 'Direct crew referrals to TV channels, studios & agencies at 0% commission.',
                    descAm: 'ለሁሉም ምሩቃን ያለምንም ክፍያና ኮሚሽን ቀጥታ የስራ ዕድል ትስስር።',
                  },
                ].map((card, i) => (
                  <LiftHover key={i} className="p-4 rounded-2xl bg-white border border-brand-navy/10 shadow-sm space-y-1.5">
                    <div className="w-9 h-9 rounded-lg bg-brand-navy text-brand-orange flex items-center justify-center">
                      <card.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-brand-ink">
                      {t(card.titleEn, card.titleAm)}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {t(card.descEn, card.descAm)}
                    </p>
                  </LiftHover>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 3: ENDI AWARD, GUMA QUOTA & INTERNATIONAL MASTERCLASSES */}
      <motion.div
        variants={sectionFadeUp}
        initial="hidden"
        animate="visible"
        className="py-16 sm:py-24 bg-brand-midnight text-white cinema-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-orange font-bold">
                <GeezOrnament /> {t('Red-Carpet Premiere Culture', 'የእንዲ አዋርድ እና የጉማ አዋርድ ዕድሎች')}
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {t(
                  'Home of the “Endi Award” & Official 3-Film Guma Award Quota',
                  'የ«እንዲ አዋርድ» መድረክ እና የ«ጉማ አዋርድ» የ3 ፊልም ቀጥታ ኮታ'
                )}
              </h2>

              <p className="text-white/75 leading-relaxed">
                {t(
                  'Every Endrias graduation is a full-scale theatrical premiere—held at landmark venues including Addis Cinema Complex, Alem Cinema, and Hager Fikir Theatre—honoring student excellence across 12 craft & ethics categories alongside Ethiopian cinema pioneers.',
                  'በአዲስ ሲኒማ ኮምፕሌክስ፣ በአለም ሲኒማ እና በሀገር ፍቅር ቴአትር የሚካሄዱት የኮሌጁ ምርቃቶች፤ የተማሪዎች ፊልሞች በትልቅ ስክሪን የሚታዩበትና በ«እንዲ አዋርድ» የሚሸለሙበት ደማቅ የሲኒማ በዓል ናቸው።'
                )}
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: Award,
                    titleEn: '3-Film Direct Quota at Ethiopia’s Guma Award',
                    titleAm: 'በጉማ አዋርድ የ3 አጫጭር ፊልሞች ልዩ ኮታ',
                    textEn:
                      'Endrias provides free cinema cameras, lighting gear, and faculty mentorship for 3 student films selected annually to compete directly in the Guma Award.',
                    textAm:
                      'ኮሌጁ ነፃ የቀረፃ መሳሪያዎችና የመምህራን ድጋፍ በማድረግ በየዓመቱ 3 የተማሪ ፊልሞችን በቀጥታ ለጉማ አዋርድ ውድድር ያቀርባል።',
                  },
                  {
                    icon: Users,
                    titleEn: 'Global & Emmy-Winning Mentorship',
                    titleAm: 'ዓለም አቀፍ ወርክሾፖች እና የኤሚ አዋርድ አሸናፊ መምህራን',
                    textEn:
                      'Learn from Int’l Emmy winner Habtamu Sefiw, veteran director Henok Ayele, Munich’s Prof. Andreas Sippel (Otto Falckenberg School), and French visual artist Sébastien Cailleux.',
                    textAm:
                      'ከዓለም አቀፍ ኤሚ አዋርድ አሸናፊው ሐብታሙ ሰፊው፣ ከሔኖክ አየለ፣ ከጀርመኑ አንድሬስ ሲፔል እና ከፈረንሳዊው��ባስቲያ�ን ካይሊውክስ ልምድ ይቅሰሙ።',
                  },
                  {
                    icon: Tv,
                    titleEn: 'Proven Screen Alumni — From “Hagere” to EBS TV’s “Besintu”',
                    titleAm: 'በቴሌቪዥንና በሲኒማ ያሸበረቁ ምሩቃን',
                    textEn:
                      'Alumni include 2018 E.C. double-winner Yodit Solomon ("Hagere") and child star Dagim Tezera ("Nati" on EBS TV sitcom Besintu).',
                    textAm:
                      'በ2018 ዓ.ም የ«ሀገሬ» ፊልም አሸናፊዋ ዮዲት ሰሎሞን እና የኢቢኤስ «በስንቱ» ድራማ ተዋናይ ህፃን ዳግም ተዘራ የኮሌጁ ፍሬዎች ናቸው።',
                  },
                ].map((row, idx) => (
                  <LiftHover key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                      <row.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        {t(row.titleEn, row.titleAm)}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 mt-1 leading-relaxed">
                        {t(row.textEn, row.textAm)}
                      </p>
                    </div>
                  </LiftHover>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/showcase"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-bold text-sm transition-colors"
                >
                  {t('Explore Endi Award & Alumni', 'እንዲ አዋርድ እና የተማሪ ስራዎች')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/faculty"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
                >
                  {t(
                    `Meet ${FACULTY_MEMBERS.length} Faculty & ${MASTERCLASSES.length} Guest Mentors`,
                    'መምህራንን እና ተጋባዥ ባለሙያዎችን ይተዋወቁ'
                  )}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-brand-amber/30 shadow-cinema bg-brand-navyDark">
                <img
                  src="/images/endi-award-premiere.jpg"
                  alt="Endrias Film College Endi Award graduation night in Addis Ababa cinema hall"
                  className="w-full h-80 sm:h-[420px] object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-brand-amber">
                    <span>ADDIS CINEMA COMPLEX · ALEM CINEMA · HAGER FIKIR</span>
                    <span>ENDI AWARD</span>
                  </div>
                  <p className="text-sm text-white/85 leading-relaxed">
                    {t(
                      'Over 250 graduates celebrated at the February 1, 2026 (Tir 24, 2018 E.C.) ceremony at Addis Cinema Complex in the presence of State Minister Asst. Prof. Nebiyu Baye, honoring director Henok Ayele.',
                      'ጥር 24/2018 ዓ.ም በአዲስ ሲኒማ ኮምፕሌክስ ከ250 በላይ ተማሪዎች የተመረቁ ሲሆን፣ አንጋፋው አዘጋጅና መምህር ሔኖክ አየለ የክብር አዋርድ ተበርክቶላቸዋል።'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 4: DAILY 4-SHIFT SCHEDULE & CTA BANNER */}
      <motion.div
        variants={sectionFadeUp}
        initial="hidden"
        animate="visible"
        className="py-16 sm:py-20 bg-brand-ivory"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white rounded-3xl border border-brand-navy/12 shadow-card p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-brand-navy/10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  {t('Flexible 2-Hour Daily Study Shifts', 'በቀን የ2 ሰዓት ምቹ የመማሪያ ፈረቃዎች')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink mt-1">
                  {t(
                    'Study Around Your Work or University Schedule',
                    'ከስራዎ ወይም ከመደበኛ ትምህርትዎ ጋር ሳይጋጭ ይማሩ'
                  )}
                </h2>
              </div>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-bold text-sm self-start md:self-auto"
              >
                {t('Reserve Your Shift', 'ፈረቃዎን ይምረጡና ይመዝገቡ')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-8">
              {DAILY_SHIFTS.map((s) => (
                <LiftHover key={s.id} className="p-4 rounded-2xl bg-brand-ivory border border-brand-navy/10 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded bg-brand-navy/10 text-brand-navy font-mono text-[11px] font-bold">
                      {t(s.daysEn, s.daysAm)}
                    </span>
                    <h3 className="font-bold text-brand-ink text-sm mt-2">
                      {t(s.labelEn, s.labelAm)}
                    </h3>
                  </div>
                  <div className="pt-2 border-t border-brand-navy/10 space-y-0.5">
                    <div className="font-ethiopic text-xs font-bold text-brand-navy">
                      {s.ethiopianTime}
                    </div>
                    <div className="font-mono text-xs text-brand-muted">{s.intlTime}</div>
                  </div>
                </LiftHover>
              ))}
            </div>
          </div>

          {/* Visit 4 Kilo Campus CTA Card */}
          <div className="rounded-3xl bg-gradient-to-r from-brand-navyDark via-brand-navy to-brand-slate text-white p-8 sm:p-12 shadow-cinema flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-20 h-20 rounded-2xl bg-brand-ivory p-2.5 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src="/brand/logo-mark.png"
                  alt="Endrias Mortarboard & Film Reel Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-amber uppercase">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                  4 KILO ROUNDABOUT · ARADA SUB-CITY, WOREDA 9
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold">
                  {t(
                    'Visit Endrias Film College First—Then Decide!',
                    'በጥራት ለመማር ሲያስቡ እንድርያስ ፊልም ኮሌጅን ይጎብኙ፤ ከዚያ ይወስኑ!'
                  )}
                </h2>
                <p className="text-sm sm:text-base text-white/80">
                  {t(
                    'Tour our 4 Kilo Main Campus (next to Wekma & Holy Trinity University 4th Floor), inspect our cinema cameras and editing suites, and speak directly with our academic advisors.',
                    '4 ኪሎ አደባባይ ከወክማ ጎን (እና ቅድስት ሥላሴ ዩኒቨርሲቲ 4ኛ ፎቅ) በአካል በመገኘት የማስተማሪያ ግብዓቶቻችንን ይጎብኙ።'
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={quick}
                className="px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-extrabold text-sm sm:text-base text-center shadow-glow"
              >
                <Link to="/admissions">{t('Start Online Pre-Registration', 'የቅድመ-ምዝገባ ቅጽ ይሙሉ')}</Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={quick}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-sm sm:text-base text-center border border-white/20"
              >
                <a href="tel:+251900003919">0900 003 919</a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
