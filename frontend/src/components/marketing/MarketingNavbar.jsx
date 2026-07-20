import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react';
import useThemeStore from '../../store/useThemeStore';
import BrandLogo from '../common/BrandLogo';

const NAV_LINKS = [
  { label: 'Home', to: '/', end: true },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const MarketingNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <BrandLogo size="sm" />
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">NeonNeuron</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-400">
          {NAV_LINKS.map((link) => (
            <DesktopLink key={link.to} {...link} />
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all active:scale-[0.98]"
          >
            Start a Project <ArrowRight size={14} />
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && <MobileSheet onClose={() => setMobileOpen(false)} />}
    </header>
  );
};

const DesktopLink = ({ to, label, end }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `inline-flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
        isActive
          ? 'text-slate-900 bg-slate-100 dark:text-white dark:bg-slate-800'
          : 'hover:text-slate-900 hover:bg-slate-50 dark:hover:text-white dark:hover:bg-slate-800/60'
      }`
    }
  >
    {label}
  </NavLink>
);

const ThemeToggle = () => {
  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggleTheme);
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors duration-300 active:scale-90"
    >
      <Sun
        size={17}
        className={`absolute transition-all duration-300 ${
          isDark ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
        }`}
      />
      <Moon
        size={17}
        className={`absolute transition-all duration-300 ${
          isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
        }`}
      />
    </button>
  );
};

const MobileSheet = ({ onClose }) => (
  <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a] max-h-[calc(100vh-4rem)] overflow-y-auto">
    <div className="px-6 py-5 space-y-1">
      {NAV_LINKS.map((link) => (
        <MobileLink key={link.to} {...link} onClose={onClose} />
      ))}

      <div className="h-px bg-slate-200 dark:bg-slate-800 my-3" />

      <Link
        to="/contact"
        onClick={onClose}
        className="mt-2 block w-full text-center px-5 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all active:scale-[0.98]"
      >
        Start a Project
      </Link>
    </div>
  </div>
);

const MobileLink = ({ to, end, onClose, label }) => (
  <NavLink
    to={to}
    end={end}
    onClick={onClose}
    className={({ isActive }) =>
      `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
        isActive
          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/60 dark:bg-indigo-500/10'
          : 'text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/60'
      }`
    }
  >
    {label}
  </NavLink>
);

export default MarketingNavbar;
