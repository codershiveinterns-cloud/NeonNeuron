import { createElement } from 'react';
import { Link } from 'react-router-dom';
import MarketingPage, { Section, Card } from '../../components/marketing/MarketingPage';
import { ArrowRight, CheckCircle2, Code2, Compass, Globe2, Rocket } from 'lucide-react';

const CONTACT_EMAIL = 'hello@neonneuron.online';
const CONTACT_PHONE = '+447898132784';
const CONTACT_PHONE_DISPLAY = '+44 7898 132784';

const PLANS = [
  {
    icon: Rocket,
    name: 'Launch Website',
    price: 'From £2,950',
    note: 'For smaller businesses needing a professional marketing website.',
    features: [
      'Discovery call and project scope',
      'Responsive 4-6 page marketing website',
      'Contact or enquiry flow',
      'Basic SEO structure',
      'Launch support',
    ],
  },
  {
    icon: Globe2,
    name: 'Growth Website',
    price: 'From £4,950',
    note: 'For businesses that need stronger service pages, content structure, and conversion.',
    features: [
      'Extended website structure',
      'Service pages or landing pages',
      'Content guidance',
      'Performance-focused build',
      'Analytics setup and handover',
    ],
    highlighted: true,
  },
  {
    icon: Code2,
    name: 'Business Web App / Automation Build',
    price: 'From £7,500',
    note: 'For portals, dashboards, booking systems, internal tools, and automation workflows.',
    features: [
      'Workflow discovery',
      'Interface design',
      'Custom web application build',
      'Integrations or automation',
      'Testing, deployment, and handover documentation',
    ],
  },
  {
    icon: Compass,
    name: 'Custom Digital System',
    price: 'Custom quote',
    note: 'Typically £10,000+ depending on scope, complexity, integrations, and delivery phases.',
    features: [
      'Technical discovery',
      'Delivery roadmap',
      'Bespoke architecture',
      'Complex integrations and automation',
      'Optional ongoing support',
    ],
  },
];

const FACTORS = [
  'Number of pages, screens, or user journeys',
  'Design complexity and content requirements',
  'CMS, admin, dashboard, or portal needs',
  'Third-party integrations, APIs, and automations',
  'Data migration, copywriting, images, or brand assets',
  'Launch timeline, hosting, support, and maintenance requirements',
];

const Pricing = () => (
  <MarketingPage
    eyebrow="Pricing"
    title="Project pricing for websites, web apps, and automation"
    tagline="Clear starting points for client-service engagements. Final quotes depend on scope, content, integrations, timeline, and support needs."
  >
    <Section heading="Popular starting points">
      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {PLANS.map(({ icon: Icon, name, price, note, features, highlighted }) => (
          <Card key={name} className={highlighted ? 'ring-2 ring-indigo-500/40 relative' : ''}>
            {highlighted && (
              <div className="absolute right-5 top-5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 border border-indigo-100">
                Popular
              </div>
            )}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
              {createElement(Icon, { size: 18 })}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 pr-20">{name}</h3>
            <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">{price}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">{note}</p>
            <ul className="space-y-2.5 mb-6">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all"
            >
              Request a quote <ArrowRight size={14} />
            </Link>
          </Card>
        ))}
      </div>
      <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
        Prices are indicative starting points and exclude third-party hosting, domains, software,
        payment provider fees, licensing, or paid services unless agreed in writing.
      </p>
    </Section>

    <Section heading="What affects price">
      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {FACTORS.map((factor) => (
          <Card key={factor}>
            <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <CheckCircle2 size={17} className="text-emerald-500 mt-0.5 shrink-0" />
              <span>{factor}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>

    <Section heading="Need a custom quote?">
      <p>
        The best package depends on the project outcome you need. Share your goals, timeline, and any
        existing website or systems, and NeonNeuron will help shape the right scope.
      </p>
      <p>
        Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, call
        <a href={`tel:${CONTACT_PHONE}`}> {CONTACT_PHONE_DISPLAY}</a>, or use the
        <a href="/contact"> contact page</a>.
      </p>
      <Link
        to="/contact"
        className="not-prose inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all"
      >
        Start a Project <ArrowRight size={14} />
      </Link>
    </Section>
  </MarketingPage>
);

export default Pricing;
