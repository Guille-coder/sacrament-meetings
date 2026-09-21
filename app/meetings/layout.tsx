import Link from 'next/link';

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="mb-8 border-b border-slate-200 pb-4">
        <nav aria-label="Meetings navigation">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/meetings"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              All Meetings
            </Link>

            <Link
              href="/meetings/current"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              Current Meeting
            </Link>
          </div>
        </nav>
      </div>

      {children}
    </section>
  );
}