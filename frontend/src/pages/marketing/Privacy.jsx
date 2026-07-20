import MarketingPage, { Section } from '../../components/marketing/MarketingPage';

const LAST_UPDATED = 'July 20, 2026';
const CONTACT_EMAIL = 'hello@neonneuron.online';

const Privacy = () => (
  <MarketingPage
    eyebrow="Legal"
    title="Privacy Policy"
    tagline={`Last updated: ${LAST_UPDATED}. This policy explains how NeonNeuron Technologies Ltd handles personal information through this website and our client-services work.`}
  >
    <Section heading="1. Who we are">
      <p>
        This website is operated by NeonNeuron Technologies Ltd ("NeonNeuron", "we", "us" or
        "our"), a company registered in England and Wales with company number 17074447. Our
        registered office is 82a James Carter Road, Mildenhall, IP28 7DE, United Kingdom.
      </p>
      <p>
        For privacy questions or requests, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </Section>

    <Section heading="2. Information we collect">
      <p>
        <strong>Enquiry information.</strong> When you contact us, we collect the details you choose
        to provide, such as your name, email address, company name, project details, and message.
      </p>
      <p>
        <strong>Client and project information.</strong> If we work with you, we may process business
        contact details, project requirements, files, feedback, invoices, and communications needed to
        scope, deliver, support, and administer our services.
      </p>
      <p>
        <strong>Technical information.</strong> Our website and systems may receive standard technical
        data such as IP address, browser type, device information, pages viewed, timestamps, and server
        logs. This helps us keep the website reliable and secure.
      </p>
      <p>
        <strong>Cookies and similar technologies.</strong> We may use essential cookies or similar
        technologies to run the website. If analytics or optional tracking tools are added, the cookie
        information presented on the site should be updated accordingly.
      </p>
    </Section>

    <Section heading="3. How we use personal information">
      <ul className="list-disc pl-6 space-y-2">
        <li>To respond to enquiries and communicate with you about potential projects.</li>
        <li>To scope, quote, deliver, maintain, and support client work.</li>
        <li>To manage business administration, records, accounting, and legal obligations.</li>
        <li>To operate, secure, monitor, troubleshoot, and improve our website and services.</li>
        <li>To prevent misuse, fraud, spam, or security incidents.</li>
      </ul>
    </Section>

    <Section heading="4. Lawful bases under UK GDPR">
      <p>We rely on one or more lawful bases depending on the situation:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Contract:</strong> to take steps before entering into a contract and to deliver agreed services.</li>
        <li><strong>Legitimate interests:</strong> to respond to business enquiries, operate our website, improve our services, and keep systems secure.</li>
        <li><strong>Legal obligation:</strong> where we must keep records or respond to lawful requests.</li>
        <li><strong>Consent:</strong> where consent is required, such as for certain optional communications or non-essential cookies.</li>
      </ul>
    </Section>

    <Section heading="5. Sharing personal information">
      <p>
        We do not sell personal information. We may share information with trusted suppliers who help
        us run our website, email, hosting, development, project management, accounting, and security
        operations. These suppliers should only process information for the purposes we instruct.
      </p>
      <p>
        We may also share information where required by law, regulation, court order, professional
        advisers, or to protect our rights, clients, users, systems, or business.
      </p>
    </Section>

    <Section heading="6. International transfers">
      <p>
        Some technology providers may process information outside the United Kingdom. Where this
        happens, we aim to use appropriate safeguards required by UK data protection law, such as
        adequacy decisions or contractual protections.
      </p>
    </Section>

    <Section heading="7. Retention">
      <p>
        We keep personal information only for as long as needed for the purpose it was collected,
        including responding to enquiries, delivering services, maintaining business records, meeting
        legal/accounting obligations, resolving disputes, and protecting our systems.
      </p>
      <p>
        Enquiry messages that do not become active projects are normally kept only as long as needed
        to respond and manage reasonable follow-up, unless we need to keep them for a legal or business
        reason.
      </p>
    </Section>

    <Section heading="8. Security">
      <p>
        We use reasonable technical and organisational measures to protect personal information. No
        internet service is completely secure, so please avoid sending highly sensitive information
        through the contact form unless we have agreed a secure transfer method.
      </p>
    </Section>

    <Section heading="9. Your rights">
      <p>Under UK data protection law, you may have the right to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>request access to the personal information we hold about you;</li>
        <li>ask us to correct inaccurate or incomplete information;</li>
        <li>ask us to delete information in certain circumstances;</li>
        <li>object to or restrict certain processing;</li>
        <li>request a copy of information in a portable format where applicable;</li>
        <li>withdraw consent where processing is based on consent.</li>
      </ul>
      <p>
        To exercise your rights, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. You
        also have the right to complain to the UK Information Commissioner&apos;s Office at
        <a href="https://ico.org.uk/"> ico.org.uk</a>.
      </p>
    </Section>

    <Section heading="10. Changes to this policy">
      <p>
        We may update this policy from time to time. The latest version will be posted on this page
        with a revised last updated date.
      </p>
    </Section>

    <Section heading="11. Contact">
      <p>
        Questions about this policy or how we handle personal information should be sent to
        <a href={`mailto:${CONTACT_EMAIL}`}> {CONTACT_EMAIL}</a> or through our
        <a href="/contact"> contact page</a>.
      </p>
    </Section>
  </MarketingPage>
);

export default Privacy;
