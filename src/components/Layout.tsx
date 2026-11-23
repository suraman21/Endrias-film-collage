import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Send,
  Globe,
  MapPin,
  Mail,
  Award,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../data/collegeData';

export const GeezOrnament: React.FC<{ className?: string }> = ({ className = 'text-brand-orange' }) => (
  <span
    aria-hidden="true"
    className={`inline-block font-ethiopic font-bold select-none tracking-widest ${className}`}
  >
    ፠
  </span>
);

const NAV_ITEMS = [
  { path: '/', labelEn: 'Home', labelAm: 'መነሻ' },
  { path: '/programs', labelEn: 'Programs', labelAm: 'ፕሮግራሞች' },
  { path: '/about', labelEn: 'About & Accreditation', labelAm: 'ስለ ኮሌጁ' },
  { path: '/faculty', labelEn: 'Faculty', labelAm: 'መምህራን' },
  { path: '/showcase', labelEn: 'Endi Award', labelAm: 'እንዲ አዋርድ' },
  { path: '/careers', labelEn: 'Careers', labelAm: 'የስራ ትስስር' },
  { path: '/admissions', labelEn: 'Admissions', labelAm: 'ምዝገባ' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory text-brand-ink">
      {/* Top Conservatory Utility Strip */}
      <div className="bg-brand-midnight text-white/85 border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange font-mono text-[11px] font-semibold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              2019 E.C. INTAKE
            </span>
            <span className="truncate text-white/80">
              {t(
                'AAETQAA Accredited TVET Film Conservatory · 4 Kilo, Addis Ababa',
                'በአዲስ አበባ ብቸኛው በፊልም ጥበብ ሙሉ ዕውቅና ያለው ኮሌጅ · 4 ኪሎ'
              )}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a
              href="tel:+251900003919"
              className="inline-flex items-center gap-1.5 hover:text-brand-orange transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              0900 003 919
            </a>
            <a
              href="tel:+251942563535"
              className="inline-flex items-center gap-1.5 hover:text-brand-orange transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              0942 563 535
            </a>
            <a
              href={CONTACT_INFO.telegramChannel}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-brand-orange transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-brand-orange" />
              @endifilm
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-brand-navyDark/95 backdrop-blur-md shadow-lg border-b border-brand-amber/25'
            : 'bg-brand-navy border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
          {/* Official Brand Crest Lockup */}
          <Link to="/" className="flex items-center gap-3 group min-w-0 shrink-0">
            <img
              src="/brand/logo-seal.png"
              alt="Endrias Film College Official Seal"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-contain drop-shadow-md group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="leading-tight min-w-0">
              <div className="font-ethiopic font-bold text-sm sm:text-base text-brand-amber tracking-wide truncate">
                እንድርያስ የፊልም ኮሌጅ
              </div>
              <div className="font-sans font-extrabold text-white text-base sm:text-lg tracking-tight truncate">
                Endrias Film College
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-brand-orange text-brand-midnight shadow-sm'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {t(item.labelEn, item.labelAm)}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions: Bilingual Switcher + Apply CTA + Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleLang}
              aria-label="Switch language between English and Amharic"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold transition-colors min-h-[42px]"
            >
              <Globe className="w-4 h-4 text-brand-orange" />
              <span>{lang === 'en' ? 'አማርኛ' : 'EN'}</span>
            </button>

            <Link
              to="/admissions"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-bold text-sm shadow-glow transition-all whitespace-nowrap"
            >
              {t('Apply Now', 'አሁኑኑ ይመዝገቡ')}
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Slide-Over Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-brand-midnight/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-brand-midnight text-white shadow-2xl border-l border-white/10 flex flex-col">
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/brand/logo-seal.png"
                  alt="Endrias Film College"
                  className="w-11 h-11 rounded-full"
                />
                <div>
                  <div className="font-ethiopic text-xs text-brand-amber font-bold">
                    እንድርያስ የፊልም ኮሌጅ
                  </div>
                  <div className="font-bold text-sm text-white">Endrias Film College</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-brand-orange text-brand-midnight font-bold'
                        : 'text-white/90 hover:bg-white/10'
                    }`
                  }
                >
                  <span>{t(item.labelEn, item.labelAm)}</span>
                  <span className="text-xs font-ethiopic opacity-75">
                    {lang === 'en' ? item.labelAm : item.labelEn}
                  </span>
                </NavLink>
              ))}

              <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
                <Link
                  to="/admissions"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-brand-orange text-brand-midnight font-extrabold text-base"
                >
                  {t('Start 2019 E.C. Registration', 'የ2019 ዓ.ም ምዝገባ ይጀምሩ')}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="tel:+251900003919"
                    className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/90 hover:border-brand-orange"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-orange" />
                    0900 003 919
                  </a>
                  <a
                    href="tel:+251942563535"
                    className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/90 hover:border-brand-orange"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-orange" />
                    0942 563 535
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-brand-navyDark/80 border-t border-white/10 text-xs text-white/70 flex items-center justify-between">
              <span>4 Kilo Roundabout, Addis Ababa</span>
              <a
                href={CONTACT_INFO.telegramChannel}
                target="_blank"
                rel="noreferrer"
                className="text-brand-orange font-semibold inline-flex items-center gap-1"
              >
                @endifilm <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Route Content */}
      <main className="flex-1">{children}</main>

      {/* Film Sprocket Accent Divider */}
      <div className="h-3 bg-brand-midnight sprocket-strip border-t border-brand-amber/30" />

      {/* Conservatory Footer */}
      <footer className="bg-brand-midnight text-white pt-16 pb-10 cinema-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand Identity Column */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src="/brand/logo-seal.png"
                  alt="Endrias Film College Seal"
                  className="w-16 h-16 rounded-full shrink-0"
                />
                <div>
                  <div className="font-ethiopic text-brand-amber font-bold text-base">
                    እንድርያስ የፊልም ኮሌጅ ኃ.የ.የግ.ማ
                  </div>
                  <div className="font-extrabold text-xl tracking-tight text-white">
                    Endrias Film College PLC
                  </div>
                  <div className="text-xs font-mono text-white/60 mt-0.5">
                    EST. 2010 E.C. (2017/18) · TVET ACCREDITED
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/75 leading-relaxed">
                {t(
                  '“From Imagination to Screen — Let’s create the world with film art!” Addis Ababa’s dedicated accredited institution for TVET Level I–IV Filmmaking Diplomas and practical studio certificates.',
                  '«ከምናብ እስከ ገቢር — በፊልም ጥበብ ዓለምን እንስራ!» በአዲስ አበባ ከተማ አስተዳደር ከደረጃ 1–4 (ዲፕሎማ) እና በአጫጭር ፕሮግራሞች ሙሉ ዕውቅና ያለው የፊልም ኮሌጅ።'
                )}
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-navy/60 border border-brand-amber/30 text-xs text-white/90">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>
                  {t(
                    'AAETQAA Master Registry Row #68 & Permit #32',
                    'በትምህርትና ስልጠና ጥራት ቁጥጥር ባለስልጣን ዕውቅና የተሰጠው'
                  )}
                </span>
              </div>
            </div>

            {/* Conservatory Pages */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-amber font-semibold flex items-center gap-1.5">
                <GeezOrnament /> {t('Conservatory', 'የኮሌጁ ገፆች')}
              </h3>
              <ul className="space-y-2.5 text-sm text-white/80">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-brand-orange transition-colors">
                      {t(item.labelEn, item.labelAm)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program Tracks */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-amber font-semibold flex items-center gap-1.5">
                <GeezOrnament /> {t('Academic Tiers', 'የትምህርት መርሃግብሮች')}
              </h3>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <Link to="/programs" className="hover:text-brand-orange transition-colors">
                    {t('Level IV Regular Diploma (2 Yrs)', 'የደረጃ 4 ዲፕሎማ (እስከ 2 ዓመት)')}
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-brand-orange transition-colors">
                    {t('+10-Month Certificate-to-Diploma Bridge', 'የ10 ወር ዲፕሎማ ማሳደጊያ')}
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-brand-orange transition-colors">
                    {t('1-Year General Filmmaking', 'የ1 ዓመት አጠቃላይ ፊልም አሰራር')}
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-brand-orange transition-colors">
                    {t('9-Month Audio-Visual Track', 'የ9 ወር ኦዲዮ-ቪዥዋል ፕሮግራም')}
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-brand-orange transition-colors">
                    {t('3-Month Dual & 2-Month Digital/Summer', 'የ3 ወር እና የ2 ወር ዲጂታል/ክረምት')}
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-brand-orange transition-colors">
                    {t('1-Month VIP (VFX & Motion Graphics)', 'የ1 ወር VIP (VFX እና ሞሽን ግራፊክስ)')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Campus & Direct Channels */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-amber font-semibold flex items-center gap-1.5">
                <GeezOrnament /> {t('4 Kilo Campus & Official Hub', 'አድራሻ እና ኦፊሻል ገፆች')}
              </h3>
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-white">
                      {t('4 Kilo Roundabout, Next to Wekma', '4 ኪሎ አደባባይ ከወክማ ጎን (ዋናው ካምፓስ)')}
                    </p>
                    <p className="text-xs text-white/65 mt-0.5">
                      {t(
                        '& Holy Trinity University Bldg, 4th Floor · Arada Sub-City, Woreda 9',
                        'እና ቅድስት ሥላሴ ዩኒቨርሲቲ ህንፃ 4ኛ ፎቅ · አራዳ ወረዳ 9'
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                  <div className="font-mono text-xs sm:text-sm">
                    <a href="tel:+251900003919" className="hover:text-brand-orange">
                      0900 003 919
                    </a>{' '}
                    /{' '}
                    <a href="tel:+251942563535" className="hover:text-brand-orange">
                      0942 563 535
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <a
                    href={`mailto:${CONTACT_INFO.emailPrimary}`}
                    className="text-xs hover:text-brand-orange break-all"
                  >
                    {CONTACT_INFO.emailPrimary}
                  </a>
                </div>

                {/* Verified Social Links */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {[
                    { label: 'Telegram', url: CONTACT_INFO.telegramChannel },
                    { label: 'TikTok', url: CONTACT_INFO.tiktokUrl },
                    { label: 'Facebook', url: CONTACT_INFO.facebookUrl },
                    { label: 'Instagram', url: CONTACT_INFO.instagramUrl },
                    { label: 'YouTube', url: CONTACT_INFO.youtubeUrl },
                  ].map((soc) => (
                    <a
                      key={soc.label}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-brand-orange hover:text-brand-midnight text-xs font-semibold transition-colors inline-flex items-center gap-1"
                    >
                      {soc.label}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Standalone Emblem */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-ivory p-1 flex items-center justify-center shrink-0">
                <img
                  src="/brand/logo-mark.png"
                  alt="Endrias Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <span>
                © {new Date().getFullYear()} Endrias Film College PLC (እንድርያስ የፊልም ኮሌጅ ኃ.የ.የግ.ማ).{' '}
                {t('All rights reserved.', 'መብቱ በህግ የተጠበቀ ነው።')}
              </span>
            </div>

            <div className="flex items-center gap-2 text-white/70">
              <Award className="w-4 h-4 text-brand-orange" />
              <span>
                {t(
                  'Sister Entity: Endrias Film Company · Zero-Commission Career Pledge',
                  'እህት ኩባንያ፦ እንድርያስ ፊልም ካምፓኒ · ነፃ የስራ ትስስር አገልግሎት'
                )}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
