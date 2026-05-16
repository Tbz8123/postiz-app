import { LegalPageShell } from '@gitroom/frontend/components/legal/legal-page-shell';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Futurexa.ai Social Terms of Service',
  description: 'Terms of service for Futurexa.ai Social.',
};

export default function TermsPage() {
  return (
    <LegalPageShell
      title="Terms of Service"
      description="These Terms of Service govern your access to and use of Futurexa.ai Social, including scheduling tools, publishing workflows, connected platform integrations, media handling, and AI-assisted features."
      updatedAt="May 15, 2026"
    >
      <section>
        <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
        <p className="mt-3 text-white/75">
          By using Futurexa.ai Social, you agree to these Terms of Service and our Privacy
          Policy. If you do not agree, you should not use the service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">2. Your Account</h2>
        <p className="mt-3 text-white/75">
          You are responsible for maintaining the confidentiality of your account credentials
          and for all activity that occurs under your account. You must provide accurate
          information and keep it up to date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">3. Permitted Use</h2>
        <p className="mt-3 text-white/75">
          You may use the service only for lawful business or personal social publishing
          workflows. You may not use the service to violate platform rules, intellectual
          property rights, privacy rights, or applicable law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">4. Connected Accounts</h2>
        <p className="mt-3 text-white/75">
          You are responsible for ensuring that you have the right to connect and manage any
          social media accounts, pages, or business assets linked to your workspace. Platform
          access may be limited, suspended, or revoked by the underlying provider at any time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">5. User Content</h2>
        <p className="mt-3 text-white/75">
          You retain ownership of the content you create or upload. By using the service, you
          authorize us to store, process, format, and transmit your content as needed to
          provide the requested publishing and automation features.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">6. AI-Generated Content</h2>
        <p className="mt-3 text-white/75">
          AI outputs may be inaccurate, incomplete, or unsuitable for your use case. You are
          responsible for reviewing and approving any AI-generated text, media prompts, or
          automation outcomes before publishing or relying on them.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">7. Availability and Changes</h2>
        <p className="mt-3 text-white/75">
          We may modify, suspend, or discontinue features at any time. Platform integrations
          depend on third-party services and APIs, which may change without notice.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">8. Disclaimer of Warranties</h2>
        <p className="mt-3 text-white/75">
          Futurexa.ai Social is provided on an &quot;as is&quot; and &quot;as available&quot;
          basis without warranties of any kind, whether express or implied, to the fullest
          extent permitted by law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">9. Limitation of Liability</h2>
        <p className="mt-3 text-white/75">
          To the fullest extent permitted by law, Futurexa.ai Social and its operators will
          not be liable for indirect, incidental, special, consequential, or punitive damages,
          or for any loss of profits, data, goodwill, or business opportunity.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">10. Contact</h2>
        <p className="mt-3 text-white/75">
          For legal or support questions, contact{' '}
          <a className="text-[#FC69FF] hover:underline" href="mailto:mathwaksu@gmail.com">
            mathwaksu@gmail.com
          </a>.
        </p>
      </section>
    </LegalPageShell>
  );
}
