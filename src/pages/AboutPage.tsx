import React from 'react';
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
  Award,
  Building2,
  Camera,
  CheckCircle2,
  FileCheck2,
  Globe2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GeezOrnament } from '../components/Layout';
import { TIMELINE_MILESTONES } from '../data/collegeData';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Page Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-brand-midnight text-white py-14 sm:py-20 border-b border-brand-amber/30 cinema-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-mono font-semibold">
              <GeezOrnament /> {t('HERITAGE, ACCREDITATION & STUDIOS', 'ታሪክ፣ ህጋዊ ዕውቅና እና ስቱዲዮዎች')}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t(
                'Addis Ababa’s Dedicated Accredited Home for Cinema Education',
                'በአዲስ አበባ ብቸኛው ራሱን የቻለ ዕውቅና ያለው የፊልም ኮሌጅ'
              )}
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {t(
                'Registered as Endrias Film College PLC (እንድርያስ የፊልም ኮሌጅ ኃ.የ.የግ.ማ), our institution bridges rigorous university-caliber film scholarship with practical studio production at 4 Kilo, Addis Ababa.',
                'እንድርያስ የፊልም ኮሌጅ ኃ.የ.የግ.ማ፤ በ4 ኪሎ አደባባይ በመገኘት የከፍተኛ ትምህርት ንድፈ-ሀሳብን ከዘመናዊ የሲኒማ ፕሮዳክሽን ተግባር ጋር አዋህዶ የሚያስተምር ተቋም ነው።'
              )}
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="p-6 rounded-3xl bg-brand-navyDark border border-brand-amber/30 flex items-center gap-4">
              <img
                src="/brand/logo-seal.png"
                alt="Endrias Seal"
                className="w-20 h-20 rounded-full shrink-0"
              />
              <div>
                <div className="font-mono text-xs text-brand-orange font-bold">EST. 2010 E.C.</div>
                <div className="font-bold text-white text-base">Endrias Film College PLC</div>
                <div className="text-xs text-white/70 mt-0.5">Arada Sub-City · Woreda 09</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 1: OFFICIAL GOVERNMENT ACCREDITATION VERIFICATION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="py-14 sm:py-20 ivory-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              {t('Official Regulatory Verification', 'የመንግስት የዕውቅና ማረጋገጫ መረጃ')}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ink">
              {t(
                'Verified on the Addis Ababa Quality Assurance Registry',
                'በአዲስ አበባ ትምህርትና ስልጠና ጥራት ቁጥጥር ባለስልጣን የተረጋገጠ'
              )}
            </h2>
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
              {t(
                'Out of 121 accredited public and private colleges across Addis Ababa on the Authority’s master registry (educoc.gov.et), Endrias Film College is the sole standalone, single-purpose accredited film college—and the only film institution among the 38 colleges cleared to register new regular trainees in 2016 E.C.',
                'በአዲስ አበባ ትምህርትና ስልጠና ጥራት ቁጥጥር ባለስልጣን መዝገብ ከሚገኙ 121 የመንግስትና የግል ኮሌጆች መካከል፣ ሙሉ በሙሉ በፊልም ጥበብ ብቻ ራሱን ችሎ ዕውቅና ያለው ብቸኛው ኮሌጅ እንድርያስ የፊልም ኮሌጅ ነው።'
              )}
            </p>
          </div>

          {/* Regulatory Record Card */}
          <div className="bg-white rounded-3xl border border-brand-navy/15 shadow-card overflow-hidden">
            <div className="bg-brand-navy text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 font-bold text-sm sm:text-base">
                <FileCheck2 className="w-5 h-5 text-brand-orange" />
                {t(
                  'AAETQAA / EDUCOC Official Accreditation Dossier',
                  'የአዲስ አበባ ትምህርትና ስልጠና ጥራት ቁጥጥር ባለስልጣን መዝገብ'
                )}
              </div>
              <span className="px-3 py-1 rounded-full bg-brand-orange text-brand-midnight font-mono text-xs font-extrabold">
                VERIFIED RECORD
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-navy/10">
              {[
                {
                  labelEn: 'Registered Legal Entity',
                  labelAm: 'ህጋዊ የድርጅት ስም',
                  valEn: 'Endrias Film College PLC',
                  valAm: 'እንድርያስ የፊልም ኮሌጅ ኃ.የ.የግ.ማ',
                },
                {
                  labelEn: 'Master Registry & Permit Row',
                  labelAm: 'የዕውቅና መዝገብ ተራ ቁጥር',
                  valEn: 'Row #68 (Master) · Row #32 (Active Permit)',
                  valAm: 'ተ.ቁ 68 (ዋና መዝገብ) · ተ.ቁ 32 (የምዝገባ ፈቃድ)',
                },
                {
                  labelEn: 'Accredited Stream & Levels',
                  labelAm: 'የሰለጠነበት ዘርፍ እና ደረጃ',
                  valEn: 'Video / Film (ቪድዮ ፊልም) · TVET Levels I–IV',
                  valAm: 'ቪድዮ ፊልም · ከደረጃ I እስከ IV (ዲፕሎማ)',
                },
                {
                  labelEn: 'Jurisdiction & Woreda',
                  labelAm: 'ክፍለ ከተማ እና ወረዳ',
                  valEn: 'Arada Sub-City, Woreda 09 (4 Kilo)',
                  valAm: 'አራዳ ክፍለ ከተማ፣ ወረዳ 09 (4 ኪሎ)',
                },
                {
                  labelEn: 'Authorized Regular TVET Intake',
                  labelAm: 'የተፈቀደ መደበኛ ሰልጣኝ ቁጥር',
                  valEn: '70 Day + 70 Evening (+ Short-Term Cohorts)',
                  valAm: 'በቀን 70 እና በማታ 70 (+ የአጫጭር ሰርተፍኬት ባቾች)',
                },
                {
                  labelEn: 'Sister Production House',
                  labelAm: 'እህት የፕሮዳክሽን ተቋም',
                  valEn: 'Endrias Film Company / Production',
                  valAm: 'እንድርያስ ፊልም ካምፓኒ / ፕሮዳክሽን',
                },
              ].map((cell, i) => (
                <div key={i} className="p-5 sm:p-6 space-y-1">
                  <div className="text-xs font-mono uppercase text-brand-muted">
                    {t(cell.labelEn, cell.labelAm)}
                  </div>
                  <div className="font-extrabold text-brand-ink text-sm sm:text-base">
                    {t(cell.valEn, cell.valAm)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: BRAND EMBLEM & VISUAL IDENTITY */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="py-14 sm:py-20 bg-brand-sand/70 border-y border-brand-navy/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-brand-midnight rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-brand-amber/30 shadow-card space-y-3">
                <img
                  src="/brand/logo-seal.png"
                  alt="Official Circular Seal"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-contain"
                />
                <div className="text-xs font-mono text-brand-amber">OFFICIAL SEAL (2026)</div>
              </div>
              <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-brand-navy/15 shadow-card space-y-3">
                <img
                  src="/brand/logo-mark.png"
                  alt="Standalone Mortarboard and Film Reel Emblem"
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
                />
                <div className="text-xs font-mono text-brand-navy font-bold">CENTRAL LOGOMARK</div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
                <GeezOrnament /> {t('Symbolism of Our Crest', 'የኮሌጁ ዓርማ ትርጓሜ')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">
                {t(
                  'Where Academic Rigor Meets Ethiopian Cinema Craft',
                  'የአካዳሚክ ልህቀትና የፊልም ጥበብ ውህደት'
                )}
              </h2>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                {t(
                  'Unveiled in its renewed form in June 2026, the Endrias Film College seal unites three foundational symbols: the Prussian-navy academic mortarboard (accredited higher vocational scholarship), the four-aperture cinema reel encircled by a dynamic amber arc forming a stylized “e”, and traditional Ethiopian Ge’ez four-dot ornaments (፠) honoring indigenous storytelling.',
                  'ሰኔ 2018 ዓ.ም (June 2026) በአዲስ መልክ የቀረበው የኮሌጁ ዓርማ፤ የከፍተኛ ትምህርት ምልክት የሆነውን የምርቃት ቆብ፣ ባለ 4 ቀዳዳ የፊልም ሪል እና ሀገርኛ የግዕዝ ነቁጥ (፠) ጌጦችን በደማቅ ሰማያዊና ወርቃማ ብርቱካናማ ቀለማት አዋህዶ ይዟል።'
                )}
              </p>
              <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-brand-navy text-white">
                  #054677 CONSERVATORY NAVY
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-brand-orange text-brand-midnight font-bold">
                  #FF9000 CINEMA AMBER
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-brand-navy/20 text-brand-ink">
                  ፠ GE’EZ ORNAMENTATION
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: CHRONOLOGICAL TIMELINE */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="py-14 sm:py-20 bg-brand-ivory"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
              <GeezOrnament /> {t('Institutional Journey', 'የኮሌጁ የዕድገት ጉዞ')} <GeezOrnament />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ink">
              {t('Eight+ Years Shaping Ethiopian Screen Talent', 'ከ2010 እስከ 2019 ዓ.ም የዘለቀ የጥበብ ጉዞ')}
            </h2>
          </div>

          <div className="space-y-6 relative before:hidden sm:before:block before:absolute before:top-4 before:bottom-4 before:left-6 before:w-0.5 before:bg-brand-navy/20">
            {TIMELINE_MILESTONES.map((m, idx) => (
              <LiftHover key={idx} className="relative sm:pl-16">
                <div className="hidden sm:flex absolute left-2.5 top-5 w-7 h-7 rounded-full bg-brand-navy border-4 border-brand-orange items-center justify-center" />
                <div className="bg-white rounded-2xl p-6 border border-brand-navy/12 shadow-card space-y-2">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-brand-navy/10 text-brand-navy font-mono text-xs font-bold">
                    {m.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-brand-ink">
                    {t(m.titleEn, m.titleAm)}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {t(m.descEn, m.descAm)}
                  </p>
                </div>
              </LiftHover>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 4: CULTURAL & INSTITUTIONAL COLLABORATIONS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        className="py-14 sm:py-20 bg-brand-navyDark text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-orange font-bold">
              <Globe2 className="w-4 h-4" />
              {t('Ecosystem & Diplomatic Collaborations', 'ተቋማዊና ባህላዊ አጋርነቶች')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              {t(
                'Connected to Ethiopia’s Leading Cultural & Film Institutions',
                'ከሀገር ውስጥና ዓለም አቀፍ የባህል ተቋማት ጋር ያለን ትስስር'
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Award,
                titleEn: 'Guma Award (ጉማ አዋርድ)',
                titleAm: 'ጉማ አዋርድ (Guma Award)',
                descEn: 'Official 3-film annual direct competition quota backed by free college equipment and faculty mentorship.',
                descAm: 'በየዓመቱ 3 የተማሪ ፊልሞች በቀጥታ የሚወዳደሩበት ልዩ ተቋማዊ ስምምነት።',
              },
              {
                icon: Globe2,
                titleEn: 'Alliance Éthio-Française & Goethe-Institut',
                titleAm: 'አሊያንስ ኢትዮ-ፍራንሲስ እና ጎተ-ኢንስቲትዩት',
                descEn: 'Co-hosted Obscura Cinema student screenings (with Nada Hubs & White Canvas) and Goethe documentary/grant forums.',
                descAm: 'የተማሪዎች አጫጭር ፊልሞች ዕይታ፣ ውይይትና የዶክመንተሪ ስልጠና መድረኮች።',
              },
              {
                icon: Building2,
                titleEn: 'Addis Ababa Culture & Cinema Bureaus',
                titleAm: 'የአዲስ አበባ ባህልና ኪነ-ጥበብ ቢሮ እና ሲኒማ አስተዳደር',
                descEn: 'Partnered on Cinema Empire heritage screenings of "Hirut Abatwa Man New?" and formalist critiques of 35mm classic "Aster".',
                descAm: 'የ«ኂሩት አባቷ ማነው?» ዕይታ እና የ«አስቴር» ፊልም ቅርጻዊ ሂስ መድረክ ትብብር።',
              },
              {
                icon: Camera,
                titleEn: 'Endrias Film Company (Sister Studio)',
                titleAm: 'እንድርያስ ፊልም ካምፓኒ (እህት ኩባንያ)',
                descEn: 'Commercial production partner producing documentaries, TVCs, music videos, corporate films, and 3D animation.',
                descAm: 'ዶክመንተሪ፣ የቴሌቪዥን ማስታወቂያ፣ ሙዚቃ ክሊፕና ፊልሞችን የሚያመርት እህት ተቋም።',
              },
              {
                icon: Sparkles,
                titleEn: 'Ethiopian Academy of Sciences & INSA',
                titleAm: 'የኢትዮጵያ ሳይንስ አካዳሚ እና INSA',
                descEn: 'Active student participation in national TV-drama dialogues and INSA Cyber Security Awareness short-film contests.',
                descAm: 'በሀገር አቀፍ የፊልም ውይይቶችና የሳይበር ደህንነት አጭር ፊልም ውድድሮች ተሳትፎ።',
              },
              {
                icon: CheckCircle2,
                titleEn: 'Babul Kheyr Humanitarian Outreach',
                titleAm: 'የበጎ አድራጎት ማህበራዊ ኃላፊነት (ባቡል ከይር)',
                descEn: 'Graduating classes organize community service and fundraising initiatives alongside zero-fee job placement.',
                descAm: 'ተመራቂ ተማሪዎች ከምርቃታቸው ጎን ለጎን የሚያከናውኑት የበጎ አድራጎት ተግባር።',
              },
            ].map((item, idx) => (
              <LiftHover key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                <item.icon className="w-6 h-6 text-brand-orange" />
                <h3 className="font-bold text-base text-white">{t(item.titleEn, item.titleAm)}</h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  {t(item.descEn, item.descAm)}
                </p>
              </LiftHover>
            ))}
          </div>

          <div className="pt-4">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-extrabold text-sm transition-colors"
            >
              {t('Schedule a 4 Kilo Campus Visit', '4 ኪሎ ካምፓሳችንን ይጎብኙ')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
