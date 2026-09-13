// Centralized UI copy for every supported language.
// Add a new language by adding another key to `translations` that satisfies `Translations`.

export type Lang = 'ka' | 'en';

export type Translations = {
  nav: {
    about: string;
    programs: string;
    trainers: string;
    schedule: string;
    pricing: string;
    contact: string;
    join: string;
    brandAria: string;
    menuOpenAria: string;
    menuCloseAria: string;
  };
  footer: {
    tagline: string;
    instagramAria: string;
    copyright: string;
  };
  home: {
    kicker: string;
    h1Line1: string;
    h1Emphasis: string;
    h1Suffix: string;
    heroCopyLine1: string;
    heroCopyLine2: string;
    ctaStart: string;
    ctaLearnMore: string;
    estLabel: string;
    estYear: string;
    scrollHint: string;
    introLabel: string;
    introH2Line1: string;
    introH2Emphasis: string;
    introCopy: string;
    introLink: string;
    stats: {
      members: string;
      access: string;
      classes: string;
      trainers: string;
    };
    programsLabel: string;
    programsH2Line1: string;
    programsH2Emphasis: string;
    programsIntro: string;
    programCards: {
      personal: { title1: string; title2: string; copy: string; link: string };
      group: { title1: string; title2: string; copy: string; link: string };
      progress: { title1: string; title2: string; copy: string; link: string };
    };
    gallery: {
      label: string;
      h2Line1: string;
      h2Emphasis: string;
      copy: string;
    };
    alt: {
      gym: string;
      exterior: string;
      functional: string;
      personalTraining: string;
      functionalTraining: string;
    };
  };
  about: {
    label: string;
    h1Line1: string;
    h1Emphasis: string;
    copy1: string;
    copy2: string;
    link: string;
  };
  programs: {
    label: string;
    h1Line1: string;
    h1Emphasis: string;
    copy: string;
  };
  trainers: {
    label: string;
    h1Line1: string;
    h1Emphasis: string;
    contactCta: string;
    roles: {
      functional: string;
      strength: string;
      personal: string;
    };
  };
  schedule: {
    label: string;
    h1Line1: string;
    h1Emphasis: string;
    noteLine1: string;
    noteLine2: string;
    days: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
    };
    bookAria: (title: string) => string;
  };
  pricing: {
    label: string;
    h1Line1: string;
    h1Emphasis: string;
    copyLine1: string;
    copyLine2: string;
    popularLabel: string;
    perMonth: string;
    chooseButton: string;
    packages: {
      start: { eyebrow: string; description: string; features: [string, string, string] };
      motion: { eyebrow: string; description: string; features: [string, string, string] };
      unlimited: { eyebrow: string; description: string; features: [string, string, string] };
    };
  };
  contact: {
    label: string;
    h1Line1: string;
    h1Emphasis: string;
    copy: string;
    address: { label: string; value: string };
    call: { label: string; value: string };
    hours: { label: string; value: string };
  };
  checkout: {
    step: string;
    h2Line1: string;
    h2Emphasis: string;
    demoNotice: string;
    firstName: string;
    firstNamePlaceholder: string;
    lastName: string;
    lastNamePlaceholder: string;
    email: string;
    phone: string;
    phonePlaceholder: string;
    cardSectionLabel: string;
    cardNumber: string;
    expiry: string;
    continueButton: string;
    closeAria: string;
    success: {
      kicker: string;
      h2Line1: string;
      h2Emphasis: string;
      thanks: (pkgName: string) => string;
      closeButton: string;
    };
  };
  seo: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    programs: { title: string; description: string };
    trainers: { title: string; description: string };
    schedule: { title: string; description: string };
    pricing: { title: string; description: string };
    contact: { title: string; description: string };
  };
};

