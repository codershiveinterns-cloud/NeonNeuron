import { createElement } from 'react';
import MarketingPage, { Section, Card } from '../../components/marketing/MarketingPage';
import { Handshake, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';

const VALUES = [
  {
    icon: Lightbulb,
    title: 'Clarity before code',
    body: 'Good delivery starts with understanding the business problem, constraints, users, and priorities.',
  },
  {
    icon: ShieldCheck,
    title: 'Build for trust',
    body: 'Websites and systems should be dependable, maintainable, secure, and clear enough for clients to use confidently.',
  },
  {
    icon: Sparkles,
    title: 'Useful technology',
    body: 'We use modern tools, automation, and AI where they solve real problems — not where they add noise.',
  },
  {
    icon: Handshake,
    title: 'Straightforward partnerships',
    body: 'We keep communication practical, explain trade-offs clearly, and focus on what helps the project move forward.',
  },
];

const About = () => (
  <MarketingPage
    eyebrow="About"
    title="A UK technology partner for practical digital systems"
    tagline="NeonNeuron Technologies Ltd helps businesses plan, build, and maintain websites, web applications, automation, and AI-enabled tools."
  >
    <Section heading="What NeonNeuron does">
      <p>
        NeonNeuron is a client-services technology company. We work with businesses that need a
        clearer website, a custom web application, a better internal workflow, or a technical partner
        who can turn an idea into a working digital system.
      </p>
      <p>
        Our work can include discovery, scoping, interface design, development, integrations,
        automation, launch support, and ongoing maintenance. Each engagement is shaped around the
        client&apos;s goals rather than a fixed software package.
      </p>
    </Section>

    <Section heading="What we believe">
      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {VALUES.map(({ icon: Icon, title, body }) => (
          <Card key={title}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
              {createElement(Icon, { size: 18 })}
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{body}</p>
          </Card>
        ))}
      </div>
    </Section>

    <Section heading="Company details">
      <p>
        NeonNeuron Technologies Ltd is registered in England and Wales, Company No. 17074447. The
        registered office is 82a James Carter Road, Mildenhall, IP28 7DE, United Kingdom.
      </p>
    </Section>

    <Section heading="Get in touch">
      <p>
        If you have a project, system, or workflow you want to improve, email
        <a href="mailto:hello@neonneuron.online"> hello@neonneuron.online</a> or use our
        <a href="/contact"> contact page</a>.
      </p>
    </Section>
  </MarketingPage>
);

export default About;
