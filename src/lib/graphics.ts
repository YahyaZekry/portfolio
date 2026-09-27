import { h } from './render';
import { profile } from '../data/profile';

const colors = {
  bg: '#0a0a0b',
  heading: '#ededf0',
  body: '#a6a6ad',
  muted: '#86868f',
  accent: '#5eead4',
  pill: 'rgba(94, 234, 212, 0.1)',
};

export function monogram({ rounded }: { rounded: boolean }) {
  return h(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.bg,
      borderRadius: rounded ? '22%' : 0,
      color: colors.accent,
      fontSize: 240,
      fontWeight: 700,
      letterSpacing: -12,
    },
    profile.name
      .split(' ')
      .map((part) => part[0])
      .join(''),
  );
}

export function ogCard(host: string) {
  return h(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 80,
      backgroundColor: colors.bg,
      backgroundImage: 'radial-gradient(circle at 88% 12%, rgba(94, 234, 212, 0.18), rgba(10, 10, 11, 0) 55%)',
      fontFamily: 'Inter',
    },
    [
      h('div', { display: 'flex', flexDirection: 'column' }, [
        h('div', { fontSize: 88, fontWeight: 700, letterSpacing: -2.5, color: colors.heading }, profile.name),
        h(
          'div',
          { marginTop: 16, fontSize: 40, fontWeight: 500, letterSpacing: -1, color: colors.heading },
          profile.title,
        ),
        h('div', { marginTop: 28, maxWidth: 820, fontSize: 30, lineHeight: 1.45, color: colors.body }, profile.tagline),
      ]),
      h('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, [
        h(
          'div',
          { display: 'flex' },
          profile.ogTags.map((pill) =>
            h(
              'div',
              {
                marginRight: 14,
                padding: '10px 24px',
                borderRadius: 999,
                backgroundColor: colors.pill,
                color: colors.accent,
                fontSize: 24,
                fontWeight: 500,
              },
              pill,
            ),
          ),
        ),
        h('div', { fontSize: 24, fontWeight: 500, color: colors.muted }, host),
      ]),
    ],
  );
}
