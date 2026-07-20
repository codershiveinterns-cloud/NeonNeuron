import { createElement } from 'react';
import MarketingPage, { Section, Card } from '../../components/marketing/MarketingPage';
import { ArrowRight, Bot, CheckCircle2, Code2, Cog, Globe2, LifeBuoy, ShoppingCart } from 'lucide-react';

const SERVICES = [
  {
    icon: Globe2,
    title: 'Web Design & Development',
    body: 'Modern, responsive websites that present your business clearly, load quickly, and make it easy for visitors to enquire.',
    deliverables: ['Company websites', 'Landing pages', 'Content structure', 'Performance-focused builds'],
  },
  {
    icon: Code2,
    title: 'Custom Web Applications',
    body: 'Bespoke web systems for workflows that off-the-shelf tools cannot support cleanly.',
    deliverables: ['Client portals', 'Dashboards', 'Booking systems', 'Operational tools'],
  },
  {
    icon: Cog,
    title: 'Business Automation',
    body: 'Practical automation that reduces repeated admin, connects systems, and gives teams more reliable processes.',
    deliverables: ['Workflow automation', 'Data capture', 'System integrations', 'Internal reporting'],
  },
  {
    icon: Bot,
    title: 'AI-Enabled Tools',
    body: 'AI features added where they make work faster or clearer, not as a gimmick.',
    deliverables: ['Search and summarisation', 'Drafting assistants', 'Knowledge tools', 'Triage workflows'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Booking Systems',
    body: 'Customer-facing systems that help people buy, book, request, or manage services online.',
    deliverables: ['Checkout flows', 'Booking journeys', 'Customer notifications', 'Admin views'],
  },
  {
    icon: LifeBuoy,
    title: 'Maintenance & Support',
    body: 'Ongoing technical care for websites and applications after launch.',
    deliverables: ['Updates and fixes', 'Monitoring', 'Small improvements', 'Technical support'],
  },
];

const PROCESS = [
  'Understand your business goals, current tools, and constraints.',
  'Define a clear scope with priorities, milestones, and practical next steps.',
  'Design and build the solution in focused stages with transparent communication.',
  'Launch carefully, hand over clearly, and support improvements after release.',
];

const CONTACT_PHONE = '+447898132784';
const CONTACT_PHONE_DISPLAY = '+44 7898 132784';

const Services = () => (
  <MarketingPage
    eyebrow="Services"
    title="Client services for websites, web apps, and automation"
    tagline="NeonNeuron Technologies Ltd helps businesses plan, build, and maintain practical digital systems that support real operations."
  >
    <Section heading="What we can help with">
      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {SERVICES.map(({ icon: Icon, title, body, deliverables }) => (
          <Card key={title}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
              {createElement(Icon, { size: 18 })}
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{body}</p>
            <ul className="space-y-2">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>

    <Section heading="How engagements usually work">
      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {PROCESS.map((step, index) => (
          <Card key={step}>
            <div className="text-sm font-bold text-indigo-600 mb-2">Step {index + 1}</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{step}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section heading="Start with a conversation">
      <p>
        If you know what you need, we can help scope the right build. If you only know what is not
        working yet, we can help turn that into a practical plan.
      </p>
      <p>
        Email <a href="mailto:hello@neonneuron.online">hello@neonneuron.online</a>, call
        <a href={`tel:${CONTACT_PHONE}`}> {CONTACT_PHONE_DISPLAY}</a>, or use the
        <a href="/contact"> contact page</a> to start a project enquiry.
      </p>
      <a href="/contact" className="not-prose inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all">
        Start a Project <ArrowRight size={14} />
      </a>
    </Section>
  </MarketingPage>
);

export default Services;
