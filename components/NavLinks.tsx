'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/meetings', label: 'Meetings' },
  { href: '/meetings/current', label: 'Current Meeting' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-wrap gap-4">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href === '/meetings' &&
              pathname.startsWith('/meetings/'));

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-md px-3 py-2 font-medium ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}