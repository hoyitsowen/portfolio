import ProjectOne from '../assets/Project1.png';
import ProjectTwo from '../assets/Project2.png';
import ProjectThree from '../assets/Project3.png';
import ProjectFour from '../assets/Project4.png';

const projectData = [
  {
    id: 1,
    title: 'TigerRoutes',
    slug: 'tiger-routes',
    category: 'Development',
    year: '2025',
    image: ProjectOne,
    accent: 'bg-[#fef3c7]',
    description:
      'A route-planning web app that helps users discover efficient campus transit routes with an interactive map and schedule integration.',
    screenshots: [ProjectOne, ProjectOne],
    tech: ['React', 'Tailwind CSS', 'Mapbox', 'Node.js'],
    features: ['Interactive map', 'Search & filter', 'Saved routes', 'Responsive UI']
  },
  {
    id: 2,
    title: 'ParkFinder',
    slug: 'park-finder',
    category: 'Design',
    year: '2025',
    image: ProjectTwo,
    accent: 'bg-[#fbcfe8]',
    description:
      'A mobile-first experience for finding nearby parks, with curated photos, accessibility info, and route previews.',
    screenshots: [ProjectTwo, ProjectTwo],
    tech: ['Figma', 'React', 'Accessibility'],
    features: ['Design system', 'High-fidelity prototypes', 'User flows', 'Accessibility considerations']
  },
  {
    id: 3,
    title: "Austin's Cafe POS",
    slug: 'austins-cafe-pos',
    category: 'Development',
    year: '2024',
    image: ProjectThree,
    accent: 'bg-[#e0e7ff]',
    description:
      "A point-of-sale system tailored for small cafes: order management, receipts, and simple inventory tracking.",
    screenshots: [ProjectThree, ProjectThree],
    tech: ['React', 'SQLite', 'Electron'],
    features: ['Order flow', 'Receipt printing', 'Inventory alerts']
  },
  {
    id: 4,
    title: 'Roar Call',
    slug: 'roar-call',
    category: 'Design',
    year: '2025',
    image: ProjectFour,
    accent: 'bg-[#d1fae5]',
    description:
      'A concept app for community voice messaging with playful branding and simple onboarding flows.',
    screenshots: [ProjectFour, ProjectFour],
    tech: ['Figma', 'Illustration', 'React Native'],
    features: ['Onboarding', 'Voice messages', 'Branded UI']
  }
];

export default projectData;
