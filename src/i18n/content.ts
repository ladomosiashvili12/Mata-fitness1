import { images } from '@/data';
import type { Package } from '@/data';
import { translations, type Lang } from './translations';

export type Trainer = {
  name: string;
  role: string;
  image: string;
};

export type ScheduleRow = {
  day: string;
  time: string;
  title: string;
  trainer: string;
};

export type LocalizedContent = {
  packages: Package[];
  trainers: Trainer[];
  schedule: ScheduleRow[];
};

// Trainer names are transliterated (not translated) for the English version,
// per standard localization practice — the people and business info are unchanged.
const trainerNames = {
  ka: { nini: 'ნინი გელაშვილი', giorgi: 'გიორგი მაისურაძე', ana: 'ანა ბერიძე' },
  en: { nini: 'Nini Gelashvili', giorgi: 'Giorgi Maisuradze', ana: 'Ana Beridze' },
};

function buildContent(lang: Lang): LocalizedContent {
  const t = translations[lang];
  const names = trainerNames[lang];

  const packages: Package[] = [
    {
      name: 'START',
      eyebrow: t.pricing.packages.start.eyebrow,
      price: 15,
      description: t.pricing.packages.start.description,
      features: t.pricing.packages.start.features,
    },
    {
      name: 'MOTION',
      eyebrow: t.pricing.packages.motion.eyebrow,
      price: 119,
      description: t.pricing.packages.motion.description,
      features: t.pricing.packages.motion.features,
      featured: true,
    },
    {
      name: 'UNLIMITED',
      eyebrow: t.pricing.packages.unlimited.eyebrow,
      price: 169,
      description: t.pricing.packages.unlimited.description,
      features: t.pricing.packages.unlimited.features,
    },
  ];

  const trainers: Trainer[] = [
    { name: names.nini, role: t.trainers.roles.functional, image: images.functional },
    { name: names.giorgi, role: t.trainers.roles.strength, image: images.gym },
    { name: names.ana, role: t.trainers.roles.personal, image: images.training },
  ];

  const schedule: ScheduleRow[] = [
    { day: t.schedule.days.monday, time: '19:00', title: 'Functional Workout', trainer: names.ana },
    { day: t.schedule.days.tuesday, time: '18:30', title: 'Strength & Conditioning', trainer: names.giorgi },
    { day: t.schedule.days.wednesday, time: '19:00', title: 'Functional Workout', trainer: names.ana },
    { day: t.schedule.days.thursday, time: '18:30', title: 'Mobility & Core', trainer: names.nini },
    { day: t.schedule.days.friday, time: '19:00', title: 'Full Body Burn', trainer: names.giorgi },
  ];

  return { packages, trainers, schedule };
}

export const contentByLang: Record<Lang, LocalizedContent> = {
  ka: buildContent('ka'),
  en: buildContent('en'),
};
