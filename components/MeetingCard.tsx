import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold text-slate-900">
        Sacrament Meeting
      </h2>

      <p className="mb-1 text-slate-600">
        <strong>Date:</strong> {meeting.date}
      </p>

      <p className="mb-1 text-slate-600">
        <strong>Type:</strong> {meeting.meetingType}
      </p>

      <p className="mb-4 text-slate-600">
        <strong>Presiding:</strong> {meeting.presiding}
      </p>

      <Link
        href={`/meetings/${meeting.id}`}
        className="inline-block rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        View Meeting
      </Link>
    </article>
  );
}