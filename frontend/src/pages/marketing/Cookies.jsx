import MarketingPage, { Section } from '../../components/marketing/MarketingPage';

const LAST_UPDATED = 'July 20, 2026';

const COOKIE_TABLE = [
  {
    name: 'Strictly necessary',
    examples: 'Security tokens, CSRF protection, load-balancer routing',
    purpose: 'Required to keep the website secure and reliable. Cannot be disabled.',
    duration: 'Session or up to 1 year',
  },
  {
    name: 'Preferences',
    examples: 'Theme (light/dark), accessibility or display preferences',
    purpose: 'Remembers website choices so you don&apos;t reconfigure them on every visit.',
    duration: 'Up to 1 year',
  },
  {
    name: 'Analytics',
    examples: 'Anonymized page-view counters, feature-usage metrics',
    purpose: 'Helps us understand which pages are used so we can improve the website.',
    duration: 'Up to 13 months',
  },
];

/**
 * Cookie policy. Explains what's set, why, and how to opt out. Pairs with
 * the Privacy Policy at /privacy.
 */
const Cookies = () => (
  <MarketingPage
    eyebrow="Legal"
    title="Cookie Policy"
    tagline={`Last updated: ${LAST_UPDATED}. What we store on your device, why, and how to control it.`}
  >
    <Section heading="What are cookies?">
      <p>
        Cookies are small text files placed on your device when you visit a website. Similar
        technologies — local storage, IndexedDB, session storage — work the same way. We use the
        word "cookies" loosely to refer to all of them.
      </p>
    </Section>

    <Section heading="How we use cookies">
      <p>We group the cookies we set into three categories:</p>
      <div className="not-prose overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-700 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Examples</th>
              <th className="px-4 py-3 font-semibold">Purpose</th>
              <th className="px-4 py-3 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {COOKIE_TABLE.map((row) => (
              <tr key={row.name}>
                <td className="px-4 py-3 font-medium text-slate-900">{row.name}</td>
                <td className="px-4 py-3 text-slate-600">{row.examples}</td>
                <td className="px-4 py-3 text-slate-600" dangerouslySetInnerHTML={{ __html: row.purpose }} />
                <td className="px-4 py-3 text-slate-600">{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    <Section heading="Third parties">
      <p>
        We use a small number of trusted vendors that may set their own cookies on your device,
        including:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Hosting and security providers</strong> — for delivering the website and protecting it from misuse.</li>
        <li><strong>Plausible / similar privacy-friendly analytics</strong> — for aggregated usage
          metrics if analytics are enabled. No personal data is sent to third parties for advertising.</li>
      </ul>
      <p>
        We do not use advertising or cross-site tracking cookies, and we do not sell data to
        third-party advertisers.
      </p>
    </Section>

    <Section heading="Managing your preferences">
      <p>
        You can control cookies through your browser settings — most browsers let you block all
        cookies, accept only first-party cookies, or delete existing ones. Note that blocking
        strictly-necessary cookies may prevent parts of the website from working correctly.
      </p>
      <p>
        If you&apos;re in a region that requires consent for non-essential cookies (e.g. the EU/UK
        under GDPR), the website should offer an appropriate Accept / Reject choice before
        non-essential cookies are used. You can also manage cookies through your browser settings.
      </p>
    </Section>

    <Section heading="Updates">
      <p>
        We&apos;ll update this page if our cookie practices change. The latest version will be posted
        here with a revised last updated date.
      </p>
    </Section>

    <Section heading="Questions">
      <p>
        Email <a href="mailto:hello@neonneuron.online">hello@neonneuron.online</a> or use our
        <a href="/contact"> contact form</a>. Our full <a href="/privacy">Privacy Policy</a> covers
        what we do with the data these cookies collect.
      </p>
    </Section>
  </MarketingPage>
);

export default Cookies;
