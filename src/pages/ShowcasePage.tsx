import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  Film,
  Sparkles,
  Star,
  Ticket,
  Trophy,
  Tv,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GeezOrnament } from '../components/Layout';
import { ENDI_AWARD_CATEGORIES, GRADUATION_RECORDS } from '../data/collegeData';

export const ShowcasePage: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <div>
      {/* Hero Banner with Endi Award Premiere Photo */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative bg-brand-midnight text-white overflow-hidden border-b border-brand-amber/30"
      >
        <div className="absolute inset-0">
          <img
            src="/images/endi-award-premiere.jpg"
            alt="Endi Award premiere ceremony in Addis Ababa"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight via-brand-midnight/90 to-brand-midnight/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-4xl lg:mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-mono font-semibold">
            <GeezOrnament /> {t('ENDI AWARD · GUMA QUOTA · ALUMNI CINEMA', 'እንዲ አዋርድ · ጉማ አዋርድ · የተማሪ ስራዎች')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {t(
              'Celebrating Student Cinema on Ethiopia’s Grandest Screens',
              'የተማሪዎች የጥበብ ፍሬ በታላላቅ የሲኒማ አዳራሾች የሚከበርበት መድረክ'
            )}
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl">
            {t(
              'Every graduating team produces an original broadcast-quality short film, a theatrical trailer, and a framed 65×94 cm poster—competing for the prestigious Endi Award ("እንዲ አዋርድ") and our 3-film direct quota at the national Guma Award.',
              'ተመራቂ ተማሪዎች ደረጃውን የጠበቀ አጭር ፊልም፣ ትሬለርና ባለ 65×94 ሴ.ሜ ፖስተር በማዘጋጀት በ12 የ«እንዲ አዋርድ» ዘርፎች እና በ«ጉማ አዋርድ» የ3 ፊልም ኮታ ይወዳደራሉ።'
            )}
          </p>
        </div>
      </motion.section>

      {/* SECTION 1: THE ENDI AWARD 12 CATEGORIES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="py-14 sm:py-20 ivory-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
                <Trophy className="w-4 h-4 text-brand-orange" />
                {t('The Official “Endi Award” (እንዲ አዋርድ)', 'የኮሌጁ ልዩ ሽልማት — «እንዲ አዋርድ»')}
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ink">
                {t('12 Specializations Honoring Craft, Ethics & Audience Impact', 'በ12 የሙያና የስነ-ምግባር ዘርፎች የሚሰጥ ዕውቅና')}
              </h2>
            </div>

            <div className="px-4 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-mono font-semibold">
              {t('Substandard films repeat before clearance — 100% Quality Standard', 'ደረጃውን ያልጠበቀ ፊልም አይመረቅም — 100% የጥራት ቁጥጥር')}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ENDI_AWARD_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-brand-navy/12 shadow-card flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-orange/15 text-brand-orangeHover font-mono font-extrabold text-xs flex items-center justify-center shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-brand-ink text-sm sm:text-base">
                    {t(cat.en, cat.am)}
                  </h3>
                  <p className="text-xs font-mono text-brand-muted">{cat.weight}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guma Award Institutional Quota Highlight */}
          <div className="rounded-3xl bg-gradient-to-r from-brand-navyDark via-brand-navy to-brand-slate text-white p-7 sm:p-10 shadow-cinema grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange text-brand-midnight font-mono text-xs font-extrabold">
                GUMA AWARD (ጉማ አዋርድ) OFFICIAL PARTNER
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                {t(
                  'Direct 3-Short-Film Institutional Quota in Ethiopia’s Guma Award',
                  'በታላቁ «ጉማ አዋርድ» በየዓመቱ 3 አጫጭር ፊልሞችን በቀጥታ የማወዳደር ኮታ'
                )}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {t(
                  'Under a direct institutional partnership, Endrias Film College selects three standout student short films annually to enter the Guma Award—providing participating teams with free Blackmagic/cinema cameras, lighting kits, and dedicated faculty script-to-edit supervision.',
                  'ኮሌጁ ከጉማ አዋርድ ጋር ባለው ልዩ ስምምነት መሰረት፤ ተማሪዎቹ የሚሰሯቸውን 3 ምርጥ አጫጭር ፊልሞች ነፃ የቀረፃ ካሜራ፣ መብራትና የመምህራን ድጋፍ በማቅረብ በቀጥታ ለውድድር ያቀርባል።'
                )}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-extrabold text-sm shadow-glow transition-all"
              >
                {t('See Eligible Diploma & Certificate Tracks', 'ተሳታፊ የሚያደርጉ ፕሮግራሞችን ይመልከቱ')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: MULTI-YEAR GRADUATION ARCHIVE */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="py-14 sm:py-20 bg-brand-sand/70 border-y border-brand-navy/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
              <Ticket className="w-4 h-4 text-brand-orange" />
              {t('Landmark Cinema Graduations', 'ታሪካዊ የምርቃት እና የፊልም ዕይታ መድረኮች')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">
              {t(
                'Addis Cinema Complex · Alem Cinema · Hager Fikir Theatre',
                'በአዲስ ሲኒማ ኮምፕሌክስ፣ አለም ሲኒማ እና ሀገር ፍቅር ቴአትር የተካሄዱ ምርቃቶች'
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GRADUATION_RECORDS.map((g, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-navy/12 shadow-card space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-lg bg-brand-navy text-white font-mono text-xs font-bold">
                      {g.yearEc}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-brand-orange/15 text-brand-orangeHover font-bold text-xs">
                      {g.graduatesCount}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-brand-ink">
                    {t(g.venueEn, g.venueAm)}
                  </h3>
                  <div className="text-xs font-mono text-brand-muted">
                    {t(g.dateEn, g.dateAm)}
                  </div>

                  {g.honoreeEn && (
                    <div className="p-3 rounded-xl bg-brand-ivory border border-brand-amber/40 text-xs sm:text-sm font-bold text-brand-navy flex items-center gap-2">
                      <Award className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>{t(g.honoreeEn, g.honoreeAm || g.honoreeEn)}</span>
                    </div>
                  )}

                  <ul className="space-y-2 pt-1">
                    {(lang === 'en' ? g.highlightsEn : g.highlightsAm).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-ink/85">
                        <CheckCircle2 className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: NOTABLE STUDENT WORKS & ALUMNI SPOTLIGHT */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="py-14 sm:py-20 bg-brand-ivory"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
              <Star className="w-4 h-4 text-brand-orange" />
              {t('Alumni & Student Film Highlights', 'ድንቅ ምሩቃን እና የተማሪዎች አጫጭር ፊልሞች')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">
              {t('Stories Born at Endrias Film College', 'ከኮሌጃችን የፈለቁ ስኬታማ ስራዎችና ተዋንያን')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-brand-navy/12 shadow-card space-y-3">
              <Film className="w-7 h-7 text-brand-orange" />
              <h3 className="font-extrabold text-lg text-brand-ink">
                {t('Yodit Solomon — “Hagere” (ሀገሬ)', 'ዮዲት ሰሎሞን — «ሀገሬ» አጭር ፊልም')}
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {t(
                  'At the February 2026 (2018 E.C.) graduation at Addis Cinema Complex, Yodit Solomon achieved a rare double triumph: graduating at the top of her academic class while winning the Endi Award for Best Short Film for "Hagere".',
                  'በ2018 ዓ.ም በአዲስ ሲኒማ ኮምፕሌክስ በተካሄደው ምርቃት በከፍተኛ አካዳሚክ ውጤት አንደኛ በመውጣትና በ«ሀገሬ» አጭር ፊልም የእንዲ አዋርድ ምርጥ ፊልም አሸናፊ በመሆን ድርብ ድል አስመዝግባለች።'
                )}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-brand-navy/12 shadow-card space-y-3">
              <Tv className="w-7 h-7 text-brand-orange" />
              <h3 className="font-extrabold text-lg text-brand-ink">
                {t('Dagim Tezera — EBS TV’s “Besintu”', 'ህፃን ዳግም ተዘራ — «በስንቱ» (EBS TV)')}
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {t(
                  'Trained in Endrias Film College’s Kiremt Children & Youth Acting Program, young actor Dagim Tezera rose to national household recognition playing "Nati" on EBS TV’s hit family sitcom Besintu.',
                  'በኮሌጁ የክረምት የህፃናትና ታዳጊዎች የትወና ስልጠና ፕሮግራም ሰልጥኖ በኢቢኤስ ቴሌቪዥን ተወዳጅ በሆነው «በስንቱ» ድራማ ላይ «ናቲ» ሆኖ በመተወን ከፍተኛ አድናቆት አትርፏል።'
                )}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-brand-navy/12 shadow-card space-y-3">
              <Sparkles className="w-7 h-7 text-brand-orange" />
              <h3 className="font-extrabold text-lg text-brand-ink">
                {t('Alliance Éthio-Française Showcase', 'በአሊያንስ ኢትዮ-ፍራንሲስ የታዩ ፊልሞች')}
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {t(
                  'Graduate short films "Miknyat" (ምክንያት), "Deg Lerasu" (ደግ ለራሱ), and "Nekut" (ነቁጥ) headlined the Obscura Cinema showcase at Alliance Éthio-Française alongside international actress Kidist Siyum Beza.',
                  'በኮሌጁ ተመራቂዎች የተሰሩት «ምክንያት»፣ «ደግ ለራሱ» እና «ነቁጥ» የተሰኙ አጫጭር ፊልሞች በፒያሳ አሊያንስ ኢትዮ-ፍራንሲስ ለዕይታና ለውይይት ቀርበዋል።'
                )}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
