import Link from 'next/link';
import MeetingDetail from '@/components/MeetingDetail';
import { getMeetingById } from '@/lib/meetings-db';

interface MeetingPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MeetingPage({
  params,
}: MeetingPageProps) {
  const { id } = await params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId)) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Invalid meeting ID
        </h1>

        <Link
          href="/meetings"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Back to meetings
        </Link>
      </div>
    );
  }

  const meeting = getMeetingById(meetingId);

  if (!meeting) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Meeting not found
        </h1>

        <p className="mt-2 text-slate-600">
          No meeting exists with ID {meetingId}.
        </p>

        <Link
          href="/meetings"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Back to meetings
        </Link>
      </div>
    );
  }

  return <MeetingDetail meeting={meeting} />;
}


