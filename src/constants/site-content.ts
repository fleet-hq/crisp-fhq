// Site-specific content for the homepage and static pages.
// When white-labeling, duplicate this file per company or fetch from API.

export const siteContent = {
  company: {
    name: 'Cons Crisp Cars',
    logo: '/logos/website-logo.svg',
    monoLogo: '/logos/mono-logo.svg',
    phone: '+1 303-396-4414',
    email: 'conscrispcars@gmail.com',
    address: 'Denver International Airport (DEN), Denver, CO',
    description:
      'Cons Crisp Cars has been helping visitors experience Colorado the right way with reliable, comfortable SUVs specifically engineered for mountain travel.',
  },

  navLinks: [
    { label: 'About', href: '/#about' },
    { label: 'Fleet', href: '/#fleet' },
    { label: 'FAQs', href: '/#faqs' },
  ],


  hero: {
    backgroundImage: '/images/home/hero/hero-bg.jpg',
    title: 'Premium SUV Rentals\nFor Your Colorado Adventure',
    subtitle:
      'Skip the massive airport rental lines. Cons Crisp Cars delivers pristine, mountain-ready SUVs directly to Denver International Airport (DEN). Built with the space, safety, and all-wheel-drive performance you need for the roads to Vail, Aspen, and Breckenridge.',
  },

  fleet: {
    title: 'Our Fleet',
    subtitle: 'Ready for Any Destination.',
    description:
      'No middlemen, no hidden fees, no guesswork. Just reliable vehicles and personalized service from a local team you can trust.',
  },

  features: {
    title: 'Why Choose Us',
    subtitle: 'Built for the Rockies. Driven by Service.',
    items: [
      {
        title: 'True Mountain Performance',
        description:
          'Colorado weather changes in a heartbeat. Our fleet features late-model, all-wheel-drive (AWD) SUVs hand-selected for their top-tier safety ratings, rugged handling, and winter performance.',
      },
      {
        title: 'The Cleanliness Guarantee',
        description:
          'True to our name, every single vehicle is delivered to you in "crisp," showroom condition, meticulously detailed, sanitized, and fully inspected for your peace of mind.',
      },
      {
        title: 'Direct-to-Terminal Delivery',
        description:
          "Your vacation shouldn't start with an hour-long shuttle ride and a corporate rental desk line. We coordinate seamless vehicle drop-offs right at Denver International Airport (DEN).",
      },
    ],
  },

  about: {
    paragraphs: [
      'For the past four years, Cons Crisp Cars has been helping visitors experience Colorado the right way with reliable, comfortable SUVs specifically engineered for mountain travel. We specialize in premium SUV rentals for families, groups, and adventurers heading into the Rockies. Whether you’re planning a winter ski trip, a summer mountain vacation, or a weekend getaway to iconic destinations like Vail, Aspen, or Breckenridge, we have the perfect ride for your itinerary.',
      'We understand that Colorado roads and mountain weather can change in a heartbeat. That’s why we focus on maintaining a dependable fleet of pristine, all-wheel-drive SUVs that our guests can trust year-round. From spacious luxury family vehicles to rugged, adventure-ready rigs, every rental is hand-selected with your comfort, safety, and mountain performance in mind.',
      'What truly separates Cons Crisp Cars is the personalized experience we provide. We’re a local Colorado company that believes elite customer service still matters. We take pride in being friendly, highly responsive, and effortlessly flexible from the moment you book until you return the keys. Whether you’re flying into Denver for a family ski vacation or exploring the Rockies for the very first time, our goal is simple: to ensure you have a smooth, stress-free experience and a vehicle you can feel completely confident driving anywhere the mountain takes you.',
    ],
    image: '/images/home/about/founders.jpg',
  },

  testimonials: {
    title: 'Reviews',
    subtitle: 'Stories of Real Results',
    items: [
      {
        rating: 5,
        quote: 'The car was in great shape',
        content:
          'Conley was very responsive, and the ski rack was great to have. Thank you.',
        author: 'Heather',
        // ``location`` slot stores the vehicle for this site — the
        // card renders "{date} • {location}" so it reads naturally.
        location: 'BMW X3',
        date: 'April 14, 2026',
      },
      {
        rating: 5,
        quote: 'I loved it!',
        content:
          'Very nice, incredibly clean, and rides perfectly. Great host.',
        author: 'Caitlyn',
        location: 'Kia Sportage',
        date: 'April 18, 2026',
      },
      {
        rating: 5,
        quote: 'Great car, great host.',
        content:
          'Communication was simple and fast from pickup to drop-off. Thank you!',
        author: 'Utpalvarnaba',
        location: 'Chevrolet Equinox',
        date: 'April 13, 2026',
      },
    ],
  },

  faqs: {
    description:
      'Your Road Trip, Simplified. Everything You Need to Know About Renting with Crisp.',
    items: [
      {
        question: 'How does Denver Airport (DEN) pickup work?',
        answer:
          'We make it effortless. Instead of taking a long shuttle bus to an off-site rental lot, we coordinate direct vehicle delivery right at the airport terminal to get you on your way to the mountains faster.',
      },
      {
        question: 'Are your vehicles equipped for mountain winter driving?',
        answer:
          'Yes. Every SUV in our fleet is all-wheel-drive (AWD), fitted with mountain-appropriate tires, and rigorously inspected for winter conditions so you can drive confidently from Denver to Vail, Aspen, or Breckenridge.',
      },
      {
        question: 'Can I request winter sports gear add-ons?',
        answer:
          "Absolutely. We offer ski and snowboard racks, roof boxes, and chains as optional add-ons. Just let us know your needs when booking and we'll have them installed and ready at pickup.",
      },
      {
        question: 'What if my flight into Denver is delayed?',
        answer:
          "No problem — just message us with your updated arrival time. We track all flights coming into DEN and adjust your delivery automatically. No rebooking fees, no rescheduling stress.",
      },
    ],
  },

  cta: {
    backgroundImage: '/images/home/CTA/cta-bg.jpg',
    title: 'Ready to Experience a Better Way to Rent?',
    description:
      "Don't settle for the rental counter. Book a premium, clean, and reliable vehicle with Cons Crisp Cars today.",
  },
};
