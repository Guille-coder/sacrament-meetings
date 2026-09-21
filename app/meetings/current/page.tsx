import { redirect } from 'next/navigation';
import { getMeetings } from '@/lib/meetings-db';

export default function CurrentMeetingPage() {
  const meetings = getMeetings();

  if (meetings.length === 0) {
    redirect('/meetings');
  }

  const sortedMeetings = [...meetings].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  redirect(`/meetings/${sortedMeetings[0].id}`);
}