const ka: Translations = {
  nav: {
    about: 'ჩვენ შესახებ',
    programs: 'პროგრამები',
    trainers: 'ტრენერები',
    schedule: 'განრიგი',
    pricing: 'ფასები',
    contact: 'კონტაქტი',
    join: 'შემოგვიერთდი',
    brandAria: 'Mata Fitness მთავარი გვერდი',
    menuOpenAria: 'მენიუს გახსნა',
    menuCloseAria: 'მენიუს დახურვა',
  },
  footer: {
    tagline: 'მოძრაობა არის ცხოვრება.',
    instagramAria: 'Instagram',
    copyright: '© 2024 MATA FITNESS',
  },
  home: {
    kicker: 'MATA FITNESS • 2024',
    h1Line1: 'გახდი შენი',
    h1Emphasis: 'საუკეთესო',
    h1Suffix: 'ვერსია.',
    heroCopyLine1: 'სივრცე, სადაც შენი ძალა იზრდება.',
    heroCopyLine2: 'შენი ტემპით. შენი წესებით.',
    ctaStart: 'დაიწყე დღეს',
    ctaLearnMore: 'გაიგე მეტი',
    estLabel: 'EST.',
    estYear: '2024',
    scrollHint: 'ჩასქროლე ქვემოთ',
    introLabel: 'ჩვენ შესახებ',
    introH2Line1: 'მოძრაობა არის',
    introH2Emphasis: 'ცხოვრება.',
    introCopy:
      'Mata Fitness-ში ვქმნით გარემოს, სადაც ვარჯიში მხოლოდ რუტინა არ არის. აქ შენ იპოვი ენერგიას, სწორ ადამიანებს და მოტივაციას, რომელიც ყოველდღე წინ გიბიძგებს.',
    introLink: 'აღმოაჩინე ჩვენი პროგრამები',
    stats: {
      members: 'აქტიური წევრი',
      access: 'ენერგიის სივრცე',
      classes: 'ჯგუფური კლასი',
      trainers: 'პროფესიონალი ტრენერი',
    },
    programsLabel: 'პროგრამები',
    programsH2Line1: 'ვარჯიში შენს',
    programsH2Emphasis: 'რითმში.',
    programsIntro: 'იქნება ეს პერსონალური ყურადღება თუ გუნდური ენერგია — შენს მიზნამდე მისასვლელი გზა აქ იწყება.',
    programCards: {
      personal: {
        title1: 'პერსონალური',
        title2: 'ტრენინგი',
        copy: 'ერთი-ერთზე ყურადღება. მაქსიმალური შედეგი.',
        link: 'გაიგე მეტი',
      },
      group: {
        title1: 'ჯგუფური',
        title2: 'ვარჯიში',
        copy: 'ერთად უფრო ძლიერები ვართ.',
        link: 'განრიგის ნახვა',
      },
      progress: {
        title1: 'შენი',
        title2: 'პროგრესი',
        copy: 'გეგმა, რომელიც შენზეა მორგებული. შედეგი, რომელსაც დაინახავ.',
        link: 'დაიწყე ახლა',
      },
    },
    gallery: {
      label: 'ჩვენი სივრცე',
      h2Line1: 'შენი ახალი',
      h2Emphasis: 'სახლი.',
      copy: 'ყველაფერი, რაც გჭირდება შენი საუკეთესო ფორმისთვის.',
    },
    alt: {
      gym: 'Mata Fitness სავარჯიშო დარბაზი',
      exterior: 'Mata Fitness შენობა',
      functional: 'ვარჯიშის სივრცე',
      personalTraining: 'პერსონალური ვარჯიში',
      functionalTraining: 'ფუნქციონალური ვარჯიში',
    },
  },
  about: {
    label: '01 / ჩვენ შესახებ',
    h1Line1: 'მოძრაობა არის',
    h1Emphasis: 'ცხოვრება.',
    copy1:
      'Mata Fitness-ში ვქმნით გარემოს, სადაც ვარჯიში მხოლოდ რუტინა არ არის. აქ შენ იპოვი ენერგიას, სწორ ადამიანებს და მოტივაციას, რომელიც ყოველდღე წინ გიბიძგებს.',
    copy2:
      'ჩვენი მისია მარტივია — დაგეხმაროთ იპოვოთ ძალა, რომელიც უკვე გაქვს, და ააშენოთ ჩვევები, რომლებიც სამუდამოდ დარჩება.',
    link: 'აღმოაჩინე ჩვენი პროგრამები',
  },
  programs: {
    label: '02 / პროგრამები',
    h1Line1: 'ვარჯიში შენს',
    h1Emphasis: 'რითმში.',
    copy: 'იქნება ეს პერსონალური ყურადღება თუ გუნდური ენერგია — შენს მიზნამდე მისასვლელი გზა აქ იწყება.',
  },
  trainers: {
    label: '03 / შენი გუნდი',
    h1Line1: 'შეხვდი',
    h1Emphasis: 'გუნდს.',
    contactCta: 'დაგვიკავშირდი',
    roles: {
      functional: 'ფუნქციონალური ტრენერი',
      strength: 'ძალისა და ფიტნესის მწვრთნელი',
      personal: 'პერსონალური ტრენერი',
    },
  },
  schedule: {
    label: '04 / ჯგუფური ვარჯიშები',
    h1Line1: 'იპოვე შენი',
    h1Emphasis: 'რითმი.',
    noteLine1: 'ჯგუფური ვარჯიშები შედის',
    noteLine2: 'ყველა აბონემენტში.',
    days: {
      monday: 'ორშაბათი',
      tuesday: 'სამშაბათი',
      wednesday: 'ოთხშაბათი',
      thursday: 'ხუთშაბათი',
      friday: 'პარასკევი',
    },
    bookAria: (title) => `${title}-ის დაჯავშნა`,
  },
  pricing: {
    label: '05 / წევრობა',
    h1Line1: 'აირჩიე შენი',
    h1Emphasis: 'სტარტი.',
    copyLine1: 'არ არსებობს იდეალური მომენტი დასაწყებად.',
    copyLine2: 'არსებობს მხოლოდ დღეს.',
    popularLabel: 'ყველაზე პოპულარული',
    perMonth: '/ თვე',
    chooseButton: 'არჩევა',
    packages: {
      start: {
        eyebrow: 'ერთჯერადი ვიზიტი',
        description: 'სწრაფი სტარტი შენი ახალი რუტინისთვის.',
        features: ['დარბაზის სრული გამოყენება', 'ჯგუფურ ვარჯიშებზე დასწრება', 'ერთდღიანი ულიმიტო ვიზიტი'],
      },
      motion: {
        eyebrow: 'თვიური აბონემენტი',
        description: 'მეტი მოძრაობა, მეტი ენერგია, ყოველდღე.',
        features: ['დარბაზი 07:00–15:00', 'ჯგუფური ვარჯიშები', 'პროგრესის საწყისი შეფასება'],
      },
      unlimited: {
        eyebrow: 'სრული წვდომა',
        description: 'როცა შედეგი არჩევანი კი არა, ცხოვრების წესია.',
        features: ['დარბაზი მთელი დღის განმავლობაში', 'ყველა ჯგუფური ვარჯიში', 'სავარჯიშო გეგმის კონსულტაცია'],
      },
    },
  },
  contact: {
    label: '07 / გვეწვიე',
    h1Line1: 'მზად ხარ',
    h1Emphasis: 'დაიწყო?',
    copy: 'პირველი ნაბიჯი მარტივია. მოდი, დაგვიკავშირდი ან პირდაპირ აირჩიე შენი პაკეტი ფასების გვერდზე.',
    address: { label: 'მისამართი', value: 'თბილისი, საქართველო' },
    call: { label: 'დაგვირეკე', value: '+995 555 00 00 00' },
    hours: { label: 'სამუშაო საათები', value: 'ყოველდღე • 07:00 — 23:00' },
  },
  checkout: {
    step: 'შეძენა / 01',
    h2Line1: 'დაიწყე',
    h2Emphasis: 'დღეს.',
    demoNotice: 'ეს არის დემო-გადახდის ფორმა. თანხა არ ჩამოგეჭრება.',
    firstName: 'სახელი',
    firstNamePlaceholder: 'გიორგი',
    lastName: 'გვარი',
    lastNamePlaceholder: 'მაისურაძე',
    email: 'ელ-ფოსტა',
    phone: 'ტელეფონი',
    phonePlaceholder: '+995 5XX XX XX XX',
    cardSectionLabel: 'ბარათის მონაცემები',
    cardNumber: 'ბარათის ნომერი',
    expiry: 'ვადა',
    continueButton: 'გაგრძელება',
    closeAria: 'დახურვა',
    success: {
      kicker: 'შეკვეთა მიღებულია',
      h2Line1: 'შენი სტარტი',
      h2Emphasis: 'დადასტურებულია.',
      thanks: (pkgName) => `მადლობა, ${pkgName} პაკეტის არჩევისთვის. ჩვენი გუნდი მალე დაგიკავშირდება დასადასტურებლად.`,
      closeButton: 'დახურვა',
    },
  },
  seo: {
    home: {
      title: 'Mata Fitness — მოძრაობა არის ცხოვრება',
      description: 'Mata Fitness — თანამედროვე სავარჯიშო სივრცე თბილისში. პერსონალური და ჯგუფური ვარჯიშები, პროფესიონალი ტრენერები. შემოგვიერთდი დღესვე.',
    },
    about: {
      title: 'ჩვენ შესახებ — Mata Fitness',
      description: 'გაიცანი Mata Fitness-ის მისია და ღირებულებები — სივრცე, სადაც ვარჯიში ცხოვრების წესი ხდება.',
    },
    programs: {
      title: 'პროგრამები — Mata Fitness',
      description: 'პერსონალური ტრენინგი, ჯგუფური ვარჯიშები და პროგრესზე მორგებული გეგმები Mata Fitness-ში.',
    },
    trainers: {
      title: 'ტრენერები — Mata Fitness',
      description: 'გაიცანი Mata Fitness-ის პროფესიონალი ტრენერების გუნდი.',
    },
    schedule: {
      title: 'განრიგი — Mata Fitness',
      description: 'ნახე Mata Fitness-ის ჯგუფური ვარჯიშების კვირის განრიგი და დაჯავშნე შენი ადგილი.',
    },
    pricing: {
      title: 'ფასები — Mata Fitness',
      description: 'აირჩიე შენთვის შესაფერისი აბონემენტი Mata Fitness-ში — ერთჯერადი ვიზიტიდან სრულ წვდომამდე.',
    },
    contact: {
      title: 'კონტაქტი — Mata Fitness',
      description: 'დაგვიკავშირდი ან გვეწვიე Mata Fitness-ში, თბილისში.',
    },
  },
};

