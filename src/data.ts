// Package/trainer/schedule content is now localized — see src/i18n/content.ts.
// This file only holds language-independent shared assets and shared types.

export type Package = {
  name: string;
  eyebrow: string;
  price: number;
  description: string;
  features: string[];
  featured?: boolean;
};

export const images = {
  logo: '/311708379_103611952548290_4146217057187983306_n.jpg',
  gym: '/images_(1).jpg',
  training: '/images_(2).jpg',
  functional: '/images_(3).jpg',
  exterior: '/images_(4).jpg',
};
