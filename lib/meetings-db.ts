import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    announcements: ['Ward temple night: May 10'],
    openingHymn: {
      number: 2,
      title: 'The Spirit of God',
    },
    openingPrayer: 'Sister Williams',
    wardBusiness: [
      {
        description: 'Sustaining of new Primary president',
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: 'In Remembrance of Thy Suffering',
    },
    speakers: [
      {
        name: 'Sister Brown',
        topic: 'Faith in Jesus Christ',
        type: 'speaker',
      },
      {
        name: 'Youth Choir',
        topic: '',
        type: 'musical-number',
      },
    ],
    closingHymn: {
      number: 31,
      title: 'O God, Our Help in Ages Past',
    },
    closingPrayer: 'Brother Davis',
  },

  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Sister Johnson',
    announcements: ['Ward activity: May 15'],
    openingHymn: {
      number: 85,
      title: 'How Firm a Foundation',
    },
    openingPrayer: 'Brother Miller',
    wardBusiness: [
      {
        description: 'Sustaining of new Sunday School teacher',
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 185,
      title: 'Reverently and Meekly Now',
    },
    speakers: [
      {
        name: 'Brother Anderson',
        topic: 'Following Jesus Christ',
        type: 'speaker',
      },
      {
        name: 'Sister Garcia',
        topic: 'Service in the Church',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 100,
      title: 'Nearer, Dear Savior, to Thee',
    },
    closingPrayer: 'Sister Taylor',
  },

  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: {
      number: 3,
      title: 'Now We Sing Our Praise',
    },
    openingPrayer: 'Sister Williams',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: 'In Remembrance of Thy Suffering',
    },
    speakers: [],
    closingHymn: {
      number: 227,
      title: 'There Is Sunshine in My Soul Today',
    },
    closingPrayer: 'Brother Davis',
  },

  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'stake',
    presiding: 'Stake President Clark',
    conducting: 'Brother Wilson',
    announcements: ['Stake conference announcement'],
    openingHymn: {
      number: 1,
      title: 'The Morning Breaks',
    },
    openingPrayer: 'Sister Martinez',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 181,
      title: 'Jesus of Nazareth, Savior and King',
    },
    speakers: [
      {
        name: 'President Clark',
        topic: 'Building Faith in Jesus Christ',
        type: 'speaker',
      },
      {
        name: 'Stake Choir',
        topic: '',
        type: 'musical-number',
      },
    ],
    closingHymn: {
      number: 85,
      title: 'How Firm a Foundation',
    },
    closingPrayer: 'Brother Wilson',
  },

  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'general',
    presiding: 'Bishop Smith',
    conducting: 'Sister Johnson',
    announcements: ['Youth activity: June 5'],
    openingHymn: {
      number: 89,
      title: 'The Lord Is My Light',
    },
    openingPrayer: 'Brother Miller',
    wardBusiness: [
      {
        description: 'Sustaining of new Relief Society teacher',
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 194,
      title: 'There Is a Green Hill Far Away',
    },
    speakers: [
      {
        name: 'Sister Brown',
        topic: 'The Importance of Prayer',
        type: 'speaker',
      },
      {
        name: 'Brother Anderson',
        topic: 'Strengthening Our Families',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 219,
      title: 'Because I Have Been Given Much',
    },
    closingPrayer: 'Sister Taylor',
  },
];

export function getMeetings(
  date?: string | null,
): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(
  id: number,
): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}