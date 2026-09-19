import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  return (
    <article className="space-y-8">
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Sacrament Meeting
        </h1>

        <p className="mt-2 text-slate-600">
          Date: {meeting.date}
        </p>

        <p className="text-slate-600">
          Meeting type: {meeting.meetingType}
        </p>

        <p className="text-slate-600">
          Presiding: {meeting.presiding}
        </p>

        <p className="text-slate-600">
          Conducting: {meeting.conducting}
        </p>
      </header>

      {meeting.announcements &&
        meeting.announcements.length > 0 && (
          <section>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              Announcements
            </h2>

            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {meeting.announcements.map((announcement) => (
                <li key={announcement}>{announcement}</li>
              ))}
            </ul>
          </section>
        )}

      <section>
        <h2 className="mb-3 text-xl font-semibold text-slate-900">
          Opening
        </h2>

        <p className="text-slate-700">
          <strong>Hymn:</strong> #{meeting.openingHymn.number} —{' '}
          {meeting.openingHymn.title}
        </p>

        <p className="text-slate-700">
          <strong>Prayer:</strong> {meeting.openingPrayer}
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold text-slate-900">
          Ward Business
        </h2>

        {meeting.wardBusiness.length > 0 ? (
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            {meeting.wardBusiness.map((item) => (
              <li key={item.description}>
                {item.description}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-600">No ward business.</p>
        )}

        <p className="mt-3 text-slate-700">
          <strong>Stake Business:</strong>{' '}
          {meeting.stakeBusiness ? 'Yes' : 'No'}
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold text-slate-900">
          Sacrament
        </h2>

        <p className="text-slate-700">
          <strong>Hymn:</strong> #{meeting.sacramentHymn.number} —{' '}
          {meeting.sacramentHymn.title}
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold text-slate-900">
          Speakers and Musical Numbers
        </h2>

        <div className="space-y-4">
          {meeting.speakers.map((speaker, index) => (
            <div
              key={`${speaker.name}-${index}`}
              className="rounded-md border border-slate-200 p-4"
            >
              <p className="font-semibold text-slate-900">
                {speaker.name}
              </p>

              <p className="text-sm text-slate-600">
                {speaker.type === 'speaker'
                  ? `Topic: ${speaker.topic}`
                  : 'Musical Number'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold text-slate-900">
          Closing
        </h2>

        <p className="text-slate-700">
          <strong>Hymn:</strong> #{meeting.closingHymn.number} —{' '}
          {meeting.closingHymn.title}
        </p>

        <p className="text-slate-700">
          <strong>Prayer:</strong> {meeting.closingPrayer}
        </p>
      </section>
    </article>
  );
}