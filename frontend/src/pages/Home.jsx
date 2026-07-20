import { createElement } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Bot, CheckCircle2, Code2, Cog, FileText, Globe2,
  Handshake, Laptop, LifeBuoy, Rocket, Search, ShieldCheck,
} from 'lucide-react';
import MarketingNavbar from '../components/marketing/MarketingNavbar';
import MarketingFooter from '../components/marketing/MarketingFooter';

const APP_BG = 'bg-[#f9fafb] dark:bg-[#0f172a]';
const SECTION_BG = 'bg-white dark:bg-[#111827]';
const CARD_BG = 'bg-white dark:bg-[#1e293b]';
const BORDER = 'border-[#e5e7eb] dark:border-[#334155]';
const TEXT_1 = 'text-[#111827] dark:text-[#e5e7eb]';
const TEXT_2 = 'text-[#6b7280] dark:text-[#9ca3af]';
const SECTION_PY = 'py-20 lg:py-24';

const SERVICES = [
  {
    icon: Globe2,
    title: 'Websites & digital presence',
    body: 'Fast, responsive websites that explain your business clearly and help customers take the next step.',
  },
  {
    icon: Laptop,
    title: 'Custom web applications',
    body: 'Client portals, booking systems, dashboards, and operational tools shaped around how your business works.',
  },
  {
    icon: Cog,
    title: 'Automation & internal tools',
    body: 'Streamline repeated tasks, connect systems, and reduce manual admin with practical automation.',
  },
  {
    icon: Bot,
    title: 'AI-enabled software',
    body: 'Useful AI features for search, drafting, triage, reporting, and knowledge workflows where they add real value.',
  },
  {
    icon: ShieldCheck,
    title: 'Care plans & support',
    body: 'Ongoing maintenance, monitoring, improvements, and technical support after launch.',
  },
  {
    icon: Code2,
    title: 'Technical consulting',
    body: 'Clear advice on technology choices, system design, integrations, and delivery planning.',
  },
];

const PROCESS = [
  { icon: Search, title: 'Discover', body: 'We clarify goals, users, constraints, risks, and what success should look like.' },
  { icon: FileText, title: 'Plan', body: 'You get a practical scope, recommended approach, milestones, and delivery priorities.' },
  { icon: Code2, title: 'Build', body: 'We design and develop in focused iterations, keeping communication direct and transparent.' },
  { icon: Rocket, title: 'Launch', body: 'We prepare the release, check the details, and help you move from build to live.' },
  { icon: LifeBuoy, title: 'Support', body: 'We can stay involved for hosting, maintenance, improvements, and technical support.' },
];

const Home = () => (
  <div className={`min-h-screen ${APP_BG} ${TEXT_1} antialiased selection:bg-indigo-200/60 selection:text-indigo-900 transition-colors duration-300`}>
    <MarketingNavbar />
    <Hero />
    <Services />
    <Process />
    <WorkPreview />
    <CTA />
    <MarketingFooter />
  </div>
);

export default Home;

const PrimaryButton = ({ to, children, className = '', size = 'md' }) => {
  const sizes = { md: 'px-5 py-2.5 text-sm', lg: 'px-6 py-3 text-base' };
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 ${sizes[size]} font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all active:scale-[0.98] ${className}`}
    >
      {children}
    </Link>
  );
};

const SecondaryButton = ({ to, children, className = '', size = 'md' }) => {
  const sizes = { md: 'px-5 py-2.5 text-sm', lg: 'px-6 py-3 text-base' };
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 ${sizes[size]} font-semibold rounded-xl shadow-sm transition-all active:scale-[0.98]
                  text-[#111827] bg-white border border-[#e5e7eb] hover:border-slate-300 hover:bg-[#f9fafb]
                  dark:text-slate-100 dark:bg-[#1e293b] dark:border-[#334155] dark:hover:bg-slate-700/60 dark:hover:border-slate-500
                  ${className}`}
    >
      {children}
    </Link>
  );
};

