import { createElement } from 'react';
import MarketingPage, { Section, Card } from '../../components/marketing/MarketingPage';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Code2, Cog, Globe2 } from 'lucide-react';

const WORK_AREAS = [
  {
    icon: Globe2,
    title: 'Public websites',
    body: 'Clear, responsive marketing sites and landing pages designed around trust, clarity, and enquiries.',
  },
  {
    icon: Code2,
    title: 'Web applications',
    body: 'Bespoke portals, dashboards, booking tools, and business systems built around specific workflows.',
  },
  {
    icon: Cog,
    title: 'Automation projects',
    body: 'Internal tools and integrations that reduce manual admin and make operational work more reliable.',
  },
];

const Portfolio = () => (
  <MarketingPage
    eyebrow="Portfolio"
    title="Selected work will be published responsibly"
    tagline="Portfolio entries are being prepared once project details are approved for public use. For now, this page outlines the types of work NeonNeuron delivers without inventing client names or outcomes."
  >
    <Section heading="Work areas">
      <div className="grid sm:grid-cols-3 gap-4 not-prose">
        {WORK_AREAS.map(({ icon: Icon, title, body }) => (
          <Card key={title}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
              {createElement(Icon, { size: 18 })}
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{body}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section heading="What future portfolio entries will include">
      <Card className="not-prose">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
            <BriefcaseBusiness size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Approved project summaries</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                'Project or anonymised client name',
                'Industry and business challenge',
                'Services delivered',
                'Technologies used where relevant',
                'Scope and delivery status',
                'Approved outcomes only',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </Section>

    <Section heading="Need relevant examples now?">
      <p>
        If you are considering a project and want to understand whether NeonNeuron is a fit, contact
        us with your goals. We can discuss relevant experience privately without publishing sensitive
        client or commercial information.
      </p>
      <a href="/contact" className="not-prose inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all">
        Discuss a project <ArrowRight size={14} />
      </a>
    </Section>
  </MarketingPage>
);

export default Portfolio;
