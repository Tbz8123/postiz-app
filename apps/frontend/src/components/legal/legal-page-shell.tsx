import Link from 'next/link';
import { ReactNode } from 'react';

export function LegalPageShell(props: {
  title: string;
  description: string;
  updatedAt: string;
  children: ReactNode;
}) {
  const { title, description, updatedAt, children } = props;

  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white px-4 py-10 sm:px-6">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href="/auth"
          className="inline-flex items-center text-sm text-[#FC69FF] hover:underline"
        >
          Back to Futurexa.ai Social
        </Link>
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#1A1919] p-6 sm:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Futurexa.ai Social
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
            {description}
          </p>
          <p className="mt-3 text-xs text-white/45">Last updated: {updatedAt}</p>
          <div className="mt-8 space-y-8 text-sm leading-7 text-white/85 sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
