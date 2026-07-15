import homePrivate from '../assets/images/home/private-session.jpg';
import homeRetreat from '../assets/images/home/retreat.jpg';
import homeReiki from '../assets/images/home/reiki.jpg';
import servicePrivate from '../assets/images/services/private-session.jpg';
import serviceRetreat from '../assets/images/services/retreat.jpg';
import serviceReiki from '../assets/images/services/reiki.jpg';

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Approach', to: '/#approach' },
  { label: 'Services', to: '/services' },
];

export const approachItems = [
  {
    number: '01',
    title: 'Holistic Integration',
    text: 'A whole-person perspective that brings physical, emotional, and energetic experience into one attentive conversation.',
  },
  {
    number: '02',
    title: 'Somatic Release',
    text: 'Body-aware practices that create room to slow down, notice what is present, and return to a more grounded state.',
  },
  {
    number: '03',
    title: 'Energetic Flow',
    text: 'Quiet energy work and mindfulness offered with care, clarity, and respect for each person’s pace.',
  },
];

export const servicePathways = [
  {
    title: 'Private Sessions',
    text: 'Individual sessions shaped around rest, balance, and reconnection.',
    image: homePrivate,
    alt: 'A calm private treatment room with natural wood and soft linen',
    to: '/services#private-sessions',
  },
  {
    title: 'Immersive Retreats',
    text: 'Nature-connected experiences for spacious, intentional restoration.',
    image: homeRetreat,
    alt: 'An open meditation deck surrounded by tropical forest',
    to: '/services#retreats-workshops',
  },
  {
    title: 'Reiki & Energy Work',
    text: 'Grounded practice and training informed by more than two decades of experience.',
    image: homeReiki,
    alt: 'Hands resting gently over the heart during an energy-work practice',
    to: '/services#reiki-training',
  },
];

export const services = [
  {
    id: 'private-sessions',
    number: '01',
    title: 'Private Healing Sessions',
    eyebrow: 'One-to-one care',
    text: 'A calm, individual space for people seeking deep rest, balance, and reconnection. Sessions may draw from somatic awareness, energy work, sound, mindfulness, and nature-based practice according to the person and the moment.',
    image: servicePrivate,
    alt: 'A private treatment space prepared with natural linen and soft daylight',
  },
  {
    id: 'retreats-workshops',
    number: '02',
    title: 'Retreats & Workshops',
    eyebrow: 'Practice in community',
    text: 'Small, thoughtfully held experiences in the Chiang Dao landscape. Retreats and workshops create time to slow down, learn, reconnect, and experience integrative practices in a supportive setting.',
    image: serviceRetreat,
    alt: 'A small group seated in a circle on an open deck in the forest',
  },
  {
    id: 'reiki-training',
    number: '03',
    title: 'Reiki Training',
    eyebrow: 'Learning & attunement',
    text: 'A grounded path for students and practitioners who are curious about authentic Reiki and integrative healing. Program levels, dates, and requirements are shared directly through an inquiry.',
    image: serviceReiki,
    alt: 'A close view of a gentle hands-on energy practice',
  },
];

export const inquiryOptions = [
  'Private healing session',
  'Retreat or workshop',
  'Reiki training',
  'General inquiry',
];

export const faqs = [
  {
    id: 'choose-service',
    question: 'How do I know which offering is right for me?',
    answer: 'You do not need to decide before reaching out. Share what you are looking for and any relevant travel timing, and the conversation can begin from there.',
  },
  {
    id: 'prior-experience',
    question: 'Do I need prior experience?',
    answer: 'No prior experience is needed to begin a conversation about private sessions, retreats, or workshops. Reiki training details can be clarified when you inquire.',
  },
  {
    id: 'location',
    question: 'Where is the practice based?',
    answer: 'The practice is based in Chiang Dao, Northern Thailand. Exact directions and arrival guidance can be shared after an inquiry is confirmed.',
  },
];
