import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';

const LEGAL_IDENTITY = 'NeonNeuron Technologies Ltd · Registered in England and Wales, Company No. 17074447 · Registered office: 82a James Carter Road, Mildenhall, IP28 7DE, United Kingdom';
const CONTACT_EMAIL = 'hello@neonneuron.online';
const CONTACT_PHONE = '+447898132784';
const CONTACT_PHONE_DISPLAY = '+44 7898 132784';

const FOOTER_COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Web Design & Development', to: '/services' },
      { label: 'Custom Web Applications', to: '/services' },
      { label: 'Automation & Internal Tools', to: '/services' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Maintenance & Support', to: '/services' },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Our Process', to: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Cookie Policy', to: '/cookies' },
    ],
  },
];

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="inline-block text-sm text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-white hover:translate-x-0.5 transition-all"
  >
    {children}
  </Link>
);

const MarketingFooter = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f9fafb] dark:bg-[#0f172a] text-[#6b7280] dark:text-[#9ca3af] border-t border-[#e5e7eb] dark:border-[#334155] transition-colors duration-300 overflow-hidden">
      <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-indigo-300/60 dark:via-indigo-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="col-span-2 lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <BrandLogo size="md" />
              <span className="font-bold text-xl tracking-tight text-[#111827] dark:text-[#e5e7eb]">NeonNeuron</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed max-w-sm text-[#6b7280] dark:text-[#9ca3af]">
              UK-based technology services for businesses that need dependable websites, web apps,
              automation, and digital systems built with care.
            </p>
            <div className="mt-4 flex flex-col gap-1 text-sm">
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-white transition-colors">
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE}`} className="text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-white transition-colors">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-sm font-semibold tracking-wide mb-4 text-[#111827] dark:text-[#e5e7eb]">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink to={l.to}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 lg:mt-16 border-t border-[#e5e7eb] dark:border-[#334155]" />

        <div className="pt-6 flex flex-col gap-4 text-xs">
          <p className="text-slate-500 dark:text-slate-500">
            &copy; {year} NeonNeuron Technologies Ltd. All rights reserved.
          </p>
          <p className="max-w-5xl leading-relaxed text-slate-500 dark:text-slate-500">
            {LEGAL_IDENTITY}
          </p>
        </div>
      </div>

      <button
        onClick={scrollTop}
        aria-label="Back to top"
        className="group absolute right-6 bottom-24 sm:bottom-20 w-11 h-11 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-indigo-400/60 dark:hover:border-indigo-500/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center justify-center"
      >
        <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
};

export default MarketingFooter;
