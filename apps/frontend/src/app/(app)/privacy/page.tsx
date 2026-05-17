import { LegalPageShell } from '@gitroom/frontend/components/legal/legal-page-shell';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Futurexa.ai Social Privacy Policy',
  description: 'Privacy policy for Futurexa.ai Social.',
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      description="This Privacy Policy explains how Futurexa.ai Social collects, uses, stores, and protects information when you use our website, social publishing features, connected platform integrations, and AI-assisted content tools."
      updatedAt="May 15, 2026"
    >
      <section>
        <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
        <p className="mt-3 text-white/75">
          We may collect account details such as your name, email address, company name,
          authentication identifiers, connected social account metadata, scheduled posts,
          uploaded media, and analytics data returned by the platforms you authorize.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">2. How We Use Information</h2>
        <p className="mt-3 text-white/75">
          We use this information to provide social publishing, scheduling, workspace
          management, analytics, authentication, customer support, fraud prevention, and
          AI-assisted drafting or automation features requested by you.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">3. Connected Platforms</h2>
        <p className="mt-3 text-white/75">
          When you connect services such as Facebook, Instagram, Threads, or other
          providers, we store the tokens and account metadata needed to perform the actions
          you authorize, such as listing accounts, scheduling content, publishing posts, and
          retrieving insights.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">4. AI Services</h2>
        <p className="mt-3 text-white/75">
          If you use AI features, prompts and related content may be processed by configured
          third-party AI providers in order to generate drafts, suggestions, media prompts,
          or workflow outputs. Do not submit sensitive information unless you are comfortable
          sharing it with the configured provider.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">5. Sharing of Information</h2>
        <p className="mt-3 text-white/75">
          We share information only as needed to operate the service, including with cloud
          hosting, storage, analytics, payment, authentication, AI, and connected social
          platform providers. We do not sell your personal information.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">6. Data Retention</h2>
        <p className="mt-3 text-white/75">
          We retain information for as long as your account remains active, for legitimate
          business and security purposes, or as required by law. Connected account tokens may
          be removed sooner if you disconnect the provider or request deletion.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">7. Your Rights</h2>
        <p className="mt-3 text-white/75">
          You may request access, correction, or deletion of your account information by
          contacting us at{' '}
          <a className="text-[#FC69FF] hover:underline" href="mailto:mathwaksu@gmail.com">
            mathwaksu@gmail.com
          </a>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">8. Data Deletion Instructions</h2>
        <p className="mt-3 text-white/75">
          To request deletion of your Futurexa.ai Social account data or data associated with
          a connected social platform, email{' '}
          <a className="text-[#FC69FF] hover:underline" href="mailto:mathwaksu@gmail.com">
            mathwaksu@gmail.com
          </a>{' '}
          using the subject line &quot;Data Deletion Request&quot; and include the email address
          tied to your account plus any relevant social profile identifiers. We may request
          additional information to verify the request before deletion. Once verified, we will
          delete or anonymize applicable account data within a reasonable period, except where
          retention is required for security, fraud prevention, billing, or legal compliance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">9. Security</h2>
        <p className="mt-3 text-white/75">
          We use reasonable technical and organizational measures to protect information, but
          no method of storage or transmission is guaranteed to be completely secure.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">10. Contact</h2>
        <p className="mt-3 text-white/75">
          For privacy questions, contact Futurexa.ai Social at{' '}
          <a className="text-[#FC69FF] hover:underline" href="mailto:mathwaksu@gmail.com">
            mathwaksu@gmail.com
          </a>.
        </p>
      </section>
    </LegalPageShell>
  );
}
