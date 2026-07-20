import MarketingPage, { Section } from '../../components/marketing/MarketingPage';

const LAST_UPDATED = 'July 20, 2026';
const CONTACT_EMAIL = 'hello@neonneuron.online';

const Terms = () => (
  <MarketingPage
    eyebrow="Legal"
    title="Terms of Service"
    tagline={`Last updated: ${LAST_UPDATED}. These terms govern use of the NeonNeuron website and explain how service enquiries are handled.`}
  >
    <Section heading="1. Who we are">
      <p>
        This website is operated by NeonNeuron Technologies Ltd ("NeonNeuron", "we", "us" or
        "our"), a company registered in England and Wales with company number 17074447. Our
        registered office is 82a James Carter Road, Mildenhall, IP28 7DE, United Kingdom.
      </p>
      <p>
        You can contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </Section>

    <Section heading="2. Website use">
      <p>
        You may use this website for lawful purposes only. You must not misuse the website, attempt to
        gain unauthorised access to it, interfere with its operation, introduce malicious code, scrape
        it in a way that affects availability, or use it to send spam or unlawful material.
      </p>
      <p>
        We may update, suspend, withdraw, or restrict access to any part of the website at any time.
      </p>
    </Section>

    <Section heading="3. Enquiries and proposals">
      <p>
        Sending an enquiry through the website or by email does not create a client relationship and
        does not oblige either party to proceed with a project. We may ask for more information before
        deciding whether we can help.
      </p>
      <p>
        Any services, fees, timelines, deliverables, assumptions, and responsibilities should be set
        out in a written proposal, quotation, statement of work, or other written agreement before work
        begins.
      </p>
    </Section>

    <Section heading="4. Services and client responsibilities">
      <p>
        Our services may include websites, web applications, automation, AI-enabled tools, consulting,
        maintenance, and related technology services. The exact scope will depend on what is agreed in
        writing for the specific project.
      </p>
      <p>
        Clients are responsible for providing accurate information, timely feedback, necessary access,
        content, approvals, and any materials required to deliver the agreed work. Delays in providing
        these may affect timelines.
      </p>
    </Section>

    <Section heading="5. Fees and payment">
      <p>
        Fees and payment schedules are agreed separately for each project. Unless a written agreement
        says otherwise, quoted prices may depend on the agreed scope, assumptions, and information
        available at the time of quoting.
      </p>
      <p>
        Additional work, changed requirements, or out-of-scope requests may require a revised quote,
        new milestone, or separate agreement.
      </p>
    </Section>

    <Section heading="6. Intellectual property">
      <p>
        Ownership and licence arrangements for project deliverables should be set out in the relevant
        written agreement. Unless agreed otherwise, pre-existing tools, code, methods, templates,
        know-how, and general reusable components remain owned by their original owner.
      </p>
      <p>
        You must have the right to provide any materials you send to us, including text, images,
        data, branding, and third-party content.
      </p>
    </Section>

    <Section heading="7. Third-party services">
      <p>
        Projects may use third-party services such as hosting, domain registrars, email providers,
        analytics, payment providers, APIs, or software platforms. Those services are governed by
        their own terms and may involve separate costs, accounts, and responsibilities.
      </p>
    </Section>

    <Section heading="8. Website information">
      <p>
        We aim to keep website information accurate and useful, but it is provided for general
        information only. It should not be treated as technical, legal, financial, or professional
        advice for your specific circumstances.
      </p>
    </Section>

    <Section heading="9. Liability">
      <p>
        Nothing in these terms excludes or limits liability where it would be unlawful to do so,
        including liability for death or personal injury caused by negligence, fraud, or fraudulent
        misrepresentation.
      </p>
      <p>
        To the fullest extent permitted by law, we are not responsible for indirect or consequential
        loss arising from use of this website. Project-specific liability terms should be set out in
        the relevant written agreement.
      </p>
    </Section>

    <Section heading="10. Links to other websites">
      <p>
        This website may contain links to third-party websites. We are not responsible for the content,
        security, availability, or privacy practices of third-party websites.
      </p>
    </Section>

    <Section heading="11. Changes to these terms">
      <p>
        We may update these terms from time to time. The latest version will be posted on this page
        with a revised last updated date.
      </p>
    </Section>

    <Section heading="12. Governing law">
      <p>
        These terms are governed by the laws of England and Wales. The courts of England and Wales
        will have jurisdiction, subject to any rights you may have under applicable consumer or local
        laws.
      </p>
    </Section>

    <Section heading="13. Contact">
      <p>
        Questions about these terms should be sent to
        <a href={`mailto:${CONTACT_EMAIL}`}> {CONTACT_EMAIL}</a> or through our
        <a href="/contact"> contact page</a>.
      </p>
    </Section>
  </MarketingPage>
);

export default Terms;
