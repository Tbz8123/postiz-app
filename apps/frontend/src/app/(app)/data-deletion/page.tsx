import { LegalPageShell } from '@gitroom/frontend/components/legal/legal-page-shell';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Futurexa.ai Social Data Deletion Instructions',
  description: 'Data deletion instructions for Futurexa.ai Social.',
};

export default function DataDeletionPage() {
  return (
    <LegalPageShell
      title="Data Deletion Instructions"
      description="This page explains how users can request deletion of their Futurexa.ai Social account data, connected social integrations, and related stored information."
      updatedAt="May 15, 2026"
    >
      <section>
        <h2 className="text-xl font-semibold text-white">1. How to Request Deletion</h2>
        <p className="mt-3 text-white/75">
          To request deletion of your data, email{' '}
          <a className="text-[#FC69FF] hover:underline" href="mailto:mathwaksu@gmail.com">
            mathwaksu@gmail.com
          </a>{' '}
          from the same email address associated with your Futurexa.ai Social account.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">2. What to Include</h2>
        <p className="mt-3 text-white/75">
          Include your account email, your name, and a short description of the data or
          connected social profiles you want removed. If you are requesting deletion of a
          Facebook-connected account, mention the related Page or business account name if
          available.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">3. What We Delete</h2>
        <p className="mt-3 text-white/75">
          After verifying the request, we will remove your account data from the app,
          disconnect stored provider tokens where applicable, and delete associated workspace
          data as reasonably required, except where retention is needed for legal, billing,
          fraud-prevention, or security purposes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">4. Processing Time</h2>
        <p className="mt-3 text-white/75">
          We aim to respond within a reasonable timeframe and complete verified deletion
          requests as quickly as practical. Complex or legally sensitive requests may require
          additional review time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">5. Alternative Option</h2>
        <p className="mt-3 text-white/75">
          You may also disconnect social integrations directly within the app where available,
          but submitting an email request is the recommended way to request complete removal of
          account-related data.
        </p>
      </section>
    </LegalPageShell>
  );
}