const Hero = () => (
  <section className={`relative overflow-hidden ${APP_BG}`}>
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-200/50 dark:bg-indigo-700/15 blur-[120px]" />
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200/50 dark:bg-purple-700/15 blur-[120px]" />
    </div>

    <div className={`max-w-7xl mx-auto px-6 ${SECTION_PY} grid lg:grid-cols-2 gap-12 items-center`}>
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/30 text-xs font-medium text-indigo-700 dark:text-indigo-300 mb-6">
          <Handshake size={12} /> UK technology services for growing businesses
        </div>
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] ${TEXT_1}`}>
          Websites, web apps, and automation built for <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">real business needs</span>
        </h1>
        <p className={`mt-6 text-lg ${TEXT_2} max-w-xl leading-relaxed`}>
          NeonNeuron Technologies Ltd helps businesses design, build, improve, and maintain modern digital systems — from public websites to internal tools and AI-enabled workflows.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryButton to="/contact" size="lg">
            Start a Project <ArrowRight size={16} />
          </PrimaryButton>
          <SecondaryButton to="/services" size="lg">
            View Services
          </SecondaryButton>
        </div>

        <div className={`mt-8 grid sm:grid-cols-3 gap-3 text-sm ${TEXT_2}`}>
          {['Clear project scoping', 'Practical delivery', 'Ongoing support'].map((item) => (
            <div key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> {item}</div>
          ))}
        </div>
      </div>

      <ProjectCard />
    </div>
  </section>
);

const ProjectCard = () => (
  <div className="relative">
    <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl rounded-3xl" aria-hidden />
    <div className={`relative ${CARD_BG} rounded-2xl shadow-2xl shadow-indigo-500/10 dark:shadow-black/40 border ${BORDER} overflow-hidden`}>
      <div className={`h-10 bg-[#f9fafb] dark:bg-[#0f172a] border-b ${BORDER} flex items-center gap-1.5 px-4`}>
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-emerald-400" />
        <div className={`ml-4 h-5 px-3 rounded-md ${CARD_BG} border ${BORDER} text-[10px] ${TEXT_2} flex items-center`}>neonneuron.online/project-plan</div>
      </div>
      <div className="p-6 sm:p-8 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Project snapshot</p>
          <h3 className={`mt-2 text-2xl font-bold ${TEXT_1}`}>From idea to useful software</h3>
          <p className={`mt-2 text-sm leading-relaxed ${TEXT_2}`}>We turn unclear digital problems into scoped, buildable, maintainable systems.</p>
        </div>
        {[
          ['Discovery', 'Goals, users, workflows, and constraints'],
          ['Design & build', 'Interfaces, integrations, automation, and testing'],
          ['Launch & support', 'Deployment, handover, maintenance, and improvements'],
        ].map(([title, body], i) => (
          <div key={title} className={`flex gap-4 p-4 rounded-xl border ${BORDER} bg-[#f9fafb] dark:bg-[#0f172a]`}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
            <div>
              <p className={`font-semibold ${TEXT_1}`}>{title}</p>
              <p className={`text-sm ${TEXT_2}`}>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Services = () => (
  <section id="services" className={`${SECTION_BG} ${SECTION_PY} border-y ${BORDER}`}>
    <div className="max-w-7xl mx-auto px-6">
      <SectionIntro eyebrow="Services" title="Technology services that meet you where you are" body="Choose a focused build, a technical partner for a larger project, or ongoing support for systems that already exist." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map(({ icon: Icon, title, body }) => (
          <article key={title} className={`group ${CARD_BG} border ${BORDER} rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.015] hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all duration-300`}>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white mb-5 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              {createElement(Icon, { size: 20 })}
            </div>
            <h3 className={`text-lg font-semibold mb-1.5 ${TEXT_1}`}>{title}</h3>
            <p className={`text-sm leading-relaxed ${TEXT_2}`}>{body}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <SecondaryButton to="/services">Explore all services <ArrowRight size={15} /></SecondaryButton>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className={`${APP_BG} ${SECTION_PY}`}>
    <div className="max-w-7xl mx-auto px-6">
      <SectionIntro eyebrow="Process" title="A clear path from brief to launch" body="Every engagement is scoped around what your business needs, not a one-size-fits-all package." centered />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {PROCESS.map(({ icon: Icon, title, body }, i) => (
          <article key={title} className={`${CARD_BG} border ${BORDER} rounded-xl p-5 shadow-md`}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                {createElement(Icon, { size: 18 })}
              </div>
              <span className="text-xs font-bold text-slate-400">0{i + 1}</span>
            </div>
            <h3 className={`font-semibold ${TEXT_1}`}>{title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${TEXT_2}`}>{body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const WorkPreview = () => (
  <section className={`${SECTION_BG} ${SECTION_PY} border-y ${BORDER}`}>
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
      <WorkCard
        label="Portfolio"
        title="Selected work, prepared responsibly"
        body="Portfolio entries will be published once project details are approved for public use. Until then, the page explains the type of work NeonNeuron delivers without naming clients or inventing results."
        to="/portfolio"
      />
      <WorkCard
        label="Case Studies"
        title="Detailed stories when they are ready"
        body="Case studies will focus on the challenge, scope, solution, and outcome of real engagements. For now, visitors can contact us to discuss relevant examples privately."
        to="/case-studies"
      />
    </div>
  </section>
);

const WorkCard = ({ label, title, body, to }) => (
  <article className={`${CARD_BG} border ${BORDER} rounded-2xl p-8 shadow-md`}>
    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">{label}</p>
    <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${TEXT_1}`}>{title}</h2>
    <p className={`mt-4 ${TEXT_2} leading-relaxed`}>{body}</p>
    <Link to={to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
      View {label} <ArrowRight size={15} />
    </Link>
  </article>
);

const CTA = () => (
  <section className={`${APP_BG} ${SECTION_PY}`}>
    <div className="max-w-5xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-10 sm:p-14 text-center shadow-2xl shadow-indigo-500/30">
        <div aria-hidden className="absolute inset-0 opacity-30">
          <div className="absolute -top-1/2 -right-1/4 w-[60%] h-[120%] rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Tell us what you want to build</h2>
          <p className="mt-4 text-lg text-indigo-100 max-w-xl mx-auto">
            Share the problem, goal, or system you have in mind. We will help you shape the next practical step.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-indigo-700 bg-white rounded-xl hover:bg-indigo-50 shadow-xl shadow-indigo-900/20 transition-all active:scale-[0.98]">
              Contact NeonNeuron <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionIntro = ({ eyebrow, title, body, centered }) => (
  <div className={`${centered ? 'text-center mx-auto' : ''} max-w-2xl mb-14`}>
    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">{eyebrow}</p>
    <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${TEXT_1}`}>{title}</h2>
    <p className={`mt-4 text-lg ${TEXT_2}`}>{body}</p>
  </div>
);
