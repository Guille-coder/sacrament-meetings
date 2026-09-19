import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Sacrament Meeting Planner
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Plan and review sacrament meeting agendas
            in one place.
          </p>

          <Link
            href="/meetings"
            className="mt-6 inline-block rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View Meetings
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg">
          <Image
            src="/meeting-planner.jpg"
            alt="Sacrament meeting planning"
            width={800}
            height={500}
            className="h-auto w-full"
          />
        </div>
      </section>
    </div>
  );
}