import heroImg2 from '@/images/christ_embassy2.jpeg';
import heroImg3 from '@/images/christ_embassy3.jpg';
import heroImg4 from '@/images/christ_embassy4.jpg';
import praiseImg1 from '@/images/praise1.jpg';
import praiseImg2 from '@/images/praise2.jpg';
import img1 from '@/images/img1.jpg';
import img2 from '@/images/img2.jpg';
import img3 from '@/images/img3.jpg';
export type NavLink = {
  id: string;
  title: string;
  url: string;
  hasChildren?: boolean;
  children?: NavLink[];
};
export const navLinks: NavLink[] = [
  {
    id: 'home',
    title: 'Home',
    url: '/',
  },
  {
    id: 'about',
    title: 'About',
    url: '/about',
  },
  {
    id: 'events',
    title: 'Events',
    url: '/events',
    hasChildren: true,
    children: [
      {
        id: 'events list',
        title: 'Events List',
        url: '/events/list',
      },
      {
        id: 'event calendar',
        title: 'Events Calendar',
        url: '/events/calendar',
      },
    ],
  },
  {
    id: 'live-tv',
    title: 'Live TV',
    url: '/live-tv',
  },
  {
    id: 'online store',
    title: 'Online Store',
    url: '/online store',
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    url: '/contact-us',
  },
  {
    id: 'donate',
    title: 'Donate',
    url: '/donate',
    hasChildren: true,
    children: [
      {
        id: 'partner',
        title: 'Partner with Us',
        url: '/donate/partner',
      },
      {
        id: 'give',
        title: 'Give',
        url: '/donate/give',
      },
    ],
  },
];

export const carouselItems = [
  {
    id: 1,
    img: heroImg2,
    description:
      'Being a part of Christ Embassy Dunwoody has truly transformed my life. The love, fellowship, and teachings here have drawn me closer to God like never before.',
    clientName: 'Jenny Wilson',
    title: 'Church Member',
  },
  {
    id: 2,
    img: heroImg3,
    description:
      'Worshipping at Christ Embassy Dunwoody is always uplifting. The Word of God shared here is practical and powerful—it has given my family new strength and direction.',
    clientName: 'Robert Fox',
    title: 'Business Owner',
  },
  {
    id: 3,
    img: heroImg3,
    description:
      'The atmosphere at Christ Embassy Dunwoody is filled with faith and love. Every service leaves me refreshed, inspired, and motivated to share God’s Word.',
    clientName: 'Rick Watson',
    title: 'Youth Leader',
  },
  {
    id: 4,
    img: heroImg4,
    description:
      'Joining Christ Embassy Dunwoody has been the best decision for my spiritual growth. The teachings of our man of God have helped me walk in victory daily.',
    clientName: 'Michael Dell',
    title: 'Family Man & Volunteer',
  },
];

export const currencies = [
  { code: 'NGN', symbol: '₦', name: 'Naira' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'GBP', symbol: '£', name: 'Pound Sterling' },
  { code: 'GHS', symbol: '₵', name: 'Ghana Cedis' },
];

export const categoryTypes = [
  {
    label: 'General Offering',
    value: 'General Offering',
  },
  {
    label: 'Special Seed',
    value: 'Special Seed',
  },
  {
    label: 'Global Service Sponsorship',
    value: 'Global Service Sponsorship',
  },
  {
    label: 'Save a Life Campaign',
    value: 'Save a Life Campaign',
  },
  {
    label: 'Global Outreach',
    value: 'Global Outreach',
  },
];

export const TABS = [
  {
    id: 'mission',
    title: 'Our Mission',
    description: `Here at Christ Embassy Dunwoody, our mission is to bring
                       all people into the life, family and purpose of God. We
                       believe anyone who is connected to Christ in there three
                       key areas are poised to thrive in every other area of
                       life. We don't just believe in our mission statement, we
                       also live it out and express these principles practically
                       .To us all people represents the rich cultural and
                       generational diversity that makes up the Kingdom of
                       God.Being Connected to the life of Christ Means growing
                       daily as a disciple. Being part of the family of God means
                       being part of a life giving community of believers, like a
                       Bgroup. Finding purpose in the life and family of Good
                       looks like serving on the Ateam, going on a missions trip,
                       or serving our local community through outreaches.`,
    image: praiseImg2,
  },
  {
    id: 'expect',
    title: 'What to Expect',
    description: `We believe that the church should be a place that is full
                      of life, excitement, and the transforming Prescence of
                       God. When you visit our church, you will experience just
                       that Our worship is energetic and passionate, we teach
                       from the Bible in a powerful but practical way, and we
                       love others compassionately. From the quality nursery amd
                       fun-filled chilren's service to the relevant and inspiring
                       teaching, there is something for everyone! Most
                       importantly, you will experience the Presence of God. But
                       rather than let us tell you about it.come check it out for
                       yourself!`,
    image: praiseImg1,
  },
];

export const cardItems = [
  {
    quote: `I love attending this church! I enjoy coming together for worship and events with our big believing family. I have felt my personal growth and strength in serving people making this world a better place.`,
    name: 'Nick Jones',
    location: 'Boston',
    image: img1,
  },
  {
    quote: `ChristEmbassy dunwoody is really wonderful and amazing. The practice of giving is awesome and brings results. I ask everyone who isn't indifferent to donate and take part! God bless you all!`,
    name: 'Sarah Williams',
    location: 'New York',
    image: img2,
  },
  {
    quote: `My husband and I come here every Sunday. The church’s atmosphere is nice, inspirational and devout. Many good and kind people pray here. I recommend joining us with your entire family.`,
    name: 'Michael Lee',
    location: 'Chicago',
    image: img3,
  },
];
