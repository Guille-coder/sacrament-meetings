import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import NavLinks from '@/components/NavLinks';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sacrament Meeting Planner',
  description: 'Sacrament meeting agendas and schedules',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <html lang="en">
      <body
        className={`${geist.variable} min-h-screen bg-slate-50 text-slate-900`}
      >
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <div className="mb-4">
              <h1 className="text-2xl font-bold">
                Sacrament Meeting Planner
              </h1>

              <p className="text-sm text-slate-600">
                Piura District
              </p>

              <p className="text-sm text-slate-500">
                {currentDate}
              </p>
            </div>

            <NavLinks />
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-500">
            <p>
              Sacrament Meeting Planner
            </p>
            <p>
              Ward meeting planning application
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}