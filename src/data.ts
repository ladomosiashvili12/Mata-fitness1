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

export const packages: Package[] = [
  {
    name: 'START',
    eyebrow: 'ერთჯერადი ვიზიტი',
    price: 15,
    description: 'სწრაფი სტარტი შენი ახალი რუტინისთვის.',
    features: ['დარბაზის სრული გამოყენება', 'ჯგუფურ ვარჯიშებზე დასწრება', 'ერთდღიანი ულიმიტო ვიზიტი'],
  },
  {
    name: 'MOTION',
    eyebrow: 'თვიური აბონემენტი',
    price: 119,
    description: 'მეტი მოძრაობა, მეტი ენერგია, ყოველდღე.',
    features: ['დარბაზი 07:00–15:00', 'ჯგუფური ვარჯიშები', 'პროგრესის საწყისი შეფასება'],
    featured: true,
  },
  {
    name: 'UNLIMITED',
    eyebrow: 'სრული წვდომა',
    price: 169,
    description: 'როცა შედეგი არჩევანი კი არა, ცხოვრების წესია.',
    features: ['დარბაზი მთელი დღის განმავლობაში', 'ყველა ჯგუფური ვარჯიში', 'სავარჯიშო გეგმის კონსულტაცია'],
  },
];

export const trainers = [
  { name: 'ნინი გელაშვილი', role: 'ფუნქციონალური ტრენერი', image: images.functional },
  { name: 'გიორგი მაისურაძე', role: 'ძალისა და ფიტნესის მწვრთნელი', image: images.gym },
  { name: 'ანა ბერიძე', role: 'პერსონალური ტრენერი', image: images.training },
];

export const schedule: [string, string, string, string][] = [
  ['ორშაბათი', '19:00', 'Functional Workout', 'ანა ბერიძე'],
  ['სამშაბათი', '18:30', 'Strength & Conditioning', 'გიორგი მაისურაძე'],
  ['ოთხშაბათი', '19:00', 'Functional Workout', 'ანა ბერიძე'],
  ['ხუთშაბათი', '18:30', 'Mobility & Core', 'ნინი გელაშვილი'],
  ['პარასკევი', '19:00', 'Full Body Burn', 'გიორგი მაისურაძე'],
];
