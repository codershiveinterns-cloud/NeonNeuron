import { createElement } from 'react';
import MarketingPage, { Section, Card } from '../../components/marketing/MarketingPage';
import { ArrowRight, FileSearch, ListChecks, Target, Wrench } from 'lucide-react';

const STRUCTURE = [
  {
    icon: Target,
    title: 'Challenge',
    body: 'What the client needed to improve, build, simplify, or automate.',
  },
  {
    icon: ListChecks,
    title: 'Scope',
    body: 'The agreed services, priorities, constraints, and delivery plan.',
  },
  {
    icon: Wrench,
    title: 'Solution',
    body: 'What was designed, developed, integrated, launched, or supported.',
  },
  {
    icon: FileSearch,
    title: 'Outcome',
    body: 'Only approved, accurate outcomes — no invented metrics or testimonials.',
  },
];

const CaseStudies = () => (
  <MarketingPage
    eyebrow="Case Studies"
    title="Detailed case studies are being prepared"
    tagline="NeonNeuron will publish case studies when the underlying project information has been approved for public use. Until then, no client names, invoice details, or outcomes are being invented."
  >
    <Section heading="How case studies will be written">
      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {STRUCTURE.map(({ icon: Icon, title, body }) => (
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

    <Section heading="What we can discuss privately">
      <p>
        Public case studies require accurate project details and permission to publish. If you are
        evaluating NeonNeuron for similar work, contact us and describe what you are trying to build,
        improve, or automate. We can then talk through relevant experience at the right level of detail.
      </p>
      <p>
        Email <a href="mailto:hello@neonneuron.online">hello@neonneuron.online</a> or send an enquiry
        through the contact page.
      </p>
      <a href="/contact" className="not-prose inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all">
        Contact us <ArrowRight size={14} />
      </a>
    </Section>
  </MarketingPage>
);

export default CaseStudies;