const en: Translations = {
  nav: {
    about: 'About',
    programs: 'Programs',
    trainers: 'Trainers',
    schedule: 'Schedule',
    pricing: 'Pricing',
    contact: 'Contact',
    join: 'Join Now',
    brandAria: 'Mata Fitness home',
    menuOpenAria: 'Open menu',
    menuCloseAria: 'Close menu',
  },
  footer: {
    tagline: 'Movement is life.',
    instagramAria: 'Instagram',
    copyright: '© 2024 MATA FITNESS',
  },
  home: {
    kicker: 'MATA FITNESS • 2024',
    h1Line1: 'Become your',
    h1Emphasis: 'best',
    h1Suffix: 'version.',
    heroCopyLine1: 'A space where your strength grows.',
    heroCopyLine2: 'Your pace. Your rules.',
    ctaStart: 'Start Today',
    ctaLearnMore: 'Learn More',
    estLabel: 'EST.',
    estYear: '2024',
    scrollHint: 'Scroll Down',
    introLabel: 'About Us',
    introH2Line1: 'Movement is',
    introH2Emphasis: 'life.',
    introCopy:
      "At Mata Fitness, we build an environment where training is more than just a routine. Here you'll find the energy, the right people, and the motivation that pushes you forward every day.",
    introLink: 'Discover Our Programs',
    stats: {
      members: 'Active Members',
      access: 'Open Access',
      classes: 'Group Classes',
      trainers: 'Professional Trainers',
    },
    programsLabel: 'Programs',
    programsH2Line1: 'Train in Your',
    programsH2Emphasis: 'Rhythm.',
    programsIntro: "Whether it's personal attention or team energy — your path to your goal starts here.",
    programCards: {
      personal: {
        title1: 'Personal',
        title2: 'Training',
        copy: 'One-on-one attention. Maximum results.',
        link: 'Learn More',
      },
      group: {
        title1: 'Group',
        title2: 'Training',
        copy: 'Stronger together.',
        link: 'View Schedule',
      },
      progress: {
        title1: 'Your',
        title2: 'Progress',
        copy: "A plan built around you. Results you'll actually see.",
        link: 'Start Now',
      },
    },
    gallery: {
      label: 'Our Space',
      h2Line1: 'Your New',
      h2Emphasis: 'Home.',
      copy: 'Everything you need to be in your best shape.',
    },
    alt: {
      gym: 'Mata Fitness training hall',
      exterior: 'Mata Fitness building',
      functional: 'Training space',
      personalTraining: 'Personal training',
      functionalTraining: 'Functional training',
    },
  },
  about: {
    label: '01 / About Us',
    h1Line1: 'Movement is',
    h1Emphasis: 'life.',
    copy1:
      "At Mata Fitness, we build an environment where training is more than just a routine. Here you'll find the energy, the right people, and the motivation that pushes you forward every day.",
    copy2:
      'Our mission is simple — to help you find the strength you already have, and build habits that last a lifetime.',
    link: 'Discover Our Programs',
  },
  programs: {
    label: '02 / Programs',
    h1Line1: 'Train in Your',
    h1Emphasis: 'Rhythm.',
    copy: "Whether it's personal attention or team energy — your path to your goal starts here.",
  },
  trainers: {
    label: '03 / Our Team',
    h1Line1: 'Meet the',
    h1Emphasis: 'Team.',
    contactCta: 'Contact Us',
    roles: {
      functional: 'Functional Trainer',
      strength: 'Strength & Fitness Coach',
      personal: 'Personal Trainer',
    },
  },
  schedule: {
    label: '04 / Group Classes',
    h1Line1: 'Find Your',
    h1Emphasis: 'Rhythm.',
    noteLine1: 'Group classes are included',
    noteLine2: 'in every membership.',
    days: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
    },
    bookAria: (title) => `Book ${title}`,
  },
  pricing: {
    label: '05 / Membership',
    h1Line1: 'Choose Your',
    h1Emphasis: 'Start.',
    copyLine1: "There's no perfect moment to start.",
    copyLine2: "There's only today.",
    popularLabel: 'Most Popular',
    perMonth: '/ month',
    chooseButton: 'Choose Plan',
    packages: {
      start: {
        eyebrow: 'Single Visit',
        description: 'A quick start for your new routine.',
        features: ['Full access to the gym floor', 'Access to one group class', 'Unlimited one-day visit'],
      },
      motion: {
        eyebrow: 'Monthly Membership',
        description: 'More movement, more energy, every day.',
        features: ['Gym access 7:00 AM – 3:00 PM', 'Group classes included', 'Initial progress assessment'],
      },
      unlimited: {
        eyebrow: 'Full Access',
        description: "When results aren't a choice — they're a lifestyle.",
        features: ['All-day gym access', 'All group classes', 'Personal training plan consultation'],
      },
    },
  },
  contact: {
    label: '07 / Visit Us',
    h1Line1: 'Ready to',
    h1Emphasis: 'Get Started?',
    copy: 'The first step is simple. Reach out to us, or go straight to the pricing page and choose your package.',
    address: { label: 'Address', value: 'Tbilisi, Georgia' },
    call: { label: 'Call Us', value: '+995 555 00 00 00' },
    hours: { label: 'Working Hours', value: 'Every day • 7:00 AM – 11:00 PM' },
  },
  checkout: {
    step: 'Checkout / 01',
    h2Line1: 'Start',
    h2Emphasis: 'Today.',
    demoNotice: 'This is a demo payment form. You will not be charged.',
    firstName: 'First Name',
    firstNamePlaceholder: 'John',
    lastName: 'Last Name',
    lastNamePlaceholder: 'Smith',
    email: 'Email',
    phone: 'Phone',
    phonePlaceholder: '+995 5XX XX XX XX',
    cardSectionLabel: 'Card Details',
    cardNumber: 'Card Number',
    expiry: 'Expiry',
    continueButton: 'Continue',
    closeAria: 'Close',
    success: {
      kicker: 'Order Received',
      h2Line1: 'Your Start',
      h2Emphasis: 'Is Confirmed.',
      thanks: (pkgName) => `Thank you for choosing the ${pkgName} package. Our team will contact you shortly to confirm.`,
      closeButton: 'Close',
    },
  },
  seo: {
    home: {
      title: 'Mata Fitness — Movement Is Life',
      description: 'Mata Fitness is a modern training space in Tbilisi. Personal and group training with professional coaches. Join us today.',
    },
    about: {
      title: 'About Us — Mata Fitness',
      description: "Learn about Mata Fitness's mission and values — a space where training becomes a way of life.",
    },
    programs: {
      title: 'Programs — Mata Fitness',
      description: 'Personal training, group classes, and progress-focused plans at Mata Fitness.',
    },
    trainers: {
      title: 'Trainers — Mata Fitness',
      description: 'Meet the professional coaching team at Mata Fitness.',
    },
    schedule: {
      title: 'Schedule — Mata Fitness',
      description: "See Mata Fitness's weekly group class schedule and book your spot.",
    },
    pricing: {
      title: 'Pricing — Mata Fitness',
      description: 'Choose the membership that fits you at Mata Fitness — from a single visit to full access.',
    },
    contact: {
      title: 'Contact — Mata Fitness',
      description: 'Get in touch with or visit Mata Fitness in Tbilisi.',
    },
  },
};

export const translations: Record<Lang, Translations> = { ka, en };
